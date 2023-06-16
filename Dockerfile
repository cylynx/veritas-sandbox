FROM veritastool/veritas-assessment-tool AS assessment
WORKDIR /opt/veritas

FROM jupyter/minimal-notebook:lab-3.6.3 AS jupyter

# veritastoolkit 2.0 requires python 3.10.10 or below
# name your environment and choose the python version
ARG conda_env=veritas
ARG py_ver=3.10.10

# Install java dependencies for assessment-tool
USER root

RUN apt-get update --yes && \
    apt-get install -y openjdk-8-jdk &&\
    apt-get install -y supervisor

USER ${NB_UID}

# Install new environment
RUN mamba create --quiet --yes -p "${CONDA_DIR}/envs/${conda_env}" python=${py_ver} ipython ipykernel && \
    mamba clean --all -f -y

# create Python kernel and link it to jupyter
RUN "${CONDA_DIR}/envs/${conda_env}/bin/python" -m ipykernel install --user --name="${conda_env}"

# Install requirements.txt
COPY --chown=${NB_UID}:${NB_GID} requirements.txt /tmp/
RUN "${CONDA_DIR}/envs/${conda_env}/bin/pip" install --quiet --no-cache-dir --requirement /tmp/requirements.txt && \
    fix-permissions "${CONDA_DIR}" && \
    fix-permissions "/home/${NB_USER}"

# Fix tqdm display on jupyter and docker - https://github.com/tqdm/tqdm/issues/1310
RUN pip install ipywidgets
RUN jupyter lab build

# Remove the default jupyter kernel
RUN jupyter kernelspec uninstall -y python3

# Make default kernel
RUN echo "conda activate ${conda_env}" >> "${HOME}/.bashrc"

# Custom jupyter lab settings
# COPY --chown=${NB_UID}:${NB_GID} settings/overrides.json  /opt/conda/share/jupyter/lab/settings/overrides.json
# Custom jupyter lab config
COPY --chown=${NB_UID}:${NB_GID} settings/jupyter_lab_config.py /home/${NB_USER}/.jupyter/jupyter_lab_config.py
# Notebook files
COPY --chown=${NB_UID}:${NB_GID} data/veritas /home/${NB_USER}/veritas
# Copy pre-built custom veritas loader extension
COPY --chown=${NB_UID}:${NB_GID} veritas-launcher/build/veritas-launcher /opt/conda/share/jupyter/labextensions/veritas-launcher
# Custom lab config
COPY --chown=${NB_UID}:${NB_GID} settings/page_config.json  /etc/jupyter/labconfig/page_config.json
# Supervisor files
COPY --chown=${NB_UID}:${NB_GID} settings/supervisord.conf /etc/supervisor/conf.d/supervisord.conf 
COPY --chown=${NB_USER}:${NB_GID} settings/run_supervisord.sh usr/local/bin/run_supervisord.sh

WORKDIR "${HOME}"

COPY --from=assessment --chown=${NB_USER}:${NB_GID} /opt/veritas /usr/local/bin/veritas
COPY --from=assessment /usr/local/bin/gosu /usr/local/bin/gosu
COPY --from=assessment /usr/local/bin/sqlite3 /usr/local/bin/sqlite3

EXPOSE 8001 8888
ENTRYPOINT ["bash", "usr/local/bin/run_supervisord.sh"]

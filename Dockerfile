FROM jupyter/minimal-notebook:lab-3.6.1

# veritastoolkit requires python 3.9.5 or below
# name your environment and choose the python version
ARG conda_env=veritas
ARG py_ver=3.9.5

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

# Remove the default jupyter kernel
RUN jupyter kernelspec uninstall -y python3

# Make default kernel
RUN echo "conda activate ${conda_env}" >> "${HOME}/.bashrc"

# Custom jupyter lab settings
# COPY --chown=${NB_UID}:${NB_GID} settings/overrides.json  /opt/conda/share/jupyter/lab/settings/overrides.json

# Custom jupyter lab config
COPY --chown=${NB_UID}:${NB_GID} settings/jupyter_lab_config.py /home/${NB_USER}/.jupyter/jupyter_lab_config.py

# Copy pre-built custom veritas loader extension
COPY --chown=${NB_UID}:${NB_GID} veritas-launcher/build/veritas-launcher /opt/conda/share/jupyter/labextensions/veritas-launcher

# Custom lab config
COPY --chown=${NB_UID}:${NB_GID} settings/page_config.json  /etc/jupyter/labconfig/page_config.json

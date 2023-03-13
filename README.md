## Veritas Sandbox

This is a sandbox image of the Veritas diagnosis and assessment tool, and is meant to help financial services assess their AI and Data Analytics models. It wraps both tools into a convenient jupyter lab interface. The docker image consists of three parts:

- Jupyter lab server with [Veritas Diagnosis Tool] installed
- Example notebooks for [Veritas Diagnosis Tool]
- [Veritas Assessment Tool] web application

## Installation

Clone the repository, run `./build_image.sh` to build the custom jupyter lab docker image and `docker compose up` to start the service.

To persist user data, modify the docker-compose setup to use docker volumes. The example below persists the notebook directory in the `./data/veritas` folder and the assessment sqlite db and artifacts in `./data/assessment`.

```
version: "3.9"

services:
  veritas-sandbox:
    image: veritastool/veritas-sandbox
    container_name: veritas-sandbox
    ports:
      - 8888:8888
      - 8001:8001
    volumes:
      - type: bind
        source: ./data/veritas
        target: /home/jovyan/veritas
      - type: bind
        source: ./data/assessment
        target: /usr/local/bin/veritas/file
```

## Usage

Jupyter lab should be available on port 8888 and the assessment tool on port 8001. The Jupyter homepage current features two demos - a credit scoring and customer marketing use case. Check out the examples, or create a fresh notebook to test with your own data. It also contains a convenient link to the Assessment tool.

The default username (admin) and password (123456) can be used to access the assessment tool. Try generating a veritas report by uploading the json artifact produced by the python diagnosis tool.

## Development

The custom Jupyter launcher landing page is added as a Jupyter labextension, with the default launcher disabled.
To modify the landing page, edit the code in `./veritas-launcher/src` and build the labextension with `yarn build:prod`, before re-building the docker image.

### Data and Settings

`data/veritas` - contains all example notebooks and is the main workspace folder for the user. Added to the built docker image.

`settings/jupyter_lab_config.py` - Jupyter Lab settings. In the current setup, the default kernel is disabled and the default user directory modified to be consistent with the default user in the docker image.

`settings/page_config.json` - configuration data to the application environment. The default launcher is disabled, since a custom `veritas-launcher` is being used. To change the default url path (http://localhost:8001) for the assessment tool, modify `veritasAssessmentUrl` and rebuild the image.

`settings/overrides.json` - default value for extension settings. For example, it can be used to change the default theme. Currently, it is not used.

`settings/supervisord.conf` and `settings/run_supervisord.sh` - supervisor settings to run both services in a single image. Modify the commands to start the Jupyter or assessment tool services with different default behaviours. For example to launch Jupyter with authentication, the following setting could be used: `command=/usr/local/bin/start.sh jupyter lab`.

## License

Veritas Sandbox is licensed under the Apache License, Version 2.0 - see [`LICENSE`](./LICENSE) for more details.

[veritas diagnosis tool]: https://github.com/veritas-toolkit/diagnosis-tool
[veritas assessment tool]: https://github.com/veritas-toolkit/assessment-tool

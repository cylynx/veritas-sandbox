## Veritas Sandbox

This is a sandbox image of the Veritas diagnosis and assessment tool, and is meant to help financial services assess their AI and Data Analytics models. It wraps the diagnosis and assessment tool into a convenient jupyter lab interface. It consists of three parts:

- Jupyter lab server as the main entry point
- Pre-built Python image with all libraries required to run the example notebooks
- Veritas assessment tool web application

## Installation

Clone the repository, run `./build_image.sh` to build the custom jupyter lab docker image and `docker compose up` to start the service. Jupyter lab should be available on port 8888 and the veritas assessment tool on port 8001.

## Development

The custom Jupyter launcher landing page is added as a Jupyter labextension, with the default launcher disabled.
To modify the landing page, edit the code in `./veritas-launcher/src` and build the labextension with `yarn build:prod`, before re-building the docker image.

### Settings

`settings/jupyter_lab_config.py` - Jupyter Lab settings. In the current setup, the default kernel is disabled and the default user directory modified to be consistent with the default user in the docker image.

`settings/page_config.json` - configuration data to the application environment. The default launcher is disabled, since a custom `veritas-launcher` is being used.

`settings/overrides.json` - default value for extension settings. For example, it can be used to change the default theme. Currently, it is not used.

### Files

`data/notebooks` - contains all example notebooks and is the main workspace folder for the user.

`data/veritas-assessment-files` - files and artifacts from veritas assessment tool, including the sqlite db.

## License

Veritas Toolkit is licensed under the Apache License, Version 2.0 - see [`LICENSE`](./LICENSE) for more details.

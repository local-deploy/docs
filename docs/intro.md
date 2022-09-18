---
sidebar_position: 1
---

# Introduction

Deploy Local — is a command line interface designed to help developers quickly deploy projects to their local machine.

DL is a wrapper on top of Docker and docker-compose, no additional software or libraries are required to install.

Supported OS:
- Linux (debian, ubuntu, linux mint, etc)
- macOS (beta)
[//]: # (- Windows &#40;via WSL2&#41;)

Supported architectures:
- x64
- arm64

Supported frameworks and CMS:
- Bitrix
- Laravel
- WordPress

Supported SHELL:
- bash
- zsh

Dependencies:
- docker
- docker-compose v2

The docker compose (as plugin) supported

## Features
- Support for PHP versions (apache and php-fpm) 7.3, 7.4, 8.0, 8.1
- Support for MySQL versions 5.7, 8.0
- Downloading the database and files from the production server
- Redis
- Memcached
- Nginx
- Cross-platform
- Interception of mail sent via php
- Portainer - docker container management system
- Does not require root access
- Accessing sites from the browser via `.localhost` or` .nip.io`
- Ability to add custom docker-compose.yaml files to DL configuration

## How it works?
After installing the utility, 3 service docker containers will be launched on your computer:
- Traefik (proxy server for interacting with installed projects)
- Mailhog (lightweight service for intercepting emails sent from a local site)
- and Portainer (a web interface for working with Docker)

Sites that you run through DL are in their own virtual network, you can run several projects at the same time, each will have its own URL.
When the project starts, all the source code (in the directory where DL is launched) is mounted in a docker container, which allows you to edit the code and immediately test the functionality in the browser.

Using the variables in the `.env` file, you can set the necessary settings that are required for a specific project, as well as add or completely override the launched images to your own. For ease of launch (and modification) the file `docker-compose.yaml` is used.

## Licensing
All source code is distributed under the [MIT](https://github.com/local-deploy/dl/blob/master/LICENSE) license.

## Contributing

Please make sure the following is done when submitting your Pull Request:
- Fork the repository and create your own branch from master.
- Be sure to test your changes!
- Make sure your code is in accordance with generally accepted standards.

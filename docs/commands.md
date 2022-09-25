---
sidebar_position: 3
---

# Available commands

## dl

Displays a short description and a list of available commands.

Usage example:

```bash
dl
```

## completion

Displays instructions for enabling auto-completion in the console.

Usage example:

```bash
dl completion [bash|zsh]
```

## config

Application settings.

Usage example:

```bash
dl config
```

## config repo

Menu for setting up the images source repository.

The default is the GitHub repository (ghcr.io). If you have problems downloading images, you can switch the source to the RedHat mirror (quay.io)

Usage example:

```bash
dl config repo
```

## env

Create or replace the `.env` file. If a `.env.example` file exists in the root of the project, it will be used instead of the default file.

Usage example:

```bash
dl env
```

## deploy

Downloading files and databases from the server.  
Without specifying the flag, files and the database are downloaded by default.  
If you specify a flag, for example `-d`, only the database will be downloaded.

Directories that are loaded by default:

- Bitrix CMS: `bitrix`
- WordPress: `wp-admin` and `wp-includes`
- Laravel: only the database is loaded

Available options:

- `-d, --database` dump only the database from the server
- `-f, --files` only download files from server
- `-o, --override` override boot directories (comma separated values)

Usage example:

```bash
dl deploy
dl deploy -d
dl deploy -f -o bitrix, upload
```

## up

Run the project and place the files of the current directory in the container. When finished, displays the local links to the project.  
Analogue of the command `docker-compose up -d`.

Usage example:

```bash
dl up
```

## down

Stop and delete running project containers and the network.  
Analogue of the command `docker-compose down`.

Usage example:

```bash
dl down
```

## recreate

Stop project containers and restart.  
An alias for sequential execution of `dl down && dl up` commands.

Usage example:

```bash
dl recreate
```

## bash

Login to PHP container as www-data or root and start bash shell.

Available options:

- `-r, --root` enter the container as root

Usage example:

```bash
dl bash
dl bash -r
```

## service

Management of service containers (portainer, mailcatcher, traefik).

Usage example:

```bash
dl service
```

### service up

Launches the portainer, mailcatcher and traefik containers.  
Valid parameters for the --service flag: `portainer`,` mail`, `traefik`

Available options:

- `-r, --restart` restart running containers
- `-s, --service` start one container

Usage example:

```bash
dl service up
dl service up -r
dl service up -s portainer
```

### service down

Stops and removes the portainer, mailcatcher and traefik containers.  
Valid parameters for the --service flag: `portainer`,` mail`, `traefik`

Available options:

- `-r, --restart` restart running containers
- `-s, --service` start one container

Usage example:

```bash
dl service down
dl service down -r
dl service down -s portainer
```

### service recreate

Stops, removes and restarts the portainer, mailcatcher and traefik containers.  
Valid parameters for the --service flag: `portainer`,` mail`, `traefik`

Available options:

- `-s, --service` restart one container

Usage example:

```bash
dl service recreate
dl service recreate -s portainer
```

### service restart

Restarts all service containers without deleting.  
Command alias `dl service --restart`

Usage example:

```bash
dl service restart
```

## self-update

Downloading the latest stable dl release from the repository and updating the application version.

Available options:

- `-n, --no-overwrite` do not overwrite config files

Usage example:

```bash
dl self-update
dl self-update -n
```

## ps

List of project containers.

The command is similar to `docker ps`, but only the containers started by the current project are displayed.

Usage example:

```bash
dl ps
```

Output example:

| ID           | Name         | State   | IP         | Ports    |
|--------------|--------------|---------|------------|----------|
| aa2b362ea773 | site.com_php | running | 172.25.0.3 | 80/tcp   |  
| bbe79a746fe0 | site.com_db  | running | 172.25.0.2 | 3306/tcp |

## version

Display the current version.

Usage example:

```bash
dl version
```

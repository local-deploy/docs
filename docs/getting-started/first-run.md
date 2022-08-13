---
sidebar_position: 2
---

# First run

## Service containers

After installation, the first step is to start the service containers.

```bash
dl service up
```

The command will check that docker is installed correctly and launch the portainer, mailcatcher and traefik containers.

:::note
DL uses ports 8080, 80 and 443 by default. These should be available on your system.
:::

After the launch, the services will be available at url:
- Portainer http://portainer.localhost
- Traefik http://traefik.localhost
- Mailhog http://mail.localhost

The command needs to be executed only once, containers are started with the option `restart: always`, that is, after restarting the computer, docker will automatically start them.

If you want to stop and remove service containers, run the command:

```bash
dl service down
```

## Launching a local site

1. Clone the git repository to your computer (you are using git, right?) and navigate to the root directory of the project.
2. Run the command `dl env` to copy the example `.env` file.

   If you already use `.env` on your project, you will receive a warning with options: overwrite the file or display the necessary variables that need to be copied and placed in your current `.env`.

   You can create a file `.env.example` and add it under git, then it will be used when you run the command `dl env`.
3. Edit the `.env` file with the required variables. [^1]
4. Run the `dl deploy` command if you need to download the database or files from the production server. [^2]  
   Important! You must be configured to access the server via ssh key.
5. Run the project with the `dl up` command. To stop and remove containers in a project, use the `dl down` command. [^2]

:::info
All DL commands must be run in the root directory of the project, which contains the `.env` file.
:::

After starting the project, local links will be displayed. You can use the .localhost domain or access the site through the nip.io service — this is convenient if you work in a corporate local network, then colleagues can go to your site from their computer.


[^1]: [Configuration via .env file ](env)  
[^2]: [Available commands ](../commands)

---
sidebar_position: 1
---

# Installation

The installation process is reduced to copying the executable file to the user's `bin` directory or to the system `/usr/bin` directory.

Choose the installation method that suits you:

- [Installing the deb-package](#installing-the-deb-package)
- [Installation in the user's home directory](#installation-in-the-users-home-directory)
- [Manual installation](#manual-installation)

## Installing the deb-package

> Only for debian-like operating systems: debian, ubuntu, linux mint, etc.

:::info
- When you install the deb package, you will immediately have access to auto-complete commands for bash and zsh.
- The application will be updated along with the system packages through the apt package manager.
:::

---

### Removing the old version

You need to uninstall the previous version if you previously had dl installed in the user's home directory via the install bash script.

```bash
cd ~ && rm -rf .local/bin/dl .config/dl
```

### Set up the repository

Before you install DL for the first time on a new machine, you need to set up the DL repository. Afterward, you can install and update DL from the repository.

1. Update the apt package index and install packages to allow apt to use a repository over HTTPS:

    ```bash
    sudo apt update
    sudo apt install ca-certificates curl gnupg
    ```
2. Add DL’s official GPG key:

    ```bash
    sudo install -m 0755 -d /etc/apt/keyrings
    curl -fsSL https://apt.fury.io/local-deploy/gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/dl.gpg
    sudo chmod a+r /etc/apt/keyrings/dl.gpg
    ```
3. Use the following command to set up the repository:

    ```bash
    echo "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/dl.gpg] https://apt.fury.io/local-deploy/ /" | sudo tee /etc/apt/sources.list.d/dl.list > /dev/null
    ```
4. Update the apt package index and install the latest version DL:

    ```bash
    sudo apt update
    sudo apt install dl
    ```

Run the `dl` command to verify that the installation was correct. If an error occurs, restart the terminal.

### File locations

- Executable: `/usr/bin/dl`
- docker-compose files: `/etc/dl/config-files/`
- Application config file: `~/.config/dl/`

## Installation in the user's home directory

> For Linux and MacOS

:::note
This installation method is simpler and does not require root access, but it limits the functionality of the application.
:::

---

To install the DL just paste the code into the terminal and run:

```bash
curl -s https://raw.githubusercontent.com/local-deploy/dl/master/install_dl.sh | bash
```

The script will check dependencies, download and install the latest release.

The executable file `dl` will be written to the user's home directory along the path `~/.local/bin/dl`. If the directory does not exist, it will be created. 
On first run, docker-compose configuration files will be generated in the directory `~/.config/dl/config-files/`.

:::info
During installation, the `PATH` global variable is checked, if the `~/.local/bin/` directory is not specified in it, the script will add the line `PATH="$PATH:$HOME/.local/bin"` to the `.bashrc` (or `.zshrc`) file
:::

Run the `dl` command to verify that the installation was correct. If an error occurs, restart the terminal.

### File locations

- Executable: `~/.local/bin/dl`
- Application config file: `~/.config/dl/`
- docker-compose files: `~/.config/dl/config-files/`

## Manual installation

---

Download and unpack the latest release (`tar.gz` archive) from the link [https://github.com/local-deploy/dl/releases](https://github.com/local-deploy/dl/releases)

For example, for MacOS, arm architecture:

```bash
curl -fsSL "https://github.com/local-deploy/dl/releases/download/1.0.0/dl-1.0.0-darwin-arm64.tar.gz" -o "dl.tar.gz"
tar -xzf dl.tar.gz
```

The archive contains a binary file `dl`. Copy it to a folder in your home directory that contains executable files, such as `~/.local/bin` or `~/bin`.

```bash
# linux
mv dl $HOME/.local/bin/dl
chmod +x "$HOME/.local/bin/dl"
```

Run the `dl` command to verify that the installation was correct. If an error occurs, restart the terminal.

---
sidebar_position: 1
---

# Installation

The installation process is reduced to copying the executable file to the `bin` directory of the user and creating configuration files.

## Automatic installation

To install DL, just paste the code into a terminal and run:
```bash
curl -s https://raw.githubusercontent.com/local-deploy/dl/master/install_dl.sh | bash
```

The script will check the dependencies, download and install the latest release.

The executable file `dl` will be written to the user's home directory under the path `~/.local/bin/dl`. If the directory does not exist, it will be created.  
The configuration files are placed in the `~/.config/dl/config-files/` directory.

:::info
During installation, the global variable `$PATH` is checked, if the directory `~/.local/bin/` is not specified in it, the script will add to the file `.bashrc` (or `.zshrc`) the line `PATH="$PATH:$HOME/.local/bin"`
:::

## Manual installation
Download and unpack the latest release (`tar.gz` archive) from the link [https://github.com/local-deploy/dl/releases](https://github.com/local-deploy/dl/releases)

```bash
curl -fsSL "https://github.com/local-deploy/dl/releases/download/0.2.3/dl-0.2.3.tar.gz" -o "dl.tar.gz"
tar -xzf dl.tar.gz
```

The archive contains 2 directories:
- `bin` - executable files
- `config-files` - configuration files

From the `bin` directory, copy the binary to the home directory folder that contains the executable files, for example, `~/.local/bin` or `~/bin`. Rename the file to `dl`.

```bash
# linux
mv bin/dl_linux_amd64 $HOME/.local/bin/dl
chmod +x "$HOME/.local/bin/dl"
```

Create a directory `~/.config/dl/` and copy the folder `config-files` into it.

```bash
mkdir -p "$HOME/.config/dl"
mv config-files "$HOME/.config/dl/config-files/"
```

Run the `dl` command to verify that the installation is correct. If an error occurs, restart the terminal.

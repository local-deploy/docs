---
sidebar_position: 2
---

# Установка

Процесс установки сводится к копированию исполняемого файла в `bin` директорию пользователя и созданию конфигурационных файлов.

## Автоматическая установка

Чтобы установить DL, просто вставьте код в терминал и запустите:
```bash
wget https://raw.githubusercontent.com/local-deploy/dl/master/install_dl.sh && chmod +x ./install_dl.sh && ./install_dl.sh
```

Скрипт проверит зависимости, скачает и установит последний релиз.

Исполняемый файл `dl` будет записан в домашнюю директорию пользователя по пути `~/.local/bin/dl`. Если директории не существует, она будет создана.  
Конфигурационные файлы помещаются в директорию `~/.config/dl/config-files/`.

:::info
При установке проверяется глобальная переменная `$PATH`, если в ней не будет указана директория `~/.local/bin/`, скрипт добавит в файл `.bashrc` (или `.zshrc`) строку `PATH="$PATH:$HOME/.local/bin"`
:::

## Ручная установка
Скачайте и распакуйте последний релиз (архив `tar.gz`) по ссылке [https://github.com/local-deploy/dl/releases](https://github.com/local-deploy/dl/releases)

```bash
curl -fsSL "https://github.com/local-deploy/dl/releases/download/0.2.3/dl-0.2.3.tar.gz" -o "dl.tar.gz"
tar -xzf dl.tar.gz
```

Архив содержит 2 директории:
- `bin` - исполняемые файлы
- `config-files` - конфигурационные файлы

Из директории `bin` скопируйте бинарный файл в папку домашней директории, которая содержит исполняемые файлы, например, `~/.local/bin` или `~/bin`. Переименуйте файл в `dl`.  

```bash
# linux
mv bin/dl_linux_amd64 $HOME/.local/bin/dl
chmod +x "$HOME/.local/bin/dl"
```

Создайте директорию `~/.config/dl/` и скопируйте в неё папку `config-files`.

```bash
mkdir -p "$HOME/.config/dl"
mv config-files "$HOME/.config/dl/config-files/"
```

Запустите команду `dl` для проверки корректности установки. Если возникает ошибка, перезапустите терминал.

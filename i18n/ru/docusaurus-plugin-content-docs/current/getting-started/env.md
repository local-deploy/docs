---
sidebar_position: 3
sidebar_label: Конфигурация
---

# Конфигурация

DL использует конфигурационные файлы docker-compose, поэтому вы можете переопределить любые переменные и даже образы.

Используемые образы:

- [Redis](https://hub.docker.com/_/redis) (версия alpine)
- [MySQL](https://hub.docker.com/r/alterway/mysql) (alterway/mysql)
- [Memcached](https://hub.docker.com/_/memcached)
- [Nginx](https://hub.docker.com/_/nginx) (версия alpine)
- [php-fpm и apache2](https://quay.io/organization/local-deploy) (модифицированные оригинальные образы)

## Настройка .env файла

С помощью переменных в `.env` файле вы можете гибко управлять настройками окружения.

| Переменная              | Обязательная | Значение по умолчанию                           | Примечание                                                                                                    |
|-------------------------|--------------|-------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| HOST_NAME               | Да           |                                                 | Имя сайта или домен. Используется для построения локального URL. [^1]                                         |
| NETWORK_NAME            | Да           | Генерируется из HOST_NAME                       | Имя docker сети. Генерируется из HOST_NAME без спец символов                                                  |
| DOCUMENT_ROOT           | Да           | /var/www/html                                   | Корневая директория сайта, в которой находится файл `index.php`. [^2]                                         |
|                         |              |                                                 |                                                                                                               |
| CATALOG_SRV             | Нет [^3]     |                                                 | Корневая директория сайта на сервере                                                                          |
| USER_SRV                | Нет [^3]     |                                                 | Имя пользователя SSH для подключения к серверу                                                                |
| PORT_SRV                | Нет [^3]     |                                                 | Порт SSH для подключения к серверу                                                                            |
| SERVER                  | Нет [^3]     |                                                 | IP адрес (или домен) для подключения к серверу                                                                |
| SSH_KEY                 | Нет [^3]     | id_rsa                                          | Указывается имя ssh-ключа, расположенного в директории `~/.ssh/`                                              |
| EXCLUDED_TABLES         | Нет          |                                                 | Исключаемые таблицы MySQL при скачивании дампа с сервера                                                      |
| EXCLUDED_FILES          | Нет          |                                                 | Исключаемые файлы при скачивании архива файлов с сервера                                                      |
|                         |              |                                                 |                                                                                                               |
| PHP_VERSION             | Да           |                                                 | Версия PHP <br/>Доступные значения: `7.3-apache`, `7.4-apache`, `8.0-apache`, `7.3-fpm`, `7.4-fpm`, `8.0-fpm` |
| PHP_MEMORY_LIMIT        | Нет          | 256M                                            | Лимит памяти PHP                                                                                              |
| PHP_POST_MAX_SIZE       | Нет          | 100M                                            | Максимальный размер POST-запроса                                                                              |
| PHP_UPLOAD_MAX_FILESIZE | Нет          | 100M                                            | Максимальный размер файла, разрешенный для загрузки                                                           |
| PHP_MAX_FILE_UPLOADS    | Нет          | 50                                              | Максимальное количество загружаемых файлов                                                                    |
| PHP_MAX_EXECUTION_TIME  | Нет          | 60                                              | Максимальное время выполнения скрипта                                                                         |
| XDEBUG                  | Нет          | off [^4]                                        | Для включения модуля XDebug, используйте параметр `debug`                                                     |
| XDEBUG_IDE_KEY          | Нет          | PHPSTORM                                        | Ключ, который должен быть передан при инициализации сессии XDebug                                             |
| XDEBUG_PORT             | Нет          | 9003                                            | Порт XDebug                                                                                                   |
|                         |              |                                                 |                                                                                                               |
| MYSQL_VERSION           | Нет          |                                                 | Версия MySQL. <br/>Доступные значения: `5.7`, `8.0`                                                           |
| MYSQL_DATABASE          | Нет          | db                                              | Имя базы данных MySQL                                                                                         |
| MYSQL_USER              | Нет          | db                                              | Имя пользователя базы данных MySQL                                                                            |
| MYSQL_PASSWORD          | Нет          | db                                              | Пароль пользователя базы данных MySQL                                                                         |
| MYSQL_ROOT_PASSWORD     | Нет          | root                                            | Пароль root-пользователя базы данных MySQL                                                                    |
|                         |              |                                                 |                                                                                                               |
| REDIS                   | Нет          | false                                           | Если указано значение `true`, будет поднят контейнер с Redis                                                  |
| REDIS_PASSWORD          | Нет          | pass                                            | Пароль Redis                                                                                                  |
|                         |              |                                                 |                                                                                                               |
| MEMCACHED               | Нет          | false                                           | Если указано значение `true`, будет поднят контейнер с Memcached                                              |
|                         |              |                                                 |                                                                                                               |
| LOCALTIME               | Нет          | Europe/Moscow                                   | Часовой пояс, устанавливаемый в контейнеры PHP и MySQL                                                        |
| NGINX_CONF              | Нет          | ~/.config/dl/config-files/default.conf.template | Шаблон конфига nginx. Требуется при использовании php-fpm версии (nginx + php-fpm)                            |
| LOCAL_IP                | Нет          | Внешний локальный IP<br/>Например, 192.168.0.5  | Если IP компьютера был неправильно определен, его нужно указать вручную в `.env` файле                        |

## Пример конфигурации для CMS Битрикс

```dotenv
## Remote Server (PROD) ##
CATALOG_SRV=/var/www/site.com/public_html
USER_SRV=user
PORT_SRV=22
SERVER=127.0.0.1

## Local container config ##
HOST_NAME=site.com
DOCUMENT_ROOT=/var/www/html
## Avalible versions: 7.3-apache 7.4-apache 8.0-apache 7.3-fpm 7.4-fpm 8.0-fpm ##
PHP_VERSION=7.3-apache
## Avalible versions: 5.7 8.0 ##
MYSQL_VERSION=5.7

## Deploy settings ##
EXCLUDED_TABLES=b_event_log,b_search_content_stem,b_search_content,b_search_content_text,b_search_content_title,b_search_phrase,b_search_suggest,b_perf_error
EXCLUDED_FILES=.git,upload,bitrix/backup,bitrix/cache,bitrix/managed_cache,bitrix/stack_cache,bitrix/tmp,.env
```


[^1]: Например, если задать `site.com`, локальный адрес будет таким: `site.com.localhost` (или `site.com.127.0.0.1.nip.io`)
[^2]: Например, для Laravel значение будет `/var/www/html/public`
[^3]: Обязательная переменная при использовании команды `deploy`
[^4]: Все параметры XDebug https://xdebug.org/docs/all_settings#mode

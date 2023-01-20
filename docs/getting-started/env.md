---
sidebar_position: 3
sidebar_label: Configuration
---

# Configuration

The DL uses docker-compose configuration files, so you can override any variables and even images.

Used images:

- [Redis](https://hub.docker.com/_/redis) (alpine version)
- [MySQL](https://hub.docker.com/r/alterway/mysql) (alterway/mysql)
- [Memcached](https://hub.docker.com/_/memcached)
- [Nginx](https://hub.docker.com/_/nginx) (alpine version)
- [php-fpm and apache2](https://ghcr.io/organization/local-deploy) (modified original images)

## Setting up the .env file

With the help of variables in the `.env` file, you can flexibly control the environment settings.

### Main

| Variable                | Required | Default value                                  | Note                                                                                                         |
|-------------------------|----------|------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| NETWORK_NAME            | Yes      | Generated from HOST_NAME                       | The name of the docker network. Generated from HOST_NAME without special characters                          |
| DOCUMENT_ROOT           | Yes      | /var/www/html                                  | The root directory of the site where the `index.php` file is located. [^1]                                   |
| HOST_NAME               | No       | Generated from name of the current directory   | Site name or domain. Used to build a local URL [^2]                                                          |

### Deploy files and database

| Variable           | Required | Default value | Note                                                                                                  |
|--------------------|----------|---------------|-------------------------------------------------------------------------------------------------------|
| CATALOG_SRV        | No [^3]  |               | The root directory of the site on the server                                                          |
| USER_SRV           | No [^3]  |               | SSH username to connect to the server                                                                 |
| PORT_SRV           | No [^3]  |               | SSH port to connect to the server                                                                     |
| SERVER             | No [^3]  |               | IP address (or domain) to connect to the server                                                       |
| SSH_KEY            | No [^3]  | id_rsa        | Specifies the name of the ssh key located in the `~/.ssh/` directory                                  |
| ASK_KEY_PASSPHRASE | No       | false         | Ask for private key passphrase. <br/>Available values: `true`, `false`                                |
| USE_SSH_PASS       | No       | false         | Ignore ssh key and use password to connect. <br/>Available values: `true`, `false` |
| EXCLUDED_TABLES    | No       |               | MySQL tables excluded when downloading a dump from the server                                         |
| EXCLUDED_FILES     | No       |               | Excluded files when downloading an archive of files from the server                                   |

### Database connection

If the script could not automatically determine access to the database on the server, write the settings to the env file manually

| Variable           | Required  | Default value    | Note           |
|--------------------|-----------|------------------|----------------|
| MYSQL_HOST_SRV     | Нет       | localhost        | Host           |
| MYSQL_PORT_SRV     | Нет       | 3306             | Port           |
| MYSQL_DATABASE_SRV | Да        |                  | Base name      |
| MYSQL_LOGIN_SRV    | Да        |                  | User name      |
| MYSQL_PASSWORD_SRV | Да        |                  | User password  |

### PHP settings

| Variable                | Required | Default value | Note                                                                                                                                                           |
|-------------------------|----------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PHP_VERSION             | Yes      |               | PHP version <br/>Available values: `7.3-apache`, `7.4-apache`, `8.0-apache`, `8.1-apache`, `8.2-apache`, `7.3-fpm`, `7.4-fpm`, `8.0-fpm`, `8.1-fpm`, `8.2-fpm` |
| PHP_MEMORY_LIMIT        | No       | 256M          | PHP memory limit                                                                                                                                               |
| PHP_POST_MAX_SIZE       | No       | 100M          | Maximum POST request size                                                                                                                                      |
| PHP_UPLOAD_MAX_FILESIZE | No       | 100M          | Maximum file size allowed for upload                                                                                                                           |
| PHP_MAX_FILE_UPLOADS    | No       | 50            | Maximum number of uploaded files                                                                                                                               |
| PHP_MAX_EXECUTION_TIME  | No       | 60            | Maximum script execution time                                                                                                                                  |
| PHP_MODULES             | No       |               | Additional php extensions. For example PHP_MODULES="redis memcached"                                                                                           |
| XDEBUG                  | No       | off [^4]      | To enable the XDebug module, use the `debug` option                                                                                                            |
| XDEBUG_IDE_KEY          | No       | PHPSTORM      | Key to be passed when initializing an XDebug session                                                                                                           |
| XDEBUG_PORT             | No       | 9003          | XDebug port                                                                                                                                                    |

### MySQL settings

| Variable                | Required | Default value                                  | Note                                                                                                         |
|-------------------------|----------|------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| MYSQL_VERSION           | No       |                                                | MySQL version. <br/>Available values: `5.7`, `8.0`                                                           |
| MYSQL_DATABASE          | No       | db                                             | MySQL database name                                                                                          |
| MYSQL_USER              | No       | db                                             | MySQL database username                                                                                      |
| MYSQL_PASSWORD          | No       | db                                             | MySQL database user password                                                                                 |
| MYSQL_ROOT_PASSWORD     | No       | root                                           | MySQL database root password                                                                                 |

### Additional containers

| Variable                | Required | Default value                                  | Note                                                                                                         |
|-------------------------|----------|------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| REDIS                   | No       | false                                          | If set to `true`, the Redis container will be launched                                                       |
| REDIS_PASSWORD          | No       | pass                                           | Redis password                                                                                               |
| MEMCACHED               | No       | false                                          | If set to `true`, the Memcached container will be launched                                                   |

### Other settings

| Variable             | Required | Default value                                   | Note                                                                                                                        |
|----------------------|----------|-------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| LOCALTIME            | No       | Europe/Moscow                                   | Time zone set in PHP and MySQL containers                                                                                   |
| NGINX_CONF           | No       | ~/.config/dl/config-files/default.conf.template | Nginx config template. Required when using php-fpm version (nginx + php-fpm)                                                |
| LOCAL_IP             | No       | External local IP<br/>e.g. 192.168.0.5          | If the IP of the computer was incorrectly determined, it must be specified manually in the `.env` file                      |
| APPEND_COMPOSE_FILE  | No       |                                                 | Add a docker-compose.yaml file to be run with the project. (If there are several files, they must be separated by a colon)  |

## File configuration example for Bitrix CMS

```dotenv
## Remote Server (PROD) ##
CATALOG_SRV=/var/www/site.com/public_html
USER_SRV=user
PORT_SRV=22
SERVER=127.0.0.1

## Local container config ##
HOST_NAME=site.com
DOCUMENT_ROOT=/var/www/html
## Avalible versions: 7.3-apache 7.4-apache 8.0-apache 8.1-apache 8.2-apache 7.3-fpm 7.4-fpm 8.0-fpm 8.1-fpm 8.2-fpm ##
PHP_VERSION=7.3-apache
## Avalible versions: 5.7 8.0 ##
MYSQL_VERSION=5.7

## Deploy settings ##
EXCLUDED_TABLES=b_event_log,b_search_content_stem,b_search_content,b_search_content_text,b_search_content_title,b_search_phrase,b_search_suggest,b_perf_error
EXCLUDED_FILES=.git,upload,bitrix/backup,bitrix/cache,bitrix/managed_cache,bitrix/stack_cache,bitrix/tmp,.env
```

[^1]: For example, for Laravel the value would be `/var/www/html/public`
[^2]: For example, if you specify `site.com`, the local address will be `site.com.localhost` (or `site.com.127.0.0.1.nip.io`)
[^3]: Required variable when using the `deploy` command 
[^4]: All XDebug Options https://xdebug.org/docs/all_settings#mode 


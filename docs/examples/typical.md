---
sidebar_position: 3
sidebar_label: Typical configuration
---

# Examples of typical configurations

Examples of configurations that are suitable for local deployment of projects with standard installation.

:::info
You must have access to the server via ssh key. [^1]  
By default, the key name `id_rsa` from the ~/.ssh/ directory is used, if you want to use a different key, you need to explicitly specify it in the .env file:  
`SSH_KEY=my_ssh_key`
:::

## CMS Bitrix

Approximate directory structure:
```shell
/var/www/user/site.com/public_html/
├── .git # Files under git system are excluded and will not be downloaded
├── bitrix # The bitrix directory will be archived and downloaded
│   └── .settings.php # Database accesses are counted from the configuration file
├── ....
└── index.php # Index file in the project root
```

During deployment, the bitrix directory and database are downloaded.

After downloading:
- in the file `/bitrix/.settings.php` accesses for connecting to the database are automatically replaced (all values: `db`)
- the `update_devsrv` variable is set in the `b_option` table, which turns on the development mode (a requirement of the Bitrix licensing policy)
- the local domain site.com.localhost is added to the `b_lang_domain` and `b_lang` tables

.env file configuration:

```shell
CATALOG_SRV=/var/www/user/site.com/public_html/ # Root directory of the site on the server
USER_SRV=user # SSH username to connect to the server
PORT_SRV=22 # SSH port for connecting to the server
SERVER=127.0.0.1 # SSH server

PHP_VERSION=8.2-apache # Container with PHP (if php-fpm is specified, the nginx container will also start)
MYSQL_VERSION=8.0 # Container with MySQL

# Tables excluded from the dump (only tables are downloaded, without data)
EXCLUDED_TABLES=b_event_log,b_search_content_stem,b_search_content,b_search_content_text,b_search_content_title,b_search_phrase,b_search_suggest,b_perf_error
# Excluded files and directories from the archive
EXCLUDED_FILES=bitrix/backup,bitrix/cache,bitrix/managed_cache,bitrix/stack_cache
```

---

## CMS WordPress

Approximate directory structure:
```shell
/var/www/user/site.com/public_html/
├── .git # Files under git system are excluded and will not be downloaded
├── wp-admin # The directory will be archived and downloaded
├── wp-content # By default under git and not downloaded
├── wp-includes # The directory will be archived and downloaded
├── wp-config.php # Database accesses are counted from the configuration file
├── ....
└── index.php # Index file in the project root
```

During deployment, the wp-admin, wp-includes and database directories are downloaded.

After downloading:
- in the `wp-config.php` file, accesses for connecting to the database are automatically replaced (all values: `db`)

.env file configuration:

```shell
CATALOG_SRV=/var/www/user/site.com/public_html/ # Root directory of the site on the server
USER_SRV=user # SSH username to connect to the server
PORT_SRV=22 # SSH port for connecting to the server
SERVER=127.0.0.1 # SSH server

PHP_VERSION=8.2-apache # Container with PHP (if php-fpm is specified, the nginx container will also start)
MYSQL_VERSION=8.0 # Container with MySQL
```

:::note
Before starting the project, you should set the `WP_HOME` and `WP_SITEURL` constants in the `wp-config.php` file specifying the local domain.

For example:
```php
define('WP_HOME', 'http://site.com.localhost');
define('WP_SITEURL', 'http://site.com.localhost');
```
:::

---

## FW Laravel

Approximate directory structure:
```shell
/var/www/user/site.com/public_html/
├── app # Directories are not downloaded
├── bootstrap
├── config
├── ....
└── public
    └── index.php # Index file
```

During deployment, only the database is downloaded. Accesses are determined from the `.env` file with standard variables: 
`$DB_HOST`, `$DB_DATABASE`, `$DB_USERNAME`, `$DB_PASSWORD`.

.env file configuration:

```shell
CATALOG_SRV=/var/www/user/site.com/public_html/ # Root directory of the site on the server
USER_SRV=user # SSH username to connect to the server
PORT_SRV=22 # SSH port for connecting to the server
SERVER=127.0.0.1 # SSH server

DOCUMENT_ROOT=/var/www/html/public # Set DOCUMENT_ROOT to the public directory
PHP_VERSION=8.2-apache # Container with PHP (if php-fpm is specified, the nginx container will also start)
MYSQL_VERSION=8.0 # Container with MySQL
```

[^1]: [Deploying files and databases](../getting-started/env.md#deploy-files-and-database)  

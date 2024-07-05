---
sidebar_position: 3
sidebar_label: Типовая конфигурация
---

# Примеры типовых конфигураций

Примеры конфигураций, которые подходят для локального деплоя проектов со стандартной установкой.

:::info
У вас должен быть настроен доступ к серверу через ssh ключ. [^1]  
По умолчанию используется имя ключа `id_rsa` из директории ~/.ssh/, если вы хотите использовать другой ключ, его нужно явно указать в .env файле:  
`SSH_KEY=my_ssh_key`
:::

## CMS Bitrix

Примерная структура директорий:
```shell
/var/www/user/site.com/public_html/
├── .git # Файлы под системой git исключены и не будут загружаться
├── bitrix # Директория bitrix будет заархивирована и загружена
│   └── .settings.php # С конфигурационного файла считаются доступы к базе данных 
├── ....
└── index.php # Индексный файл в корне проекта
```

При деплое скачивается директория bitrix и база данных. 

После загрузки:
- в файле `/bitrix/.settings.php` автоматически заменяются доступы для подключения к базе данных (все значения: `db`)
- в таблицу `b_option` устанавливается переменная `update_devsrv`, которая включает режим разработки (требование лицензионной политики Битрикс)
- в таблицу `b_lang_domain` и `b_lang` добавляется локальный домен site.com.localhost

Конфигурация .env файла:

```shell
CATALOG_SRV=/var/www/user/site.com/public_html/ # Корневая директория сайта на сервере
USER_SRV=user # Имя пользователя SSH для подключения к серверу
PORT_SRV=22 # Порт SSH для подключения к серверу
SERVER=127.0.0.1 # Сервер SSH

PHP_VERSION=8.2-apache # Контейнер с PHP (если указан php-fpm, запустится также контейнер nginx)
MYSQL_VERSION=8.0 # Контейнер с MySQL

# Исключаемые из дампа таблицы (скачиваются только таблицы, без данных)
EXCLUDED_TABLES=b_event_log,b_search_content_stem,b_search_content,b_search_content_text,b_search_content_title,b_search_phrase,b_search_suggest,b_perf_error
# Исключаемые файлы и директории из архива
EXCLUDED_FILES=bitrix/backup,bitrix/cache,bitrix/managed_cache,bitrix/stack_cache
```

---

## CMS WordPress

Примерная структура директорий:
```shell
/var/www/user/site.com/public_html/
├── .git # Файлы под системой git исключены и не будут загружаться
├── wp-admin # Директория будет заархивирована и загружена
├── wp-content # По умолчанию под git и не скачивается
├── wp-includes # Директория будет заархивирована и загружена
├── wp-config.php # С конфигурационного файла считаются доступы к базе данных 
├── ....
└── index.php # Индексный файл в корне проекта
```

При деплое скачиваются директории wp-admin, wp-includes и база данных.

После загрузки:
- в файле `wp-config.php` автоматически заменяются доступы для подключения к базе данных (все значения: `db`)

Конфигурация .env файла:

```shell
CATALOG_SRV=/var/www/user/site.com/public_html/ # Корневая директория сайта на сервере
USER_SRV=user # Имя пользователя SSH для подключения к серверу
PORT_SRV=22 # Порт SSH для подключения к серверу
SERVER=127.0.0.1 # Сервер SSH

PHP_VERSION=8.2-apache # Контейнер с PHP (если указан php-fpm, запустится также контейнер nginx)
MYSQL_VERSION=8.0 # Контейнер с MySQL
```

:::note
Перед запуском проекта следует установить константу `WP_HOME` и `WP_SITEURL` в файле `wp-config.php` с указанием локального домена.  

Например:
```php
define('WP_HOME', 'http://site.com.localhost');
define('WP_SITEURL', 'http://site.com.localhost');
```
:::

---

## FW Laravel

Примерная структура директорий:
```shell
/var/www/user/site.com/public_html/
├── app # Директории не скачиваются
├── bootstrap
├── config
├── ....
└── public
    └── index.php # Индексный файл
```

При деплое скачивается только база данных. Доступы определяются из файла `.env` со стандартных переменных:  
`$DB_HOST`, `$DB_DATABASE`, `$DB_USERNAME`, `$DB_PASSWORD`.

Конфигурация .env файла:

```shell
CATALOG_SRV=/var/www/user/site.com/public_html/ # Корневая директория сайта на сервере
USER_SRV=user # Имя пользователя SSH для подключения к серверу
PORT_SRV=22 # Порт SSH для подключения к серверу
SERVER=127.0.0.1 # Сервер SSH

DOCUMENT_ROOT=/var/www/html/public # Устанавливается DOCUMENT_ROOT на директорию public
PHP_VERSION=8.2-apache # Контейнер с PHP (если указан php-fpm, запустится также контейнер nginx)
MYSQL_VERSION=8.0 # Контейнер с MySQL
```

[^1]: [Деплой файлов и базы данных](../getting-started/env.md#деплой-файлов-и-базы-данных)  

---
sidebar_position: 5
sidebar_label: Устранение неисправностей
---

# Устранение неисправностей

## Флаг debug

При любых ошибках или неисправностях, запустите команду с указанием флага `--debug`. Флаг включает режим отладки, при котором в терминал выводится отладочная информация.

## Ошибка mysqldump

При деплое базы данных может отобразиться ошибка: `Table 'db.some_table' doesn't exist`. 

Попробуйте запустить команду mysqldump в консоли вручную. Если на экране будет ошибка вида:
```text
mysqldump: Couldn't execute 'SELECT COLUMN_NAME, ..... 
    FROM information_schema.COLUMN_STATISTICS .... : 
    Unknown table 'COLUMN_STATISTICS' in information_schema (1109)
```

Значит вы неправильно установили версию MySQL в `.env` файле. Локальная версия и версия на сервере должны совпадать.  
Проблема решается дополнительным параметром `--column-statistics=0`, который автоматически устанавливается при дампе, если версия mysql 8.0

> Полную команду, которую выполняет dl на сервере, можно увидеть в режиме отладки.

## Ошибка определения хеша в known_hosts
Иногда вы можете получить ошибку при запуске команды `dl deploy`:

```text
ssh: handshake failed: knownhosts: key mismatch
```

Ошибка уведомляет, что в файле `~/.ssh/known_hosts` присутствует ключ сервера, но хэш от имени сервера не совпадает с тем, который указан у вас в переменной `SERVER`.

Например, при доступе к серверу по ssh вы указали домен (`ssh user@site.com`), а в файле `.env`, в переменной `SERVER` указываете IP адрес. В таком случае клиент SSH видит в файле `~/.ssh/known_hosts` тот же ключ, но совсем с другим хэшем домена.

Попробуйте зайти на сервер через ssh вручную, с теми же доступами, которые вы указали в `.env` файле, система должна выдать ошибку и предложит удалить лишнюю строку.

Кардинальное решение проблемы, если ничего не помогает: удалить файл `~/.ssh/known_hosts`.

## Известные проблемы

### Safari
В операционной системе MacOS браузер Safari не распознает домен `.localhost`  

Вы можете использовать домен `.nip.io`, чтобы открыть проект. В других браузерах подобной проблемы не наблюдается.

### Docker Desktop
На некоторых дистрибутивах Linux может наблюдаться проблема с сервисными контейнерами, если Docker установлен версии Desktop. На текущий момент решения проблемы нет. Единственный выход — удалить Desktop и установить версию Engine.  
[Install Docker Engine](https://docs.docker.com/engine/install)

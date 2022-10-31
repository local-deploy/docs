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


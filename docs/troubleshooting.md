---
sidebar_position: 5
sidebar_label: Troubleshooting
---

# Troubleshooting

## debug flag

For any errors or malfunctions, run the command with the `--debug` flag. The flag enables debugging mode, in which debugging information is output to the terminal.

## mysqldump error

When deploying the database, an error may be displayed: `Table 'db.some_table' doesn't exist`.

Try running the mysqldump command in the console manually. If the screen shows an error like:
```text
mysqldump: Couldn't execute 'SELECT COLUMN_NAME, ..... 
    FROM information_schema.COLUMN_STATISTICS .... : 
    Unknown table 'COLUMN_STATISTICS' in information_schema (1109)
```

So you have incorrectly set the MySQL version in the `.env` file. The local version and the version on the server must match.  
The problem is solved by the additional parameter `--column-statistics=0`, which is automatically set when dumping if the version of mysql is 8.0

> The full command that dl executes on the server can be seen in debug mode.



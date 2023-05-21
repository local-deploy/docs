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

## Error determining hash in known_hosts
Sometimes you may get an error when running the `dl deploy` command:

```text
ssh: handshake failed: knownhosts: key mismatch
```

The error notifies that the server key is present in the `~/.ssh/known_hosts` file, but the hash on the server name does not match the one specified in your `SERVER` variable.

For example, when accessing the server via ssh, you specify the domain (`ssh user@site.com`), and in the `.env` file, in the `SERVER` variable, you specify the IP address. In this case, the SSH client sees the same key in the `~/.ssh/known_hosts` file, but with a completely different domain hash.

Try to access the server via ssh manually, with the same access that you specified in the `.env` file, the system should give an error and prompt you to delete the extra line.

The cardinal solution to the problem, if all else fails: delete the `~/.ssh/known_hosts` file.

## Known Issues

### Safari
On MacOS, Safari does not recognize the `.localhost` domain

You can use the `.nip.io` domain to open the project. Other browsers don't have this problem.

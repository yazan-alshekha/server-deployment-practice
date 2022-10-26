# server-deployment-practice

# postgress cheet

### 
my alais name to start the server is "sqlstart"
my alais name to stop the server is "sqlstop"
1. Using our Terminal, with the `psql` client: **PostgreSQL shell**
- `psql` from the terminal
- `psql database` to connect directly
- `psql -f filename.sql` to run a .sql file directly. Works best with a database specified.
- core shell commands
  - `\l` - shows all databases
  - `\c` - connects to a db
  - `\d` - shows all tables
  - `\q` - quits

to excute your schema (create table)
this below command should written in normal terminal 
psql -d dbname -f schema.sql

If you get an error: Heroku; command not found
Kindly install it using this command:
sudo curl https://cli-assets.heroku.com/install.sh | sh
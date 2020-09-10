# inventory_management_backend

## Pre-requisites :
1. Node(>11.12.0)
2. Npm(>5.7.0)
3. MySql server


Follow below steps to start the application :

1. npm install
2. On the MySql client, run `create database inventory_management`
3. On terminal run, `cd database && node migrations.js up && cd ..` . It will initialize the database and creates a user(username: testuser / password:12345678).
4. Set environment variables by runnning `source env_variables.sh` on terminal.
5. Run `npm start` to start the server.
6. Import api's present under postman folder in postman application.
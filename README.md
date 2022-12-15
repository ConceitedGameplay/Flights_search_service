/
 - src/
    index.js   // server
    models/
    controllers/
    middlewares/
    services/
    utils/
    config/
    repository/

 - test/[to be added later]
 - static/
 - temp/

 # welcome to flights service

 ## project setup
- clone the project on your local
- execute 'npm install' on the same path as of your root directory the downloaded project
- create a '.env' file in the root directory and add the following environment variable 
  -`PORT=30001`
- inside the src/config` folder create a new file 'config.json' and then add the following piece of json

 ```
  {
  "development": {
    "username": <YOYR_DB_LOGIN_NAME>>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  
 ```

 Once you've added your db config as listed above, go to the src folder from
 your terminal and execute:
 `npx sequelize db:create`
and then execute:
`npx seqeulize db:migrate`
```


 ## DB Design
  - Airplane table
  - Flight table
  - Airport table
  - City table
  -  



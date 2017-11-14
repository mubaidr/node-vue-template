# backend

Backend API

## Add Required Configuration

You *must* create a config file in path: `/backend/config/options.js` with the following content atleast, you can also add your secret options to this file (this file is added to `.gitignore`).

```json
module.exports = {
  /* DB connection information*/
  db: {
    name: 'db_name',
    host: 'host_address',
    username: 'username',
    password: 'password'
  },
  /* Secret key to be used for authorization requests*/
  secret: 'someSecretStringToUseForAuthorizationRequests'
}
```

## Build Setup

``` bash
# install dependencies
npm install

# generates models from existing DB
npm run generate-models

# start nodejs server using nodemon
npm run dev

# start nodejs server
npm run start

```

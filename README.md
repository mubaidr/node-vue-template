# Node-Vue-Template

[![codebeat badge](https://codebeat.co/badges/ae01fa78-b892-403c-9020-875e7607cd7b)](https://codebeat.co/projects/github-com-mubaidr-node-vue-template-master)

A starter template for building complete application using Node.js and Vue.js
with some included packages and configurations to help start the development
quickly.

There are two parts of this project, `backend api` and `single page frontend
application` and Each part is contained in the respective folder.

Major packages inlcuded and configured (as required)

## Backend

### Highlights

* Generate models from exisitng Database
* Sequelize configures to read models from directory, just add new models and
  sequelize will load it.
* Automatic API for all the models (you can also skip some)
* Authentication already setup using JSONWebToken for nodejs
* Authorization routes to filter api endpoints data based on rules
* Add custom route endpoints

[Build Setup](./backend/README.md)

Please note that by default this application is configured to use SQL server, by
doing minor changes you can easily switch to DB of your choice.
[Details](http://docs.sequelizejs.com/manual/installation/getting-started.html)

## Frontend

### Highlights

* Preconfigured axios for jwt authentication
* Automatic page & ajax progress bars
* Persistent login & register implemented using vuex & vue-router
* vue form generator
* Bootswatch for themes
* Webpack dev & build server cofigured (with linting)
* pug & stylus enabled
* date picker
* some vue-mixins for eaiser axios requests/posts and form validations

[Build Setup](./frontend/README.md)

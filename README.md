# Node-Vue-Template

[![codebeat badge](https://codebeat.co/badges/ae01fa78-b892-403c-9020-875e7607cd7b)](https://codebeat.co/projects/github-com-mubaidr-node-vue-template-master)

A starter template for building a complete application using Node.js and Vue.js
with some included packages and configurations to help jump-start the development
process.

There are two parts of this project, `backend api` and `single page frontend
application` and each part is contained in the respective folder.

Major packages inlcuded and configured (as required)

## Backend

### Highlights

* Sequelize configures models from a directory, just add a new model and
  sequelize will load it.
* Authentication is already setup using JSONWebToken for Node.js
* Add custom route endpoints

[Build Setup](./backend/README.md)

By default this application is configured to use SQL server, but by
doing minor changes you can easily switch to any database of your choice.
[Details](http://docs.sequelizejs.com/manual/installation/getting-started.html)

## Frontend

### Highlights

* Preconfigured axios for jwt authentication
* Automatic page & Ajax progress bars
* Persistent login & register implemented using Vuex & Vue-router
* Bootswatch used for themes
* Webpack dev & build server configured (with linting)
* Stylus is enabled
* Some Vue-mixins for authentication/user info

[Build Setup](./frontend/README.md)

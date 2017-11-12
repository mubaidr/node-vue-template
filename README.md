# Node-Vue-Template

A starter template for building complete application using Node.js and Vue.js with some included packages and configurations to help start the development quickly.

There are two parts of this project, `backend api` and `single page frontend application` and Each part is contained in the respective folder.

Major packages inlcuded and configured (if required) are:

## Backend

[readme](./backend/README.md)

```json
  "body-parser": "~1.18.2", /*Node.js body parsing middleware.*/
  "config": "^1.28.1", /*Node-config organizes hierarchical configurations for your app deployments.*/
  "cookie-parser": "~1.4.3", /*cookie parsing middleware*/
  "debug": "~2.6.9", /*A tiny JavaScript debugging utility modelled after Node.js core's debugging technique. Works in Node.js and web browsers.*/
  "express": "~4.15.5", /*Fast, unopinionated, minimalist web framework for node.*/
  "morgan": "~1.9.0", /*HTTP request logger middleware for node.js*/
  "pug": "2.0.0-beta11", /*robust, elegant, feature rich template engine for Node.js*/
  "sequelize": "^4.22.5", /*An easy-to-use multi SQL dialect ORM for Node.js*/
  "serve-favicon": "~2.4.5", /*favicon serving middleware*/
  "tedious": "^2.1.1" /*Tedious is a pure-Javascript implementation of the TDS protocol, which is used to interact with instances of Microsoft's SQL Server.*/
```

Please note that by default `tedious` SQL db driver is included. You can choose [one of these](http://docs.sequelizejs.com/manual/installation/getting-started.html) to support DB of your choice.

## Frontend

[readme](./frontend/README.md)

```json
  "axios": "^0.17.0", /*Promise based HTTP client for the browser and node.js*/
  "bootswatch": "^4.0.0-beta.2", /*Bootswatch is a collection of themes for Bootstrap.*/
  "es6-promise": "^4.1.1", /*A polyfill for ES6-style Promises*/
  "vue-router": "^3.0.1", /*vue-router is the official router for Vue.js.*/
  "vue": "^2.5.3", /*The Progressive
JavaScript Framework*/
  "vuex-router-sync": "^5.0.0", /*Effortlessly keep vue-router and vuex store in sync.*/
  "vuex": "^3.0.1" /*Centralized State Management for Vue.js.*/
```

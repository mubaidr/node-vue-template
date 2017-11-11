import 'axios'
import 'moment'
import 'vuejs-datepicker'

import './axios.js'
import './moment.js'
import './datepicker'

import store from '../store'
import router from '../router'
import { sync } from 'vuex-router-sync'

import promise from 'es6-promise'

sync(store, router)
promise.polyfill()

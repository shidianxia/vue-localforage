/*!
 * vue-localforage v0.2.4
 * shidianxai@gmail.com
 * Released under the MIT License.
 */
'use strict'

var localForage = require('localforage')

function VueLocalForage (Vue) {

  Vue.prototype.$getItem = function (key, callback) {
    return localForage.getItem(key, callback)
  }

  Vue.prototype.$setItem = function (key, value, callback) {
    return localForage.setItem(key, value, callback)
  }

  Vue.prototype.$removeItem = function (key, callback) {
    return localForage.removeItem(key, callback)
  }

  Vue.prototype.$clearStorage = function () {
    localForage.clear()
  }

  Vue.prototype.$lengthOfStorage = function (callback) {
    return localForage.length(callback)
  }

  Vue.prototype.$keyInStorage = function (keyIndex, callback) {
    return localForage.key(keyIndex, callback)
  }

  Vue.prototype.$keysInStorage = function (callback) {
    return localForage.keys(callback)
  }

  Vue.prototype.$iterateStorage = function (iteratorCallback, callback) {
    return localForage.iterate(iteratorCallback, callback)
  }

  Vue.prototype.$setStorageDriver = function (driverName) {
    localForage.setDriver(driverName)
  }

  Vue.prototype.$storageConfig = function (options) {
    localForage.config(options)
  }

  var functions = [
    '$getItem',
    '$setItem',
    '$removeItem',
    '$clearStorage',
    '$lengthOfStorage',
    '$keyInStorage',
    '$iterateStorage',
    '$setStorageDriver',
    '$storageConfig'
  ]

  Vue.localForage = {}
  functions.forEach(function (name) {
    Vue.localForage[name] = Vue.prototype[name]
  })
}

VueLocalForage.version = '0.2.4'

module.exports = VueLocalForage

/*!
 * vue-localforage v0.2.0
 * shidianxai@gmail.com
 * Released under the MIT License.
 */
'use strict'

var localForage = require('localforage')

function VueLocalForage(Vue) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1]
  
  Vue.prototype.$getItem = function (key, callback) {
    localForage.getItem(key, callback)
  }
  
  Vue.prototype.$setItem = function (key, value, callback) {
    localForage.setItem(key, value, callback)
  }
  
  Vue.prototype.$removeItem = function (key, callback) {
    localForage.removeItem(key, callback)
  }
  
  Vue.prototype.$clearStorage = function () {
    localForage.clear()
  }
  
  Vue.prototype.$lengthOfStorage = function () {
    localForage.length()
  }
  
  Vue.prototype.$keyInStorage = function (keyIndex, callback) {
    localForage.key(keyIndex, callback)
  }
  
  Vue.prototype.$keysInStorage = function (callback) {
    localForage.keys(callback)
  }
  
  Vue.prototype.$iterateStorage = function (iteratorCallback, callback) {
    localForage.iterate(iteratorCallback, callback)
  }
  
  Vue.prototype.$setStorageDriver = function (driverName) {
    localForage.setDriver(driverName)
  }
  
  Vue.prototype.$storageConfig = function (options) {
    localForage.config(options)
  }
  
}

VueLocalForage.version = '0.2.0'

module.exports = VueLocalForage
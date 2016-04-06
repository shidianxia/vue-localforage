/*!
 * vue-localforage v0.1.0
 * shidianxai@gmail.com
 * Released under the MIT License.
 */
'use strict'

require('localforage')

function VueLocalForage(Vue) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1]
  
  Vue.prototype.$setStorage = function (a, b) {
    localForage.setItem( a,b )
  }
}

VueLocalForage.version = '0.1.0'

module.exports = VueLocalForage
# vue-localforage
A simple Vue plugin wrapped from localForage.

### Install

```bash
npm install vue-localforage
```

```js
import VueLocalForage from 'vue-localforage'
Vue.use(VueLocalForage)
```

### Get item in localStorage

```js
this.$getItem(key, callback)
```

### Set item in localStorage

```js
this.$setItem(key, value, callback)
```

### Remove item in localStorage

```js
this.$removeItem(key, callback)
```

### Clean all the object in localStorage

```js
this.$clearStorage
```

### Gets the number of keys in localStorage

```js
this.$lengthOfStorage
```

### Get the name of a key based on its ID

```js
this.$keyInStorage(keyIndex, callback)
```

### Get the list of all keys in localStorage

```js
this.$keysInStorage(callback)
```

### Iterate over all value/key pairs

```js
this.$iterateStorage(function (value, key, iterationNumber) {
    //console.log all the kay/value pairs
    console.log([key, value]);
}, function (err) {
    if (!err) {
        console.log('Iteration has completed');
    }
})
```

### Force usage of a particular driver or drivers, if available.

```js
this.$setStorageDriver(localforage.LOCALSTORAGE)
```

By default, localForage selects backend drivers for the datastore in this order:

1. IndexedDB
2. WebSQL
3. localStorage

If you would like to force usage of a particular driver you can use $setStorageDriver() with one or more of the following parameters.

localforage.INDEXEDDB

localforage.WEBSQL

localforage.LOCALSTORAGE


### Set and persist localForage options.

```js
this.$storageConfig({
    driver: localforage.LOCALSTORAGE,
    name: 'Name-of-localStorage'
});
```

This must be called before any other calls to localForage are made, but can be called after localForage is loaded.

##### driver
The preferred driver(s) to use. Same format as what is passed to `setStorageDriver()`, above.
Default: `[localforage.INDEXEDDB, localforage.WEBSQL, localforage.LOCALSTORAGE]`
##### name
The name of the database. May appear during storage limit prompts. Useful to use the name of your app here. In localStorage, this is used as a key prefix for all keys stored in localStorage.
Default: `'localforage'`
##### size
The size of the database in bytes. Used only in WebSQL for now.
Default: `4980736`
##### storeName
The name of the datastore. In IndexedDB this is the dataStore, in WebSQL this is the name of the key/value table in the database. Must be alphanumeric, with underscores. Any non-alphanumeric characters will be converted to underscores.
Default: `'keyvaluepairs'`
##### version
The version of your database. May be used for upgrades in the future; currently unused.
Default: `1.0`
##### description
A description of the database, essentially for developer usage.
Default: `''`



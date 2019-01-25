# Lazybee-component
Lazybee is a front-end UI component Library for developing websites and web applications base on Vue.js. 
It provides useful components for the developer to building app and prototype quickly.

#### Demo
 - [https://lazy-bee.github.io/components/](https://lazy-bee.github.io/components/)

## Add
Add a dependency to matched packages

```
$ lerna add module-1 --scope=module-2

// lerna add @lazy-bee/datetimepicker --scope=demo
```

## bootstrap
this links all modules in a monorepo together. This way, you can immediately test whether a change will break code that relies on a module.
 
```
$ lerna bootstrap
```


## Publish
```
$ lerna run build-bundle ; lerna publish
```

publishing to org npm, needed to make it public on the first publish
```
$ npm publish --access=public
```


## Run all test
```
$ lerna run test
```


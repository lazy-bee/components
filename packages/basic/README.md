# Lazybee-component



## Install

* Add the following code to `package.json` in your vue project (created by vue-cli v3 is preferred)

  ```json
    "dependencies": {
        "lazybee-component": "git+ssh://git-codecommit.ap-northeast-1.amazonaws.com/v1/repos/lazybee-component#dev"
    }
  ```

  And run:

  ```shell
  yarn install
  ```

* **Lazybee-component** requires `stylus` and `stylus-loader`. If you haven't install them, please run:

  ```shell
  yarn add stylus-loader stylus
  ```

* Navigate to your applications main entry point. In most cases this will be `index.js` or `main.js`. In this file you will import **Lazybee-component** and tell Vue to use it.

  ```javascript
  import Vue from 'vue'
  import LazybeeComponent from 'lazybee-component'

  Vue.use(LazybeeComponent);
  ```

* Viola! Now you can use lazybee components with `x-app` or `x-layout` components!

  ```vue
  <template>
    <div>
      <x-alert value=true message="sample alert"></x-alert>
      <x-layout type="admin"></x-layout>
    </div>
  </template>
  ```

  > Note: We must include `x-app` or `x-layout` (which has `v-app` inside) to include some CSS from `v-app`. Otherwise the styles of Vuetify components may not be correct.



## Demo (storybook)

### Storybook
 - [Storybook](https://s3-ap-northeast-1.amazonaws.com/lazybee-demo/demo/index.html)

### Run Demo
```
$ yarn install
$ yarn serve:demo
```



## Contributing

For details, please refer to [Contributing guide](./CONTRIBUTING.md)

### Branch


| release | master | dev |
| -- | -- | -- |
| ![Alt text](https://codebuild.ap-northeast-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiUUpnZ2pJbTdkak5DZmQ0T3I2cm5FL3NRZC9xRENJRGFuUzlpeVNMYS9zRzMzQTBPNUt6TlYxa3NMVVBLVTAwWVlCbHpGNU9pVzgxd3ZhNGJoSm5yYUpZPSIsIml2UGFyYW1ldGVyU3BlYyI6IlhzQmQxenE4ZkwyQ0FvVUEiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=release) | ![Alt text](https://codebuild.ap-northeast-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiUUpnZ2pJbTdkak5DZmQ0T3I2cm5FL3NRZC9xRENJRGFuUzlpeVNMYS9zRzMzQTBPNUt6TlYxa3NMVVBLVTAwWVlCbHpGNU9pVzgxd3ZhNGJoSm5yYUpZPSIsIml2UGFyYW1ldGVyU3BlYyI6IlhzQmQxenE4ZkwyQ0FvVUEiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master) | -- |


### Versions

`A-BB-CCC`

| Major (A)    | Minor (BB)                            | Release number (serial) (CCC)          |
| -- | -- | -- |
| Component library / package changes <br /> For example: remove `vue-echarts` | New component,<br /> interface change | Everytime merge into **master** (Automatically) |


### Script command

```shell
$ yarn serve:src

$ yarn build:src # this builds component.js, component.css under dist/

$ yarn lint:src

$ yarn serve:demo # serve storybook

$ yarn build:demo # build storybook

$ yarn install:package

$ yarn release:component # build both lazybee-component and storybook
```



## Todos

- [ ] Renew UI design
- [ ] Update documentation
- [ ] Unit test
- [x] Consider Vuetify [a-la-carte](https://vuetifyjs.com/en/guides/a-la-carte) -> NO!
- [x] Consider setting alias to vuetify components -> NO!
- [ ] Consider Plugin-lize: see [Plugin Development Guide](https://cli.vuejs.org/dev-guide/plugin-dev.html)
- [ ] Remove unneeded components from **doc**
- [ ] Clarify Vuetify to lazybee users
- [ ] Define installation method (Upgrade by lazybee-cli? Version control?)
- [ ] CI / CD (git add tag automatically)
- [ ] Update Storybook


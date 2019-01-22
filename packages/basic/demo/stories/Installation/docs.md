
<!-- STORY -->

# Installation

 Add the following code to `package.json` in your vue project (created by vue-cli v3 is preferred)

  ```json

    "dependencies": {
        "lazybee-component": "git+ssh://git-codecommit.ap-northeast-1.amazonaws.com/v1/repos/lazybee-component#dev"
    }
  ```

  And run:

  ```shell

  $ yarn install
  ```

 **Lazybee-component** requires `stylus` and `stylus-loader`. If you haven't install them, please run:

  ```shell

  $ yarn add stylus-loader stylus
  ```

 Navigate to your applications main entry point. In most cases this will be `index.js` or `main.js`. In this file you will import **Lazybee-component** and tell Vue to use it.

  ```javascript

  import Vue from 'vue'
  import LazybeeComponent from 'lazybee-component'

  Vue.use(LazybeeComponent);
  ```

 Viola! Now you can use lazybee components with `x-app` or `x-layout` components!

  ```html

  <template>
    <div>
      <x-alert value = true message="sample alert"></x-alert>
      <x-layout type = "admin"></x-layout>
    </div>
  </template>
  ```

  > Note: We must include `x-app` or `x-layout` (which has `v-app` inside) to include some CSS from `v-app`. Otherwise the styles of Vuetify components may not be correct.


### Demo on Storybook

#### Storybook
 - [Storybook](https://s3-ap-northeast-1.amazonaws.com/lazybee-demo/demo/index.html)

#### Run Demo
  ```

  $ yarn install
  $ yarn serve:demo
  ```
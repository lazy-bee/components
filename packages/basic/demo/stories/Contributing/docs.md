<br>

# How to Contribute to Lazybee Component?

  1. **Clone** the project to your own machine

  2. **Create branch** from **dev branch**

  3. **Commit** changes to your own branch

    * Make clear commit messages

    * Update the document

  4. **Rebase** your own branch to latest **dev branch**

  5. **Push** your work

  6. Submit a **Pull request** to **dev branch** so that we can review your changes



## Possible developing method

**Scenario: We want to develop, commit in `lazybee-component` repository, while seeing the effect in another vue (vue-cli 3) project (such as `lazybee-admin`) immediately.**

Note: In `lazybee-component`, currently, only `#dev` branch could be installed and used directly.

In command line, under `lazybee-component` directory:

  ```shell

  $ yarn link
  ```

  (This may take a little time to wait.)

In command line, under `lazybee-admin` directory:

  ```shell

  $ yarn link lazybee-component
  ```

And then you can pretend `lazybee-component` is installed :)

### Troubleshooting

If you encountered this issue: [[Bug Report] "\$attrs is readonly" and "$listeners is readonly" console messages.](https://github.com/vuetifyjs/vuetify/issues/4068)
  Add the following to `vue.config.js`

  ```javascript

  const path = require('path')
  module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
          vue$: path.resolve(__dirname, './node_modules/vue/dist/vue.esm.js'),
        }
      }
    }
  }
  ```

"No PostCSS Config found" or other lazybee-component config-relevant issue, add the following to `vue.config.js`, too

  ```javascript

  module.exports = {
    configureWebpack: {
      resolve: {
        symlinks: false
      }
    }
  }
  ```




Further reading:

* [yarn-link doc](https://yarnpkg.com/en/docs/cli/link)
* [yarn-unlink doc](https://yarnpkg.com/en/docs/cli/unlink)
* [Vue: Explanation of Different Builds](https://vuejs.org/v2/guide/installation.html#Explanation-of-Different-Builds)



## To install lazybee-component, #dev branch

* Add following to `package.json`

  ```

  "dependencies": {
      "lazybee-component": "git+ssh://git-codecommit.ap-northeast-1.amazonaws.com/v1/repos/lazybee-component#dev"
  }
  ```

  This will install `lazybee-component` from `AWS CodeCommit`. For details, please read [the doc on rrcCodingRule (in Philippines AWS account)](https://ap-southeast-1.console.aws.amazon.com/codecommit/home?region=ap-southeast-1#/repository/rrcCodingRule/browse/HEAD/--/doc/codeCommit.md)



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


import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import routerBasic from './pages/Basic/router'

Vue.use(Router)

const routerConfig = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  },
  {
    path: '/components',
    name: 'componentLayout',
    component: () => import(/* webpackChunkName: "about" */ './layouts/Component.vue'),
    children: [...routerBasic]
  }
]


export default new Router({
  routes: routerConfig
})

const flatRouterConfig = (_routerConfig) => {
  const returnData = []

  _routerConfig.forEach(({path, name, children}) => {
    if(!children) return returnData.push({path, name})


    children.forEach(item => {
      const {path: childPath, name: childName} = item
      return returnData.push({
        path:`${path}/${childPath}`,
        name: `${childName}`
      })
    })
  })

  return returnData
}

export const meta = flatRouterConfig(routerConfig)
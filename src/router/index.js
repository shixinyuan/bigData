/**
 * 路由规则
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../page/Home'
import Login from '../page/Login'

/**
 * 路由懒加载 https://router.vuejs.org/zh-cn/advanced/lazy-loading.html
 * 结合 Vue 的 异步组件 和 Webpack 的 code splitting feature, 轻松实现路由组件的懒加载。
 */
// const Login = resolve => require(['../pages/Login.vue'], resolve)

/**
 * 把组件按组分块
 * 给 chunk 命名，提供 require.ensure 第三个参数作为 chunk 的名称:
 */
// const About = r => require.ensure([], () => r(require('../pages/About.vue')), 'about')

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: Home
},
{
  path: '/Login',
  name: 'login',
  component: Login
}
]

const router = new VueRouter({
  linkActiveClass: 'app-active', // 如果有底部导航栏，这个属性可以为被选中的路由增加相应的选中状态class
  history: true,
  base: __dirname,
  routes
})

router.beforeEach((to, from, next) => {
  var { auth = false } = to.meta
  var isLogin = Boolean(localStorage.getItem('loginStatus')) // true用户已登录， false用户未登录

  to.name === 'login' ? router.app.headerShow = false : router.app.headerShow = true
  to.name === 'detail' ? router.app.iconType = false : router.app.iconType = true

  if (auth && !isLogin && to.path !== '/login') {
    return next({ path: '/login' })
  }

  next()
})

// router.afterEach((to, from, next) => {
// })

export default router

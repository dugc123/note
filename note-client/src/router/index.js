import Vue from 'vue'
import Router from 'vue-router'
import Nprogress from "nprogress" //添加进度条插件
import "nprogress/nprogress.css"

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: { 
        title:"云笔记首页"
       },
      component: ()=>import ("../view/index.vue")
    },
    {
      path: '/region',
      name: "region",
      meta: {
        title: "注册页面"
      },
      component: () =>import('../view/region.vue')
    },
    {
      path: '/writeNote',
      name: "writeNote",
      meta: {
          title: "写笔记页面"
      },
      component: () =>
        import('../view/writeNote.vue')
    },
    {
      path: '/article/:id',
      name: "article",
      meta: {
        title: "文章详情页面"
      },
      component: () => import('../view/article.vue')
    },
  ]
})
router.beforeEach((to, from, next) => {
  Nprogress.start()
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
router.afterEach((to, from) => {
  Nprogress.done()
})
export default router
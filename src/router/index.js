import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/message'
  },
  {
    path: "/message",
    name: "message",
    meta: { title: "消息" },
    component: resolve => (require(["@/views/message"], resolve)),
  },
  {
    path: "/chat",
    name: "chat",
    meta: { title: "聊天" },
    component: resolve => (require(["@/views/chat"], resolve)),
  },
  {
    path: "/login",
    name: "login",
    meta: { title: "登录" },
    component: resolve => (require(["@/views/login"], resolve)),
  },
  {
    path: "*",
    name: "404",
    component: resolve => (require(["@/views/404"], resolve)),
    meta: { title: "没找到页面" },
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    if (to.matched[0] && to.matched[0].meta.title) {
      document.title = to.matched[0].meta.title
    } else {
      document.title = 'mcchat'
    }
  }
})
// 解决vue-router在3.0版本以上重复点报错问题
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(this, location, () => { }, () => { });
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(this, location, () => { }, () => { });
  }
}
export default router

import Vue from "vue";
import Router from "vue-router";
// import Main from '../pages/main.vue'
// import Tool from '../pages/tool.vue'
// import Mine from '../pages/mine.vue'
// import MemoNew from '../pages/tool/memonew.vue'
// import MemoList from '../pages/tool/memolist.vue'
// import Chart from '../pages/tool/chart.vue'
// import Loadmore from '../pages/tool/loadmore.vue'
// import MyInfo from '../pages/mine/MyInfo.vue'
// https://cloud.tencent.com/developer/article/1467362
const Main = resolve => require(["@/pages/main"], resolve);
const Tool = resolve => require(["@/pages/tool"], resolve);
const Mine = resolve => require(["@/pages/mine"], resolve);

const MemoNew = resolve => require(["@/pages/tool/memonew"], resolve);
const MemoList = resolve => require(["@/pages/tool/memolist"], resolve);
const Chart = resolve => require(["@/pages/tool/chart"], resolve);
const Loadmore = resolve => require(["@/pages/tool/loadmore"], resolve);
const MyInfo = resolve => require(["@/pages/mine/MyInfo"], resolve);

const login = resolve => require(["@/pages/mine/login"], resolve);

const register = resolve => require(["@/pages/mine/register"], resolve);

const test = resolve => require(["@/pages/test"], resolve);

const item = resolve => require(["@/pages/item"], resolve);

Vue.use(Router);

Router.prototype.go = () => {
  window.isBack = true;
  window.history.go(-1);
};

export default new Router({
  routes: [
    {
      path: "/main",
      component: Main
    },
    {
      path: "/",
      component: test
    },
    {
      path: "/item/:id",
      name: "item",
      component: item
    },
    {
      path: "/tool",
      component: Tool
    },
    {
      path: "/mine",
      component: Mine
    },
    {
      path: "/login",
      component: login
    },
    {
      path: "/register",
      component: register
    },
    {
      path: "/tool/memonew",
      component: MemoNew
    },
    {
      path: "/tool/memolist",
      component: MemoList
    },
    {
      path: "/tool/chart",
      component: Chart
    },
    {
      path: "/tool/loadmore",
      component: Loadmore
    },
    {
      path: "/mine/myinfo",
      component: MyInfo
    }
  ]
});

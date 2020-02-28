// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import MintUI from "mint-ui";
import store from "./store/index.js";
import echarts from "echarts";
import "mint-ui/lib/style.css";
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)
Vue.prototype.$echarts = echarts;
Vue.use(MintUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
if ("addEventListener" in document) {
  document.addEventListener(
    "deviceready",
    function() {
      // eslint-disable-next-line no-undef
      FastClick.attach(document.body);
      window.navigator.splashscreen.hide();
    },
    false
  );
}

new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App }
});

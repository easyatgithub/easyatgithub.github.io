import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$serverUrl = 'https://unidemo.dcloud.net.cn';
Vue.prototype.log = function(str){
	console.log(str)
}
Vue.prototype.nullKey = function(obj){
  var str = JSON.stringify(obj)
  if(!str||str.indexOf(':""')>0 || str.indexOf('null')>0){
	  return true;
  }
   return false;
}
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
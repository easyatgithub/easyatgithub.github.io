(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-linkList"],{5873:function(t,e,n){"use strict";n.r(e);var i=n("bd3a"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=s.a},"7dd3":function(t,e,n){"use strict";var i,s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"center"},[n("v-uni-view",{staticClass:"center-list"},[n("v-uni-text",{staticClass:"list-text"},[t._v(t._s(t.type))]),t._l(t.list,function(e,i){return n("v-uni-view",{key:i},[n("v-uni-view",{staticClass:"center-list-item border-bottom",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.deal(e)}}},[n("v-uni-text",{staticClass:"list-icon"},[t._v("")]),n("v-uni-text",{staticClass:"list-text"},[t._v(t._s(e.attributes.title))]),n("v-uni-text",{staticClass:"navigat-arrow"},[t._v("")])],1)],1)})],2)],1)},a=[];n.d(e,"b",function(){return s}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return i})},bd3a:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(n("f499")),a=i(n("238e")),u={data:function(){return{type:"已收藏",user:null,list:[],item:{link:"",title:"",desc:"",username:""}}},mounted:function(){},onLoad:function(t){this.init(),this.user?(this.getList(t.type),this.type="collected"==t.type?"已收藏":"已分享"):uni.showToast({title:"请先登陆",icon:"none"})},methods:{init:function(){var t=this,e=getApp().globalData.user;e?t.user=e:uni.getStorage({key:"user",success:function(e){t.user=e.data}})},getList:function(t){var e=this;"shared"===t?a.default.getMyLinks(this.user.username).then(function(t){e.list=t}):a.default.getCollects(this.user.username).then(function(t){e.list=t})},deal:function(t){"已分享"==this.type?t.id:t.attributes.linkID;uni.navigateTo({url:"./addLink?state="+_this.type+"&item="+(0,s.default)(t)})}}};e.default=u},bda8:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".list-text[data-v-956ca970]{padding-left:.3rem}",""])},db26:function(t,e,n){"use strict";var i=n("f6f8"),s=n.n(i);s.a},f362:function(t,e,n){"use strict";n.r(e);var i=n("7dd3"),s=n("5873");for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);n("db26");var u,r=n("f0c5"),c=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,"956ca970",null,!1,i["a"],u);e["default"]=c.exports},f6f8:function(t,e,n){var i=n("bda8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=n("4f06").default;s("8535105a",i,!0,{sourceMap:!1,shadowMode:!1})}}]);
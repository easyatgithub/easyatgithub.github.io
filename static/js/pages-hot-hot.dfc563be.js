(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-hot-hot"],{"0d69":function(t,e,i){"use strict";i.r(e);var n=i("5d5e"),a=i("c952");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("68d4");var r,o=i("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"5e048891",null,!1,n["a"],r);e["default"]=c.exports},"5d5e":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"index"},[i("v-uni-view",{staticClass:"grid"},t._l(t.list,function(e,n){return i("v-uni-view",{key:n,staticClass:"grid-c-06"},[i("v-uni-view",{staticClass:"panel",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetail(e)}}},[i("v-uni-view",{staticClass:"card-bottm row"},[i("v-uni-text",{staticClass:"card-title card-list2-title"},[t._v(t._s(e.attributes.title))]),i("v-uni-view",{staticClass:"card-share-view",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.share(e)}}})],1),i("v-uni-view",{staticClass:"card-bottm row"},[i("v-uni-view",{staticClass:"car-title-view row"},[i("v-uni-text",{staticClass:"card-title card-list2-title"},[t._v(t._s(e.attributes.title))])],1)],1)],1)],1)}),1),i("v-uni-text",{staticClass:"loadMore"},[t._v(t._s(t.loadTip))])],1)},s=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return s}),i.d(e,"a",function(){return n})},"68d4":function(t,e,i){"use strict";var n=i("f36c"),a=i.n(n);a.a},"99bf":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("f499"));i("6b54");var s=n(i("bb37")),r={data:function(){return{refreshing:!0,list:[],loadTip:"加载中...",fetchPageNum:1}},onLoad:function(){this.list=[],this.getData()},onPullDownRefresh:function(){},onReachBottom:function(){this.refreshing&&this.getData()},methods:{getData:function(){var t=this;0!=t.refreshing&&s.default.getLinkList(this.fetchPageNum).then(function(e){e.length<20&&(t.refreshing=!1,t.loadTip="没有更多了哦"),t.list=t.list.concat(e),t.fetchPageNum=t.fetchPageNum+1})},newGuid:function(){var t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return(t()+t()+"-"+t()+"-4"+t().substr(0,3)+"-"+t()+"-"+t()+t()+t()).toUpperCase()},goDetail:function(t){uni.navigateTo({url:"../detail/detail?data="+encodeURIComponent((0,a.default)(t))})},share:function(t){var e=this;if(0!==this.providerList.length){var i=this.providerList.map(function(t){return t.name});uni.showActionSheet({itemList:i,success:function(i){uni.share({provider:e.providerList[i.tapIndex].id,scene:e.providerList[i.tapIndex].type&&"WXSenceTimeline"===e.providerList[i.tapIndex].type?"WXSenceTimeline":"WXSceneSession",type:0,title:"uni-app模版",summary:t.title,imageUrl:t.img_src,href:"https://uniapp.dcloud.io",success:function(t){console.log("success:"+(0,a.default)(t))},fail:function(t){uni.showModal({content:t.errMsg,showCancel:!1})}})}})}else uni.showModal({title:"当前环境无分享渠道!",showCancel:!1})}}};e.default=r},c952:function(t,e,i){"use strict";i.r(e);var n=i("99bf"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},e015:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".grid[data-v-5e048891]{padding-top:10px}",""])},f36c:function(t,e,i){var n=i("e015");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("34180c26",n,!0,{sourceMap:!1,shadowMode:!1})}}]);
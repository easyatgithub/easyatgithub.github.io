<template>
	<view class="center">
		 <view class="center-list">
			<text class="list-text">已分享</text>
		 	<view class="center-list-item border-bottom">
		 		<text class="list-icon">&#xe60b;</text>
		 		<text class="list-text">管理</text>
		 		<text class="navigat-arrow">&#xe65e;</text>
		 	</view>
		 	<view class="center-list-item" @click='deal({"1":"111"},"share")'>
		 		<text class="list-icon">&#xe61a;</text>
		 		<text class="list-text">新增</text>
		 		<text class="navigat-arrow">&#xe65e;</text>
		 	</view>
		 </view>
		 
		 <view class="center-list">
		 	<text class="list-text">已收藏</text>
		 	<view class="center-list-item border-bottom" @click='deal({"1":"111"},"collect")'>
		 		<text class="list-icon">&#xe60b;</text>
		 		<text class="list-text">管理</text>
		 		<text class="navigat-arrow">&#xe65e;</text>
		 	</view>
		 	<view class="center-list-item" @click="goAddLink">
		 		<text class="list-icon">&#xe61a;</text>
		 		<text class="list-text">新增</text>
		 		<text class="navigat-arrow">&#xe65e;</text>
		 	</view>
		 </view>
	</view>
</template>

<script>
	import api from '../../api/api.js' 
	
	export default {
		data() {
			return {
				item:{
					link:"",
					title:"",
					desc :"",
					username:"",
				} 
			}
		},
		mounted() {
			 
		},
		created() {
			 this.init()
		  },
		   onShow: function() {  
		             
		    },  
		methods: {
			init(){
				api.getMyLinks() .then(function(data){
					   console.log("getMyLinks",data)
				}) 
			},  
			deal(item,state) { 
				console.log("deal",state)
				getApp().globalData.linkState = state
			  uni.navigateTo({url:'./addLink?item='+  JSON.stringify(item)}) 
			}
		}
	}
</script>

<style>
</style>

<template>
	<view class="center">
		  
		 
		 <view class="center-list">
		 	<text class="list-text">{{ type }}</text>
			<view v-for="(item,index) in list" :key="index">
				<view class="center-list-item border-bottom" @click='deal(item)'>
					<text class="list-icon">&#xe60b;</text>
					<text class="list-text">{{item.attributes.title}}</text>
					<text class="navigat-arrow">&#xe65e;</text>
				</view> 
		   </view> 	
		 </view>
	</view>
</template>

<script>
	import api from '../../api/api.js' 
	
	export default {
		data() {
			return {
				type:"已收藏",
				user:null,
				list:[],
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
		onLoad(e) {     
			this.init() 
			if(!this.user){ uni.showToast({ title: '请先登陆',icon: 'none' }); return;}
			this.getList(e.type)
			this.type =  e.type == "collected" ?"已收藏":"已分享"	   	   
		},  
		methods: {
			init(){
				 var _this = this;
				 var user = getApp().globalData.user  
				 if(user){ _this.user =user;return; } 
				 uni.getStorage({key:"user",success(e){  _this.user =e.data;}})
			},  
			getList(type){ 
				var _this = this;
				if(type === "shared"){
					api.getMyLinks(this.user.username) .then(function(data){
						    _this.list = data; 
					}) 
				}else{
					api.getCollects(this.user.username) .then(function(data){
						   _this.list = data; 
					}) 
				}
			},
			deal(item) {
				var id = this.type  == "已分享"? item.id:item.attributes.linkID
				uni.navigateTo({url:'./addLink?state='+_this.type +'&item='+  JSON.stringify(item)}) 
				// api.selectLinkById(id).then(function(data){})  
			}
		}
	}
</script>

<style>
	.list-text{
		padding-left: 0.3rem;
	}
</style>

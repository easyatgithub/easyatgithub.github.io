<template>
	<view class="center">
		 
		 <view class="center-list">
		 	
			<text class="list-text"   @click="navito(item.link)">{{item.title}}</text>
			<text class="list-text"   >{{item.desc}}</text>
			<text class="list-text"   >{{item.collect}}个收藏</text>
			<text class="  collect" @click="collect" >{{state}}</text>
		 </view>
	</view>
</template>

<script>
	import api from '../../api/api.js' 
	
	export default {
		data() {
			return {
				state:"收藏",
				item:{
					link:"",
					title:"",
					desc :"",
					username:"",
				},
				curCollect:{
					linkID:"",
					link:"",
					title:"",
					username:"",
					state:1,
				}
			}
		},
		mounted() {
			 
		},
		onLoad(e){
			let data = JSON.parse(decodeURIComponent(e.data));			 
			this.item = data
			uni.setNavigationBarTitle({ title:data.title });
			this.curCollect.linkID = data.objectId
			this.curCollect.link = data.link
			this.curCollect.title = data.title
			this.curCollect.desc = data.desc
		},
		created() {
			 this.init()
		},
		onShow() {  
		     this.init()
		},  
		methods: {
			init(){
				var _this = this; 
				var user = getApp().globalData.user;
                if(user){ _this.user =user;return; } 
				uni.getStorage({key:"user",success(e){  _this.user =e.data;}})
			}, 
			navito(url){
			 window.location.href = url;	
			},
			collect() { 
				var _this = this; 
				 if(this.nullKey(this.item)) {return;}
				 if(this.nullKey( this.user)) { uni.showToast({ title: '请先登陆',icon: 'none' }); return; }
				 this.curCollect.username =this.user.username;
				 if(_this.state == "已收藏"  ) return;
				 api.saveCollect(this.curCollect).then(function(data){
					 _this.state = "已收藏";
					 _this.item.collect = _this.item.collect +1;
					 api.addValue('links',_this.curCollect.linkID,"collect",1).then(function(data){
					 },function(error) {
					   console.log(error);  
					 }) 
				  },function(error) {
				   console.log(error);  
				   uni.showToast({ title: '失败:' +error ,icon: 'none' })
				 }) 
			},
			deal(item,state) { 
			    uni.navigateTo({url:'./addLink?item='+  JSON.stringify(item)}) 
			}
		}
	}
</script>

<style>
	.list-text{
		padding-left: 1rem;
	}
	.center-list{
		padding-bottom: 1rem;
	}
	.collect{
		margin-left:70% ;
		padding-left: 0.7rem;
		display: inline-block;
		border-radius: 0.5rem;
		border: 0.1rem solid #DDDDDD;
		width: 4rem;
	}
	
</style>

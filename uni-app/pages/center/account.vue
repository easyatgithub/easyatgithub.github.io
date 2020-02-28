<template>
	<view class="center">
		<view class="center-list">
			<view class="center-list-item border-bottom" @click="goClear">
				<text class="list-icon">&#xe603;</text>
				<text class="list-text">退出登陆</text>
			</view>
		</view>
	</view>
</template>

<script>
	import api from '../../api/api.js' 
	
	export default {
		data() {
			return {
				login: false,
				avatarUrl: '/static/logo.png',
				uerInfo: {}
			}
		},
		mounted() {
			this.init()
		},
		created() {
			 this.init()
		  },
		   onShow: function() {  
		              console.log('App Show')  
					  this.init()
		    },  
		methods: {
			init(){
				var _this = this;
				var user = getApp().globalData.user 
				if(user){ _this.login = true; _this.uerInfo =user;return;} 
				uni.getStorage({key:"user",success(e){ _this.login = true; _this.uerInfo =e.data;},fail(e){},})
				
			},
			goLogin() {
				if (!this.login) { uni.navigateTo({ url: '/pages/login/login'});}
			},
			goClear() { 
				 getApp().globalData.user = null;
				 uni.clearStorage();
			     uni.navigateBack();  
				 location.reload()
			}
		}
	}
</script>

<style>
</style>

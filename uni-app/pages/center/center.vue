<template>
	<view class="center">
		<view class="logo" @click="goLogin" :hover-class="!login ? 'logo-hover' : ''">
			<image class="logo-img" :src="login ? uerInfo.avatarUrl :avatarUrl"></image>
			<view class="logo-title">
				<text class="uer-name">Hi，{{login ? uerInfo.username : '您未登录'}}</text>
				<text class="go-login navigat-arrow" v-if="!login">&#xe65e;</text>
			</view>
		</view>
		 
		<view class="center-list">
			<view class="center-list-item border-bottom" @click="go('/pages/center/linkList?type=shared')">
				<text class="list-icon">&#xe60b;</text>
				<text class="list-text">已分享</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			
			<view class="center-list-item border-bottom" @click="go('/pages/center/linkList?type=collected')">
				<text class="list-icon">&#xe60b;</text>
				<text class="list-text">已收藏</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			
			<view class="center-list-item" @click="go('/pages/center/addLink')">
				<text class="list-icon">&#xe61a;</text>
				<text class="list-text">新增</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom" @click="go('/pages/about/about')">
				<text class="list-icon">&#xe603;</text>
				<text class="list-text">关于</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item" @click="go('/pages/center/account')">
				<text class="list-icon">&#xe609;</text>
				<text class="list-text">账号管理</text>
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
				login: false,
				avatarUrl: '/static/logo.png',
				uerInfo: {}
			}
		},
		mounted() {
			 this.init();
		},
		created() {
			 this.init();
		},
		onShow: function() {  
		     this.init();
		},  
		methods: {
			init(){
				var _this = this;
				var user = getApp().globalData.user 
				if(user){ _this.login = true; _this.uerInfo =user; return;} 
				uni.getStorage({key:"user",success(e){_this.login = true;_this.uerInfo =e.data;},fail(e){},})
			},
			goLogin() {
				if (!this.login) { uni.navigateTo({ url: '/pages/login/login' });}
			},
			go(url){
				uni.navigateTo({ url: url });
			},
		}
	}
</script>

<style>
</style>

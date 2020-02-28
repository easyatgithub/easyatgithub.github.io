<template>
	<form class='loginView' @submit="login">
		<view class="input-view">
			<view class="label-view">
				<text class="label">账号 </text>
			</view>
			<input class="input"  v-model="user.name"   type="text" placeholder="请输入用户名" name="nameValue" />
		</view>
	 
		<view class="input-view">
			<view class="label-view">
				<text class="label">密码</text>
			</view>
			<input class="input"    v-model="user.password"   type="password" placeholder="请输入密码" name="passwordValue" />
			<view class="label-view" style="width: 120px;">
				<button @click='forgetPassword' size="mini" style="font-size: 12px;">忘记密码</button>
			</view>
		
		</view>
		<view class="button-view">
			<button type="default" class="login" hover-class="hover" formType="submit">登录</button>
			<button type="default" class="register" hover-class="hover" @click="register">免费注册</button>
		</view>
	</form>
</template>

<script>
	import api from '../../api/api.js'
	export default {
		data() {
			return {
				user:{
					name:"",
					password:"",
					email:"",
				},
			};
		},
		methods: {
			login(e) {
				 
				api.login({
					name:  e.detail.value.nameValue,
					password: e.detail.value.passwordValue
				}).then(function(data){
					console.log("signUp",data)	
					getApp().globalData.user = data.attributes 
					var user = getApp().globalData.user
					console.log(1,user)
					uni.setStorage({key:"user",data:data.attributes})	
					
					   uni.switchTab({
					   	url: '/pages/center/center'
					   }); 
				})
			},
			register() {
				uni.navigateTo({
					url: '/pages/login/sign'
				});
			}
		}
	}
</script>

<style>
	
</style>

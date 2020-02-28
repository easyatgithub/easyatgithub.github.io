<template>
	<form class='loginView' @submit="sign">
		<view class="input-view">
			<view class="label-view">
				<text class="label">账号 </text>
			</view>
			<input class="input" v-model="user.name"    maxlength="11"  type="text" placeholder="请输入用户名" name="nameValue" />
		</view>
		<view class="input-view">
			<view class="label-view">
				<text class="label">密码</text>
			</view>
			<input class="input"  v-model="user.password"   maxlength="11" type="password" placeholder="请输入密码"  />
			
		</view>
		<view class="input-view">
			<view class="label-view">
				<text class="label">邮箱</text>
			</view>
			<input class="input" v-model="user.email"   placeholder="请输入邮箱号"   />
			
		</view>
		<!--- 
		<view class="input-view">
			<view class="label-view">
				<text class="label">验证</text>
			</view>
			<input class="input" maxlength="6" type="password" placeholder="请输入验证码" name="mobileCode" />
			<view class="label-view" style="width: 120px;">
				<button @click='send' size="mini" style="font-size: 12px;">{{content}}</button>
			</view>
		</view>
		-->
		<view class="button-view">
			<button type="default" class="login" hover-class="hover" formType="submit">注册</button>
			<button type="default" class="register" hover-class="hover" @click="login">已有账户</button>
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
				content:'发送验证码',
				      totaltime:60,
				      clickCancle:true 
			};
		},
		methods: {
			login(e) {
				uni.navigateTo({
					url: '/pages/login/login'
				});
			},
			 send() {
			      if(!this.clickCancle) return;
			      this.clickCancle=false;
			      this.content=this.totaltime+'s后重新发送';
			      var m=setInterval(()=>{
			        console.log(this.totaltime);
			        this.totaltime--;
			        this.content=this.totaltime+'s后重新发送';
			         if(this.totaltime==0){
			            clearInterval(m);
			            this.content='发送验证码';
			            this.totaltime=60;
			            this.clickCancle=true
			      }
			      },1000);
			 },
			sign() {
				console.log("前往注册页面",this.user)
				if(this.nullKey(this.user)) {
					return;
				}
				api.signUp(this.user).then(function(data){
					console.log("signUp",data)
					uni.showToast({
						title: '注册成功,验证邮箱后登陆',
						icon: 'none',
					})
				 },function(error) {
                  console.log(error);  
  	              uni.showToast({
  	              	title: '失败:' +error ,
  	              	icon: 'none',
  	              })
	           }) 
			}
		}
	}
</script>

<style>
	
</style>

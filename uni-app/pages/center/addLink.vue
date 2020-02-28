<template>
	<view class="center">
		<view class="center-list">
		 <form class='loginView'>
		 	<view class="input-view">
		 		<view class="label-view">
		 			<text class="label">链接</text>
		 		</view>
		 		<input class="input"  v-model="item.link" type="text" placeholder="请输入链接" name="nameValue" />
		 	</view>
			<view class="input-view">
				<view class="label-view">
					<text class="label">标题</text>
				</view> 
				<input class="input"   v-model="item.title" type="text" placeholder="请输入标题" name="nameValue" />
			</view>
		  
		 	<view class="input-view">
		 		<view class="label-view">
		 			<text class="label">描述</text>
		 		</view>
				<textarea 
				 v-model="item.desc"
				@blur="bindTextAreaBlur"
				placeholder-style="color:#F76260"
				placeholder="简单描述一下"
				 rows="10"
				 >
				 </textarea>
		 	</view>
				 
		 	<view class="button-view">
		 		<button type="default" class="login" hover-class="hover" @click="dealLink">{{opearte}}</button>
		 	</view>
			<view class="button-view">
				 <p v-if="opearte =='更新'">
				   <button type="default"  hover-class="hover" @click="doDeleteLink">删除</button>
				 </p>
			</view>
		 </form>
		</view>
	</view>
</template>

<script>
	import api from '../../api/api.js' 
	
	export default {
		data() {
			return {
				opearte :"保存", 
				linkState:"new", /*new 新状态 share 分享 collect 收藏 */
				user:{},
				item:{
					link:"",
					title:"",
					collect:0,
					state:1,     /* 不能进行物理删除 只能进行状态删除 */
					desc :"",
					username:"",
				} 
			}
		},
		onLoad(options) {
		            // console.log("onload",options)
					var linkState = getApp().globalData.linkState 
					 this.linkState = linkState;
					 var user = getApp().globalData.user
				     console.log("链接页面 加载时 传入参数",options) 
					 if(!options.state )  return;				 
					var item = JSON.parse(options.item);   
					this.item = item;
					if(options.state === '已分享'){
						this.opearte = "更新";
					}else if(options.state === '已收藏'){ 
						this.opearte = "取消收藏";
					}else{ 
						this.opearte = "保存";	
					}
		        },
		mounted() {
			 
		},
		created() {
			 
		  },
		   onShow: function() {   
			 this.init()
		    },  
		methods: {
			init(){
				var _this = this; 
				var user = getApp().globalData.user  
                if(user){ _this.user =user; return;}  
				uni.getStorage({key:"user",success(e){ _this.user =e.data;  },fail(e){ console.log("getStorage",e);},})
			},
			dealLink() {
				console.log("goSaveLink",this.item)
				this.item.username = this.user.username;
				if(this.nullKey( this.user)) { uni.showToast({ title: '请先登陆',icon: 'none' });return;}
				if(this.nullKey(this.item)) { return;}
				if(this.opearte == "保存"){
					this.doSaveLink()
				}else if(this.opearte == "更新"){
					this.doUpdateLink()
				}else{
					console.log("取消收藏bug 在哪里",this.opearte,this.item)
					this.doCancleCollect()
				}
				
				
			},
			doCancleCollect(){ 
		        var _this = this; 
				api.doCancleCollect("collect", this.item,).then(function(data){
				   console.log("doCancleCollect",data) 
				   api.selectLinkById(_this.item.linkID).then(function(data){
						var newData = { collect :data.attributes.collect -1 }			 
					   api.updateObj("links",_this.item.linkID,newData).then(function(data){ 
						   uni.showToast({ title: '已取消收藏', icon: 'none', }) 
					   })       				 
				   })
				},function(error) {
				   console.log(error);   
				}) 
			},
			doUpdateLink(){
				var objectId = this.item.objectId;
				delete  this.item['objectId'];
				delete  this.item['createdAt'];
				delete  this.item['updatedAt'];
				api.updateObj('links',objectId,this.item).then(function(data){
				   uni.showToast({ title: '更新成功', icon: 'none', }); 
				},function(error) {
				   console.log(error);   
				}) 
			},
			 doSaveLink(){
				 api.doSaveLink(this.item).then(function(data){
				 	 console.log("signUp",data)
				 	 uni.showToast({ title: '添加成功', icon: 'none', });
				 },function(error) {
				    console.log(error);  
					uni.showToast({ title: '失败'+error , icon: 'none', });
				 }) 
			 },
			 doDeleteLink(){
				  console.log("删除对象",this.item);  
			 	  api.doDeleteLink(this.item.objectId);
				  uni.showToast({ title: '删除成功', icon: 'none', })
				  uni.navigateBack();
			 },
			 bindTextAreaBlur(e) { 
			 }, 
		}
	}
</script>

<style>
</style>

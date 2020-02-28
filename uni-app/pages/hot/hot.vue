<template>
	<view class="index">
		<view class="grid">
			<view class="grid-c-06" v-for="(item,index) in list" :key="index">
				<view class="panel" @click="goDetail(item)">
					
					<view class="card-bottm row">
						<text class="card-title card-list2-title">{{item.attributes.title}}</text>
						<view @click.stop="share(item)" class="card-share-view"></view>
					</view>
					<view class="card-bottm row">
						<view class="car-title-view row">
							<text class="card-title card-list2-title">{{item.attributes.title}}</text>
						</view>
						
					</view>
				</view>
			</view>
		</view>
		<text class="loadMore">{{ loadTip}}</text>
	</view>
</template>

<script>
	import api from '../../api/api.js'
	export default {
		data() {
			return {
				refreshing: true,
				list: [],
				loadTip:"加载中...",
				fetchPageNum: 1
			}
		},
		onLoad() {
			this.list= [];
			this.getData(); 
		},
		onPullDownRefresh() { 
		},
		onReachBottom() {
			  if(this.refreshing ){ this.getData(); }
		},
		methods: {
			getData() {
				 var _this = this;
				  if(_this.refreshing ==false){return;}
				  api.getLinkList(this.fetchPageNum).then(function(data){
				  	  if(data.length < 20){
				  		 _this.refreshing =false
				  		 _this.loadTip = "没有更多了哦"
				 	  } 
				        _this.list = _this.list.concat(data);
				  		_this.fetchPageNum =_this.fetchPageNum+1
				  })
			},
			newGuid() {
				let s4 = function() {
					return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
				}
				return (s4() + s4() + "-" + s4() + "-4" + s4().substr(0, 3) + "-" + s4() + "-" + s4() + s4() + s4()).toUpperCase();
			},
			goDetail(e) {
				uni.navigateTo({
					url: '../detail/detail?data=' + encodeURIComponent(JSON.stringify(e))
				})
			},
			share(e) {
				if (this.providerList.length === 0) {
					uni.showModal({ title: '当前环境无分享渠道!', showCancel: false });
					return;
				}
				let itemList = this.providerList.map(function(value) {
					return value.name
				})
				uni.showActionSheet({
					itemList: itemList,
					success: (res) => {
						uni.share({
							provider: this.providerList[res.tapIndex].id,
							scene: this.providerList[res.tapIndex].type && this.providerList[res.tapIndex].type === 'WXSenceTimeline' ?
								'WXSenceTimeline' : 'WXSceneSession',
							type: 0,
							title: 'uni-app模版',
							summary: e.title,
							imageUrl: e.img_src,
							href: 'https://uniapp.dcloud.io',
							success: (res) => {
								console.log('success:' + JSON.stringify(res));
							},
							fail: (e) => {
								uni.showModal({
									content: e.errMsg,
									showCancel: false
								})
							}
						});
					}
				})
			}
		}
	}
</script>

<style>
	.grid{
		padding-top: 10px;
	}
</style>

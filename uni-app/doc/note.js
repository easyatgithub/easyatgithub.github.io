存
uni.setStorage({key:"user",data:data})	
取
uni.getStorage({key:"",success(e){}})
uni.getStorage({key:"user",success(e){
      console.log("getStorage",e)
},fail(e){
      console.log("getStorage",e)
},})
配合全局数据与缓存 						  
						  

分类页面切掉
{ "pagePath": "pages/tag/tag", "iconPath": "static/tag-0.png","selectedIconPath": "static/tag-1.png", "text": "分类"},


{
			"path": "pages/detail/detail",
			"style": {
				"navigationBarTitleText": "详情",
				"navigationBarBackgroundColor": "#000000",
				"backgroundColor": "#000000",
				"app-plus": {
					"bounce": "none",
					"titleNView": {
						"buttons": [{
							"type": "share"
						}]
					}
				},
				"h5": {
					"titleNView": {
						"buttons": [{
							"type": "favorite"
						}]
					}
				}
			}
		},
		
		uni.showToast({ title: '请先登陆',icon: 'none' });
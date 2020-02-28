import leancloudTool from './leancloudTool.js'

export const product = {
  login(user) { 
    return new Promise(function(resolve, reject) {
       leancloudTool.login(user).then(function(data){
              resolve(data);
        }) 
    });
  },
  signUp(user) {
    return new Promise(function(resolve, reject) {
       leancloudTool.signUp(user).then(function(data){
             resolve(data);
        },function(error) {
             console.log(error); // Stacktrace
			 console.log(error.message); // Stacktrace
  	         reject(error.message)
	    }) 
    });
  },
  doSaveLink(item) {
    return new Promise(function(resolve, reject) {
       leancloudTool.createObj("links",item).then(function(data){
             console.log(data)
             resolve(data);
        },function(error) {
             console.log(error); // Stacktrace
  			 console.log(error.message); // Stacktrace
  	         reject(error.message)
  	    }) 
    });
  },
  updateObj(table,id,item) {
    return new Promise(function(resolve, reject) {
  		console.log(item)
       leancloudTool.updateObj(table,id,item).then(function(data){
             console.log(data)
             resolve(data);
        },function(error) {
             console.log(error); // Stacktrace
  			 console.log(error.message); // Stacktrace
  	         reject(error.message)
  	    }) 
    });
  },
  doCancleCollect(item){
	 return new Promise(function(resolve, reject) {
	 	var newState ={
			state:0
		}
		console.log(item)
	    leancloudTool.updateObj('collect',item.objectId,newState).then(function(data){
	          resolve(data);
	     },function(error) {
	          reject(error.message)
	     }) 
	 }); 
  },
 
  doDeleteLink(id) {
	    leancloudTool.delObj("links",id)
  },
  getLinkList(page) {
    return new Promise(function(resolve, reject) {
       leancloudTool.search("links",(page -1) *20).then(function(data){
             resolve(data);
        },function(error) {
  	         reject(error.message)
  	    }) 
    });
  },
  
  getMyLinks(page) {
    return new Promise(function(resolve, reject) {
       leancloudTool.search("links",page).then(function(data){
             resolve(data);
        },function(error) {
  	         reject(error.message)
  	    }) 
    });
  },
  getCollects(page) {
    return new Promise(function(resolve, reject) {
       leancloudTool.search("collect",page,20,"state",1).then(function(data){
             resolve(data);
        },function(error) {
  	         reject(error.message)
  	    }) 
    });
  },
  
  saveCollect(item) {
    return new Promise(function(resolve, reject) {
       leancloudTool.createObj("collect",item).then(function(data){
             resolve(data);
        },function(error) { 
  	         reject(error.message)
  	    }) 
    });
  },
  
  selectLinkById(id) {
    return new Promise(function(resolve, reject) {
       leancloudTool.searchById("links",id).then(function(data){
             resolve(data);
        },function(error) {
  	         reject(error.message)
  	    }) 
    });
  },
  addValue(table,id,key,value) {
    return new Promise(function(resolve, reject) {
       leancloudTool.addValue(table,id,key,value).then(function(data){
             resolve(data);
        },function(error) {
  	         reject(error.message)
  	    }) 
    });
  },
  
 
};
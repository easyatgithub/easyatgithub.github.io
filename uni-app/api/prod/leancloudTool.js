import AV from './leanCloud.js'
  var leancloudTool = {
    init() { 
    },
    async test() {
       
    },
    async search2(name) {
      var query = new AV.Query(name);
      return new Promise(function (resolve, reject) {
        query.find().then(function (data) {
          resolve(data);
        })
      });
    },
    /* 用户相关 */
    signIn(user) {
      var obj = new AV.User();
      obj.setUsername(user.name);
      obj.setPassword(user.password);
      return obj.signUp();
    },
    signUp(pageUser) {
	console.log("signUp",pageUser)	
	   var user = new AV.User();
	     user.setUsername(pageUser.name);
	     user.setPassword(pageUser.password);
	     user.setEmail(pageUser.email); 
	   return user.signUp();
    },
	login(user) {
		console.log(user)
	  return AV.User.logIn(user.name, user.password)
	},
    /* 统一封装的函数共用 */
    createObj(table, data) {
      var Obj = AV.Object.extend(table);
      var obj = new Obj();
      for (var key in data) {
        obj.set(key, data[key]);
      }
      return obj.save();
    },
	/*  这个找不到对象会新增加一笔 */
    updateObj(table, id, data) {
      var obj = AV.Object.createWithoutData(table, id);
      for (var key in data) {
        obj.set(key, data[key]);
      }
      return obj.save();
    },
 

    search(table,skip,limit,key,value) {
      skip = skip || 0;
      limit = limit || 20;
      var query = new AV.Query(table);
      query.skip(skip); // 第一次跳过0 个 第二次跳过 skip = (i -1) *10个  
      query.limit(limit); // 默认值100
	  if(key){
		  query.equalTo(key, value);
	  }
	  query.addAscending('id');
	  query.addDescending('createdAt');
      return query.find();
    },
	searchByValue(table,key,value) {
	  var query = new AV.Query(table);
	  query.equalTo(key, value);
	  return query.find();
	},
	searchById(table,id) {
	  var query = new AV.Query(table);
	  return query.get(id);
	},
	addValue(table,id,key,value) {
	  var obj = new AV.Query(table);
	  var obj = AV.Object.createWithoutData(table, id);
	  console.log(obj)
	  obj.increment(key, value);
	  
	  return obj.save();
	},
	 
    delObj(table, id) {
      var obj = AV.Object.createWithoutData(table, id);
      return obj.destroy();
    },

  }
  export default leancloudTool;
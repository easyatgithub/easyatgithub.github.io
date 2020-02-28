import { data } from "./data.js";
export const dev = {
  login() {
    console.log(data);
    return new Promise(function(resolve, reject) {
      //resolve({ success: true });
      // setTimeout(resolve, 100, { success: true });
      resolve(data.login);
    });
  },
  getMyInfo() {
    return new Promise(function(resolve, reject) {
      resolve(data.getMyInfo);
    });
  },
  getRecentUsers() {
    return new Promise(function(resolve, reject) {
      resolve(data.recentUsers);
    });
  },
  getMyLinks( ) {
    return new Promise(function(resolve, reject) {
      resolve({
		  shared:data.linkList,
		  collected:data.linkList
	  });
    });
  },
  getLinkList(page) {
    return new Promise(function(resolve, reject) {
      resolve(data.linkList);
    });
  }
};

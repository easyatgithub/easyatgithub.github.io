import { data } from "@/api/data.js";
export const dev = {
  login() {
    console.log(data);
    return new Promise(function(resolve, reject) {
      //resolve({ success: true });
      // setTimeout(resolve, 100, { success: true });
      resolve(data);
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

  ssqList() {
    return new Promise(function(resolve, reject) {
      resolve(data.ssqList);
    });
  }
};

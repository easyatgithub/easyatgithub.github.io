<template>
  <div>
    列表区域
    <div class="list">
      <div class="line">
        <div class="user">user</div>
        <div class="userRight">
          <div class="rightTitle">wechat</div>
          <div class="rightTitle">
            <a :href="goToHref()" target="_blank">wechat</a>
          </div>
          <div class="rightDesc" @click="shoWPop">
            1
          </div>
        </div>
      </div>

      <div class="line">
        <div class="user">user</div>
        <div class="userRight">
          <div class="rightTitle">wechat</div>
          <div class="rightTitle">
            <a href="http://qq.com" target="_blank">wechat</a>
          </div>
          <div class="rightDesc">
            DCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCESCS
          </div>
        </div>
      </div>
    </div>

    单独区域
    <mt-popup
      v-model="showPop"
      position="bottom"
      popup-transition="popup-fade"
      closeOnClickModal="true"
    >
      <div class="pin">
        <div class="pincontent">
          <input
            type="button"
            style="float:right"
            value="关闭"
            v-on:click="closePop"
          />
          <mt-field
            label="相关介绍"
            placeholder="请输入自我介绍(100字以内)"
            v-model="item.desc"
            type="textarea"
            rows="8"
          ></mt-field>
        </div>
      </div>
    </mt-popup>
  </div>
</template>
<style>
.mint-popup {
  width: 100%;
  height: 50%;
  background-color: #fff;
}
.list {
  display: flex;
  flex-direction: column;
}
.line,
.user {
  display: flex;
  margin: 5px;
}
.rightDesc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 300px;
}
</style>

<script>
import { api } from "@/api/index.js";
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5],
      item: {
        desc: "1111111111111111"
      },
      link: "http://qq.com",
      showPop: true,
      clickfalse: true
    };
  },
  mounted() {},
  watch: {},
  created() {
    this.getRecentUsers();
    if (this.$store.state.footerVisible) {
      this.$store.commit("TOGGLE_FOOTER");
    }
  },
  methods: {
    goToHref: function(val) {
      return "http://baidu.com?goodsId=" + val;
    },
    shoWPop() {
      this.showPop = true;
    },
    closePop() {
      this.showPop = false;
    },
    getRecentUsers() {
      api.getRecentUsers({}).then(res => {
        console.log("MYINFO", res);
        this.my = res;
      });
    }
  }
};
</script>

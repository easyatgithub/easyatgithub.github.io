<template>
  <div class="my-info">
    <mt-header fixed title="我的个人信息" style="height: 64px;">
      <router-link to="/mine" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <div class="content">
      <mt-field
        label="用户名"
        placeholder="请输入用户名"
        v-model="my.name"
      ></mt-field>
      <mt-field
        label="微信"
        placeholder="请输入微信"
        v-model="my.wechat"
      ></mt-field>
      <mt-field
        label="网址"
        placeholder="请输入网址"
        v-model="my.website"
      ></mt-field>
      <mt-field
        label="自我介绍"
        placeholder="请输入自我介绍(100字以内)"
        v-model="my.desc"
        type="textarea"
        rows="4"
        :attr="{ maxlength: 100 }"
      ></mt-field>

      <mt-button type="primary">更新</mt-button>
    </div>
  </div>
</template>

<script>
import { api } from "@/api/index.js";
export default {
  data() {
    return {
      my: {
        name: "周三",
        tel: "18866668888"
      }
    };
  },
  methods: {
    getUser() {
      api.getMyInfo({}).then(res => {
        console.log("MYINFO", res);
        this.my = res;
      });
    }
  },
  mounted() {
    this.getUser();
  },
  created() {
    if (this.$store.state.footerVisible) {
      this.$store.commit("TOGGLE_FOOTER");
    }
  }
};
</script>

<style scoped>
.content {
  margin-top: 64px;
  margin-left: 15px;
  margin-right: 15px;
}

.mint-cell {
  min-height: 40px;
}
span {
  font-size: 13px;
}
</style>

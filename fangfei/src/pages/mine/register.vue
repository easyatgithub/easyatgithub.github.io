<template>
  <div class="register">
    <mt-field
      placeholder="用户名"
      v-model="username"
      class="kuan"
    ></mt-field>
    <mt-field
      placeholder="密码"
      type="password"
      v-model="password"
      class="kuan"
    ></mt-field>
    <mt-field
      placeholder="确认密码"
      type="password"
      v-model="secondPassword"
      class="kuan"
    ></mt-field>
    <div></div>
    <mt-button
      type="primary"
      class="bit-login"
      @click="sendRegister"
    >注册</mt-button>

    <router-link
      to="/login"
      class="register"
    >立即登录</router-link>
  </div>
</template>

<script> 
export default {
  data() {
    return {
      username: "",
      password: "",
      mobile: "",
      vCode: "",
      secondPassword: "",
      radioVal: ["我同意《会员服务协议》"]
    }
  },
  mounted() {
    this.$store.state.title = "注册"
  },
  methods: {
    sendRegister() {
      if (this.password !== this.secondPassword) {
        this.$toast({
          message: "两次密码不一样",
          position: "top",
          duration: 2000
        })
        return false
      }
      register({
        username: this.username,
        password: this.password,
        mobile: this.mobile,
        vCode: this.vCode
      }).then(res => {
        console.log(res)
        if (res.error) {
          this.$toast({
            message: res.message,
            position: "top",
            duration: 2000
          })
        } else {
          this.$toast({
            message: "注册成功",
            position: "top",
            duration: 2000
          })
          this.$router.push({ path: "/login" })
        }
      })
    },
    getvCode() {}
  }
}
</script>

<style   scoped>
.kuan {
  border: 1px solid #ccc;
  margin-bottom: 10px;
  border-radius: 5px;
  min-height: 40px;
}
.bit-login {
  width: 100%;
  margin-top: 25px;
}
.register {
  color: #0094ff;
  font-size: 14px;
  margin-top: 15px;
  padding: 5px 2px;
}
</style>

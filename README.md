 <template>
  <div>
    1
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
<script>
import { api } from "@/api/index.js";
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5],
      item: {
        desc: "1111111111111111"
      },
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
<style>
.mint-popup {
  width: 100%;
  height: 50%;
  background-color: #fff;
}
</style>

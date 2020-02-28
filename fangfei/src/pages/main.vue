<template>
  <div id="index">
    <mt-header
      fixed
      title="首页"
      style="height: 64px;"
    ></mt-header>
    <div class="content">
      <mt-cell-swipe
        :right="right"
        title="未读通知"
      >
        <span>
          <mt-badge type="error">10</mt-badge>
        </span>
      </mt-cell-swipe>
      <waterfall
        :col="col"
        :width="itemWidth"
        :gutterWidth="gutterWidth"
        :data="data"
        @loadmore="loadmore"
        @scroll="scroll"
      >
        <template>
          <div
            class="cell-item"
            v-for="(item, index) in data"
          >
            <img
              v-if="item.img"
              :src="item.img"
              alt="加载错误"
            />
            <div class="item-body">
              {{ item.title }}
              <div class="item-footer">
                <div class="name">{{ item.user }}</div>
              </div>
            </div>
          </div>
        </template>
      </waterfall>
    </div>
  </div>
</template>

<style scoped>
.content {
  margin-top: 64px;
}
</style>

<script>
import { Toast } from "mint-ui"

export default {
  data() {
    return {
      right: [
        {
          content: "删除",
          style: {
            background: "red",
            color: "#fff",
            width: "50px",
            textAlign: "center"
          },
          handler: () =>
            this.$messagebox({
              title: "提示",
              message: "确定执行此操作?",
              showCancelButton: true
            }).then(action => {
              if (action === "confirm") {
                Toast({ message: "删除成功" })
              } else {
              }
            })
        }
      ]
    }
  },
  computed: {
    itemWidth() {
      return document.documentElement.clientWidth * 0.44
    },
    gutterWidth() {
      return 9 * 0.5 * (document.documentElement.clientWidth / 375)
    }
  },
  created() {
    let _footer = this.$store.state.footerVisible
    if (!_footer) {
      this.$store.commit("TOGGLE_FOOTER")
    }
    this.$store.commit("SELECT_TAB", "main")
  }
}
</script>

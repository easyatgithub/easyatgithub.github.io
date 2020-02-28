<template>
  <div>
    列表区域
    <div class="list">
      <waterfall
        :col="2"
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
<style>
.list {
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 100px;
}
</style>

<script>
import { api } from "@/api/index.js"
export default {
  data() {
    return {
      data: [],

      end: true
    }
  },
  mounted() {},
  computed: {
    itemWidth() {
      return document.documentElement.clientWidth * 0.44
    },
    gutterWidth() {
      return 9 * 0.5 * (document.documentElement.clientWidth / 375)
    }
  },
  watch: {},
  created() {
    this.getData()
    if (this.$store.state.footerVisible) {
      this.$store.commit("TOGGLE_FOOTER")
    }
  },
  methods: {
    loadmore: function() {
      console.log("AAAAAAAAAAAAAAAAAA")
    },
    scroll(scrollData) {
      console.log(scrollData)
    },
    getData() {
      var arr = [
        {
          img:
            "https://iph.href.lu/100x200?text=%E6%88%91%E4%BB%AC&fg=123456&bg=344546",
          title: "nice",
          story: "XXXXXXXXXXXXXXXXXXXXXXX",
          user: "555"
        }
      ]
      var tmp = arr.concat(arr, arr, arr, arr, arr)

      this.data = tmp
    }
  }
}
</script>

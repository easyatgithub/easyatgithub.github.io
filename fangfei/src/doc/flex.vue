<template>
  <div>
    1
    <div class="flex">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
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
      end: true
    };
  },
  mounted() {},
  watch: {},
  created() {
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
.flex {
  display: -webkit-flex; /* Safari  inline-flex */
  display: flex; /* https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html */
}

.flex {
  display: -webkit-flex; /* Safari  inline-flex */
  display: flex; /* */
  flex-direction: column; /* row  | row-reverse | column | column-reverse; */
  flex-wrap: nowrap; /* nowrap | wrap | wrap-reverse;*/
  flex-flow: row nowrap;
  justify-content: flex-start; /* flex-start | flex-end | center | space-between | space-around; */
  align-items: flex-start; /*  flex-start | flex-end | center | baseline | stretch;*/
  align-content: flex-start; /* flex-start | flex-end | center | space-between | space-around | stretch; */
}

.item {
  order: 0; /* 属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。*/
  flex-grow: 0; /*属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。 */
  flex-shrink: 1; /*属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小 */
  flex-basis: auto; /* 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小 */
  flex: 0 1 auto; /* none  属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选*/
  align-self: auto; /* auto | flex-start | flex-end | center | baseline | stretch;   属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch */
}
</style>

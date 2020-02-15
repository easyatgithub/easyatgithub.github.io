<template>
  <div class="app">
    内容:
    <div class="list">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
      >
        <li v-for="item in list">{{ item }}</li>
      </ul>
    </div>
    <mt-button type="primary">primary</mt-button>

    历史期号:
    <table>
      <tr>
        <th>期号</th>
        <th>红球</th>
        <th>篮球</th>
        <th>我的</th>
      </tr>
      <tr v-for="item in list" @click="getDescribe(item)">
        <td>{{ item.id }}</td>
        <td>
          <div class="red ball">{{ item.code[0] }}</div>
          <div class="red ball">{{ item.code[1] }}</div>
          <div class="red ball">{{ item.code[2] }}</div>
          <div class="red ball">{{ item.code[3] }}</div>
          <div class="red ball">{{ item.code[4] }}</div>
          <div class="red ball">{{ item.code[5] }}</div>
        </td>
        <td>
          <div class="blue ball">{{ item.code[6] }}</div>
        </td>
        <td>
          <router-link
            class="none-text-decoration"
            :to="{ name: 'item', params: item }"
          >
            我的
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
/*
a{text-decoration:none}
 const test = resolve => require(["@/pages/test"], resolve);

  { path: "/", component: test},

 import VueDataLoading from "vue-data-loading";

   <router-link :to="{ name: 'item', params: item }">
        {{ item }}
      </router-link>

       <li v-for="item in list" @click="getDescribe(item)">
      {{ item }}
    </li>
   http://www.cwl.gov.cn/kjxx/ssq/kjgg/

*/

import { api } from "@/api/index.js";
export default {
  name: "app",
  components: {},
  data() {
    return {
      list: []
    };
  },

  methods: {
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        this.list = this.list.concat(this.list);
        this.loading = false;
      }, 2500);
    },
    getDescribe: function(item) {
      // this.$router.push({path: `/item/`});
      this.$router.push({ name: "item", params: item });
    },
    renderLine(item) {
      return item;
    }
  },
  created() {
    api.ssqList({}).then(res => {
      this.list = res;
    });

    if (this.$store.state.footerVisible) {
      this.$store.commit("TOGGLE_FOOTER");
    }
  }
};
</script>

<style>
.app {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.none-text-decoration {
  text-decoration: none;
}
.ball {
  color: white;
  border-radius: 15px;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  display: inline-block;
}
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
th {
  background: #ccc;
}
table {
  width: 100%;
}
.list {
  overflow: scroll;
  height: 70px;
}
</style>

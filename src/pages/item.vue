<template>
  <div class="app">
    <input type="button" value="随机一下:" v-on:click="toggle" />
    <input type="button" value="清空" v-on:click="clearAll" /> <br />
    <mt-picker
      :visibleItemCount="1"
      :slots="slots"
      @change="onValuesChange"
    ></mt-picker>
    <hr />
    <table>
      <tr>
        <th>红球</th>
        <th>篮球</th>
        <th>操作</th>
      </tr>
      <tr
        v-for="(item, index) in myChoose"
        :key="index"
        @click="changeLine(item)"
      >
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
          <span @click="delOne(index)">
            删除
          </span>
          <span @click="changeLine(item)">
            编辑
          </span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
/*
 const test = resolve => require(["@/pages/test"], resolve);

  { path: "/", component: test},

 import VueDataLoading from "vue-data-loading";

*/

export default {
  name: "app",
  components: {},
  data() {
    return {
      systemArr: [],
      myChoose: [
        {
          code: [1, 2, 3, 4, 5, 6, 7]
        }
      ],
      slots: [],
      list: [1, 2, 3],
      loading: false,
      completed: false,
      page: 1
    };
  },
  methods: {
    toggle: function() {
      this.systemArr = this.system();
      this.initSolt(this.systemArr);
      this.myChoose.push({
        code: this.systemArr
      });
    },
    clearAll: function() {
      this.myChoose = [];
    },
    delOne: function(index) {
      this.myChoose.splice(index, 1);
    },
    changeLine: function(item) {
      this.initSolt(item.code);
    },

    system: function() {
      var arr = [];
      for (var i = 0; i < 33; i++) {
        arr[i] = i + 1;
      }
      var x = [];
      while (x.length < 7) {
        var index = -~(Math.random() * arr.length);
        if (arr[index]) {
          x.push(arr[index]);
          delete arr[index];
        }
      }
      x.push(-~(Math.random() * 16));
      return x;
    },
    onValuesChange(picker, values) {
      console.log(picker, values);
    },
    initSolt(system) {
      var arr = [];
      var slots = [];

      for (var i = 1; i <= 33; i++) {
        arr.push(i);
      }

      slots.push({ divider: true, content: "红球", className: "slot" });
      for (var i = 0; i <= 5; i++) {
        slots.push({
          flex: 1,
          values: arr,
          defaultIndex: system[i] - 1,
          className: "slot" + i
        });
      }
      slots.push({ divider: true, content: "篮球", className: "slot" });
      slots.push({
        flex: 1,
        values: arr,
        defaultIndex: system[6] - 1, //-~(Math.random() * 17)
        className: "slot-blue"
      });
      this.slots = slots;
    }
  },
  created() {
    console.log(this.$route.params);
    this.initSolt(this.system());
    if (this.$store.state.footerVisible) {
      this.$store.commit("TOGGLE_FOOTER");
    }
  }
};
</script>

<style>
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
</style>

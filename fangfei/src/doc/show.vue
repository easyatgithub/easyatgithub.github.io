<template>
  <div class="app">
    <input type="text" id="cardsNum2" value="1" v-on:input="inputFunc" />
    <span class="ball">1</span>
    <input type="button" value="toggle" v-on:click="toggle()" /> <br />
    <div v-show="isShow" style="width: 100px;height: 100px;background: red">
      1111
    </div>
  </div>
</template>

<script>
import VueDataLoading from "vue-data-loading";
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default {
  name: "app",
  components: {
    VueDataLoading
  },
  data() {
    return {
      slots: [
        {
          flex: 1,
          values: arr,
          defaultIndex: 1,
          className: "slot1"
        }
      ],
      list: [],
      isShow: false,
      loading: false,
      completed: false,
      page: 1
    };
  },
  methods: {
    toggle: function() {
      this.isShow = !this.isShow;
    },
    inputFunc(picker, values) {
      console.log(picker, values);
      this.isShow = true;
    },
    onValuesChange(picker, values) {
      console.log(picker, values);
    },
    fetchData() {
      this.loading = true;
      setTimeout(() => {
        if (this.page > 3) {
          this.completed = true;
          this.loading = false;
          return;
        }
        const temp = [];
        for (let i = this.list.length + 1; i <= this.list.length + 50; i++) {
          temp.push(i);
        }
        this.list = this.list.concat(temp);
        this.loading = false;
      }, 1000);
    },
    pullUp() {
      this.fetchData();
      this.page++;
    },
    pullDown() {
      this.list = [];
      this.page = 1;
      this.completed = false;
      this.fetchData();
    },
    infiniteScroll() {
      this.fetchData();
      this.page++;
    }
  },
  created() {
    setTimeout(() => {
      location.reload();
    }, 30000);

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
.ball {
  color: red;
  border-radius: 15px;
  width: 30px;
}
</style>

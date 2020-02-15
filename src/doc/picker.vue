<template>
  <div class="app">
    <mt-picker
      :visibleItemCount="1"
      :slots="slots"
      @change="onValuesChange"
    ></mt-picker>
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
        },
        {
          flex: 1,
          values: arr,
          defaultIndex: 2,
          className: "slot2"
        },
        {
          flex: 1,
          values: arr,
          className: "slot1"
        },
        {
          flex: 1,
          values: arr,
          className: "slot1"
        },
        {
          flex: 1,
          values: arr,
          className: "slot1"
        },
        {
          flex: 1,
          values: arr,
          className: "slot3"
        }
      ],
      list: [],
      loading: false,
      completed: false,
      page: 1
    };
  },
  methods: {
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
</style>

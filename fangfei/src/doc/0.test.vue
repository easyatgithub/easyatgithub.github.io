<template>
  <div>
    1
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5],
      loadingConnecting: false
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
    callback() {
      this.list = this.list.concat(this.list);
    }
  }
};
</script>
<style>
* {
  margin: 0px;
  padding: 0px;
}

.wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
}
</style>

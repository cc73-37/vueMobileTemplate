<template>
  <div id="app">
    <router-view />
    <van-overlay :show="showLoading" @click="$store.state.showLoading = false">
      <div class="loading" @click.stop>
        <van-loading  type="spinner"/>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  computed: {
    showLoading() {
      return this.$store.state.showLoading 
    }
  },
};
</script>

<style lang='scss' scoped>
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:100vh;
}
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>

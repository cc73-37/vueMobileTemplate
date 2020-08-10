<template>
  <div class='content'>
    <van-cell-group>
      <van-cell @click='getlist' :title="o.title" :value="o.value" v-for="(o,i) in info" :key='i' />
      <!-- <van-cell title="单元格" :value="val" /> -->
    </van-cell-group>
  </div>
</template>

<script>
  export default {
    props:['info'],
  }
</script>

<style lang="scss" scoped>

</style>

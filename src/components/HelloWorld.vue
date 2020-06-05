<template>
  <div class="content">
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'


@Component
export default class HelloWorld extends Vue {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.content{
}
</style>

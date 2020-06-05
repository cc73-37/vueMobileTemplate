<template>
  <div class='content'>
    <van-cell-group>
      <van-cell :title="o.title" :value="o.value" v-for="(o,i) in info" :key='i' />
      <!-- <van-cell title="单元格" :value="val" /> -->
    </van-cell-group>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class List extends Vue {
  @Prop({  })
  info!: object[] | object
  
  // 类computed(计算属性)
  get abc() {
    return this.info
  }
}
</script>

<style lang='scss' scoped>
.content{
  
}
</style>
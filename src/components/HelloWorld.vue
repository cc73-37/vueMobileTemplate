<template>
  <div class="content">
    <cell-group>
      <cell title="单元格" value="内容" />
      <cell title="单元格" value="内容" label="描述信息" />
    </cell-group>
  </div>
</template>

<script>
import { Cell, CellGroup } from 'vant'
export default {
  components:{
    Cell,
    CellGroup
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.content{
}
</style>

<template>
  <div class='content'>
    <van-cell-group>
      <van-cell @click='getlist' :title="o.title" :value="o.value" v-for="(o,i) in info" :key='i' />
    </van-cell-group>
  </div>
</template>

<script>
export default{
  props:['info'],
  data() {
    return {
    }
  },
  computed: {
    abc() {
      return this.info
    }
  },
  methods: {
    getlist() {
      
    }
  },
}
</script>

<style lang='scss' scoped>
.content{
  
}
</style>

<template>
  <div class="content">
    <van-nav-bar :title="title" left-text="返回" right-text="按钮" left-arrow/>
    <List :info='list'></List>
  </div>
</template>

<script>
  import { Vue, Component } from "vue-property-decorator";
  import List from '../../components/List.vue'
  import { getInfo } from '../../api/index'
  export default {
    components:{
      List
    },
    data() {
      return {
        val:'aaaa',
        title:'XX项目',
        list:[]
      }
    },
    created(){
    },
    methods: {
      onClickLeft() {
        this.$toast('成功文案')
      },
      onClickRight() {

      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
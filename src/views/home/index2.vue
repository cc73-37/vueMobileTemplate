<template>
  <div class="content">
    <van-nav-bar
      :title="title"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <List :info='list'></List>
  </div>
</template>

<script>
  import { Vue, Component } from "vue-property-decorator";
  import List from '../../components/List.vue'
  import { ListObj } from '../../model/index'
  import { getUsers } from '../../api/index'
  export default {
    components:{
      List
    },
    data() {
      return {
        val:'aaaa',
        title:'XX项目',
        list:[{
          title: "姓名",
          value: "张三"
        }, {
          title: "年龄",
          value: ""
        }]
      }
    },
    created(){
      getUsers().then(res => {
        this.list = res
      })
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
<template>
  <div class="content">
    <van-nav-bar
      :title="title"
      right-text="分享"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <List :info='list'></List>
  </div>
</template>

<script>
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
        list:[{
          title: "姓名",
          value: "张三"
        }, {
          title: "年龄",
          value: "29"
        }]
      }
    },
    created(){
      getInfo().then(res => {
        this.list = res.data
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
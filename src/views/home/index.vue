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
    <popPicker v-model="show" :columns='["a","b","c"]' @confirm='onConfirm' @cancel='show=false'>
      <van-cell title="单元格" value="内容" @click='onClick' />
    </popPicker>
  </div>
</template>

<script>
  import List from '../../components/List.vue'
  import popPicker from '../../components/PopPicker'
  import { getInfo } from '../../api/index'
  export default {
    props:['value'],
    components:{
      List,
      popPicker
    },
    data() {
      return {
        show:false,
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
      onClick(){
        this.show = true
      },
      onConfirm(val){
        console.log("val:",val)
      },
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
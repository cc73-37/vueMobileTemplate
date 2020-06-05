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

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import List from '../../components/List.vue'
import { ListObj } from '../../model/index'
import { getUsers } from '../../api/index'

@Component({
  components: {
    List
  },
})
export default class Home extends Vue {
  val:string = 'aaaaa'
  title:string = 'XX项目'
  list:ListObj[] = [{
    title: "姓名",
    value: "张三"
  }, {
    title: "年龄",
    value: ""
  }]

  created(){
    getUsers().then((res:any) => {
      this.list = res
    })
  }
  onClickLeft() {
    this.$toast("成功文案");
  }
  onClickRight() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.content {
}
</style>
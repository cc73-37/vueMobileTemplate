<template>
  <div>
    <div>
      <slot></slot>
    </div>
    <van-popup v-bind="$attrs" position="bottom" @click-overlay='$emit("cancel")'>
      <van-picker show-toolbar v-bind='$attrs' v-on='$listeners' :columns="columns" @click-overlay='close'/>
    </van-popup>
  </div>
</template>

<script>
  export default {
    props:['columns'],
    data() {
      return {
        
      };
    },
    created () {
      if(!this.columns) throw 'columns属性值不能为空'
    },
    methods: {
      close(){
        debugger
        this.value=false
      },
      onConfirm(value) {
        this.$emit('confirm',value)
      },
      onCancel(value){
        this.$emit('cancel',value)
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
<template>
  <div>
    <div>
      <slot></slot>
    </div>
    <van-popup v-bind="$attrs" position="bottom">
      <van-datetime-picker show-toolbar v-bind='$attrs' v-on='$listeners'/>
    </van-popup>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
    },
  }
</script>

<style lang="scss" scoped>

</style>
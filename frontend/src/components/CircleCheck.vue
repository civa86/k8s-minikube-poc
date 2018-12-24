<template>
  <div class="circle-check"
       :class="{'checked': checked}">
    <div class="circle" />
    <div class="check"
         v-if="checked" />
  </div>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      required: true
    }
  }
}
</script>


<style scoped lang="scss">
.circle-check {
  width: 100%;
  height: 100%;
  position: relative;

  .circle {
    top: 50%;
    margin-top: -10px;
    left: 50%;
    margin-left: -10px;
    position: absolute;
    border: 1px solid #2c3e50;
    height: 20px;
    width: 20px;
    border-radius: 50%;
  }
  .check {
    top: 50%;
    margin-top: -6px;
    left: 50%;
    margin-left: -6px;
    position: absolute;
    background: #61af83;
    height: 14px;
    width: 14px;
    border-radius: 50%;
  }
}
</style>

<script setup>



</script>

<template>
<!--<h1>欢迎来到教堂，立即占卜！</h1>-->
  <div class="page">
    <img src="/pic/church/church10.png" class="churchBack auto-blur" alt="">

    <button class="roundButton">虔诚占卜</button>
  </div>
</template>

<style scoped lang="scss">
.page{
  position: relative;

  height: 100vh;
}

//教堂背景图
.churchBack{
  position: absolute;

  display: block;
  width: 100%;
  height: 100vh;
}

//圆圆的占卜按钮
.roundButton{
  position: absolute;
  z-index: 5;

  border-radius: 100%;
  width: 100px;
  height: 100px;
  background-color: #9C7C4A;

  //基于父元素控制位置
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  //transition: opacity 1s ease;
}

</style>
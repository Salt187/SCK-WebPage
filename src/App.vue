<script setup>

</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
//全局生效
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  color: #333;
  text-decoration: none;
}

li {
  list-style: none;
}

button{
  border: none;
  background-color: transparent;
}

button:hover{
  outline:none;
  cursor: pointer;
}

/* 首页CSS样式 */
/* 版心居中 */
//可以全局调用
.wrapper {
  width: 1050px;
  margin: 0 auto;
}

//模糊动画，随调随用
.auto-blur {
  /* 应用动画：名称为 fadeBlur，持续3秒，匀速，只播放一次 */
  animation: fadeBlur 3s linear forwards;
}
/* 定义模糊动画关键帧 */
@keyframes fadeBlur {
  0% {
    filter: blur(0); /* 初始状态：清晰 */
  }
  100% {
    filter: blur(10px); /* 结束状态：模糊（10px可调整） */
  }
}
</style>

<script setup>
import {Back} from '@element-plus/icons-vue'
import router from "@/router/index.js";

//跳转到客户端
const toMainStage = ()=>{
  router.push("/frontend")
}


</script>

<template>
<div class="page">
  <div class="left">
    <div class="banner">
      <button class="toMainPage" @click="toMainStage">
        <el-icon><Back /></el-icon>
        前往客户端
      </button>


    </div>

    <!--  登录卡片-->
    <router-view></router-view>
  </div>


<!--  看板娘-->
  <img src="/pic/welcome.png" alt="">
</div>
</template>

<style scoped lang="scss">

.left{
  width: 100%;

}

.input{
  margin-bottom: 20px;
}

//虚假的背景页面
.page{
  /* 占满视口 */
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  /* 当前页面的背景色 */
  background-color: #f5f7fa;

  display: flex;
  justify-content: flex-end
}

.banner{
  height: 10hv;
  width: 100%;
}

//前往主页面的按钮
.toMainPage{
  background-color: #F9E9C8;
  color: #7F5539;
  box-shadow: 0 1px 2px 0 rgba(211, 211, 211, 0.5);

  width: 150px;
  height: 50px;
  margin: 18px 0 0 20px;
  border-radius: 10px;
  font-size: 15px;
}

//按钮hover
.toMainPage:hover{
  background-color:  #F5D59A;
  color: #553727;
}

img{
  width: 100vh;
}

el-button{
  cursor: pointer; /* 明确标记为可点击 */
  pointer-events: auto !important; /* 确保事件不被拦截 */
}

.demo-input-with-icon {
  width: 100%;
}

.input-group {
  margin-bottom: 1.5rem;
}

.input-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.responsive-input {
  width: 240px;
}

@media (max-width: 768px) {
  .input-container {
    flex-direction: column;
    gap: 1rem;
  }

  .responsive-input {
    width: 100%;
  }
}

//登录卡片位置
.cardPosition{
  height: 400px;
  width: 350px;
  display: flex;
  justify-content: center;
  margin: 200px auto 0 ;
  padding: 5px 0 0 0;
}

.blankPosition{
  margin-top: 20px;
}

.input{
  margin-bottom: 20px;
}

.button-container{
  width: 240px;
  display: flex;
  justify-content: space-between;
}
</style>
<script setup>
import stageHeader from "@/views/Frontend/Stage/MainItems/stageHeader.vue";
import ClientLogin from "@/views/Frontend/Stage/MainItems/client.vue";
import {ref} from "vue";


//----响应式变量----------------------------------------
const loginPageIsShowing = ref(false)




//开启/关闭登录页面--------------------------------------
function closeLoginPage(){
  loginPageIsShowing.value = false;
}

function openLoginPage(){
  loginPageIsShowing.value = true;
}

</script>

<template>
<div class="main-page">
  <stageHeader @open-loginPage="openLoginPage"></stageHeader>
  <router-view></router-view>

<!--  测试组件-->
  <client-login @close-loginPage="closeLoginPage" v-if="loginPageIsShowing"></client-login>
  <div class="mask" v-if="loginPageIsShowing"></div>
</div>

</template>

<style scoped lang="scss">
.main-page{
  width: 100%;
  height: 120vh;
  background-color: #F5F2EB;
}

//灰度遮罩层
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* 黑色半透明，0.5 是透明度（0-1 可调） */
  z-index: 90; /* 层级低于弹窗，高于页面内容 */
  backdrop-filter: blur(2px); /* 可选：背景轻微模糊，增强视觉层次（兼容性较好） */
}
</style>
<script setup>
import {Close, Minus} from '@element-plus/icons-vue'

import ClientLogin from "@/views/Frontend/Stage/MainItems/AccountAndPhone/ClientLogin.vue";
import {ElMessage} from "element-plus";

const emit = defineEmits(['close-loginPage'])

//----关闭登录窗口-----------------------------------------------------
function closeFunction(){
  //Close相当于一个桥梁，让父组件可以像声明@Click一样声明一个@Close
  console.log("closeFunction")
  emit('close-loginPage')
  //后面支持跟进参数
}

//----其他登录方式
function otherLoginFunction(){
  ElMessage.error("骗你的，根本没做QQ登录~")
}
//----短信登录
function messageLoginFunction(){
  ElMessage.warning("骗你的，根本没做短信登录~")
}

</script>

<template>
<div class="container">
  <div style="padding-left: 640px">
    <Close style="width: 40px; height: 40px;cursor: pointer;"
           @click="closeFunction"
    />
  </div>

<!--  核心部分-->
  <div class="page">
<!--    登录选项-->
    <div class="container-login">
      <p style="font-size: 25px; cursor: pointer">账号登录</p>
      <Minus style="width: 20px;height: 35px;margin: 0 5px"/>
      <p style="font-size: 25px;cursor: pointer" @click="messageLoginFunction">短信登录</p>
    </div>

<!--    登录表单-->
  <ClientLogin></ClientLogin>

  <div class="container-pic">
    <img src="/pic/items/login1.png" alt="">

    <div class="client-otherContainer">
      <h3 style="cursor: pointer;" @click="otherLoginFunction">点我跳转QQ登录</h3>
    </div>

    <img src="/pic/items/login2.png" alt="">
  </div>
  </div>


</div>
</template>

<style scoped lang="scss">
//----整个登录框---------
.container{
  //使其浮于表面
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  width: 680px;
  height: 500px;

  //透明背景
  background-color: transparent;

}

//----主要容器----------------
.container-login{
  display: flex;
  justify-content: center;
}
.page{
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding-top: 10px;
  border-radius: 10px;

  width: 600px;
  height: 400px;

  background-color: #F5F2EB;
}

//--------------------------------
.container-pic{
  display: flex;
  justify-content: space-between;

  margin-top: auto;
  height: 150px;
  background-color: transparent;
}

.container-pic img{
  width: 150px;
}

.client-otherContainer{
  margin-top: 50px;

}
</style>
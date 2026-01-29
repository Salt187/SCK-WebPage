<script setup>

import {onMounted, onUnmounted, ref} from "vue";

const luckNum=ref(0)

import {ChurchDivination} from "@/api/FrotendApi/ChurchDivination.js";
import {ElMessage} from "element-plus";
const divination = async ()=>{
  let data = {
    "luckNum":luckNum.value
  }
  let result =await ChurchDivination(data);
  ElMessage.success(result.msg);

  console.log(result.data);
}

//播放音乐函数-----------------
import {audioUtil} from '@/utils/musicUtil.js'
onMounted(()=>{
  audioUtil.playAudio('/mus/San Francisco.mp3',{volume:0.5,loop:true});
})
onUnmounted(()=>{
  audioUtil.onUnmounted();
})
</script>

<template>
<!--<h1>欢迎来到教堂，立即占卜！</h1>-->
  <div class="page">
    <img src="/pic/church/church10.png" class="churchBack auto-blur" alt="">
    <img src="/pic/church/god.png" class="church-divination" @click="divination" alt="">
    <input class="church-luckyNum">
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

//主教---------------
.church-divination{
  position: absolute;
  z-index: 5;

  width: 500px;

  //基于父元素控制位置
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);

  cursor: pointer;

  //设定动画参数
  transition: transform 1.2s ease-in-out ;
}

.church-divination:hover{
  transform: translate(-50%, -50%) scale(1.2);
}

//幸运数字--------------------------
.church-luckyNum{
  position: absolute;
  z-index: 20;

  font-size: 50px;
  text-align: center;

  height: 100px;
  width: 400px;

  left: 50%;
  top: 85%;
  transform: translate(-50%, -50%);

  background-image: url("/pic/church/sign.png");
  background-repeat: no-repeat;
}


</style>
<script setup>

import {useAdminInfoStore} from "@/stores/AdminInfo.js";
const adminInfoStore = useAdminInfoStore();
let adminName = adminInfoStore.adminName;

import {useRouter} from "vue-router";
const router = useRouter();
const toAdd = ()=>{
  router.push('/data/add');
}
const toSelect = ()=>{
  router.push('/data/table');
}
const toInfo = ()=>{
  router.push('/data/Admin');
}

</script>

<template>
<!--  整个页面的div-->
  <div class="header">
    欢迎！
    {{adminName}}
  </div>


  <div class="app-layout">

    <!-- 左侧固定 box -->
    <div class="sidebar">
      <button @click="toSelect">员工查询</button>
      <button @click="toAdd">添加员工</button>
      <button @click="toInfo">管理员信息</button>
    </div>

    <!-- 右侧内容区（router-view 包裹在这里，内部自由布局） -->
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.header{
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 10vh;
  background-color: #f1f5f9;
  padding-right: 90px;

  text-align: right;
  font-size: 50px;
  color: #333333;
}

button{
  /* 清除边框 */
  border: none;
  /* 清除背景 */
  background: none;
  display: block;
  width: 100%;
  height: 50px;
  font-size: 20px;
  cursor: pointer; /* 核心属性：鼠标悬停时显示小手图标 */

  color: #000000;
  background-color: #D5E8FF;
}
button:hover{
  background-color: #B9D3FA;
}


/* 父容器：控制左 + 右的横向排列 */
.app-layout {
  display: flex;  /* 内部容器flex  */
  height: 88vh; /* 占满整个视口高度  vh是 CSS 中的视口单位，1vh 等于视口高度的 1%*/
}

/* 左侧 box：固定宽度，不伸缩 */
.sidebar {
  display: flex;
  flex-direction: column; /* 子元素垂直排列（默认就是 column，可省略） */
  justify-content: center; /* 垂直方向居中（关键） */
  align-items: center;

  width: 300px; /* 固定宽度 */
  background: #E8F3FF;
  /* 固定在左侧，滚动时不跟随 */
  position: sticky;
  top: 0;
  height: 88vh;
  box-sizing: border-box;
}

/* 右侧内容区：占满剩余宽度，内部自由布局 */
.content-wrapper {
  flex: 1; /* 占满父容器剩余宽度 */
  padding: 20px;
  overflow-y: auto; /* 内容过多时可滚动 */

  /* 关键：内部恢复默认布局，不继承 flex 特性 */
  display: block;
}
</style>

<!--
预设样式
text 表示文本按钮（无背景色，hover 时有底色）。
bg 表示背景色按钮（有背景色，文本为白色）。
type表预定的颜色样式  primary success info warning danger

-->
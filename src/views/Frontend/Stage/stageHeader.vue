<script setup>
import {Search} from '@element-plus/icons-vue'
</script>

<template>

  <div class="header">
    <div class="wrapper">
      <!-- 头部logo (链接跳转，h1强调)-->
      <div class="logo">
        <h1><a href="#">SCK游戏</a></h1>
      </div>
      <!-- 导航 -->
      <div class="nav">
        <ul>
          <li><a href="#" class="active">首页</a></li>
          <li><a href="#">作者营地</a></li>
          <li><a href="#">待建</a></li>
          <li><a href="#">待建</a></li>
        </ul>
      </div>
      <!-- 搜索 -->
      <div class="search">
        <el-form ref="formRef">
          <el-form-item prop="adminName" class="input">
            <el-input
                class="responsive-input"
                placeholder="请输入搜索内容"
                size="large"
                :prefix-icon="Search"
            />
          </el-form-item>

        </el-form>
      </div>
      <!-- 用户 -->
      <div class="user">
        <a href="https://www.bilibili.com/video/BV1GJ411x7h7/?spm_id_from=333.337.search-card.all.click&vd_source=96b6178ca8f342b909ea5765c8aa99af" target="_blank">
          <div></div>
          <span>起重机鹤师傅</span>
        </a>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* 导航 */
.header{
  height: 105px;
  background-color: #F2EBD8;
  /* background-color: #F9F2E7; */
}

.header .wrapper{
  display: flex;

  padding: 23px 0 0 0;
}

.header .wrapper .logo{
  width: 200px;
  height: 80px;
}

.header .wrapper .logo a{
  display: block;
  width: 200px;
  height: 80px;
  background-image: url(/pic/header/logo.png);
  background-size: 200px auto;
  background-repeat: no-repeat;
  font-size: 0;
}

.header .wrapper .nav{
  margin: 0 0 0 50px;
  padding: 10px 0 0 0;
  width: 300px;
  height: 30px;
}

.header .wrapper .nav ul{
  display: flex;
  justify-content: space-between;
}

.nav ul li a{
  padding: 0 4px 0 4px;
  width: 50px;
  height: 40px;
  font-size: 25px;
}

.header .active,.nav ul li a:hover{
  border-bottom: 2px solid  #5D402D;
}

/* 搜索框区域 */
.search{
  display: flex;
  margin: 10px 0 0 50px;
  padding: 0 0 0 10px;
  width: 200px;
  height: 40px;
}

// 用户信息/头像
.user{
  margin: 0 0 0 32px;
  width: 200px;
  border: 1px solid #ECECEC;
}

.user a{
  width: 100%;
  height: 100%;
  display: flex;
}

.user a div{
  width: 50px;
  height: 50px;
  border-radius: 50%;

  background-image: url(/pic/welcome.png);
  background-repeat: no-repeat;
  background-size: contain;

}

.user a span{
  margin-left: 15px;
  font-size: 18px;
  line-height: 50px;
}

</style>
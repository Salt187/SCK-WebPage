<script setup>
import {Search} from '@element-plus/icons-vue'
import {onMounted, ref} from "vue";


//----响应式变量----------------------------------------------
const ClientNameShowing = ref('游客账户')

//----打开登录页面-------------------------------------------
const emit = defineEmits(['open-loginPage'])

function openFunction(){
  emit('open-loginPage')
}

//----更新用户名--------------------------------
import {useClientInfoStore} from "@/stores/ClientInfo.js";
function updateUserName(){
  let userName = useClientInfoStore().clientName
  if(userName!=null&&userName.trim()!==''){
    ClientNameShowing.value = userName;
  }
}

// 匿名函数是必须的
onMounted(()=>{
  updateUserName();
})
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
      <div class="user" >
          <div @click="openFunction"></div>
          <span>{{ClientNameShowing}}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
//----顶部导航------------------------------------
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

//----用户信息/头像--------------------------------------------------------
.user{
  display: flex;

  margin: 0 0 0 32px;
  width: 200px;
  border: 1px solid #ECECEC;
}

.user div{
  width: 50px;
  height: 50px;
  border-radius: 50%;

  background-image: url(/pic/welcome.png);
  background-repeat: no-repeat;
  background-size: contain;

  cursor: pointer;
}

.user span{
  margin-left: 15px;
  font-size: 18px;
  line-height: 50px;
}

</style>
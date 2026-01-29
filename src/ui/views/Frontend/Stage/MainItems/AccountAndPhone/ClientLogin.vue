<script setup>

import {ref} from "vue";

const account = ref()
const password = ref()

import {userLoginService} from "@/api/FrotendApi/ClientAccountLogin.js"
import {ElMessage} from "element-plus";
import {useTokenStore} from "@/stores/Token.js";
import {useClientInfoStore} from "@/stores/ClientInfo.js"
import {delay} from "@/utils/delayUtil.js";

const UserLoginService= async ()=> {
  //先清理token
  useTokenStore().removeToken();

  const data = {
    'clientName': account.value,
    'password': password.value
  }
  const result = await userLoginService(data);
  ElMessage.info(result.msg);

  //取出视图对象
  const resultVO = result.data
  console.log(resultVO);

  //Store存储信息
  useTokenStore().setToken(resultVO.token);
  useClientInfoStore().setClientName(resultVO.userName);

  await delay(1500);

  //存储完毕，应当重新载入页面
  window.location.reload();
}

//----注册函数--------------------
import {userRegisterService} from "@/api/BackendApi/Register.js";
const UserRegisterService= async ()=> {
  useTokenStore().removeToken();

  const data = {
    'clientName': account.value,
    'password': password.value
  }

  const resultVO = await userRegisterService(data);

  ElMessage.info(resultVO.msg);

  //延时后刷新
  await delay(1500);
  window.location.reload();
}


</script>

<template>
<div class="ClientLogin-container">
  <div class="ClientLogin-inputContainer">
    <el-input v-model="account" class="ClientLogin-inputStyle" placeholder="请输入账号" />
    <el-input v-model="password" class="ClientLogin-inputStyle" type="password" placeholder="请输入密码" />
  </div>

  <div class="ClientLogin-buttonContainer">
    <el-button type="primary" class="ClientLogin-buttonStyle" @click="UserLoginService">登录</el-button>
    <el-button class="ClientLogin-buttonStyle">注册</el-button>
  </div>
</div>
</template>

<style scoped lang="scss">
// 根样式
.ClientLogin-container{
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  width: 400px;
  height: 300px;

  background-color: transparent;
}

//----二级容器-------------------------
.ClientLogin-inputContainer {
  display: flex;
  flex-direction: column;

  margin: 20px auto 0;
}

.ClientLogin-buttonContainer {
  display: flex;

  margin: 20px auto 0;
}

//----小组件样式修正--------------------------------
.ClientLogin-buttonStyle{
  width: 140px;
  height: 40px;
}

.ClientLogin-inputStyle{
  width: 300px;
  height: 40px;
  margin-bottom: 10px;
}
</style>
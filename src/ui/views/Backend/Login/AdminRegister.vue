<script setup>
//导入响应式数据
import { ref } from 'vue'
//导入图标
import { Lock, User } from '@element-plus/icons-vue'
//定义响应式数据（双向绑定）
const data = ref({
  adminName:'',
  password:''
})


//定义校验规则，自动进行参数校验
const rules={
  username:[
    {required: true,message:"请输入用户名",trigger:"blur"},
    {min:5 ,max:16,message:"长度不符！",trigger:"blur"}
  ],
  password:[
    {required: true,message:"请输入密码",trigger:"blur"}
  ]
}


//定义表单引用，可以执行表单整体的逻辑  （暂未使用）
const formRef = ref(null)


//调用后台api接口，注册逻辑
import {userRegisterService} from '@/api/BackendApi/Register.js'
import {ElMessage} from "element-plus";
import router from "@/ui/router/index.js";
import Agree from "@/views/Backend/Login/agree.vue";
const Register = async ()=>{
  let Result = await userRegisterService(data.value);
  ElMessage.success(Result.msg);
  ElMessage.success("请重新登录")
  console.log(Result);
  await router.push('/login/adminLogin');
}

const toLogin = ()=>{
  router.push('/login/adminLogin');
}
</script>

<template>
  <div class="page">
    <!--  注册卡片-->
    <el-card style="max-width: 400px" class="cardPosition">
      <p style="font-size: 35px">注册</p>
      <!--    注册表单-->
      <div class="demo-input-with-icon blankPosition">
        <el-form ref="formRef" :model="data"  :rules="rules">
          <el-form-item prop="adminName" class="input">
            <el-input
                v-model="data.adminName"
                class="responsive-input"
                placeholder="请输入用户名"
                size="large"
                :prefix-icon="User"
            />
          </el-form-item>

          <!--        输入密码-->
          <el-form-item prop="password" class="input">
            <el-input
                v-model="data.password"
                class="responsive-input"
                placeholder="请输入密码"
                :prefix-icon="Lock"
                type="password"
                size="large"
            />
          </el-form-item>
        </el-form>
      </div>

      <agree></agree>

      <div class="button-container">
        <el-button type="primary" style="width: 240px" @click="Register">注册</el-button>
      </div>


      <button class="toLogin" @click="toLogin">登录账号</button>

      <p style="font-size: 12px; margin-top: 40px;color: gray">玉峰矿业有限公司官方网页</p>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
}

.toLogin{
  margin: 15px 0 0 180px;
  color: deepskyblue;
}

.input{
  margin-bottom: 20px;
}

.page{
  /* 占满视口 */
  height: 90vh;
  width: 100%;
  box-sizing: border-box;
  /* 当前页面的背景色 */
  background-color: #f5f7fa;

  display: flex;
  justify-content: flex-end
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

//按钮样式
.button-container{
  margin-top: 20px;
  width: 240px;
  display: flex;
  justify-content: space-between;
}
</style>
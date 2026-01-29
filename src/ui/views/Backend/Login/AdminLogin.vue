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

//获取store状态，登录时将一并存入token
import {useTokenStore} from '@/stores/Token.js';
const tokenStore = useTokenStore();   //获取实例
import {useAdminInfoStore} from "@/stores/AdminInfo.js";
const adminInfoStore = useAdminInfoStore();
//获取路由，登录后转发页面
import {useRouter} from "vue-router";
const router = useRouter();
//整体的登录逻辑
import {userLoginService} from '@/api/BackendApi/Login.js'
import {ElMessage} from "element-plus";
import Agree from "@/views/Backend/Login/agree.vue";
const Login = async () => {
  let Result = await userLoginService(data.value);
  ElMessage.success(Result.msg)
  console.log(Result);
  alert("登录成功");

  // 存入token状态
  tokenStore.setToken(Result.data);
  adminInfoStore.setAdminName(data.value.adminName);

  //路由转发页面
  await router.push('/data');
}

//前往注册
const toRegister = ()=>{
  router.push('/login/adminRegister');
}

</script>

<template>
  <div class="page">
    <!--  登录卡片-->
    <el-card style="max-width: 400px" class="cardPosition">
      <p style="font-size: 35px">登录</p>
      <!--    登录表单-->
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

<!--      勾选并同意-->
      <agree></agree>

      <div class="button-container">
        <el-button type="primary" style="width: 240px" @click="Login">登录</el-button>
      </div>

      <button class="toRegister" @click="toRegister">注册账号</button>

      <p style="font-size: 12px; margin-top: 40px;color: gray">玉峰矿业有限公司官方网页</p>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
}

//登录按钮下的跳转注册
.toRegister{
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

.button-container{
  margin-top: 20px;
  width: 240px;
  display: flex;
  justify-content: space-between;
}
</style>
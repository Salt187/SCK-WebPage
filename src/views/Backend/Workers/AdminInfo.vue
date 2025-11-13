<script setup>

import {ref} from "vue";

//--渲染信息------------------------------------------

//定义响应式变量
const AdminInfoData = ref(
{
  id:0,
  adminName:"小美",
  email:"test@test.com",
  phone:"1234567890",
  address:"对马岛"
}
)

//
import {AdminInfoSelect} from "@/api/AdminInfoSelect.js";
import {ElMessage} from "element-plus";
const adminInfoService = async ()=>{
  //获取异步信息
  let result = await AdminInfoSelect();
  console.log("执行了");
  console.log(result);
  ElMessage.success(result.msg);
  AdminInfoData.value = result.data;
}
adminInfoService();

</script>

<template>
<h1>个人中心</h1>
  <el-descriptions title="Personal Center" border>
    <el-descriptions-item
        :rowspan="2"
        :width="140"
        label="Photo"
        align="center"
    >
<!--      <el-image-->
<!--          style="width: 100px; height: 100px"-->
<!--          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"-->
<!--      />-->
    </el-descriptions-item>
    <el-descriptions-item label="用户名">{{AdminInfoData.adminName}}</el-descriptions-item>
    <el-descriptions-item label="电话">{{AdminInfoData.phone}}</el-descriptions-item>
    <el-descriptions-item label="id">{{AdminInfoData.id}}</el-descriptions-item>
    <el-descriptions-item label="邮箱">
      <el-tag size="small">{{AdminInfoData.email}}</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="Address">
      {{AdminInfoData.address}}
    </el-descriptions-item>
  </el-descriptions>


</template>

<style scoped>

</style>
<script setup>
// 当前日期
import { ref, onMounted } from 'vue';

// 存储原始 Date 对象
const currentDate = ref(null);
// 存储格式化后的日期（常用）
const formattedDate = ref('');

onMounted(() => {
  // 获取当前日期
  currentDate.value = new Date();
  // 手动格式化：YYYY-MM-DD（处理月份/日期小于10时补0）
  const year = currentDate.value.getFullYear();
  const month = String(currentDate.value.getMonth() + 1).padStart(2, '0'); // 月份从0开始，需+1
  const day = String(currentDate.value.getDate()).padStart(2, '0');
  // 拼接成 "YYYY-MM-DD" 格式
  formattedDate.value = `${year}-${month}-${day}`;
});


import { reactive } from 'vue'
const form = reactive({
  name: '',
  inDate: formattedDate,
  inAge: '',
  salary: '',
  phone: '',
  state: '',
  position: ''
})

//提交
import {AddNewWorkerService} from "@/api/AddNewWorker.js";
import {ElMessage} from "element-plus";
import router from "@/router/index.js";

const addNewWorkerService = () => {
  let Result = AddNewWorkerService(form);
  ElMessage.success("录入成功")
  router.push('/data');
}

</script>

<template>
<h1>录入新员工</h1>

  <el-form :model="form" label-width="auto" style="max-width: 600px">
<!--    姓名-->
    <el-form-item label="姓名">
      <el-input v-model="form.name" placeholder="请输入姓名"/>
    </el-form-item>

<!--    职位-->
    <el-form-item label="职位">
      <el-select v-model="form.position" placeholder="请选择职位">
        <el-option label="钻石矿井作业组长" value="钻石矿井作业组长" />
        <el-option label="钻石矿工" value="钻石矿工" />
        <el-option label="煤炭矿工" value="煤炭矿工" />
      </el-select>
    </el-form-item>

<!--    工资-->
    <el-form-item label="薪水">
      <el-select v-model="form.salary" placeholder="请选择薪资水平">
        <el-option label="8500" value="8500" />
        <el-option label="6500" value="6500" />
        <el-option label="3000" value="3000" />
      </el-select>
    </el-form-item>

<!--    入职日期-->
    <el-form-item label="入职日期">
      <el-input v-model="form.inDate"/>
    </el-form-item>
<!--     入职年龄-->
    <el-form-item label="入职年龄">
      <el-input v-model="form.inAge"/>
    </el-form-item>

    <el-form-item label="状态">
      <el-select v-model="form.state" placeholder="请选择当前状态">
        <el-option label="在职" value="在职" />
        <el-option label="休假" value="休假" />
      </el-select>
    </el-form-item>

    <el-form-item label="联系电话">
      <el-input v-model="form.phone"/>
    </el-form-item>

    <!--    -->
    <el-form-item>
      <el-button type="primary" @click="addNewWorkerService">提交</el-button>
    </el-form-item>



  </el-form>

</template>

<style scoped>

</style>
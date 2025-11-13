<script lang="ts" setup>

import {Delete, Edit} from "@element-plus/icons-vue";
import {onMounted, ref, watch} from 'vue'
import {ComponentSize, ElMessage} from 'element-plus'


//----自动控制的数据--------------------

//控制当前处于第几页
const currentPage = ref(1)
//控制下拉框，一页显示几条数据
const pageList = ref([1,2,3,4,5])
// 控制一页有多少条数据
const pageSize = ref(5)
// 控制总页数
const totalPages = ref(25)

//----控制分页组件的数据----------------------------
//控制分页组件的尺寸
const size = ref<ComponentSize>('large')

//是否为分页按钮添加背景色
const background = ref(false)

//是否禁用分页
const disabled = ref(false)

//渲染的响应式变量,存储了全部数据
const tableData = ref([
  {
    id: 1,
    name: '本杰明',
    inDate: '2025-5-02',
    inAge: 10,
    salary: 3500,
    phone: null,
    state: null,
    position: null
  }
]);

//存储当前数据
const currentData = ref([])

//----查询总数据量，优先渲染分页组件---------------------------------
import {WorkerSelectNumService} from "@/api/WorkerSelectWorkerNum"
const workerSelectNumService = async ()=>{
  let result = await WorkerSelectNumService()
  ElMessage.success(result.msg);
  totalPages.value = pageSize.value ;
}

//----向后端发请求--获取全部员工数据------------------------------
import {WorkerSelectAll} from "@/api/WorkerSelectAll";

//姓名条件
const name = ref(null)

//分页查询全部
const workerSelect = async ()=>{
  let data = {
    "name": name.value
  }
  console.log(data)
  let result = await WorkerSelectAll(data);
  console.log(result);
  ElMessage.success(result.msg);
  tableData.value=result.data;
  calculateCurrentData();
}

//----分页组件事件触发调试--------------------
//每页条数改变时触发
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
//输入当前页码时触发
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

//-----------------
// 计算当前页数据（核心逻辑）
const calculateCurrentData = () => {
  // 计算起始索引和结束索引
  const startIndex = (currentPage.value - 1) * pageSize.value;
  const endIndex = startIndex + pageSize.value;
  // 从全部数据中截取当前页数据
  currentData.value = tableData.value.slice(startIndex, endIndex);
};
// 监听 currentPage 或 pageSize 变化，自动重新计算当前页数据
watch([currentPage, pageSize], calculateCurrentData);

//----------------------
onMounted(async ()=>{
  await workerSelectNumService();
  await workerSelect();
  calculateCurrentData();
    })

</script>

<template>
<!--  表单部分-->
  <el-form :inline="true"  class="demo-form-inline">

<!--    下拉选中部分-->
    <el-form-item label="条件">
      <el-select
          placeholder="请选择"
          clearable
      >
        <el-option label="无" value="0" />
        <el-option label="3000" value="3000" />
      </el-select>
    </el-form-item>

    <el-form-item label="姓名">
      <el-input v-model="name" placeholder="请输入" clearable />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="workerSelect">搜索</el-button>
    </el-form-item>
  </el-form>

<!--  table部分-->
<!--         为table绑定数据-->
  <el-table :data="currentData" height="400" style="width: 100%">
<!--    一行表一列   width表示单列的宽度  label表示标题-->
    <el-table-column prop="id" label="id" width="100" />
    <el-table-column prop="name" label="姓名" width="180" />
    <el-table-column prop="inDate" label="入职日期" width="180" />
    <el-table-column prop="inAge" label="入职年龄" width="180" />
    <el-table-column prop="salary" label="薪水"  />
    <el-table-column prop="position" label="职位" />

<!--    更改为非数据-->
    <el-table-column label="操作" width="150">
      <el-button type="primary" :icon="Edit" circle />
      <el-button type="danger" :icon="Delete" circle />
    </el-table-column>
  </el-table>


<!--  分页选项部分-->
  <el-pagination
      class="el-p"

      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="pageList"
      :size="size"
      :disabled="disabled"
      :background="background"

      layout="jumper, total, sizes, prev, pager, next"
      :total="totalPages"

      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
  />

<!--  layout="total, sizes, prev, pager, next, jumper" 控制元素的顺序
:page-sizes="[100, 200, 300, 400]"   控制可选的每页有多少条记录
-->
</template>

<style scoped>
.el-p {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}

.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>

<!--复制源码  更改属性  加class改位置-->
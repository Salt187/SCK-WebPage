<script setup>

import stageHeader from "@/views/Frontend/Stage/stageHeader.vue";
</script>

<template>
<div class="main-page">
  <stageHeader></stageHeader>
  <router-view></router-view>
</div>

</template>

<style scoped>


.main-page{
  width: 100%;
  height: 120vh;
  background-color: #F5F2EB;
}

</style>
<script setup>

import router from "@/router/index.js";

const toChurch = ()=>{
  router.push('/frontend/church')
}

const toMarket = ()=>{
  router.push('/frontend/market')
}
</script>

<template>
  <!-- banner区域布局 -->
  <!-- banner->wrapper版心->图片+文字 -->
  <div class="banner">
    <div class="wrapper">
      <div class="left">
        <!-- 左版心->ul->li->a -->
        <ul>
          <li><button>快速开始</button></li>
          <li><button>角色介绍</button></li>
          <li><button>阿瑞的私房照</button></li>
          <li><button @click="toChurch">教堂</button></li>
          <li><button @click="toMarket">鹤师傅菜市场</button></li>
        </ul>
      </div>

<!--      中心走马灯-->
      <div class="center">

        <div class="block text-center">
        <div class="demonstration"></div>
          <el-carousel height="375px" class="custom-carousel">
            <el-carousel-item>
              <img src="/pic/banner/banner2.png" alt="">
            </el-carousel-item>
            <el-carousel-item>
              <img src="/pic/banner/silyH.png" alt="">
            </el-carousel-item>
            <el-carousel-item>
              <img src="/pic/banner/茜茜.png" alt="">
            </el-carousel-item>
            <el-carousel-item>
              <img src="/pic/banner/雪菲.png" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>

      </div>

<!--      右边-->
      <div class="right">
        <h4>版本热点</h4>
        <dl class="content">
            <dt>CrazyFish加强</dt>
            <dd>
              <span>New</span>
              <span>技能全新升级</span>
            </dd>
<!--          <hr>-->
            <dt>新活动</dt>
            <dd>
              <span>New</span>
              <span>为真神传颂教义</span>
            </dd>
<!--          <hr>-->
            <dt>全新剧情</dt>
            <dd>
              <span>New</span>
              <span>在校园的一角邂逅鹤师傅</span>
            </dd>
<!--          <hr>-->
          了解更多
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* banner区域布局 */
/* banner->wrapper版心->图片+文字 */
.banner{
  height: 375px;
  //background-color: #fcfcf4;
  background-color: #F5F0E6;
}

.banner .wrapper{
  display: flex;
  justify-content: space-between;
  height: 100%;
}

/* 中心大图 */
.center{
  width: 550px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

// EL的走马灯
//控制宽度
.demonstration {
  width: 550px;
}

// 控制内容样式
img{
  display: block;
  margin: 0 auto 0;
  height: 100%;
}

// 右版心
.banner .left{

  width: 225px;
  height: auto;
  background-color: #f0f0e0  ;

}

.banner .left li button{
  width: 100%;
  text-align: left;
  padding: 0 0 0 10px;
  display: block;
  height: 75px;
  line-height: 75px;

  background-image: url(/pic/items/star.png);
  background-position: 175px;
  background-repeat: no-repeat;
  background-size: 30px;

  font-size: 22px;
  color: #7F5539;
}

.banner .left li button:hover{
  color: #553727;
  background-color: #eaeada ;
  background-image: url(/pic/items/colorStar.png);
}


/* 右卡片 */
.banner .right{
  margin-top: 25px;

  width: 225px;
  height: 270px;
  background-color: #e6e6d9;
  vertical-align: middle;
  border-radius: 15px;
}
/* 版本热点 */
.banner .right h4{
  font-size: 18px;
  padding: 8px 0 0 15px;
  color: #7F5539;
}
</style>
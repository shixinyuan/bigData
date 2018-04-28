
<template>
  <div class="css-serch-wrap">
     <div class="css-logo">
         <img src="./../assets/img/home/logo@2x.png" alt="logo">
         <h2>
             用户画像搜索
         </h2>
     </div>
     <div>
       <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/Login' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
       </el-breadcrumb>
     </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.css-logo {
  text-align: center;
}
.css-logo img {
  width: 110px;
}
.css-logo h2 {
  font-size: 32px;
}
</style>



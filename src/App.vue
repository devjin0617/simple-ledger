<template>
  <div id="app">

    <el-menu theme="dark" :default-active="activeIndex" class="el-navi" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Home</el-menu-item>
      <el-submenu index="2">
        <template slot="title">메뉴</template>
        <el-menu-item index="2-1">회비 현황</el-menu-item>
        <el-menu-item index="2-2">수익/지출 현황</el-menu-item>
      </el-submenu>
    </el-menu>

    <div class="view-wrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

.view-wrap {
  padding-top: 70px;
  margin:auto;
  max-width:800px;
}

.el-navi {
  z-index: 10;
  border-radius: 0 2px;
  position: fixed;
  width: 100%;
}
</style>

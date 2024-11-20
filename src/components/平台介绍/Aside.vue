<template>
  <div class="layout">
    <!-- 左侧导航栏 -->
    <div class="sidebar">
      <ul class="menu">
        <li @click="selectItem(1)" :class="{'active': activeIndex === 1}">
          <span>一级菜单1</span>
        </li>
        <li @click="selectItem(2)" :class="{'active': activeIndex === 2}">
          <span>一级菜单2</span>
        </li>
        <li @click="toggleDropdown" :class="{'active': activeIndex === 3}">
          <span>一级菜单3</span>
          <i :class="{'icon-rotate': dropdownOpen}" class="icon">&#9660;</i>
        </li>
        <!-- 下拉菜单 -->
        <ul v-show="dropdownOpen" class="dropdown">
          <li @click="selectItem(4)">子菜单1</li>
          <li @click="selectItem(5)">子菜单2</li>
        </ul>
      </ul>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
#aside {
  width:100%;
  height: 100%;
}
el-menu-item {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}
</style>
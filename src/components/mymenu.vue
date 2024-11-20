<template>
  <div id="mymenu">
    <nav>
      <div class="content">
        <router-link to="/" class="button">首页</router-link>
        <router-link to="/about" class="button">平台介绍</router-link>
        <router-link to="/data" class="button">数据中心</router-link>
        <router-link to="/workbench" class="button">工作台</router-link>
        <router-link to="/community" class="button">社区</router-link>
        <router-link to="/contact" class="button">联系我们</router-link>
        <router-link to="/joinus" class="button">加入我们</router-link>
      </div>
    </nav>
  </div>
</template>

<script setup>

</script>

<style scoped>
nav{
  width: 100%;
  min-width: 1900px;
  height: 100%;
}
#mymenu {
  /* position: fixed;
  top: 0;
  left: 0; */
  min-width: 100%;
  width: max-content;
  height: 100%;
  background-image: url('../../src/assets/images/首页/u132.svg');
  background-size: 100% 100%;
}

.content {
  height: 100%;
  width: 1000px;
  padding-left: 100px;
}
.button {
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;
  width: 120px;
  height: 100px;
  margin-top: 5px;
  float: left;
  font-size: 20px;
  font-weight: 550;
  text-align: center;
  line-height: 100px;
  text-shadow: 2 2 2px white,2 2 2px white;
  color: white;
  /* background-color: black; */
  
}
.button:hover {
  background-color: #fff;
  color: black;
  text-shadow: 2 2 2px black,2 2 2px black;
}
</style>
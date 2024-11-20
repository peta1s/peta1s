
<script setup>
import mymenu from './components/mymenu.vue';

</script>


<template>
  <div class="menu">
    <mymenu />
  </div>
  <div class="routerview">
    <router-view></router-view>
  </div>
</template>

<style scoped>
html,body {
  height: 100%;
  margin: 0;
}
.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 110px;
  z-index: 20;

}

.routerview {
  width: 100%;
  height: calc(100% - 110px);
  position: absolute;
  top: 110px;
  left: 0;
  z-index: 10;
}
</style>
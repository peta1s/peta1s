<script setup>
import list from './list.vue'
import Technique from './technique.vue';
import advantage from './advantage.vue';
import text1 from './text1.vue';
import bottominfo from './bottominfo.vue';
</script>

<template>
  <div id="container">
    <div class="imagecontainer">
      <div class="img1">
        <img src="../../assets/images/首页/u6.png" class="image" alt=""/>
        <img src="../../assets/images/首页/u13.png" class="caijingleida" alt=""/>
        <img src="../../assets/images/首页/u14.png" class="text1" alt=""/>
        <img src="../../assets/images/首页/u15.png" class="text2" alt=""/>
      </div>
    </div>
    <list></list>
    <technique></technique>
    <advantage></advantage>
    <text1></text1>
    <bottominfo></bottominfo>
  </div>
</template>



<style scoped>

#container {
  width: 100%;
  height: max-content;
}

 .img1 img {
  vertical-align: top;  /* 或 vertical-align: middle; */
  /*img标签默认是内联元素，该图片会基于行内元素的垂直对齐规则进行显示*/
}

.imagecontainer {
  width:100%;
  min-height:700px;
  /* display: flex;
  align-items: flex-start; */
}
.img1 {
  display: inline-block;
  width: 100%;
  height: auto;
}
.image {
  /* position: absolute;
  top: 0;
  left: 0; */
  width: 100%;
  min-width: 1900px;
  height: auto;
  /* background-image: url('../../assets/images/首页/u6.png') no-repeat; */

}
.caijingleida {
  position: absolute;
  top: 80px;
  left: 50px;
  width: 300px;
  height:auto;
}
.text1 {
  position: absolute;
  top: 200px;
  left: 100px;
  width: 500px;
  height:auto;
}
.text2 {
  position: absolute;
  top: 280px;
  left: 120px;
  width: 790px;
  height:auto;
}

</style>
<template>
  <div id="bottominfo">
    <ul class="address">
      <li><h1>总部地址</h1></li>
      <li><img src="../../assets/images/首页/u71.svg"/>+522-123-456</li>
      <li><img src="../../assets/images/首页/u73.svg"/>+522-123-456</li>
      <li><img src="../../assets/images/首页/u75.svg"/>上海市浦东新区上川路</li>
    </ul>
    <ul class="contact">
      <li><h1>联系我们</h1></li>
      <li>热线电话：+86-111-1111</li>
      <li>服务时间：12:00-16:00</li>
      <li>邮箱：123@CJLD.com</li>
      <li>
        <img src="../../assets/images/首页/u79.svg">
        <img src="../../assets/images/首页/u80.svg">
        <img src="../../assets/images/首页/u81.svg">
        <img src="../../assets/images/首页/u82.svg"></li>
    </ul>
    <ul class="plat">
      <li><h1>关联平台</h1></li>
      <li>中国电信-天翼云</li>
    </ul>
    <span>©2024财经雷达有限公司版权所有    经营许可证A0.B0.000-000000</span>
  </div>
  <div id="last"></div>
</template>

<script setup>

</script>

<style scoped>
#bottominfo {
  position: relative;
  /* padding-left: 200px; */
  width:100%;
  min-width: 1900px;
  height: 328px;
  background-color: rgb(53,53,53);
  display: flex;
  gap: 250px;
}
#last {
  width: 100%;
  min-width: 1900px;
  height: 50px;
  background-color: rgb(18,18,18);
}
ul {
  padding-left: 200px;
}
li h1 {
  color: white;
}
li {
  list-style: none;
  padding: 10px 0;
  height: 28px;
  font-weight: 550;
  line-height: 28px;
  color: rgb(181,181,181)
}
.address li{
  display: flex;
  align-items: center;
}
.address:last-child img{
  margin-right: 8px;
}
.contact li:nth-child(5){
  display: flex;
  gap: 20px;
}
span {
  position: absolute;
  bottom: 10px;
  right: 300px;
  font-size: 20px;
  color: rgb(181,181,181)
}
</style>
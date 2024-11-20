<template>
  <div id="container">
    <div class="func-container">
      <div v-for="item in items" :key="item.title" class="func">
        <img :src="item.img" alt="Image" />
        <h1>{{ item.title }}</h1>
        <p>{{ item.desc }}</p>
        <!-- 如果你需要链接，可以取消注释并修改 -->
        <!-- <a :href="item.link" target="_blank">了解详情</a> -->
      </div>
    </div>
    <div class="slogan">
      <h1>"精准捕捉市场脉动，洞察投资机遇"</h1>
      <h3>全面监测市场动向，精准解析投资数据，助您在复杂的金融世界中洞察先机，把握每一个财富机会。</h3>
    </div>
  </div>
</template>

<script setup>
import u18 from '../../assets/images/首页/u18.png';
import u24 from '../../assets/images/首页/u24.png';
import u30 from '../../assets/images/首页/u30.png';
import u36 from '../../assets/images/首页/u36.png';

const items = [
  { img: u18, title: '多模态情感分析', desc: '平台采用先进的多模态情感分析技术，融合文本、声音、图像等多种数据源，升入解读股票市场的情感动态。' },
  { img: u24, title: '智能数据处理', desc: '平台集成强大的数据处理能力，自动清洗、转换和标准化数据，确保分析结果的准确性和可靠性。' },
  { img: u30, title: '用户友好界面', desc: '简洁直观的用户界面设计，让用户轻松上手，快速筛选行业、上传素材，享受一站式股票分析服务。' },
  { img: u36, title: '综合投资建议', desc: '平台不仅关注股票本身的表现，还结合社会影响因素，为用户提供全面、客观的投资建议，助力用户做出明智决策' }
];
</script>

<style scoped>
#container {
  background-image: url('../../assets/images/首页/u4.svg');
  background-size:100% 100%;
  height: 1000px;
}
.func-container {
  min-width: 1900px;
  height: 580px;
  display: flex;
  flex-wrap: wrap; /* 使得子项能够换行 */
  gap: 20px; /* 每个子项之间的间隔 */
  justify-content: space-evenly;
}

.func {
  max-width: 15%; /* 每个项至少占 25% 宽度 */
  height: 500px;
  display: flex;
  flex-direction: column; /* 垂直排列图片、标题、描述 */
  align-items: center; /* 居中对齐内容 */
  justify-content: center;
  text-align: center;
}

.func img {
  max-width: 30%; /* 图片宽度适应容器 */
  height: auto;
}

.func h1 {
  margin: 20px 0; /* 标题上下间距 */
  font-size: 2em;
}

p {
  padding-top: 20px;
  font-size: 1.2em;
  color: black;
}
.slogan {
  width: 100%;
  height: 200px;
  margin-bottom: 100px;
}
.slogan h1 {
  font-size: 3em;
  text-align: center;
}
.slogan h3 {
  padding-top: 20px;
  font-size: 2.2em;
  text-align: center;
  color: #666;
  font-weight: 400;
}
</style>


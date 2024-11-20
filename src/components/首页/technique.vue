<style scoped>
.outer-container {
  display: flex;
  justify-content: center;  /* 水平居中 */
  align-items: center;  /* 垂直居中 */
  height: 1000px;
  background-color: rgba(0,0,0,0.5);
  background-image: url('../../assets/images/首页/u40.png');
  background-size: cover;  /* 确保背景图覆盖容器 */
  position: relative;  /* 必须加上relative，伪元素才能相对于该元素定位 */
  z-index: 5;
}
.outer-container::after {
  content: '';  /* 伪元素必须设置content */
  position: absolute;  /* 绝对定位 */
  top: 0; left: 0;
  right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);  /* 半透明黑色图层 */
  pointer-events: none;  /* 防止图层干扰点击 */
}

.container {
  display: flex;
  width: 100%;
  max-width: 1800px;  /* 设置最大宽度来缩小组件 */
  height: 600px;
  background-color: rgba(0,0,0,0);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.menu {
  width: 400px;
  /* background-color: #f4f4f4; */
  /* border-right: 2px solid #ddd; */
  /* padding: 20px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* gap: 10px; */
}

.menu-item {
  flex: 1;
  /* padding: 10px; */
  color: #fff;
  font-size: 30px;
  text-shadow: 0 0 1px white,0 0 3px white;
  background-color: rgba(0,0,0,0.6);
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.menu-item:hover {
  background-color: #007BFF;
}

.menu-item.active {
  background-color: #007BFF;
  color: white;
}

.content {
  width: 1400px;
  padding: 5px 20px 0px 90px;
  /* background-color: #fff; */
  overflow-y: auto;
}
.gap{
  width: 100%;
  height: 140px;
}

.introduce {
  margin-bottom: 20px;
  font-size: 20px;
}
.textbox {
  width: 100%;
  height: 400px;
}

h1 {
  font-size: 40px;
  color: #fff;
}

h2 {
  font-size: 30px;
  margin-top: 10px;
  color: #fff;
}
p {
  font-size: 20px;
  color: rgb(181,181,181)
}
.spanbox {
  /* position:absolute;
  bottom: 0; */
  display: flex;
  width: 50%;
  height: 100px;

  justify-content: space-between;
  align-items: center;

}
span {
  width: 200px;
  height: 100px;
  color: #f8f8f8;
  font-size: 25px;
  line-height: 100px;
  text-align: center;
  background-color: rgba(0,0,0,0.25);
  border: 1px solid #fff;
}
</style>




<template>
  <div class="outer-container">
    <div class="container">
      <!-- 左侧菜单部分 -->
      <div class="menu">
        <div 
          v-for="item in text" 
          :key="item.title" 
          class="menu-item" 
          @mouseenter="showContent(item)" 
          @click="setSelectedItem(item)" 
          :class="{'active': item === selectedItem}">
          {{ item.title }}
        </div>
      </div>

      <!-- 右侧内容部分 -->
      <div class="content">
        <h1 v-if="selectedItem">{{ selectedItem.title1 }}</h1>
        <div class="textbox">
          <div class="gap">
            <p v-if="selectedItem" class="introduce">{{ selectedItem.introduce }}</p>
          </div>
          <h2 v-if="selectedItem">技术简介</h2>
          <p v-if="selectedItem" v-html="selectedItem.technique"></p>
          </div>
        <div class="spanbox">
          <span>了解详情</span>
          <span>相关案例</span>
        </div>
      </div>
    </div>
  </div>
</template>




<script setup>
import {ref} from 'vue';

const selectedItem = ref(null);
const text = [
  {
    title: '多模态数据处理',
    title1: '多模态数据处理',
    introduce: '本项目的核心创新之一是其先进的多模态数据处理技术。与传统的单一数据源分析方法不同，本项目集成了文本、语音、图像和视频等多种数据类型，进行全面的市场情绪分析。通过多模态数据处理，系统能够从不同角度捕捉和分析信息，实现了对市场动态的更全面理解。',
    technique: `语音分析：应用语音识别技术和情感分析系统，对视频和音频中的语调、情感进行分析，捕捉分析师或评论者的态度和情绪。通过分析语音的语调和情境，可以了解市场评论者的情绪波动及其对市场的看法。<br/>
              图像分析：虽然图像模态的应用不如文本和语音普遍，但系统仍通过分析公司财报中的图表、收入曲线和利润变化，提供辅助的财务状况理解。此外，结合 Google Vision AI 的图像识别能力，可以从图像中提取有价值的信息。<br/>
              视频分析：整合视频内容，利用视频帧提取技术和情感分析，对市场广告、公司新闻发布会等进行详细分析。通过分析视频帧中的关键信息，系统能够提供对公司战略、市场反应的深度见解。`
  },
  {
    title: '自定义素材与指标',
    title1: '自定义素材与指标',
    introduce: '用户可以根据个人投资需求和偏好，自定义素材与指标。这种个性化服务不仅提升了用户体验，也增强了系统的灵活性和适应性。',
    technique: `自定义词典:用户可以将特定的行业术语、公司名称或市场热词添加到系统词典中，以便在分析数据时系统对这些词汇给予特别关注。这种自定义能力使得系统能够提供更加精准的行业或个股分析，符合用户的个性化需求。<br/>
              情感指标自定义:用户可以根据自己的分析框架，调整情感分析的敏感度或设定特定的情感阈值。通过这种方式，系统输出的情感分析结果将更加符合用户的具体需求，从而提供更加有针对性的投资建议。`
  },
  {
    title: '多维度综合打分（多模型融合）',
    title1: '多维度综合打分（多模型融合）',
    introduce: '本平台在数据分析中引入了多维度综合打分的方法，通过多模型融合和新函数生成，对不同维度的数据进行综合打分。这一创新显著提升了分析结果的综合性和可靠性。',
    technique: `多模型融合:系统集成了多种模型，包括文本情感分析模型、语音情感分析模型、图像识别模型和视频分析模型。通过将这些模型的结果进行融合，系统能够更全面地评估市场情绪和投资风险。例如，文本分析模型可能会识别出某一新闻的负面情绪，而语音分析模型可以提供对该新闻发布者的情绪态度的补充，图像识别模型则可能揭示出图表中的财务数据变化。<br/>
              新函数生成:为了处理和综合多维度的数据，系统开发了新的函数，这些函数结合了来自不同模型的分析结果从而生成综合打分。这种综合打分机制能够更全面地评估市场动态，提供更加准确的投资建议。`
  },
]
// 初始化时，默认选择第一个菜单项
selectedItem.value = text[0];

const showContent = (item) => {
  selectedItem.value = item;
}

const hideContent = () => {
  selectedItem.value = null;
}
</script>

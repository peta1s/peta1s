<template>
  <div class="layout">
    <!-- 左侧导航栏 -->
    <div class="sidebar">
      <ul class="menu">
        <li @click="selectItem(1)" :class="{'active': activeIndex === 1}">
          <span>平台介绍</span>
        </li>
        <li @click="selectItem(2)" :class="{'active': activeIndex === 2}">
          <span>用户操作手册</span>
        </li>
        <li @click="toggleDropdown" :class="{'active': activeIndex === 3}">
          <span>技术模型</span>
          <i :class="{'icon-rotate': dropdownOpen}" class="icon"><img src="../../assets/images/平台介绍/u170.svg"></i>
        </li>
        <!-- 下拉菜单 -->
        <ul v-show="dropdownOpen" class="dropdown">
          <li @click="selectItem(4)" :class="{'active': activeIndex === 4}">· 情感分析模型</li>
          <li @click="selectItem(5)" :class="{'active': activeIndex === 5}">· 爬虫</li>
          <li @click="selectItem(6)" :class="{'active': activeIndex === 6}">· 音频转文字</li>
          <li @click="selectItem(7)" :class="{'active': activeIndex === 7}">· OCR模型</li>
          <li @click="selectItem(8)" :class="{'active': activeIndex === 8}">· YOLOV5</li>
        </ul>
      </ul>
    </div>

    <!-- 右侧内容区 -->
    <div class="content">
      <div v-if="activeIndex === 1">
        <h1>平台介绍</h1>
        <div class="intro">
          <p>本平台是一个专门为股票投资者设计的智能分析工具。它运用了先进的多模态情感分析技术，能够深入挖掘和理解股票市场中的各种信息，帮助投资者更准确地把握市场趋势和股票表现。</p>
          <p>本平台非常易于使用，用户只需简单操作，就可以获取全面的股票分析报告。无论你是股票投资的新手还是老手，都可以在这个平台上找到适合自己的分析方法和工具。</p>
          <p>此外，本平台还具备强大的数据处理能力。它可以自动收集、整理和分析大量的股票数据，为用户提供准确、及时的市场信息。用户可以根据自己的需求，灵活定制分析报告和提醒，以便更好地掌握市场动态，作为开发者，我们致力于一个智能、便捷、实用的股票分析工具，旨在帮助投资者更好地了解市场、把握机会、降低风险。无论你是想要投资股票还是想要提升自己的投资技能，本平台都能为你提供有力的支持和帮助。</p>
        </div>
        <span>
          <img src="../../assets/images/平台介绍/u183.png" alt="">
        </span>
      </div>
      <div v-if="activeIndex === 2">
        <h1>用户操作手册</h1>
        <div class="intro">
          <p>欢迎使用财经雷达!本操作手册旨在帮助您快速掌握如何使用我们的平台，以便更高效地进行股票市场分析。</p>
          <h4>一、平台概述</h4>
          <p>财经雷达是一个基于多模态情感分析的股票市场分析工具。我们利用先进的技术，整合文本、语音、视频等多种信息源,为您提供全面、准确的股票市场分析报告。通过我们的平台，您可以轻松筛选股票、上传素材、进行情感分析，并查看详细的结果报告。</p>
          <h4>二、登录与注册</h4>
          <p>(注:本手册假设用户已完成登录与注册过程，因此此部分内容省略</p>
          <h4>三、主界面导航</h4>
          <p>登录后，您将看到财经雷达的主界面。主界面包括顶部的导航栏和中部的功能区域。导航栏包含项目l0g0、名称和四个主要功能按钮:首页、模型介绍、数据分析、结果报告。您可以通过点击导航栏上的按钮快速切换至相应的功能页面。</p>
          <h4>四、数据分析操作</h4>
          <p>股票筛选:在数据分析页面，您可以首先进行股票选。选择您感兴趣的行业类别，系统将展示符合条件的公司列表和股票代码。您可以点击股票代码查看详细信息。</p>
          <p>索材上传:在数据分析页面，您可以上传视频、音频、文本等素材。支持本地文件上传和在线链接。上传完成后，系统将自动提取关键词并进行词频统计。</p>
          <p>分析处理:在素材上传后，您需要进行分析处理。选择导入模型的情感词、指标等。部分信息为必选项，以确保分析的准确性和有效性。其余部分则通过主成分分析并按照重要性打分罗列给您选取。完成这些设置后，即可提交分析请求并等待结果。</p>
          <h4>五、结果报告</h4>
          <p>分析完成后，您可以在结果报告页面查看详细的分析报告。报告将以图表和文字的形式展示股票的相关信息，包括市场趋势、投资者情绪变化等。这些信息将帮助您全面了解股票的表现和潜在风险。</p>
          <h4>六、注意事项</h4>
          <p>请确保上传的文件符合平台要求，避免病毒或恶意软件的攻击。</p>
          <p>定期更新账户信息和密码，保障账户安全。</p>
          <p>投资有风险，使用本系统提供的信息时请谨慎评估。</p>
          <h4>七、客服支持</h4>
          <p>如果您在使用过程中遇到任何问题或需要帮助，可以通过"联系我们"页面获取客服支持。我们将竭诚为您解答疑问，提供优质的服务。</p>
          <p>感谢您选择财经雷达!祝您投资顺利!</p>
        </div>
      </div>
      <div v-if="activeIndex === 3">显示一级菜单3的内容</div>
      <div v-if="activeIndex === 4">显示子菜单1的内容</div>
      <div v-if="activeIndex === 5">显示子菜单2的内容</div>
      <div v-if="activeIndex === 6">显示子菜单3的内容</div>
      <div v-if="activeIndex === 7">显示子菜单4的内容</div>
      <div v-if="activeIndex === 8">显示子菜单5的内容</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 记录当前激活的菜单项
const activeIndex = ref(1);

// 控制下拉菜单的展开与收起
const dropdownOpen = ref(false);

// 选择某一项菜单
const selectItem = (index) => {
  activeIndex.value = index;
  // dropdownOpen.value = false;  // 点击其他菜单时关闭下拉菜单
};

// 切换下拉菜单的展开状态
const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};
</script>

<style scoped>
/* 布局 */
.layout {
  display: flex;
  width:100%;
  min-width: 1900px;
  height: 100%;
}

.sidebar {
  width: 200px;
  height: 100%;
  background-color: white;
  color: white;
  box-shadow: rgb(180, 180, 180) 3px 3px 3.5px;
  border-top-right-radius: 5px 5px;
  border-bottom-right-radius: 5px 5px;
}

.menu {
  list-style-type: none;
  padding-left: 0;
}

.menu li {
  width: 100%;
  height:73px;
  text-align: center;
  line-height: 73px;
  cursor: pointer;
  /* border-bottom: 1px solid #444; */
}
span {
  color: rgb(121,121,121);
}

.menu li:hover {
  background-color: rgb(151,151,151);
  font-weight: 550;
}

.menu .active {
  background-color: rgb(224,223,223);
}

/* 下拉菜单样式 */
.dropdown {
  padding-left: 0;
  margin-top: 5px;
  background-color: white;
}

.dropdown li {
  list-style-type: disc;
  color: rgb(121,121,121);
  /* margin-left: 20px; */
  cursor: pointer;
}

.dropdown li:hover {
  background-color: rgb(151,151,151);
}

.icon {
  margin-left: 10px;
}

.icon-rotate {
  transform: rotate(180deg);
}

/* 右侧内容区 */
.content {
  width: 100%;
  padding: 20px 20px 20px 50px;
  flex-grow: 1;
  border-top: 1px solid black;
}
.content h1 {
  padding-bottom: 20px
}
.intro {
  width: 100%;
  font-size: 20px;
  letter-spacing: 3px;
  padding-top: 20px;
  border-top: 2px solid black;
}
.content img {
  width: 524px;
  height: 240px;
}
.content span {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
</style>

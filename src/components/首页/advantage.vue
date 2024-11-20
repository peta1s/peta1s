<template>
  <div class="container">
    <!-- 上方的三个正方形盒子 -->
    <div class="top-boxes">
      <div 
        v-for="item in boxes" 
        :key="item.id" 
        class="box" 
        @mouseenter="showContent(item)" 
        @click="setSelectedItem(item)">
        {{ item.title }}
      </div>
    </div>

    <!-- 下方的大盒子 -->
    <div class="bottom-box">
      <div class="content">
        <h1 v-if="selectedItem">{{ selectedItem.title }}</h1>
        <p v-if="selectedItem" class="description">{{ selectedItem.description }}</p>
        <h2 v-if="selectedItem">详细内容</h2>
        <p v-if="selectedItem" v-html="selectedItem.details"></p>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';

// 定义每个上方盒子和对应的内容
const boxes = [
  {
    id: 1,
    title: '盒子 1',
    description: '这是第一个盒子的描述。',
    details: '详细内容：第一个盒子包含了所有与它相关的信息，用户可以点击查看更详细的内容。'
  },
  {
    id: 2,
    title: '盒子 2',
    description: '这是第二个盒子的描述。',
    details: '详细内容：第二个盒子包含了与它相关的不同信息，点击此盒子查看详情。'
  },
  {
    id: 3,
    title: '盒子 3',
    description: '这是第三个盒子的描述。',
    details: '详细内容：第三个盒子展示了第三类信息，点击此盒子可以查看详细信息。'
  },
  {
    id: 4,
    title: '盒子 4',
    description: '这是第四个盒子的描述。',
    details: '详细内容：第四个盒子展示了第四类信息，点击此盒子可以查看详细信息。'
  }
];

// 默认显示第一个盒子的内容
const selectedItem = ref(boxes[0]);

// 下方大盒子的宽度与上方三个盒子对齐
const boxWidth = 600;  // 这个宽度与上方的三个盒子保持一致

// 鼠标悬停时更新内容
const showContent = (item) => {
  selectedItem.value = item;
};

// 点击盒子时更新内容
const setSelectedItem = (item) => {
  selectedItem.value = item;
};
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;  /* 让整个组件居中 */
  width: 100%;
  min-width: 1900px;
  height: 1100px;
  background-image: url('../../assets/images/首页/u3.svg');  /* 背景色 */
  background-size: 10% 105%;
  /* padding: 20px; */
  justify-content: space-evenly;
}

.top-boxes {
  display: flex;
  justify-content: space-between;
  gap: 20px;  /* 每个盒子之间的间距 */
  width: 80%;  /* 上方三个盒子的宽度 */
  margin-bottom: 20px;
  padding-top: 20px;
}

.box {
  width: 250px;  /* 正方形的宽度 */
  height: 250px;  /* 正方形的高度 */
  background-color: #4CAF50;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.box:hover {
  background-color: #45a049;  /* 悬停时背景颜色 */
}

.bottom-box {
  width: 80%;  /* 下方大盒子的宽度与上方三个盒子对齐 */
  height: 600px;
  margin-bottom: 20px;
  background-color: white;
  /* padding: 20px; */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow-y: auto;  /* 如果内容超出则出现滚动条 */
}
.content {
  padding: 20px;
}
.description {
  font-size: 16px;
}

h1 {
  font-size: 26px;
}

h2 {
  font-size: 22px;
  margin-top: 10px;
}

</style>

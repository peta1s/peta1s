import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import './assets/main.css'
import IntroView from './components/平台介绍/IntroView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './components/首页/HomeView.vue'

// const myrouter = createRouter({
//   history: createWebHashHistory(),
//   routes: [
//     { path: '/', component: HomeView },
//     { path: '/about', component: IntroView }
//   ]
// })
const app = createApp(App)

app.use(router)

app.mount('#app')
app.use(ElementPlus)

//功能上看与 POM 无异了

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {createPersistedState} from "pinia-persistedstate-plugin";

//导入pinia
import {createPinia} from 'pinia'
const pinia = createPinia();
const persist = createPersistedState()
pinia.use(persist)

//导入路由
import router from '@/router'

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(ElementPlus);
app.mount('#app')

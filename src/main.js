//功能上看与 POM 无异了

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {createPersistedState} from "pinia-persistedstate-plugin";
import zhCn from 'element-plus/es/locale/lang/zh-cn' // 引入element-plus的中文语言包

//导入pinia
import {createPinia} from 'pinia'
const pinia = createPinia();
const persist = createPersistedState()
pinia.use(persist)

//导入路由
import router from 'src/ui/router'

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(ElementPlus, { locale: zhCn }); // 配置ElementPlus并全局启用中文
app.mount('#app')

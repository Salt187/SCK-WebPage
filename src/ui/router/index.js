//导入路由包
import {createRouter,createWebHistory} from 'vue-router'

//导入组件  需要路由转发的页面
import Login from "@/views/Backend/Login.vue";
import Table from "@/views/Backend/Workers/WorkerTable.vue";
import Layout from "@/views/Backend/Layout.vue";
import AddWorker from "@/views/Backend/Workers/AddWorker.vue";
import AdminInfo from "@/views/Backend/Workers/AdminInfo.vue";
import AdminLogin from "@/views/Backend/Login/AdminLogin.vue";
import AdminRegister from "@/views/Backend/Login/AdminRegister.vue";
import MainPage from "@/views/Frontend/Stage/MainPage.vue";
import stageBanner from "@/views/Frontend/Stage/MainItems/stageBanner.vue";
import church from "@/views/Frontend/Church/church.vue";
import market from "@/views/Frontend/Market/market.vue";
import Frontend from "@/views/Frontend/Frontend.vue";

//定义路由关系
const routes = [
    //     路径          配置路由的页面组件        默认加载的子组件
    {path: '/', component: Login,redirect: '/login/adminLogin' ,children:[
        // 定义子组件
            {path: '/login/adminLogin',component:AdminLogin},
            {path: '/login/adminRegister',component:AdminRegister},

        ]},
    {path: '/data', component: Layout,redirect:'/data/table' ,children:[
            {path: '/data/table', component: Table},
            {path: '/data/admin', component: AdminInfo},
            {path: '/data/add', component: AddWorker},
        ]},

    //前台路由
    {path: '/frontend', component: Frontend,redirect:'/frontend/stage' ,children:[
            {path: '/frontend/stage', component: MainPage,redirect:'/frontend/stage/banner' ,children:[
                    {path: '/frontend/stage/banner',component: stageBanner}
                ]},
            {path: '/frontend/market', component: market},
            {path: '/frontend/church', component: church,meta:{title:'教堂',requiresAuth:true}}
        ]},

]

//创建路由器
const router = createRouter(
    {
        //配置路由关系
        routes:routes,
        //配置路由模式
        history:createWebHistory()
    }
)

import {useTokenStore} from '@/stores/Token.js';
//全局路由守卫
router.beforeEach(
    (to, from, next)=>{
        const tokenStore = useTokenStore();   //获取实例
        //双!!转布尔值
        const isLogin = useTokenStore().hasToken();
        console.log(isLogin);

        if(!isLogin&&to.meta.requiresAuth){
            next('/')
            return;
        }

        if(to.matched.length===0){
            //定向到丢失页
            next('/')
            return;
        }


        console.log("全局路由守卫触发：此时路由还未跳转")
        next();
    }
)
router.beforeResolve(
    ()=>{
        console.log("全局路由守卫触发：此时路由即将跳转，目标组件已经解析")
    }
)

router.afterEach(
    ()=>{
        console.log("路由已跳转")
    }
)




//导出路由
export default router;

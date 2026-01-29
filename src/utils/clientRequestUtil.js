import axios from 'axios';

//配置URL
const ServicePort = {
    AdminModule: 50010,
    ClientModule: 51010,
    ChurchModule: 51020
}

let port=ServicePort['ClientModule'];

function setTargetURL(serviceName){
    port=ServicePort[serviceName];
}

const baseURL = `http://localhost:${port}`;
// const baseURL = 'http://26.88.199.234:80';//必须有协议头，否则视为相对路径


//  转为 axios实例对象
const instance = axios.create()


//定义拦截器，为请求返回后的回调函数
//获取路由，直接访问会跳转到登录页
import router from 'src/ui/router'
//添加请求拦截器  导入store
import {useTokenStore} from "@/stores/Token.js"
import {ElMessage} from "element-plus";


//请求发送前的回调函数
instance.interceptors.request.use(
    (config)=>{
        //设置URL
        config.baseURL=`http://localhost:${port}`;

        //获取实例
        const tokenStore = useTokenStore();
        //若有token
        if(tokenStore.token){
            //加入token   添加统一的请求头（如果有token的话）
            console.log("有token")
            console.log(tokenStore.token);

            config.headers.Authorization = tokenStore.token;
        }
        config.headers['Content-Type'] = 'application/json;charset=utf-8';
        return config;
    },
    (err)=>{
        //请求错误的回调（极少触发，主要用于捕获请求发送前的本地代码错误或主动中断逻辑）
        return Promise.reject(err);
    }
)


instance.interceptors.response.use(
    Result=>{
        return Result.data;
    },err=>{
        if(err.response.status === 401){
            console.log("触发")
            ElMessage.error('请先登录')
            //路由转发页面
            router.push('/login');
            return Promise.reject(err);
        }else{
            ElMessage.error('服务异常')
        }
    })
//声明为默认的对外
export default{
    instance,
    setTargetURL
}



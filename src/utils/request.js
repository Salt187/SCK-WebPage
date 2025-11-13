//request主要封装了回调函数，避免重复代码

//请求工具类     为指定请求增加回调函数的封装功能，返回数据
//  axios导包
import axios from 'axios';
//  定义固定端口前缀
const baseURL = 'http://localhost:80';
// const baseURL = 'http://26.88.199.234:80';//必须有协议头，否则视为相对路径


//  转为 axios实例对象
const instance = axios.create({baseURL})


//定义拦截器，为请求返回后的回调函数
//获取路由，直接访问会跳转到登录页
// import {useRouter} from "vue-router";
// const router = useRouter();
import router from '@/router'
//添加请求拦截器  导入store
import {useTokenStore} from "@/stores/Token.js"
import {ElMessage} from "element-plus";
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
export default instance;


//请求发送前的回调函数，仅用于添加token（如果有）
instance.interceptors.request.use(
    (config)=>{
        //正常请求回调
        //获取实例
        const tokenStore = useTokenStore();
        //若有token
        if(tokenStore.token){
            //加入token   添加统一的请求头（如果有token的话）
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

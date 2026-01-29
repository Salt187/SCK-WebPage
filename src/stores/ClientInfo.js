import {defineStore} from "pinia";
import {ref} from "vue";

export const useClientInfoStore = defineStore(
    //标识
    "ClientInfo",

    //状态函数
    ()=>{
        //设置响应式变量
        const clientName = ref('');
        //定义修改
        const setClientName = (name)=>{
            clientName.value = name;
        }
        //定义移除
        const removeClientName = ()=>{
            clientName.value = '';
        }
        //返回内容
        return{
            clientName,setClientName,removeClientName
        }
    },

    //可选配置
    {
        persist: true    //持久化存储
    }
)
//pinia  可以多个组件之间共享状态(如共享token)

//定义store
import {defineStore} from 'pinia'
import {ref} from "vue";


//        参数1：定义唯一的一个名字     ；  参数2：一个函数，可以定义状态的所有的内容        返回值是一个函数，可以获取store
export const useTokenStore = defineStore('Token', ()=>{
    //定义状态内容

    //1、响应式变量
    const token = ref('');

    //2、定义函数  修改Token
    const setToken = (Info) => {
        token.value = Info;
    }

    //3、定义函数移除Token
    const removeToken = () => {
        token.value = '';
    }

    //返回数据和函数
    return {
        token,setToken,removeToken
    }

},
    {
        // persist: true    //持久化存储
    }
);

//pinia是内存存储，一刷新就会丢失
//需要用persist做持久化
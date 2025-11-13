import {defineStore} from "pinia";
import {ref} from "vue";

export const useAdminInfoStore = defineStore("AdminInfo", ()=>{
    //设置响应式变量
    const adminName = ref('');
    //定义修改
    const setAdminName = (name)=>{
        adminName.value = name;
    }
    //定义移除
    const removeAdminName = ()=>{
        adminName.value = '';
    }
    //返回内容
    return{
        adminName,setAdminName,removeAdminName
    }

})

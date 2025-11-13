//基于request完善功能
//api主要指定了路径          避免外部验证token

//导入工具类，自动增加回调函数
import request from '@/utils/request.js'

//提供对外的接口函数                 //参数
export const WorkerSelectByNameService = (Info)=>{
    //返回结果      发送post请求    路径
    return request.post('/xry/Worker/selectByName',Info);
}
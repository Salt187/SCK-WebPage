import request from '@/utils/request.js'

//提供对外的接口函数                 //参数
export const AddNewWorkerService = (Info)=>{
    //返回结果
    return request.post('/xry/Worker/insertWorker',Info);
}
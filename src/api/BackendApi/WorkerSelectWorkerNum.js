import request from '@/utils/request.js'

export const WorkerSelectNumService = ()=>{
    //返回结果      发送get请求    路径
    return request.get('/xry/Worker/selectWorkerNum');
}
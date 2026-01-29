import request from "@/utils/request.js";

export const WorkerSelect = (Info)=>{
    //已经在拦截器中自动添加了token（若有token）
    return request.post('/xry/Worker/selectWorker',Info);
}
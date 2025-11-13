import request from "@/utils/request.js";

export const AdminInfoSelect = ()=>{
    //已经在拦截器中自动添加了token（若有token）
    return request.get('/xry/Admin/adminInfo');
}
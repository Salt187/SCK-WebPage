import requestUtil from "@/utils/clientRequestUtil.js";

//提供对外的接口函数                 //参数
export const userLoginService = (Info)=> {
    requestUtil.setTargetURL('ClientModule')

    //返回结果      发送post请求    路径
    return requestUtil.instance.post('/xry/Client/login', Info);
}
import clientRequestUtil from "@/utils/clientRequestUtil.js";

export const ChurchDivination = (Info)=>{
    clientRequestUtil.setTargetURL('ChurchModule')

    //已经在拦截器中自动添加了token（若有token）
    return clientRequestUtil.instance.post('/xry/church/divination',Info);
}
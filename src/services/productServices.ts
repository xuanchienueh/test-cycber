import { DOMAIN_API } from "../utils/setting/config"
import { http } from "./baseService"


export const productServices = { 
    getProductSer(){ 
        return http.get<HttpResponse<any>>(`${DOMAIN_API}/Product`)
    },

    getDetailProductSer(id:string | undefined){ 
        return http.get<HttpResponse<any>>(`${DOMAIN_API}/Product/getbyid?id=${id}`)
    }
}
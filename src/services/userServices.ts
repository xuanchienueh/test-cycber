import { DOMAIN_API } from "../utils/setting/config"
import { http } from "./baseService"

export const userServices = { 
    signupService(data: any){ 
        return http.post<HttpResponse<any>>(`${DOMAIN_API}/Users/signup`,data)
    }
}
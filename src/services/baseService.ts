import axios from "axios";
import { TOKEN } from "../utils/setting/config";

type Method = "get" | "post" | "put" | "patch" | "delete";

export class BaseServices { 
    private setupHeader() {
        return {
          token: `${localStorage.getItem(TOKEN)}`,
        };
      }

      private async callApi<T>(method: Method, ...param: [url: string, data?: any]) {
        try {
          const result = await axios[method]<T>(...param, {
            headers: this.setupHeader(),
          });
    
          return {
            data: result.data,
            statusCode: result.status,
          } as unknown as T;
        } catch (err) {
          if (axios.isAxiosError(err)) {
            return {
              message: err.response?.statusText,
              statusCode: err.response?.status,
            } as unknown as T;
          }
        }
      }

      get<T>(url: string) {
        return this.callApi<T>("get", url);
      }
    
      post<T>(url: string, data?: any) {
        return this.callApi<T>("post", url, data);
      }
    
      put<T>(url: string, data?: any) {
        return this.callApi<T>("put", url, data);
      }
      patch<T>(url: string, data?: any) {
        return this.callApi<T>("patch", url, data);
      }
    
      delete<T>(url: string, data?: any) {
        return this.callApi<T>("delete", url, data);
      }
}

export const http = new BaseServices()
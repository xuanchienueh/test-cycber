import { productServices } from './../../services/productServices';
import { productAct } from './product.reducer';

export const getProductAct = (): any => { 
    return async (dispatch: any) => { 

        try {
            const response = await productServices.getProductSer()
            dispatch(productAct.getProduct(response?.data?.content))
         } catch(err){ 
            console.log('getProduct fail', err)
        }
    }}

export const getProducDetailtAct = (id: string | undefined): any => { 
    return async (dispatch: any) => {
        try { 
            const response = await productServices.getDetailProductSer(id)
            dispatch(productAct.getDetailProduct(response?.data?.content))

        } catch(err){
            console.log('getProducDetailtAct fail', err )
         }
}}
export type productType  = { 
    id: number,
    name: string,
    alias: string,
    price: number,
    description: string,
    size:string,
    shortDescription: string,
    quantity: number,
    deleted: boolean,
    categories: [],
    relatedProducts: number[],
    feature: boolean,
    image:string

}
export type productDetail = { 
    id: number,
    name: string,
    alias: string,
    price: number,
    feature:boolean,
    description: string,
    size:string[],
    shortDescription: string,
    quantity: number,
    image: string,
    category: any,
    relatedProducts: any,
}
import { Iproduct } from "./iproduct";

export interface Icart {
    _id?:string,
    items: {
        productId:Iproduct,
        quantity:number,
        price:number,
        sellerId:any,
    }[],
    userId?:string,
    totalCount?:number,
    totalPrice:number,
}

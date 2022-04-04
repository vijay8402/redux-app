import {ADD_TO_CART,REMOVE_TO_CART} from '../constansts'
export const addToCart=(data)=>{
        return {
            data:data,
            type:ADD_TO_CART
        }
}


export const removeToCart=(data)=>{
    return {
        data:data,
        type:REMOVE_TO_CART
    }
}



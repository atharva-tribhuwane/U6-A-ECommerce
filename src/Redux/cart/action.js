export const CART_LOADING = "CART_LOADING";
export const CART_SUCCESS = "CART_SUCCESS";
export const CART_ERROR = "CART_ERROR";



export const cartLoading  = ()=>({
    type:CART_LOADING
})
export const cartSuccess  = (payLoad)=>({
    type:CART_SUCCESS,
    payLoad
})
export const carError  = ()=>({
    type:CART_ERROR
})
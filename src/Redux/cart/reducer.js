import {CART_LOADING, CART_SUCCESS, CART_ERROR} from "./action";

const init = {
    loading:false,
    error:false,
    cart:[]
}


export const cartReducer = (store=init, action)=>{
    console.log("in prodreducer action is ", store);
        switch (action.type) {
            case CART_LOADING:{
                return {...store, loading:true}
            }
            case CART_SUCCESS:{
                return {...store, cart:[...store.cart, action.payLoad], loading:false, error:false}
            }
            case CART_ERROR:{
                return {...store, loading:false,  error:true}
            }
        
            default:{
                return store
            }
        }
}

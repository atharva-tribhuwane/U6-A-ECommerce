import {GET_DATA} from "./action";

const init = {
    products:[]
}


export const ProdReducer = (store=init, action)=>{
    console.log("in prodreducer action is ", store);
        switch (action.type) {
            case GET_DATA:{
                return {...store, products:[...store.products, action.payLoad]}
            }
        
            default:{
                return store
            }
        }
}

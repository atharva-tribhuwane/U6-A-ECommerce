import { LOGIN_FAILED, LOGIN_LOADING } from "./action";
import { LOGIN_SUCCESS } from "./action";
import { LOGOUT } from "./action";



const init = {
    token: null,
    error: false,
    loading: false
}
export const Loginreducer = (store =  init , action) => {
    console.log("in actionreducer action is ", action);
    switch (action.type) {
        case LOGIN_LOADING :{
            return{...store, loading:true }
        }
        case LOGIN_SUCCESS :{
            return{...store, loading:false, error:false, token:action.payLoad }
        }
        case LOGIN_FAILED :{
            return{...store, loading:false, error:true }
        }
        case LOGOUT :{
            return{...store, loading:false, error:false, token:null }
        }
        default:{
            return store
        }
    }
}
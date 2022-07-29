import { LOGIN_FAILED, LOGIN_LOADING } from "./action";
import { LOGIN_SUCCESS } from "./action";
import { LOGIN_ERROR } from "./action";
import { Loginreducer } from "./Login/reducer";
import { legacy_createStore as createStore, combineReducers } from "redux";


const rootReducer = {
    Login:Loginreducer,
}

export const store = createStore(rootReducer);

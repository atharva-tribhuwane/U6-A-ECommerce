// import { LOGIN_FAILED, LOGIN_LOADING } from "./action";
// import { LOGIN_SUCCESS } from "./login/action";
// import { LOGIN_ERROR } from "./login/action";
import { Loginreducer } from "./login/reducer";
import { legacy_createStore as createStore, combineReducers} from "redux";
import {thunk} from "redux-thunk";

const rootReducer =combineReducers({
    Login:Loginreducer,
});

export const store = createStore(rootReducer);

store.subscriber=()=>{
    console.log("State:", store.getState());
}
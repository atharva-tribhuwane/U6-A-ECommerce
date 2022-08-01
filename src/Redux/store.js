// import { LOGIN_FAILED, LOGIN_LOADING } from "./action";
// import { LOGIN_SUCCESS } from "./login/action";
// import { LOGIN_ERROR } from "./login/action";
import { Loginreducer } from "./login/reducer";
import { legacy_createStore as createStore, combineReducers} from "redux";
import { applyMiddleware,  } from "redux";
import thunk from "redux-thunk";
import { ProdReducer } from "./products/reducer";
const rootReducer =combineReducers({
    Login:Loginreducer,
    Products:ProdReducer
});

export const store = createStore(rootReducer,applyMiddleware(thunk));

store.subscriber=()=>{
    console.log("State:", store.getState());
}
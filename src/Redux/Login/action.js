export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const loginLoading = ()=>({
    type:LOGIN_LOADING
})
export const loginSuccess = (payLoad)=>({
    type:LOGIN_LOADING,
    payLoad
})
export const loginFailure = ()=>({
    type:LOGIN_LOADING
})

export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT = "LOGOUT";

export const loginLoading = ()=>({
    type:LOGIN_LOADING
})
export const loginSuccess = (payLoad)=>({
    type:LOGIN_SUCCESS,
    payLoad
})
export const loginFailure = ()=>({
    type:LOGIN_FAILED
})
export const logout = (payLoad)=>({
    type:LOGOUT,
    payLoad
})

// export const allLoginActions = ()=>(dispatch)=>{
//     dispatch(loginLoading())
//     let payLoad = {
//         email:username,
//         password:password
//     }
//     fetch("https://reqres.in/api/login",{
//         method:"POST",
//         body:JSON.stringify(payLoad),
//         headers:{
//             "Content-Type":"application/json"
//         }
//     })
//      .then((res)=>res.json())
//      .then((res)=>{dispatch(loginSuccess(res))})
//      .catch((error)=>console.log(error),loginFailure())
// }

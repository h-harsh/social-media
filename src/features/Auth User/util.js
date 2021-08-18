import axios from 'axios'

// Local storage
export const setLocalStorage = (data, token) => {
    localStorage.setItem("userData", JSON.stringify(data));
    localStorage.setItem("token", JSON.stringify(token));
  };
  
  export const getLocalStorage = () => {
    let userData, token;
    userData = JSON.parse(localStorage.getItem("userData"));
    token = JSON.parse(localStorage.getItem("token"));
    return { userData, token };
  };
  export const getUserFromLocalStorage = () => {
    let userData;
    userData = JSON.parse(localStorage.getItem("userData"));
    return userData ? userData : null
  };
  export const getTokenFromLocalStorage = () => {
    let token;
    token = JSON.parse(localStorage.getItem("token"));
    return token ? token : null
  };
  
  export const clearLocalStorage = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
  };
  
// Axios
  export const setupAuthHeaderForServiceCalls = (token) => {
    if (token) {
      return (axios.defaults.headers.common["Authorization"] = token);
    }
    delete axios.defaults.headers.common["Authorization"];
  };
  
  // export const setupAuthExceptionHandler = (logout, navigate, dispatch) => {
  //   const UNAUTHORIZED = 401;
  //   axios.interceptors.response.use(
  //     (response) => response,
  //     (error) => {
  //       if (error?.response?.status === UNAUTHORIZED) {
  //         dispatch(logout());
  //         navigate("login");
  //       //   toastError("Token expired,please login again");
  //       }
  //       return Promise.reject(error);
  //     }
  //   );
  // };
  
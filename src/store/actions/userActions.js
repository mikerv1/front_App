// import axios from "axios";
import { apiPost } from "../../api/api";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";

// import setAuthToken from "../../utils/setAuthToken";

export const login = (email, password) => (dispatch) => {
  dispatch(fetchLoginRequest())
  apiPost(email, password)
    .then(response => {
      // const token = response
      // setTimeout(() => {  // to emulate some network delay

        dispatch(fetchLoginSuccess(response))
        console.log('response', response)
        localStorage.setItem("userInfo", JSON.stringify(response))
        localStorage.setItem("authToken", response.token)
      // }, 2000)
    })
    .catch(error => {
      dispatch(fetchLoginFailure(error.message))
      // console.log('error', error.message)
    })
  
}

export const fetchLoginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST
  }
}

export const fetchLoginSuccess = response => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: response
  }
}

export const fetchLoginFailure = error => {
  return {
    type: USER_LOGIN_FAIL,
    payload: error
  }
}









// export const login = (email, password) => async (dispatch) => {
//   try {
//     dispatch({
//       type: USER_LOGIN_REQUEST,
//     })

//     const { data } = await api.post(
//       '/login', email, password
//       )
    

//     dispatch({
//       type: USER_LOGIN_SUCCESS,
//       payload: data,
//     }, console.log('done2'));

//     localStorage.setItem("userInfo", JSON.stringify(data));
//     const token = data.token.token;
//     localStorage.setItem("authToken", token);
//   } catch (error) {
//     dispatch({
//       type: USER_LOGIN_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("authToken");
  dispatch({ type: USER_LOGOUT });
  document.location.href = "/";
};

export const register = (username, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("authToken"),
      },
    };

    const { data } = await axios.post(
      "http://localhost:4000/api/user/signup",
      { username, email, password },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
    const token = data.results.data;
    localStorage.setItem("authToken", token);
    setAuthToken(token);
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
import axios from "axios"
import { API_BASE_URL } from "../../config/apiConfig";
import { REGISTER_REQUEST, REGISTER_SUCCESS,REGISTER_FAILURE, LOGIN_REQUEST, 
        LOGIN_SUCCESS,LOGIN_FAILURE, LOGOUT, GET_USER_REQUEST, GET_USER_SUCCESS,GET_USER_FAILURE } from "./ActionType";

// defining dispatecher which will dispatch actions to the reducer
// Register action creators menas functions that return action objects
// These functions will be dispatched to the reducer to update the state
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload:user });
const registerFailure = error => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData)=> async(dispatch) =>{

    // This function will be called when the user submits the registration form
    // It will dispatch the registerRequest action to indicate that the registration process has started
    console.log("register action called with userdata :",userData)
    dispatch(registerRequest());
    
    try {
        console.log("trying to register user with data :",userData)
        const response=await axios.post(`${API_BASE_URL}/auth/signup`, userData);
        console.log("response from register :",response)
        const user = response.data;
        if(user.jwt) localStorage.setItem("jwt",user.jwt)
        console.log("registerr :",user)
    // If the registration is successful, it will dispatch the registerSuccess action with the user data
        dispatch(registerSuccess(user));
    } catch (error) {
        console.log("Register failed:", error.response ? error.response.data : error.message);
        dispatch(registerFailure(error.message));
    }

}



// Login action creators
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = user => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = error => ({ type: LOGIN_FAILURE, payload: error });

export const login = userData => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    const user = response.data;
    if(user.jwt) localStorage.setItem("jwt",user.jwt)
    console.log("login ",user)
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

// getuser action creator
const getuserRequest = () => ({ type: LOGIN_REQUEST });
const getuserSuccess = user => ({ type: LOGIN_SUCCESS, payload: user });
const getuserFailure = error => ({ type: LOGIN_FAILURE, payload: error });

//  get user from token
export const getUser = (token) => {
  return async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    try {
      const response = await axios.get(`${API_BASE_URL}/api/users/profile`,{
        headers:{
          "Authorization":`Bearer ${token}`
        }
      });
      const user = response.data;
      dispatch({ type: GET_USER_SUCCESS, payload: user });
      console.log("req User ",user)
    } catch (error) {
      const errorMessage = error.message;
      dispatch({ type: GET_USER_FAILURE, payload: errorMessage });
    }
  };
};

export const logout = (token) => {
    return async (dispatch) => {
      dispatch({ type: LOGOUT });
      localStorage.clear();
    };
  };



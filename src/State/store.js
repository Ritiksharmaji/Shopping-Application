import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./Auth/Reducer";


const rootReducers= combineReducers({
    // Add your reducers here
    auth:authReducer,
})
 
export const store = legacy_createStore(rootReducers,applyMiddleware(thunk));

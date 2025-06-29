import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./Auth/Reducer";
import customerProductReducer from "./Customers/Product/Reducer";
import cartReducer from "./Customers/Cart/Reducer";
import { orderReducer } from "./Customers/Order/Reducer";


const rootReducers= combineReducers({
    // Add your reducers here
    auth:authReducer,
    product:customerProductReducer,
    cart:cartReducer,
    order:orderReducer,
    
})
 
export const store = legacy_createStore(rootReducers,applyMiddleware(thunk));

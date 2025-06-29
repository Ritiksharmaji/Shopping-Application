import axios from "axios";

import {
  FIND_PRODUCTS_BY_CATEGORY_REQUEST,
  FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
  FIND_PRODUCTS_BY_CATEGORY_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_ALL_PRODUCTS_REQUEST,
  FIND_ALL_PRODUCTS_SUCCESS,
  FIND_ALL_PRODUCTS_FAILURE,
} from "./ActionType";
import api, { API_BASE_URL } from "../../../config/apiConfig";

// export const findProducts = (reqData) => async (dispatch) => {
//   const {
//     colors,
//     sizes,
//     minPrice,
//     maxPrice,
//     minDiscount,
//     category,
//     stock,
//     sort,
//     pageNumber,
//     pageSize,
//   } = reqData;

//    //dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_REQUEST });
//     dispatch({ type: FIND_ALL_PRODUCTS_REQUEST });

//   try {
//     console.log("request data in findProducts -", reqData);
//     const { data } = await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`);

//     console.log("get all product - ", data);
//     // console.log("get product by category - ", data);
//     dispatch({
//       // type: FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
//       type: FIND_ALL_PRODUCTS_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       // type: FIND_PRODUCTS_BY_CATEGORY_FAILURE,
//       type: FIND_ALL_PRODUCTS_FAILURE,
//       payload: error.message,
//     });
//   }
// };

export const findProducts = (reqData) => async (dispatch) => {
  console.group("Redux Action Debug");
  console.log("Action started with:", reqData);
  
  dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_REQUEST });

  try {
    const params = new URLSearchParams();
    Object.entries(reqData).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });

    console.log("Final API URL:", `/api/products?${params.toString()}`);
    
    const { data } = await api.get(`/api/products`, { params });
    console.log("API Response:", data);

    dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    console.error("API Error:", error);
    dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_FAILURE, payload: error.message });
  }
  
  console.groupEnd();
};

export const findProductById = (reqData) => async (dispatch) => {
  try {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });

    const { data } = await api.get(`/api/products/id/${reqData.productId}`);

    console.log("products by  id : ", data);
    dispatch({
      type: FIND_PRODUCT_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FIND_PRODUCT_BY_ID_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};




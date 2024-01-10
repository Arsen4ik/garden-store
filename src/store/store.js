import { applyMiddleware, combineReducers, createStore } from 'redux'
import { thunk } from 'redux-thunk'
import { basketReducer } from "./basketReducer";
import { categoryListReducer } from './categoryListReducer';
import { productsListReducer } from './productListReducer';

const rootReducer = combineReducers({
    categoryList: categoryListReducer,
    productList: productsListReducer,
    basket: basketReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
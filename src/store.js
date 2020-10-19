import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
/* thunk macht async mögliche für redux */
import {productsReducer} from "./reducers/productReducers"; 

const initialState ={};
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
/* Nutzung DEV tools von Chrome für Redux */
const store = createStore(
    combineReducers({
        products: productsReducer,
        cart: cartReducer,
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    
);
export default store;
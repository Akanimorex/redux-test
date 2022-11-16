import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import logger from "redux-logger";


const store = configureStore({reducer:rootReducer}, applyMiddleware(logger));


export default store;

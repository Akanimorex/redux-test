import React from "react";
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';


const initialState = {
    loading:false,
    users:[],
    error:'',
};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";



const fetchUserRequest = () =>{
    return {
        type:FETCH_USERS_REQUEST
    }
};

const fetchUserSuccess = () =>{
    return {
        type:FETCH_USERS_SUCCESS,
        payload: users 
    }
};

const fetchUserFailure = (error) =>{
    return {
        type:FETCH_USERS_FAILURE,
        payload:error
    }
};



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading:false,
                users:action.payload,
                error:''
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading:false,
                users:[],
                error:action.payload
            }
        default:
            break;
    }
};


const store = configureStore(reducer);
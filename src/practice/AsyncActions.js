import React from "react";
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import {  applyMiddleware } from "redux";
import axios from "axios";
import thunk from "redux-thunk";




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

const fetchUserSuccess = (users) =>{
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
                loading:true,
            
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

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            // array of users
            const users = response.data.map((user)=>user.id);
            dispatch(fetchUserSuccess(users));
        })
        .catch((err)=>{
            // error message
            dispatch(fetchUserFailure(err.message));
        })
    }
};



const store = configureStore({reducer:reducer}, applyMiddleware(thunk));
store.subscribe(()=>{ console.log(store.getState())});
store.dispatch(fetchUsers());


const AsyncActions = ()=> {
    return (
        <h1>ASYNC SHIT</h1>
    )
};


export default AsyncActions;
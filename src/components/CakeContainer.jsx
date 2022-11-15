import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

const CakeContainer = () => {

    const numOfCakes = useSelector(state=>state.cake.numOfCakes);
    const dispatch = useDispatch();
    
    return (
        <div>
            <h1>Number of cakes : {numOfCakes}</h1>
            <button onClick={()=> dispatch(buyCake())} >Buy cakes</button>
        </div>
    )
};


export default CakeContainer;
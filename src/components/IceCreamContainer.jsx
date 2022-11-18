import React from "react";
import {  buyIceCream } from "../redux";
import { useSelector, useDispatch } from "react-redux";

const CakeContainer = () => {

    const numOfIceCream = useSelector(state=>state.iceCream.numOfIceCream);
    const dispatch = useDispatch();
    
    return (
        <div>
            <h1>Number of ice cream : {numOfIceCream}</h1>
            <button onClick={()=> dispatch(buyIceCream())} >Buy cream</button>
        </div>
    )
};


export default CakeContainer;
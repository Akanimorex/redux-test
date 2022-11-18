import React from "react";
import { buyBread } from "../redux";
import { useSelector, useDispatch } from "react-redux";

const CakeContainer = () => {

    const numOfBread = useSelector(state=>state.bread.numOfBread);
    const dispatch = useDispatch();
    
    return (
        <div>
            <h1>Number of bread packages : {numOfBread}</h1>
            <button onClick={()=> dispatch(buyBread())} >Buy Bread</button>
        </div>
    )
};


export default CakeContainer;
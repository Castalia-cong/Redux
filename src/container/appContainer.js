import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const Counter = (props) => {
    const counter = useSelector(state => state);
    const dispatch = useDispatch();
    return(
        <>
            <button
                onClick={() =>
                    dispatch({
                        type: "Car"
                    })
                }
            ></button>
            <h1>{counter.store}</h1>
        </>
    );
}

export default Counter;
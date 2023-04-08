import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {incCount, decCount, resetCount} from "./store/slices/count.slice";


const Draft = () => {
  const {count, callCount} = useSelector((state) => state.count)
  const dispatch = useDispatch()

  return (
      <div>
        <div></div>
        <div>Count: {count}</div>
        <div>Call Count: {callCount}</div>
        <button onClick={() => {
          dispatch(incCount(1))
        }}>PLUS
        </button>
        <button onClick={() => {
          dispatch(decCount(1))
        }}>MINUS
        </button>
        <button onClick={() => {
          dispatch(resetCount(0))
        }}>RESET
        </button>
      </div>
  );
};

export default Draft;
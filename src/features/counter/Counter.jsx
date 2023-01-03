import React, { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { increment, decrement, reset, incrementByAmount} from './CounterSlice'

const Counter = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;

    const resetALL = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

  return (
    <section>
        <p className="opensans-lg-bold" style = {{color: "#f23e46"}} >{count}</p>
        <div>
            <button onClick={()=> dispatch(increment())}>+</button>
            <button onClick={()=> dispatch(decrement())}>-</button>
        </div>
        <input type="text" value ={incrementAmount } onChange={(e)=> setIncrementAmount(e.target.value)}/>
        <div>
            <button onClick={()=> dispatch(incrementByAmount(addValue))}>Add Amount</button>
            <button onClick={resetALL}>Reset</button>
        </div>
    </section>   
    
  )
}

export default Counter
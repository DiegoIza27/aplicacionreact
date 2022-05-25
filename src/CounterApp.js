import React,{useState} from 'react';
import PropTypes  from 'prop-types';
const CounterApp =({value})=>{

    const [counter,setCounter] = useState(value);

//    heandleAdd
const heandleAdd=()=>{
     setCounter(counter+1)
}
const reset=()=>{
     setCounter(value)
}
const reducir=()=>{
     setCounter(counter-1)
}

    return (
        <>
        <h1>CounterApp</h1>
        
        <p>{counter}</p>
        <button onClick={heandleAdd}>+1</button>
        <button onClick={reset}>Reset</button>
        <button onClick={reducir}>-1</button>
        </> 
    )
    
}
CounterApp.propTypes={
    value:PropTypes.number.isRequired
}


    export default CounterApp;
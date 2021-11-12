// rafcp TAB -> te arma todo

import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value = 10}) => {

    // Hook
    const [counter, setCounter] = useState(0); 

    // handleAdd
    const handleAdd = () =>{
        // setCounter(counter + 1);
        setCounter( (c) => counter + 1 );
    }

    // handleSubtract
    
    const handleSubtract = () => {
        setCounter (counter - 1);
    }

    // handleReset

    const handleReset = () =>{
        setCounter(value);
    }

    return (
        <>
         <h1>CounterApp</h1>
         <h2> { counter } </h2>
         <button onClick = { handleAdd } > +1 </button>  
         <button onClick = { handleReset }>Reset</button>
         <button onClick = { handleSubtract }>-1</button> 
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp


import React, {useState} from "react"

function Counter() {

    const [count, SetCount] = () => useState(0);

    const increment = () => {
        SetCount(count + 1);
    }
    
    const decrement = () => {
        SetCount(count - 1);
    }

    const reset = () => {
        SetCount(0);
    }

    return( <>
                <div className="counter-container">
                    <p className="count-display">{count}</p>
                    <button className="counter-button" onClick={decrement}>Decrement</button>
                    <button className="counter-button" onClick={reset}>Reset</button>
                    <button className="counter-button" onClick={increment}>Increment</button>
                </div>
            </>)
}

export default Counter
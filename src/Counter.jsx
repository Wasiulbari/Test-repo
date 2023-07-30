import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const increaseCount=()=>{
        
        const newCount = count + 1;
        setCount (newCount);

    }

    const decreaseCount =()=>{
       const newCount = count -1 ;
        setCount (newCount);
    }

  

    return (
        <div>
            <h1> Count: {count}</h1>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
            
        </div>
    );
};

export default Counter;
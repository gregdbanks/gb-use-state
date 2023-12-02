import React, { useState } from 'react';

const CounterComponent = () => {
    const [counterWrong, setCounterWrong] = useState(0);
    const [counterRight, setCounterRight] = useState(0);

    const incrementCounterWrong = () => {
        // Wrong: Directly mutating the state
        counterWrong++;
        console.log("Wrong Counter (won't update in UI):", counterWrong);
    };

    const incrementCounterRight = () => {
        // Right: Using the state setter function
        setCounterRight(prevCounter => prevCounter + 1);
    };

    return (
        <div>
            <div>
                <h3>Wrong Method</h3>
                <p>Counter: {counterWrong}</p>
                <button onClick={incrementCounterWrong}>Increment (Wrong)</button>
            </div>
            <div>
                <h3>Right Method</h3>
                <p>Counter: {counterRight}</p>
                <button onClick={incrementCounterRight}>Increment (Right)</button>
            </div>
        </div>
    );
};

export default CounterComponent;

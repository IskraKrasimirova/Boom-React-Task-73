import React, { useState, useEffect } from "react";

function Counter({ initialCount = 1 }) {
    const [count, setCount] = useState(initialCount);
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    );
}

export default Counter;
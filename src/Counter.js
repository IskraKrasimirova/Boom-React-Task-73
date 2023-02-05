import React, { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(1);
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
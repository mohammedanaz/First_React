import React, { useState, useEffect } from 'react';

export default function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      console.log('inside useEffect');
        const timer = setInterval(() => {
          console.log('inside set interval');
            setCount(count + 1);
        }, 1000);

        return () => {
          console.log('inside cleanup');
          clearInterval(timer);
        }
    }, [count]);

    return <div>{count}</div>;
}
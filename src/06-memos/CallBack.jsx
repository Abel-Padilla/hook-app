import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallBack = () => {
    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
        (value) => {
            setCounter((c) => c + value);
        },
        [],
    );

    useEffect(() => {
        incrementFather();
    }, [incrementFather])


    /*
        const incrementFather = () => {
            setCounter(counter + 1);
        }
        */
    return (
        <>
            <h1>Use Callback : {counter}</h1>
            <ShowIncrement increment={incrementFather}></ShowIncrement>
        </>

    )
}

import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter();
    return (
        <>
            <h1>Counter with hook: {counter}</h1>
            <hr></hr>
            <button
                className='btn btn-primary btn-large btn-justified'
                onClick={() => increment(2)}
            >+1</button>
            <button
                className='btn btn-dark'
                onClick={reset}
            >Reset</button>
            <button
                className='btn btn-secondary btn-large btn-justified'
                onClick={() => decrement(2)}
            >-1</button>
        </>

    )
}

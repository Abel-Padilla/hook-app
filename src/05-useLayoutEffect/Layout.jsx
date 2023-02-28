import React from 'react'
import { useFetch, useCounter } from '../hooks'
import { LoadingQuote, Quote } from '../03-examples/index';

export const Layout = () => {
    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    const { author, quote } = !!data && data[0];

    const usefetch = useFetch()
    return (
        <>
            <h1>Breaking bad Quotes</h1>
            <hr />
            {
                isLoading
                    ? <LoadingQuote />
                    : <Quote author={author} quote={quote} />
            }
            <button
                disabled={isLoading}
                className='btn btn-primary'
                onClick={() => increment(1)}>Next quote</button>

        </>
    )
}

import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'
export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    const { author, quote } = !!data && data[0];
    return (
        <>
            <h1>Breaking bad Quotes</h1>
            <hr />

            {
                (isLoading)
                    ?
                    (<div className='alert alert-info text-center'>
                        Loading
                    </div>)
                    : (

                        <blockquote className='blockquote text-end'>
                            <p className='mb-1 mt-2'>{quote}</p>
                            <footer className='blockquote-footer'>{author}</footer>
                        </blockquote>
                    )
            }
            <button
                disabled={isLoading}
                className='btn btn-primary'
                onClick={() => increment(1)}>Next quote</button>

        </>
    )
}
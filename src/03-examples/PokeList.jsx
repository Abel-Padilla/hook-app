import React from 'react'
import { useFetch, useCounter } from '../hooks'
import { LoadingQuote, Quote } from './index';

export const PokeList = () => {
    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    const { name, sprites } = !!data && data;
  

    const usefetch = useFetch()
    return (
        <>
            <h1>Pokemon!</h1>
            <hr />
            {
                <div className='card'>
                    <div className='card-title'>
                        <h3>{name}</h3>
                    </div>
                </div>
            }
            <button
                disabled={isLoading}
                className='btn btn-primary'
                onClick={() => increment(1)}>Next quote</button>

        </>
    )
}

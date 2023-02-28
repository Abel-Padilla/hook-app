import React from 'react'
import { useFetch, useCounter } from '../hooks'
import { LoadingQuote, Quote } from './index';
import { PokeCard } from './PokeCard';
import { PokeTypes } from './PokeTypes';

export const PokeList = () => {

    const { counter, increment, decrement, reset } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    
    return (
        <>
            <h1>Pokemon!</h1>
            {
                <PokeCard data={data}></PokeCard>
            }
            <div className='d-grid gap-2 d-md-flex justify-content-md-end mt-5'>
                <button
                    disabled={isLoading}
                    className='btn btn-secondary'
                    onClick={() => decrement(1)}>Previous Pokemon
                </button>
                <button
                    disabled={isLoading}
                    className='btn btn-outline-primary'
                    onClick={reset}>Reset
                </button>
                <button
                    disabled={isLoading}
                    className='btn btn-primary'
                    onClick={() => increment(1)}>Next pokemon
                </button>

            </div>


        </>
    )
}

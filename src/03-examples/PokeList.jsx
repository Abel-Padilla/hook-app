import React, { useEffect, useState } from 'react'
import { useFetch, useCounter } from '../hooks'
import { LoadingQuote, Quote } from './index';
import { LoadingCard } from './LoadingCard';
import { PokeCard } from './PokeCard';
import { PokeTypes } from './PokeTypes';
import { SearchBar } from './SearchBar';

export const PokeList = () => {

    const { counter, increment, decrement, reset } = useCounter(1);
    const [textSearch, setTextSearch] = useState('');
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/1`);
    const { data, isLoading, hasError } = useFetch(url);
    const search = (event) => {
        setUrl(`https://pokeapi.co/api/v2/pokemon/${event}`)
    }

    useEffect(() => {
        setUrl(`https://pokeapi.co/api/v2/pokemon/${counter}`)
        return () => {

        }
    }, [counter])




    return (
        <>
            <div className='row mt-5 mb-5 '>
                <div className="col-md-6">
                    <h1>Pokemon!</h1>
                </div>
                <div className="col-md-6">
                    <SearchBar search={search}></SearchBar>
                </div>

            </div>
            {
                isLoading ? <LoadingCard></LoadingCard>
                    :
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

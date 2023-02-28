import React from 'react'
import { getInfoType } from '../translators/types';
export const PokeTypes = ({ types }) => {
    if (!types) return (<>No types found</>)
    const  pokeTypes  = types.types;
    return (
        <div>{
            JSON.stringify(pokeTypes)
        }
            {types.map((type) => {
                return (
                    <span></span>
                )
            })}
        </div>
    )
}

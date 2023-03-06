import React from 'react'
import { getInfoType } from '../translators/types';
import './custom.css'
export const PokeTypes = ({ types }) => {
    if (!types) return (<>No types found</>)
    const pokeTypes = types.types;

    return (
        <div>{
            JSON.stringify(pokeTypes)
        }
            {types.map((type) => {
                const styleType = getInfoType(type.type.name);
                console.log({ styleType })
                return (
                    <h5><span style={styleType} className={`badge`}>{type.type.name}</span></h5>
                )
            })}
        </div>
    )
}

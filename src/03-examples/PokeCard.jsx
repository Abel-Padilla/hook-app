import React, { useState } from 'react'
import { PokeTypes } from './PokeTypes';
export const PokeCard = ({ data }) => {
    if (!data) return (<></>)
    const { name, sprites, types } = !!data && data;
    if (!name) return (<><h4>Something wrong 😐, pls retry</h4></>)
    const [imageType, setimageType] = useState('front')
    const image = sprites?.versions['generation-v']['black-white'].animated[`${imageType}_default`];

    return (
        <>
            <div className='card p-4'>
                <div className='card-title mx-auto fixed'>
                    <h3>{name[0]?.toUpperCase() + name.substr(1)}</h3>
                    {
                        <PokeTypes types={types}></PokeTypes>
                    }
                </div>
                <div className='card-body mx-auto'>
                    <img onMouseEnter={() => { setimageType('back') }} onMouseLeave={() => { setimageType('front') }} className='rounded img' style={{ width: '100px', height: '100px' }} src={image}></img>
                </div>
            </div>
        </>
    )
}

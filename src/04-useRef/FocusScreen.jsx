import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
    }
    return (
        <>
            <h1>Focus screen</h1>
            <hr />
            <input
                ref={inputRef}
                placeholder='Ingrese su nombre'
                type="text"
                className="form-control mt-2"
            />

            <button
                className='btn btn-primary mt-3 btn-justified'
                onClick={onClick}
            >Set focus
            </button>
        </>
    )
}

import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const HomePage = () => {
    const { user } = useContext(UserContext)
    return (
        <>
            <h1>Bienvenido {user?.name.split(" ")[0]}</h1>
            <hr></hr>
            <h3>Esta es tu información:</h3>
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
        </>

    )
}

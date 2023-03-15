import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext)
  return (
    <>
      <h1>Login</h1>
      <hr></hr>
      <pre aria-label='pre-tag'>
        {JSON.stringify(user, null, 3)}
      </pre>


      <button
        aria-label='set-user'
        className='btn btn-primary'
        onClick={() => { setUser({ id: '84176168', name: "Juan Abel", mail: "abel.padilla@google.com" }) }}
      >
        Establecer usuario
      </button>
    </>
  )
}

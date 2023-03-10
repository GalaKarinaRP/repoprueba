import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './AuthReducer'

const initialState = {
    logged : false
}

export const AuthProvider = ({children}) => {

    const [state, dispatch] = useReducer(authReducer, second)

  return (
    <AuthContext.Provider value={{ }}>
        {children}
    </AuthContext.Provider>
  )
}

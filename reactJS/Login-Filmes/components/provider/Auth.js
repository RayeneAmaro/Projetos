import React from 'react'
import { useState } from 'react'

export const authService = React.createContext({})

const Autenticador = ({children}) => {

    const [autenticador, setAutenticador] = useState(true)

    return(
        <authService.Provider value={{autenticador, setAutenticador}}>
            {children}
        </authService.Provider>
    )
}

export default Autenticador

export const useAuth = () => React.useContext(authService)
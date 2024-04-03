"use client"
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";


interface IstateContext {
    showLoginScreen: boolean
    setShowLoginScreen: Dispatch<SetStateAction<boolean>>
}

const initialState = {
    showLoginScreen: false,
    setShowLoginScreen: () => false,
}

const StateContext = createContext<IstateContext>(initialState)

interface Childern {
    children: React.ReactNode
}

export const ContextProvider: React.FC<Childern> = ({ children }) => {
    const [showLoginScreen, setShowLoginScreen] = useState<any>()

    return (
        <StateContext.Provider value={{
            setShowLoginScreen, showLoginScreen
        }}>
            {children}
        </StateContext.Provider>
    )
}
export const useContextState = () => useContext(StateContext)
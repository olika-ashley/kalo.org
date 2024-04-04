"use client"
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";


interface IstateContext {
    showLoginScreen: boolean
    setShowLoginScreen: Dispatch<SetStateAction<boolean>>
    showSidebar: boolean
    setShowSidebar: Dispatch<SetStateAction<boolean>>
}

const initialState = {
    showLoginScreen: false,
    setShowLoginScreen: () => false,
    showSidebar: false,
    setShowSidebar: () => false,
}

const StateContext = createContext<IstateContext>(initialState)

interface Childern {
    children: React.ReactNode
}

export const AppContextProvider: React.FC<Childern> = ({ children }) => {
    const [showLoginScreen, setShowLoginScreen] = useState<any>()
    const [showSidebar, setShowSidebar] = useState<boolean>(false)

    return (
        <StateContext.Provider value={{
            setShowLoginScreen, showLoginScreen, showSidebar, setShowSidebar
        }}>
            {children}
        </StateContext.Provider>
    )
}
export const useContextState = () => useContext(StateContext)
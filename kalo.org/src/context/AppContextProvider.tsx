"use client"
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";


interface IstateContext {
    showLoginScreen: boolean
    setShowLoginScreen: Dispatch<SetStateAction<boolean>>
    showSidebar: boolean
    setShowSidebar: Dispatch<SetStateAction<boolean>>
    showBetOpponentForm: boolean
    setShowBetOpponentForm: Dispatch<SetStateAction<boolean>>
    loading: boolean
    setLoading: Dispatch<SetStateAction<boolean>>
    betId: string
    setBetId: Dispatch<SetStateAction<string>>
}

const initialState = {
    showLoginScreen: false,
    setShowLoginScreen: () => false,
    showSidebar: false,
    setShowSidebar: () => false,
    showBetOpponentForm: false,
    setShowBetOpponentForm: () => false,
    loading: false,
    setLoading: () => false,
    betId: "",
    setBetId: () => false,
}

const StateContext = createContext<IstateContext>(initialState)

interface Childern {
    children: React.ReactNode
}

export const AppContextProvider: React.FC<Childern> = ({ children }) => {
    const [showLoginScreen, setShowLoginScreen] = useState<any>()
    const [showSidebar, setShowSidebar] = useState<boolean>(false)
    const [showBetOpponentForm, setShowBetOpponentForm] = useState<boolean>(false)
    const [betId, setBetId] = useState<string>("")
    const [loading, setLoading] = useState(false);

    return (
        <StateContext.Provider value={{
            setShowLoginScreen, showLoginScreen, showSidebar, setShowSidebar, showBetOpponentForm, setShowBetOpponentForm, betId, setBetId, loading, setLoading
        }}>
            {children}
        </StateContext.Provider>
    )
}
export const useContextState = () => useContext(StateContext)
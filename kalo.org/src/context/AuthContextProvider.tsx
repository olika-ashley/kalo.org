"use client"
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";

interface Childern {
    children: React.ReactNode
}

const AuthContextProvider: React.FC<Childern> = ({ children }) => {
    const environmentId = process.env.NEXT_PUBLIC_DYNAMIC_API_KEY || '';

    return (
        <DynamicContextProvider
            settings={{
                environmentId: environmentId,
                walletConnectors: [SolanaWalletConnectors],
            }}>
            {children}
        </DynamicContextProvider>
    )
}

export default AuthContextProvider
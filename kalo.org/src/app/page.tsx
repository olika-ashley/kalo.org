"use client"
import HomeComponent from "@/components/HomeComponent";
import LoginScreen from "@/components/LoginScreen";
import { useContextState } from "@/context/AppContextProvider";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";


const RedirectingComponent = () => {
  return (
    <div className='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
    <span className='sr-only'>Loading...</span>
     <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
   <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
   <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
 </div>
  );
};


const WelcomePage = () => {

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-white text-black">
      <h1 className="text-6xl font-bold tracking-tight animate-bounce">Welcome to</h1>
      <h2 className="text-5xl font-semibold mt-5 animate-pulse">Kaló</h2>
      <p className="mt-4 text-lg text-gray-300 animate-slide-in-from-left">Your Social Betting onchain platform</p>
    </section>
  )



};


export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const delay = setTimeout(() => {
      setIsLoading(false);
      // Redirect to "/createBets" when "/" home route is hit
      router.push('/createBets');
    }, 1000); 

    return () => clearTimeout(delay); 
  }, []);

  const { showLoginScreen } = useContextState();

  return (
    <main className="h-screen overflow-scroll">
    {isLoading ? <RedirectingComponent /> : null}
    {!isLoading && (
      <>
      <WelcomePage />
        {showLoginScreen && <LoginScreen />}
      </>
    )}
  </main>
  );
}


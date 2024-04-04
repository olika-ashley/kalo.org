"use client"
import HomeComponent from "@/components/HomeComponent";
import LoginScreen from "@/components/LoginScreen";
import { useContextState } from "@/context/AppContextProvider";
import Image from "next/image";

export default function Home() {
  const {showLoginScreen} = useContextState()
  return (
    <main className="h-screen overflow-scroll">
      <HomeComponent />
      {showLoginScreen && <LoginScreen />}
    </main>
  );
}

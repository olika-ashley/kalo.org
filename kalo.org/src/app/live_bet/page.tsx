"use client"
import HeaderComponent from "@/components/HeaderComponent";
import HomeComponent from "@/components/HomeComponent";
import LiveBetComponent from "@/components/LiveBetComponent";
import MobileHeader from "@/components/MobileHeader";
import Sidebar from "@/components/Sidebar";
import { useContextState } from "@/context/AppContextProvider";
import Image from "next/image";

export default function LiveBets() {
    const {setShowSidebar, showSidebar} = useContextState()

  return (
    <main className=" h-screen overflow-scroll bg-[#e5e5e5]">
      <MobileHeader/>
      <HeaderComponent />
      {showSidebar && <Sidebar />}
      <LiveBetComponent />
    </main>
  );
}

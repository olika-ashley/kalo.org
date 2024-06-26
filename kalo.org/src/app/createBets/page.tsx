"use client"
import AddBetComponent from "@/components/AddBetComponent";
import HeaderComponent from "@/components/HeaderComponent";
import HomeComponent from "@/components/HomeComponent";
import MobileHeader from "@/components/MobileHeader";
import Sidebar from "@/components/Sidebar";
import { useContextState } from "@/context/AppContextProvider";
import Image from "next/image";

export default function CreateBet() {
  const {setShowSidebar, showSidebar} = useContextState()
  return (
    <main className=" h-screen overflow-scroll bg-[#e5e5e5]">
      <MobileHeader/>
      <HeaderComponent />
      {showSidebar && <Sidebar />}
      <AddBetComponent />
    </main>
  );
}

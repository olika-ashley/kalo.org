"use client"
import AddBetComponent from "@/components/AddBetComponent";
import HomeComponent from "@/components/HomeComponent";
import Image from "next/image";

export default function CreateBet() {
  return (
    <main className="w-1/4 flex-1 h-screen overflow-scroll">
      <AddBetComponent />
    </main>
  );
}

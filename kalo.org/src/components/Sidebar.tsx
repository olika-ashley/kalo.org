"use client"
import Link from "next/link";
import kaloLogo from "../assets/kalo_log-clear.png";
import { IoMdHome } from "react-icons/io";
import { MdOutlineSportsFootball } from "react-icons/md";
import { MdOutlineSportsEsports } from "react-icons/md";
import { SiReadthedocs } from "react-icons/si";
import Image from "next/image";

// also we need to make this mobile responsive
//ami idk we could add the signin/sign up buttons here (they'd be at the bottom of the nav bar)
export default function Sidebar() {
    return (
      <div className="bg-[#1A202C] w-1/4 h-screen">
        <div className='px-16 pt-6 py-8 flex gap-1 items-center'>
            <Image src={kaloLogo} width={50} height={50} loading='lazy' alt="Kalo clear logo" />
            <span>Kalò</span>
        </div>
        <ul className="px-14 py-3 flex flex-col gap-8 pt-8">
          <li className='flex gap-2 items-center'>
            <span className="text-lg">
                <IoMdHome />
            </span> 
          <Link href="/">Live Bets</Link>
        </li>
        <li className='flex gap-2 items-center'>
            <span className="text-lg">
            <MdOutlineSportsFootball />

            </span> 
          <Link href="/createBets">Create Bets</Link>
        </li>
        <li className='flex gap-2 items-center'>
            <span className="text-lg">
            <MdOutlineSportsEsports />
            </span> 
          <Link href="/Tourney Mode">Tournament Mode</Link>
        </li>
        <li className='flex gap-2 items-center'>
            <span className="text-lg">
            <SiReadthedocs />
            </span> 
          <Link href="/docs">Docs</Link>
        </li>
        </ul>
      </div>
    );
  }
'use client';

import React, {useEffect} from 'react';
import { PiPlayCircle } from "react-icons/pi";
import { HiOutlinePlusSm } from "react-icons/hi";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { MdOutlinePerson2 } from "react-icons/md";
import { BsSlashSquare } from "react-icons/bs";


export const Navbar = () => {
  const pathname = usePathname();
  

  const isActive = (href: string) => {
    return pathname === href || (href === '/' && pathname === '/createBets');
  };


  

  return (
    <div className='w-full'>
      <div className='flex invisible md:visible items-center justify-between px-20 bg-white shadow-lg py-4'>
        {/* Logo */}
        <div className='flex-1 w-3/4 flex items-center justify-evenly'>
          <h1 className="text-3xl text-black">Kaló
          </h1>
          {/* Create bet */}
          <Link href="/createBets">
            <div className={`flex items-center ${isActive('/createBets') ? 'pb-2 pt-3 border-b border-black' : 'pb-2 pt-3 border-b border-transparent'} cursor-pointer`}>
              {/* Your code for Create bet */}
              <HiOutlinePlusSm className="text-black mr-1 text-2xl" />
              <p className="text-black">Create bet</p>
            </div>
          </Link>
          {/* my bets */}
          <Link  href="/myBets">
            <div className={`flex items-center ${isActive('/myBets') ? 'pb-2 pt-3 border-b border-[#B2B1B1]' : 'pb-2 pt-3 border-b border-transparent'} cursor-pointer`}>
              {/* Your code for Live Bet */}
              <BsSlashSquare className="text-black mr-1 text-2xl" />
              <p className="text-black">My bets</p>
            </div>
          </Link>
          {/* Live bets */}
          <Link  href="/live_bet">
            <div className={`flex items-center ${isActive('/live_bet') ? 'pb-2 pt-3 border-b border-[#B2B1B1]' : 'pb-2 pt-3 border-b border-transparent'} cursor-pointer`}>
              {/* Your code for Live Bet */}
              <PiPlayCircle className="text-black mr-1 text-2xl" />
              <p className="text-black">Live Bet</p>
            </div>
          </Link>
      
        </div>
        
        {/* Connection */}
        
        <MdOutlinePerson2 className='text-2xl'/>


      </div>
    </div>
  );
};

export default Navbar;

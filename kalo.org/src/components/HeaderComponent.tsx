'use client';

import React from 'react';
import { PiPlayCircle } from "react-icons/pi";
import { HiOutlinePlusSm } from "react-icons/hi";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || (href === '/' && pathname === '/create-bet');
  };

  return (
    <div className='w-full'>
      <div className='flex  items-center justify-between px-20 bg-white shadow-lg py-4'>
        {/* Logo */}
        <div className='flex-1 w-3/4 flex items-center justify-evenly'>
          <h1 className="text-3xl text-black">Kalo</h1>
          
          {/* Create bet */}
          <Link href="/">
            <div className={`flex items-center ${isActive('/') ? 'pb-2 pt-3 border-b border-black' : 'pb-2 pt-3 border-b border-transparent'} cursor-pointer`}>
              {/* Your code for Create bet */}
              <HiOutlinePlusSm className="text-black mr-1 text-2xl" />
              <p className="text-black">Create bet</p>
            </div>
          </Link>

          {/* Bets */}
          <Link href="/bets">
            <div className={`flex items-center ${isActive('/bets') ? 'pb-2 pt-3 border-b border-[#B2B1B1]' : 'pb-2 pt-3 border-b border-transparent'} cursor-pointer`}>
              {/* Your code for Bets */}
              <PiPlayCircle className="text-black text-2xl mr-1" />
              <p className="text-black">Bets</p>
            </div>
          </Link>

          {/* Live bets */}
          <Link href="/live-bets">
            <div className={`flex items-center ${isActive('/live-bets') ? 'pb-2 pt-3 border-b border-[#B2B1B1]' : 'pb-2 pt-3 border-b border-transparent'} cursor-pointer`}>
              {/* Your code for Live Bet */}
              <PiPlayCircle className="text-black mr-1 text-2xl" />
              <p className="text-black">Live Bet</p>
            </div>
          </Link>
      
        </div>
        
        {/* Connection */}
        
          <a href="#" className="py-3 px-7 bg-[#7343CB] rounded-xl" >Connect Wallet</a>
        
      </div>
    </div>
  );
};

export default Navbar;

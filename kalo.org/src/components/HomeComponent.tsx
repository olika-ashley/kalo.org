"use client"
import React, { useEffect, useState } from 'react';
import Banner from '../assets';
import SkeletonLoader from './BetLoader';
import { Event } from './BetLoader';
import Image from 'next/image';


const HomeComponent: React.FC = () => {


  return (
    <div className="bg-gray-800 p-4 rounded-md w-full">
      <div className="relative cursor-pointer min-h-[235px] rounded-[6px] flex flex-col justify-end mb-5">

        <Image
          src={Banner}
          width={200}
          height={200}
          alt=''
          className="absolute object-cover w-full h-full rounded-[6px] z-10"
        />
        <div className="relative z-50 bottom-[20px] left-[30px] font-bold">
          On Chain Social Betting, Brought to You! 
        </div>

      </div>
        <>
        {/* show all user bet  and thhe time remaining for the bet*/}
          
            <div className='mb-8 '>
              <h2 className="text-white text-lg mb-2"></h2>
              <div className="border border-gray-700 rounded-md p-4 overflow-y-hidden">
              </div>
            </div>
        </>
  
    </div>
  );
};

export default HomeComponent;

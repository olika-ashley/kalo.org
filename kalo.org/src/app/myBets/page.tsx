"use client"
import React, { useEffect, useState } from 'react';
import HeaderComponent from "@/components/HeaderComponent";
import MobileHeader from "@/components/MobileHeader";
import { BsTwitterX, BsSnapchat } from "react-icons/bs";
import { BiLogoTiktok } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { useContextState } from '@/context/AppContextProvider';
import { usePathname, useRouter } from 'next/navigation';
import axios from 'axios';
import MyBetsSkeletonLoader from '@/components/ui/MyBetsSkeletonLoader';
import MyBetsComponent from '@/components/MyBetsComponent';

export default function LiveBets() {
    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState(false);
    const { showBetOpponentForm } = useContextState();

    const socialMediaIcons = [
        { icon: <BsSnapchat />, link: "https://www.snapchat.com" },
        { icon: <BiLogoTiktok />, link: "https://www.tiktok.com" },
        { icon: <BsTwitterX />, link: "https://twitter.com" },
        { icon: <AiFillInstagram />, link: "https://www.instagram.com" },
    ];


    const getBetById = async () => {
        try {
          setLoading(true)
          const response = await axios.get("/api/bets");
          setData(response.data)
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false)
        }
    }
      
    useEffect(() => {
        getBetById()
    }, []);

    return (
        <main className="h-screen overflow-scroll bg-[#e5e5e5] relative">
            <MobileHeader />
            <HeaderComponent />
            <div className='py-10 h-[90%] overflow-scroll'>
                <div className="w-full relative flex flex-col items-center justify-center py-12 px-3">
                    {loading ? (
                        <MyBetsSkeletonLoader />
                    ) : (
                        data?.map((bet: any, index: number) => (
                            <MyBetsComponent 
                                key={index}
                                data={bet}
                                socialMediaIcons={socialMediaIcons}
                            />
                        ))
                    )}
                </div>
            </div>
        </main>
    );
}

"use client"
import { useState } from 'react';
import HeaderComponent from "@/components/HeaderComponent";
import MobileHeader from "@/components/MobileHeader";
import { IoIosCheckmarkCircleOutline, IoMdClose } from "react-icons/io";
import { BsTwitterX, BsSnapchat } from "react-icons/bs";
import { BiLogoTiktok } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { FaRegCopy } from "react-icons/fa6";

export default function LiveBets() {
    const [showSocialIcons, setShowSocialIcons] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const socialMediaIcons = [
        { icon: <BsSnapchat />, link: "https://www.snapchat.com" },
        { icon: <BiLogoTiktok />, link: "https://www.tiktok.com" },
        { icon: <BsTwitterX />, link: "https://twitter.com" },
        { icon: <AiFillInstagram />, link: "https://www.instagram.com" },
    ];

    // Function to copy URL to clipboard
    const copyToClipboard = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000); 
    };

    return (
        <main className="h-screen overflow-scroll bg-[#e5e5e5] relative">
            <MobileHeader />
            <HeaderComponent />
            <div className='py-10 h-[90%] overflow-scroll'>
                <div className="w-full relative flex flex-col items-center justify-center py-12 px-3">
                    <div className='py-4 mx-auto md:w-w-9/12 sm:w-8/12 w-11/12 border bg-white shadow-lg rounded-lg'>
                        <div className="w-full my-4 flex flex-col items-center justify-center">
                            <IoIosCheckmarkCircleOutline className="text-[8rem] text-[#21806a]" />
                            <h3 className="text-xl font-extrabold">Bet Ticket</h3>
                            <div className="w-full my-2">
                                <div className="w-11/12 my-2 h-0.5 bg-[#e5e5e5] mx-auto"></div>
                            </div>
                            <h3 className="mb-3 font-we">Bet details</h3>
                        </div>
                        <div className="w-full px-8 flex justify-between items-center">
                            <div className="flex gap-4 p-1 flex-1 flex-col items-start ">
                                <p>Bet name</p>
                                <p>Condition</p>
                                <p>Payment date</p>
                                <p>for  </p>
                                <p>Against</p>
                                <p>Amount bet</p>
                            </div>
                            <div className="flex gap-4 p-1 flex-1 flex-col items-end ">
                                <p>Big Brother Naija</p>
                                <p>BBN </p>
                                <p>Mar7, 2024-Mar20 2024</p>
                                <p>Ashley  </p>
                                <p>Emmey</p>
                                <p>$250</p>
                            </div>
                        </div>
                        <div className="flex w-full my-8">
                            <button className="w-11/12 text-white bg-[#21806a] py-5 rounded-lg mt-4 mx-auto" onClick={() => setShowSocialIcons(true)}>Share bet slip</button>
                        </div>
                        {/* Social media icons div */}
                        {showSocialIcons && (
                            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[178px] bg-[#e5e5e5] rounded-lg w-full px-6 md:px-2 md:w-3/12 px-5 flex flex-col items-center justify-between">
                                <div className="flex py-3 w-full items-center justify-between overflow-x-auto">
                                    <p>Share</p>
                                    <IoMdClose className="text-4xl rounded-full bg-white p-2 cursor-pointer" onClick={() => setShowSocialIcons(false)} />
                                </div>
                                <div className="w-full flex gap-2 items-center py-3 px-5 justify-between gap-1 overflow-x-auto">
                                    {socialMediaIcons.map((item, index) => (
                                        <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="rounded-full text-3xl bg-white p-2">{item.icon}</a>
                                    ))}
                                </div>
                                <div className="md:w-11/12 overflow-x-auto w-full py-6 px-2 gap-2 flex items-center flex-col">
                                    <p className="mb-3">Copy Link</p>
                                    <div className="w-full cursor-pointer flex rounded-lg flex items-center justify-between px-6 bg-white py-3" onClick={copyToClipboard}>
                                        <p>{window.location.href.slice(0, 20) + "..."}</p>
                                        <FaRegCopy />
                                    </div>
                                </div>
                                {isCopied && (
                                    <div className="rounded-lg absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex items-center justify-center text-white text-sm">
                                        Copied to clipboard!
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </main>
    );
}

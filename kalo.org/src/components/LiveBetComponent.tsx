import React from 'react'
import { ImCheckmark2 } from "react-icons/im";
import { MdClose } from "react-icons/md";

const LiveBetComponent = () => {
    return (
        <div className='py-10 h-[90%] overflow-scroll'>
            <div className='px-6'>
            <h2 className='flex py-3 pt-5 text-3xl w-2/5'>Recent Bets</h2>
            <div className='py-4 mx-auto max-w-[800px]'>
                <div className='flex my-4 items-center p-4 rounded-md bg-[#ffffff]'>
                    <div className='flex flex-col items-center'>
                        <ImCheckmark2 className='text-red-300'/>
                        <h2 className='bg-[#cd9666] rounded-sm text-sm px-3 my-1 py-[1px]'>Emmanuel</h2>
                        <h2 className='text-xs'>$20,00</h2>
                    </div>
                    <div className='flex flex-1 flex-col items-center'>
                        <h2 className='text-[14px]'>Bet name</h2>
                        <h2 className='text-[18px] pt-2 pb-1'>VS</h2>
                        <h2 className='text-[12px]'>12:30pm|Apr-21/Apr30</h2>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='p-[2px] bg-purple-400'>
                        <MdClose className=''/>
                        </div>
                        <h2 className='bg-purple-400 rounded-sm text-sm px-3 my-1 py-[1px]'>Emmanuel</h2>
                        <h2 className='text-xs'>$20,00</h2>
                    </div>
                </div>    
            </div>
        </div>
        </div>
    )
}

export default LiveBetComponent
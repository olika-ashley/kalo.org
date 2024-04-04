import React from 'react'
import { ImCheckmark2 } from "react-icons/im";
import { FaWindowClose } from "react-icons/fa";

interface BetEventProps{
        forUser: string,
        forStakeAmount: string,
        betName: string,
        setDate: string,
        againstUser: string,
        againstStakeAmount: string

}

function BetEvent({forUser, forStakeAmount, betName, setDate , againstUser, againstStakeAmount}: BetEventProps) {
  return (
    <div className="bg-[#333333] my-5 py-7 items-center  w-full sm:w-11/12 md:w-2/3 lg:w-2/5 rounded-lg flex px-6 justify-between">
          <div className='flex flex-col gap-1 items-center'>
            <ImCheckmark2  className='text-2xl text-[#5CA027]'/>
            <p className='px-8 py-1 bg-[#E29753] rounded-lg'>
            {forUser}
            </p>
            <p>{forStakeAmount}</p>
            </div>
          <div className='flex flex-col items-center gap-4'>
            <h2>{betName}</h2>
            <p>VS</p>
            <p className='text-xs'>{setDate}</p>
          </div>
          <div className='flex flex-col gap-1 items-center'>
            <FaWindowClose className='text-2xl text-[#633DCE]'/>
            <p className='px-8 py-1 bg-[#633DCE] rounded-lg'>
            {againstUser}
            </p>
            <p>{againstStakeAmount}</p>
            </div>
        </div>
  )
}

export default BetEvent
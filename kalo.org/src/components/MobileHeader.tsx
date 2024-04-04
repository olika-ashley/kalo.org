import Image from 'next/image';
import React from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlinePerson2 } from "react-icons/md";

const MobileHeader = () => {
  return (
    <div className='w-full bg-[#f1f1f1] py-3 p-6 md:hidden'>
        <div className='flex justify-between border-2 w-full items-center'>
            <div>
                <MdOutlineMenu className='text-3xl' />
            </div>
            <div>
                <h1>Kalo</h1>
            </div>
            <div>
                <div className='flex items-center'>
                    <Image className='rounded-full w-[30px] h-[30px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTymAr-_PS4slIBU_4NSwv1KnSo-gX-qKFUmQ&s" alt="" width={100} height={100}/>
                    <MdOutlinePerson2 className='text-2xl'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobileHeader
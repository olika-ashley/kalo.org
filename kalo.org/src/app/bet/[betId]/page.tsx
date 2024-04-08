"use client"
import AddBetComponent from '@/components/AddBetComponent';
import MobileHeader from '@/components/MobileHeader';
import { useContextState } from '@/context/AppContextProvider';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ImCheckmark2 } from 'react-icons/im';
import { MdClose } from 'react-icons/md';
import { Oval } from 'react-loader-spinner'

export default function BetInfo() {
  const [data, setData] = useState<any>()
  const [loading, setLoading] = useState(false)
  const {showBetOpponentForm} = useContextState()

  const pathName = usePathname()
  const betId = pathName.split('/').pop() || "";

  const getBetById = async () => {
    try {
      setLoading(true)
      const response = await axios.get("/api/get_bets", {
        params: {
          betId: betId
        }

      })
      setData(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getBetById()
  }, [])

  return (
    <>
      {loading ?
        <div className='h-screen w-full flex items-center justify-center'>
          <Oval
            visible={true}
            height="120"
            width="120"
            color="#4fa94d"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
        :
        <>
        {showBetOpponentForm? 
          <AddBetComponent />
          : 
          <main className="">
          <MobileHeader />
          {data &&
          <div className='py-10 h-[90%] overflow-scroll'>
          <div className="w-full flex flex-col items-center justify-center py-12 px-3">
            <h2 className='flex py-3 pt-5 text-xl md:w-8/12 sm:w-8/12 w-11/12'> Bets Details</h2>
            <div className='py-4 mx-auto md:w-8/12 sm:w-8/12 w-11/12 flex my-4 items-center p-4 rounded-md bg-[#ffffff]'>
              <div className='flex gap-2 justify-between w-full items-center'>
                <div className='flex flex-col items-center'>
                  <ImCheckmark2 className='text-red-300' />
                  <h2 className='bg-[#cd9666] rounded-sm text-sm px-3 my-1 py-[1px]'>{data?.user1Name}</h2>
                  <h2 className='text-xs'>${data?.stakeAmount}</h2>
                </div>
                <div className='flex flex-1 flex-col items-center'>
                  <h2 className='text-[14px] text-center'>{data?.name}</h2>
                  <h2 className='md:text-[18px] pt-2 pb-1 text-[16px]'>VS</h2>
                  <h2 className='text-[12px] pt-4 text-center'>20:00 PM | {data?.betDeadline}</h2>
                  <h2 className='text-[12px] pt-4 text-center'>20:00</h2>
                </div>
                <div className='flex flex-col items-center'>
                  <div className='p-[2px] bg-purple-400'>
                    <MdClose />
                  </div>
                  <h2 className='bg-purple-400 rounded-sm text-sm px-3 my-1 py-[1px]'> {data?.user2Name}</h2>
                  <h2 className='text-xs'>${data?.stakeAmount}</h2>
                </div>
              </div>
            </div>
            <h2 className='flex py-3 pt-5 text-xl md:w-8/12 sm:w-8/12 w-11/12'> Conditions</h2>
            <div className='py-4 mx-auto md:w-8/12 sm:w-8/12 w-11/12 flex flex-col my-4 items-center '>
              <div className="py-4 gap-2 justify-between  w-full flex my-4 items-center  rounded-md">
                <div className=''>
                  <h3 className='font-bold text-2xl'>For: </h3>

                </div>
                <div className="flex-1 flex gap-2 items-center justify-between">
                  <div className='bg-[#cd9666] rounded-sm text-sm px-3 my-1 flex items-center justify-center py-3'> Ladies for the trophy</div>
                  <div>Ladies for the trophy</div>
                  <div> Draw </div>
                </div>
              </div>
              <div className="flex gap-2 justify-between  w-full my-4 items-center py-4 rounded-md">
                <div className=''>
                  <h3 className='font-bold text-2xl'>Against: </h3>
                </div>
                <div className="flex-1 flex gap-2 items-center justify-between">
                  <div className=''> Ladies for the trophy</div>
                  <div className='p-[2px] flex items-center justify-center bg-purple-400 rounded-sm text-sm px-3 my-1 py-3'>Guys for the trophy</div>
                  <div> Draw </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          }
        </main>
        }
        </>
      }
    </>
  );
}

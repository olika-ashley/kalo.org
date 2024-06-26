import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ImCheckmark2 } from 'react-icons/im';
import { MdAdd, MdClose } from 'react-icons/md';
import formatDate from "../utils/formatDate";
import Link from 'next/link';
import { useContextState } from '@/context/AppContextProvider';
const SingleLiveBet = ({ bet, loading }: any) => {
    const [timeRemaining, setTimeRemaining] = useState('');

    const {setShowBetOpponentForm, setBetId} = useContextState()

    const handleWinner = async () => {
        try {
            const response = await axios.post("/api/bet_winner")
            console.log(response.data)

        } catch (error) {

        } finally {

        }
    }

    const handleShowOpponentForm = (id:string) => {
        setBetId(id)
        setShowBetOpponentForm(true)
    }

    useEffect(() => {
        const deadlineDate = new Date(bet.betDeadline);
        const createdDate = new Date(bet.createdAt);

        const updateCountdown = () => {
            const timeDifference = deadlineDate.getTime() - Date.now();

            if (timeDifference <= 0) {
                setTimeRemaining("Bet is over");
                return;
            }

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            if (timeDifference <= 2000) {
                handleWinner();
            }

            setTimeRemaining(`${days} days, ${hours} hours, ${minutes} min, ${seconds} sec`);
        };

        updateCountdown();
        const countdownInterval = setInterval(updateCountdown, 1000);
        return () => clearInterval(countdownInterval);
    }, [bet]);

    return (
        <div className='flex my-4 items-center p-4 rounded-md bg-[#ffffff]'>
            <Link href={`/bet/${bet.id}`} className='flex gap-2 justify-between w-full items-center'>
                <div className='flex flex-col items-center'>
                    <ImCheckmark2 className='text-red-300' />
                    <h2 className='bg-[#cd9666] rounded-sm text-sm px-3 my-1 py-[1px]'>{bet.user1Name}</h2>
                    <h2 className='text-xs'>${bet.stakeAmount}</h2>
                </div>
                <div className='flex flex-1 flex-col items-center'>
                    <h2 className='text-[14px] text-center'>{bet.name}</h2>
                    <h2 className='md:text-[18px] pt-2 pb-1 text-[16px]'>VS</h2>
                    <h2 className='text-[12px] pt-4 text-center'>{formatDate(bet.betDeadline)}</h2>
                    <h2 className='text-[12px] pt-4 text-center'>{timeRemaining}</h2>
                </div>
                <>
                    {bet?.user2Name === "" || bet?.user2Name  === undefined || bet?.user2Name === null?
                        <div className='flex flex-col items-center'>
                        <button className=' px-2 text-sm flex flex-col items-center' onClick={() => handleShowOpponentForm(bet.id)}><MdAdd  className='text-purple-400 text-2xl'/>
                        <span className='bg-purple-400 px-2 rounded'>Stake Against</span>
                        </button>
                    </div>
                        :
                        <div className='flex flex-col items-center'>
                            <div className='p-[2px] bg-purple-400'>
                                <MdClose />
                            </div>
                            <h2 className='bg-purple-400 rounded-sm text-sm px-3 my-1 py-[1px]'> {bet.user2Name} </h2>
                            <h2 className='text-xs'>${bet?.stake2Amount}</h2>
                        </div>
                    }
                </>
            </Link>

        </div>
    );
};

export default SingleLiveBet;

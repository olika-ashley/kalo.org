import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ImCheckmark2 } from "react-icons/im";
import { MdClose } from "react-icons/md";
import SingleLiveBet from './SingleLiveBet';

const LiveBetComponent = () => {
    const [loading, setLoading] = useState()
    const [data, setData] = useState([])
    const [timeRemaining, setTimeRemaining] = useState('');

    const getLiveBets = async() => {
        try{

            const response = await axios.get("/api/get_bets")
            console.log("get_bets: ", response)
            setData(response.data)

            // const createdAt = new Date(response.data.createdAt);
            // let betDeadline: Date | null = null;
            
            // // Check if betDeadline is provided in the response data
            // if (response.data.betDeadline) {
            //     betDeadline = new Date(response.data.betDeadline);
            // }
            
            // console.log("Created Date:", createdAt);
            // console.log("Bet Deadline:", betDeadline);
            
            // if (!betDeadline) {
            //     console.log("Bet deadline not provided.");
            //     return;
            // }
            
            // const timeDifference = betDeadline.getTime() - createdAt.getTime();

            // console.log("Time Difference:", timeDifference);
            
            // if (timeDifference <= 0) {
            //     setTimeRemaining("Bet deadline has passed.");
            //     return;
            // }
            
            // const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            // const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            // const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            // const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            
            // setTimeRemaining(`Time remaining: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
        }catch(error){

            console.log(error)

        }finally{

        }
    }

    // console.log(data[])

    useEffect(() => {
        getLiveBets()
        //  const countdownInterval = setInterval(getLiveBets, 1000);
        //  return () => clearInterval(countdownInterval);
    },[])

    return (
        <div className='py-10 h-[90%] overflow-scroll'>
      <div className="w-full flex flex-col items-center justify-center py-12 px-3">
            <h2 className='flex py-3 pt-5 text-xl md:w-5/12 sm:w-8/12 w-11/12'>Recent Bets</h2>
            <div className='py-4 mx-auto md:w-5/12 sm:w-8/12 w-11/12'>
                {data.map(bet => (
                    <SingleLiveBet bet={bet}/>
                ))}  
            </div>
        </div>
        </div>
    )
}

export default LiveBetComponent
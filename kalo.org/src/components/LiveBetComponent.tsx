import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SingleLiveBet from './SingleLiveBet';

const LiveBetComponent = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getLiveBets = async () => {
        try {
            const response = await axios.get("/api/get_bets");
            console.log("get_bets: ", response);
            setData(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getLiveBets();
    }, []);

    return (
        <div className='py-10 h-[90%] overflow-scroll'>
            <div className="w-full flex flex-col items-center justify-center py-12 px-3">
                <h2 className='flex py-3 pt-5 text-xl md:w-5/12 sm:w-8/12 w-11/12'>Recent Bets</h2>
                <div className='py-4 mx-auto md:w-5/12 sm:w-8/12 w-11/12'>
                    {data.map(bet => (
                        <SingleLiveBet key={bet} bet={bet} loading={loading} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LiveBetComponent;

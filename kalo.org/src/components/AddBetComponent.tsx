"use client"
import { useContextState } from '@/context/AppContextProvider';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import axios from 'axios';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import LoginScreen from './LoginScreen';
import { Slider } from './ui/slider';


const AddBetComponent = () => {
  const [selectAnswer, setSelectAnswer] = useState('');
  const [betDeadline, setBetDeadline] = useState('');
  const [condition, setCOndition] = useState("");
  const [amount, setAmount] = useState(0);
  const { showLoginScreen, setShowLoginScreen, setShowSidebar } = useContextState()

  const stakeAmount = Number(amount).toFixed(2)

  const { primaryWallet, user } = useDynamicContext();

  const handleAddBet = async () => {
    try {

      // setShowLoginScreen(true)
      if (user === undefined) {
        setShowLoginScreen(true)
        return
      }
      

      const response = await axios.get("/api/user")
      const users = response.data

      if (user && users.lengthh === 0) {
        const response = await axios.post("/api/add_user", {
          email: user.email,
          name: `${user.firstName} ${user.lastName}`,
          walletAddress: user.verifiedCredentials[0].address,
          username: user.username,
        })

        const response2 = axios.post("/api/add_bet", {
          condition: condition,
          userId: response.data.id,
          currentBetCondition: "start",
          betDeadline: betDeadline,
          stakeAmount: amount,
        })

        console.log(response2)
      } else {

        const currentUser = users.find((userInfo: any) => userInfo.email === user?.email)
        const response2 = axios.post("/api/add_bet", {
          condition: condition,
          userId: currentUser.id,
          currentBetCondition: "start",
          betDeadline: betDeadline,
          stakeAmount: amount,
        })

        console.log(response2)
      }
      // navigate to live bets
    } catch (error) {
      console.log(error)
    }
  }

  const handleSliderChange = (newValue: number[]) => {
    const newValueAsNumber = newValue[0];
    setAmount(newValueAsNumber)
  };

  const isFormValid = !!condition && !!betDeadline && !!selectAnswer && amount !== 0;

  return (
    <div className='h-[90%]'>
      {showLoginScreen ?
        <LoginScreen />
        :
        <div className='h-full flex  flex-col items-center justify-center px-10' onClick={() => setShowSidebar(false)}>
          <div className='bg-white py-4 px-4 w-full rounded-xl mx-auto max-w-[700px]'>
            <h2 className='pb-2 text-[16px] font-semibold'>Create Bet form</h2>
            <form className='text-[14px] pb-6'>
              <div className='py-1'>
                <label className='text-[11px] font-semibold'>Bet Name</label>
                <input type='text' required className='w-full bg-[#ececec] p-2 rounded-md' />
              </div>

              <div className='py-1'>
                <label className='text-[11px] font-semibold'>Condition</label>
                <textarea cols={4} required className='w-full bg-[#ececec] p-2 rounded-md' />
              </div>

              <div className='py-1'>
                <label className='text-[11px] font-semibold'>Time/date</label>
                <input type="datetime-local"
                  value={betDeadline}
                  onChange={(e) => setBetDeadline(e.target.value)}
                  required className='w-full bg-[#ececec] p-2 rounded-md' />
              </div>

              <div className='py-1'>
                <label className='text-[11px] font-semibold'>Answer</label>
                <div>
                  <div
                    onClick={() =>
                      setSelectAnswer('true')
                    }
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    {selectAnswer === 'true' ? (
                      <div className="p-[6px] bg-green-300 w-fit" />
                    ) : (
                      <div className="p-[4px] border-2  w-fit" />
                    )}
                    <h2>For</h2>
                  </div>
                  <div
                    onClick={() =>
                      setSelectAnswer('false')
                    }
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    {selectAnswer === 'false' ? (
                      <div className="p-[6px] bg-green-300 w-fit" />
                    ) : (
                      <div className="p-[4px] border-[2px] w-fit" />
                    )}
                    <h2>Against</h2>
                  </div>
                </div>
              </div>
              <div>
                <label className='text-[11px] font-semibold'>Stake Amount</label>
                <div className='flex items-center'>
                  <div className="py-2 flex-1">
                    <Slider onValueChange={handleSliderChange} min={1} max={10000} className="bg-red-600 rounded-2xl" />
                  </div>
                  <div className='flex items-center pl-2'>
                    <div className='bg-[#ececec] p-[4px] text-[12px]'>USDC</div>
                    <input className='bg-[#ececec] text-[12px] p-[4px] border-l-2 border-[#595959] outline-none w-[70px] text-center' type='number' value={stakeAmount} onChange={e => setAmount(Number(e.target.value))}/>
                  </div>
                </div>
              </div>

              <button disabled={!isFormValid} className='w-full mt-10 bg-red-200 py-2 rounded-md'>Create bet</button>
            </form>
          </div>
        </div>}
    </div>
  );
};

export default AddBetComponent;
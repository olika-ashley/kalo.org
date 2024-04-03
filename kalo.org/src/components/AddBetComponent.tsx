import { useContextState } from '@/context/contextProvider';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import axios from 'axios';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import LoginScreen from './LoginScreen';

type AddBet = {
  condition: string;
  betDeadline: string;
  stakeAmount: number;
  answer: boolean;
};

const AddBetComponent = () => {
  const [selectAnswer, setSelectAnswer] = useState('');
  const [betDeadline, setBetDeadline] = useState('');
  const [condition, setCOndition] = useState("");
  const [amount, setAmount] = useState(0);
  const {showLoginScreen, setShowLoginScreen} = useContextState()

  const { primaryWallet, user } = useDynamicContext();

  const handleAddBet = async() => {
    try{

        if(user === undefined){
            setShowLoginScreen(true)
            return
        }

        const response = await axios.get("/api/user")
        const users = response.data

        if(user && users.lengthh === 0 ){
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
        }else{

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
    }catch(error){
        console.log(error)
    }
  }

  const isFormValid = !!condition && !!betDeadline && !!selectAnswer && amount !== 0;

  return (
    <div>
      {showLoginScreen ?
      <LoginScreen />
    : 
    <>
    <h2>Create Bet form</h2>
      <form >
        <div>
          <label>Condition</label>
          <input type='text' required/>
        </div>
        <div>
          <label>Bet Deadline</label>
          <input
            type="datetime-local"
            value={betDeadline}
            onChange={(e) => setBetDeadline(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Answer</label>
          <div>
            <div
              onClick={() => 
                setSelectAnswer('true')
              }
              className="flex items-center space-x-2 cursor-pointer"
            >
              {selectAnswer === 'true' ? (
                <div className="p-[5px] bg-green-300 w-fit" />
              ) : (
                <div className="p-[3px] border-2  w-fit" />
              )}
              <h2>True</h2>
            </div>
            <div
              onClick={() => 
                setSelectAnswer('false')
              }
              className="flex items-center space-x-2 cursor-pointer"
            >
              {selectAnswer === 'false' ? (
                <div className="p-[5px] bg-green-300 w-fit" />
              ) : (
                <div className="p-[3px] border-[2px] w-fit" />
              )}
              <h2>False</h2>
            </div>
          </div>
        </div>
        <div>
          <label>Amount</label>
          <input type='number' required />
        </div>

        <input type="submit" disabled={!isFormValid} />
      </form>
    </>}
    </div>
  );
};

export default AddBetComponent;
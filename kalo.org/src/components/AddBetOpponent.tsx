import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import LoginScreen from './LoginScreen';
import { useContextState } from '@/context/AppContextProvider';
import { useRouter } from 'next/navigation';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import axios from 'axios';
import { Slider } from './ui/slider';
import { Oval } from 'react-loader-spinner';

const AddBetOpponent = () => {
    const [amount, setAmount] = useState(0);
    const { showLoginScreen, setShowLoginScreen, setShowSidebar, setShowBetOpponentForm, betId, loading, setLoading } = useContextState();
    const router = useRouter();

    const { user} = useDynamicContext()
  
    const stakeAmount = Number(amount).toFixed(2);
  
    const handleAddOpponent = async () => {
      try {
        setLoading(true)
        if (user === undefined) {
          setShowLoginScreen(true);
          console.log("no User");
          return;
        }
  
        const data = {
          user2Name: user.username,
          stake2Amount: amount,
          email: user.email,
          firstName: user.firstName,
          lastName: user.email,
          walletAddress: user.verifiedCredentials[0].address,
          username: user.username,
          betId: betId
        };
  
        const response = await axios.post('/api/add_bet_opponent', data);
        
        toast.success('Bet created successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
  
        console.log("Bets created successfully");
        setShowBetOpponentForm(false)
        window.location.reload();
      } catch (error) {
        console.log(error);
      } finally{
        setLoading(false)
      }
    };
  
    const handleSliderChange = (newValue: number[]) => {
      const newValueAsNumber = newValue[0];
      setAmount(newValueAsNumber);
    };
  
    const isFormValid = amount !== 0
  
    return (
      <div className='h-[90%]'>
        <ToastContainer />
        {showLoginScreen ? (
          <LoginScreen />
        ) : (
         <>
         {loading? 
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
         <div
         className='h-full flex flex-col items-center justify-center px-10'
         onClick={() => setShowSidebar(false)}
       >
         <div className='bg-white py-4 px-4 w-full rounded-xl mx-auto max-w-[700px]'>
           <h2 className='pb-2 text-[16px] font-semibold text-center'>You are betting against</h2>
           <form className='text-[14px] pb-6'> 
             <div>
               <label className='text-[11px] font-semibold'>Stake Amount</label>
               <div className='flex items-center'>
                 <div className='py-2 flex-1'>
                   <Slider
                     onValueChange={handleSliderChange}
                     min={1}
                     max={10000}
                     className='bg-red-600 rounded-2xl'
                   />
                 </div>
                 <div className='flex items-center pl-2'>
                   <div className='bg-[#ececec] p-[4px] text-[12px]'>USDC</div>
                   <input
                     className='bg-[#ececec] text-[12px] p-[4px] border-l-2 border-[#595959] outline-none w-[70px] text-center'
                     type='number'
                     value={stakeAmount}
                     onChange={(e) => setAmount(Number(e.target.value))}
                   />
                 </div>
               </div>
             </div>

             <button
               disabled={!isFormValid}
               className='w-full mt-10 bg-red-200 py-2 rounded-md'
               onClick={handleAddOpponent}
             >
               stake bet
             </button>
           </form>
         </div>
       </div>}
         </>
        )}
      </div>
    );
}

export default AddBetOpponent
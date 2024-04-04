"use client"
import React, { useEffect } from 'react'
import {
  DynamicEmbeddedWidget, useDynamicContext,
} from "@dynamic-labs/sdk-react-core"
import { useContextState } from '@/context/AppContextProvider'

const LoginScreen = () => {
  const {setShowLoginScreen}= useContextState()
  const { user } = useDynamicContext();

  useEffect(() => {
    if(user !== undefined){
        setShowLoginScreen(false)
    }
  }, [user])

  return (
    <div className='h-full w-full z-50 fixed'>
      <div className='h-full relative'>
        <div className='absolute top-0 opacity-90 bg-gray-600 w-full h-full' />
          <div className='h-full flex justify-center items-center'>
            <div className='md:w-[500px] w-full p-4'>
            <DynamicEmbeddedWidget background="default" />
            </div>
          </div>
      </div>
    </div>
  )
}

export default LoginScreen
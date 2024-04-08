import React from 'react'

function MyBetsSkeletonLoader() {
  return (
    <div className="w-full py-4 mx-auto md:w-w-9/12 sm:w-8/12 w-11/12 border bg-white shadow-lg rounded-lg animate-pulse">
                            <div className="w-full my-4 flex flex-col items-center justify-center">
                                <div className="h-32 w-32 bg-gray-300 rounded-full"></div>
                                <h3 className="text-xl font-extrabold bg-gray-300 h-8 w-32 mt-2"></h3>
                                <div className="w-11/12 my-2 h-0.5 bg-[#e5e5e5] mx-auto"></div>
                                <h3 className="mb-3 font-we bg-gray-300 h-6 w-48 mt-2"></h3>
                            </div>
                            <div className="w-full px-8 flex justify-between items-center">
                                <div className="flex gap-4 p-1 flex-1 flex-col items-start ">
                                    <p className="bg-gray-300 h-4 w-24 mt-2"></p>
                                    <p className="bg-gray-300 h-4 w-16 mt-2"></p>
                                    <p className="bg-gray-300 h-4 w-28 mt-2"></p>
                                    <p className="bg-gray-300 h-4 w-16 mt-2"></p>
                                    <p className="bg-gray-300 h-4 w-20 mt-2"></p>
                                    <p className="bg-gray-300 h-4 w-12 mt-2"></p>
                            </div>
                            <div className="flex gap-4 p-1 flex-1 flex-col items-end ">
                            <p className="bg-gray-300 h-4 w-28 mt-2"></p>
                            <p className="bg-gray-300 h-4 w-16 mt-2"></p>
                            <p className="bg-gray-300 h-4 w-32 mt-2"></p>
                            <p className="bg-gray-300 h-4 w-20 mt-2"></p>
                            <p className="bg-gray-300 h-4 w-20 mt-2"></p>
                            <p className="bg-gray-300 h-4 w-8 mt-2"></p>
                            </div>
                        </div>
                    <div className="flex w-full my-8">
                    <button className="w-11/12 text-white bg-[#21806a] py-5 rounded-lg mt-4 mx-auto"></button>
                 </div>
           </div>
  )
}

export default MyBetsSkeletonLoader
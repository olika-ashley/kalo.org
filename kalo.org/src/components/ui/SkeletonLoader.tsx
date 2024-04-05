import React from 'react';

const SkeletonLoading = () => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index} className="flex my-4 items-center p-4 rounded-md bg-gray-200 animate-pulse">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-full bg-gray-300"></div>
            <div className="w-20 h-4 mt-2 rounded bg-gray-300"></div>
            <div className="w-12 h-3 mt-1 rounded bg-gray-300"></div>
          </div>
          <div className="flex flex-1 flex-col items-center">
            <div className="w-32 h-4 mt-1 rounded bg-gray-300"></div>
            <div className="w-8 h-4 mt-2 rounded bg-gray-300"></div>
            <div className="w-24 h-4 mt-2 rounded bg-gray-300"></div>
            <div className="w-24 h-4 mt-2 rounded bg-gray-300"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-full bg-gray-300"></div>
            <div className="w-20 h-4 mt-2 rounded bg-gray-300"></div>
            <div className="w-12 h-3 mt-1 rounded bg-gray-300"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SkeletonLoading;

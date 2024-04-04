
import React, { ReactNode } from 'react';
import { Navbar } from './Navbar';

interface LayoutWrapperProps {
  children: ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  return (
    <div className="flex w-full min-h-screen  flex-col">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default LayoutWrapper;

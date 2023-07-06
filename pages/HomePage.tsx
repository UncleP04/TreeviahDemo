import React from "react";
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar';
import Footerbar from '@/components/footer';
import Dashboard from '@/components/dashboard';

const HomePage: React.FC = () => {

  return (
    <div className="flex flex-row relative w-full">
      <div className=" w-[50px] hidden md:block ">
         <Sidebar />
      </div>
      <div className="w-[100%] flex flex-col justify-between align-middle h-[100vh]">
        <div className="flex flex-col w-[100%] pl-[50px]">
         <Navbar />
        </div>
        <Dashboard />
        <div className="md:hidden">
          <Footerbar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
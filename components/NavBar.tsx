"use client"
import React, { useState } from "react";
import { MdSearch, MdMenu, MdNotifications } from 'react-icons/md'

const Navbar: React.FC = () => {

const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div>
            {/* <button className="absolute top-[18px] right-[20px] text-[25px] md:hidden text-purple-800">
                <MdMenu />
            </button> */}
         <section className="w-full flex justify-around align-middle px-[20px] py-[10px] shadow-md flex-row">
            <span className="flex flex-row justify-start align-center px-4 py-2 bg-purple-100 rounded w-[250px]
            md:w-[300px]">
                <span className="text-[25px] text-gray-400"><MdSearch /></span>
                <input type="text" placeholder="Search here" className="bg-transparent focus:outline-none text-purple-900 w-[100%]" />
            </span>
             <span className={`md:flex justify-start align-center gap-[20px] flex-row hidden `}>
                <button className="px-4 py-2 rounded text-purple-800 border border-3-purple hover:text-white hover:bg-purple-900 w-[130px]">Join Game</button>
            <button className="px-4 py-2 rounded hover:text-purple-800 border border-3-purple text-white bg-purple-900 hover:bg-white w-[150px]">Host</button>
            </span>
            <button className="text-[25px] text-purple-700 block md:hidden">
              <MdNotifications />
            </button>
         </section>
     </div>
    </div>
  );
};

export default Navbar;
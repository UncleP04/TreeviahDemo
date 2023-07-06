"use client"
import React, { useState } from 'react';
import { MdHome, MdLibraryBooks, MdEqualizer, MdExitToApp, MdAccountCircle, MdLiveHelp } from 'react-icons/md'
import Image from 'next/image';
import Logo from '../public/Images/logo.png'

interface SideMenu {
  id: number;
  title: string;
  icon: JSX.Element;
}


const Sidebar: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

const SideList: SideMenu[] = [
  {
    id: 1,
    title: 'Home',
    icon: <MdHome />
  },
  {
    id: 1,
    title: 'Library',
    icon: <MdLibraryBooks />
  },
  {
    id: 1,
    title: 'Analysis',
    icon: <MdEqualizer />
  },
  {
    id: 1,
    title: 'Account',
    icon: <MdAccountCircle />
  }
  ]

  return (
    <div className="relative w-[100%] hidden md:block">
      <section className={`bg-purple h-screen duration-300
      ${hovered ? "w-72 rounded-tr-xl rounded-br-xl" : "w-[50px]"} p-3 pt-[25px] absolute top-0 left-0`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}>
            <span className="flex flex-row justify-start align-start">
              <Image
              src={Logo}
              alt="logo.png"
              width={300}
              height={200}
              className="w-[20px] block float-left h-[30px]"
              />
              <h1 className={`m-0 flex justify-center align-middle text-center text-white text-[1.5em] pl-2 ${hovered ? "scale-100" : "scale-0"} duration-100`}>reeviah</h1>
            </span>
            <ul className={`${ hovered ? "mt-[40px]" : "mt-[40px]"} flex flex-col justify-start align-start gap-[30px]`}>
              {SideList.map((list) => (
                <li key={list.id} className=" flex justify-start align-middle">
                    <span className="py-2 text-[25px] text-white">{list.icon}</span>
                  <h1 className={`px-4 py-2 rounded hover:bg-white text-white hover:text-purple w-[80%] ${hovered ? "scale-100 ml-[5px] cursor-pointer" : "scale-0"} duration-100`}>
                    {list.title}
                  </h1>
                </li>
              ))}
            </ul>
            <div>
              <span className="flex justify-start align-middle mt-[180px]">
                <span className="py-2 text-[25px] text-white">
                <MdExitToApp />
                </span>
                <h3 className={`px-4 py-2 rounded hover:bg-white text-white hover:text-purple w-[80%] ${hovered ? "scale-100 ml-[5px] cursor-pointer" : "scale-0"} duration-100`}>
                  Logout
                </h3>
              </span>
            </div>
      </section>
    </div>
  );
};

export default Sidebar;

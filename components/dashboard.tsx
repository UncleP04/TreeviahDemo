import React from 'react';
import Image from 'next/image';
import ImageOne from '../public/Images/one.jpg';
import ImageTwo from '../public/Images/two.jpg';
import ImageThree from '../public/Images/three.jpg';


const Dashboard: React.FC = () => {


  return (
   <div>
        <div className="w-[100%] h-[100%] flex lg:flex-row wrap flex-col">
            <section className="w-[100%] p-[20px] lg:w-[60%]">
                    <div className="flex flex-col justify-start align-middle">
                        <span className="flex flex-col justify-start align-middle">
                            <h2 className="capitalized font-medium text-[1.4em]">Welcome Senior Developer</h2>
                            <small className="text-purple-400">@Snr_Developer</small>
                        </span>
                        <span className="rounded-md bg-purple-900 w-[100%] lg:w-[90%] p-[20px] mt-6"> 
                            <span className="flex flex-col justify-start align-middle">
                                <h3 className="text-white text-[1em]">Host a Treeviah Game</h3>
                                <small className="text-white">Get to host a game a play online.</small>
                            </span>
                            <span className="grid grid-cols-3 gap-4 justify-evenly align-middle mt-6">
                                 <label className="flex flex-col justify-center align-middle gap-[10px]">
                                    <span className="p-2 border-2 rounded-full border-dashed flex justify-center align-middle self-center w-[50px] md:w-[100px] lg:w-[150px] h-[50px] md:h-[100px] lg:h-[150px]">
                                        <Image 
                                        src={ImageOne}
                                        alt="one.jpg"
                                        width={300}
                                        height={200}
                                        className="w-[100%] h-[100%] rounded-full"
                                             />
                                    </span>
                                    <button className="py-2 px-5 rounded-md bg-white text-purple-800 capitalized text-[12px] md:text-[15px]">
                                       Play Demo
                                    </button>
                                </label>
                                 <label className="flex flex-col justify-center align-middle gap-[10px]">
                                    <span className="p-2 border-2 rounded-full border-dashed flex justify-center align-middle self-center w-[50px] md:w-[100px] lg:w-[150px] h-[50px] md:h-[100px] lg:h-[150px]">
                                        <Image 
                                        src={ImageTwo}
                                        alt="one.jpg"
                                        width={300}
                                        height={200}
                                        className="w-[100%] h-[100%] rounded-full"
                                             />
                                    </span>
                                    <button className="py-2 px-5 rounded-md bg-white text-purple-800 capitalized text-[12px] md:text-[15px] w-[100%]">
                                       Host Game
                                    </button>
                                </label>
                                 <label className="flex flex-col justify-center align-middle gap-[10px]">
                                    <span className="p-2 border-2 rounded-full border-dashed flex justify-center align-middle self-center w-[50px] md:w-[100px] lg:w-[150px] h-[50px] md:h-[100px] lg:h-[150px]">
                                        <Image 
                                        src={ImageThree}
                                        alt="one.jpg"
                                        width={300}
                                        height={200}
                                        className="w-[100%] h-[100%] rounded-full"
                                             />
                                    </span>
                                    <button className="py-2 px-5 rounded-md bg-white text-purple-800 capitalized text-[12px] md:text-[15px]">
                                       Join Game
                                    </button>
                                </label>
                            </span>
                        </span>
                    </div>
                    <div></div>
                    <div></div>
            </section>
            <section className="lg:w-[40%] p-[20px] w-[100%]">
                hello
            </section>
        </div>
   </div>
  );
};

export default Dashboard;

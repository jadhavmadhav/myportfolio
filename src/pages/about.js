import React from "react";
import Me from "../assets/2.JPG";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

export default function About() {
  return (
    <section id="about" className="py-5 flex flex-col items-center">
      <h3 className='text-[14px] font-[500]'>Get To Know</h3>
      <h2 className='text-[20px] font-[700] text-blue-400 mt-[1px]'>About Me</h2>
      <div className="about_me w-[80%] max-w-[300px] rounded-[15px] m-auto my-8">
        <div className=" rounded-[15px] h-[250px] overflow-hidden rotate-[15deg] hover:rotate-[0deg]">
          <img src={Me} className=" w-[100%]" />
        </div>
      </div>

      <div className="flex flex-col w-[100%] justify-center items-center gap-4">
        <div className="bg-blue-600/50 rounded-[15px] h-[180px]   w-[80%] flex justify-center align-middle ">
          <div className="h-[100%] flex items-center justify-center gap-5 flex-col ">
            <FaAward className="text-[50px] " />
            <h4 className="font-bold">Experience</h4>
            <p className="text-[10px] font-[500] mt-[-10px]">1+ Years Working</p>
          </div>
        </div>

        <div className="bg-blue-600/50 rounded-[15px] h-[180px]    w-[80%] flex justify-center align-middle ">
          <div className="h-[100%] flex items-center justify-center gap-5 flex-col ">
            <VscFolderLibrary className="text-[50px] " />
            <h4 className="font-bold">Projects</h4>
            <p className="text-[10px] font-[500] mt-[-10px]">5+ Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}

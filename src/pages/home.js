import React from "react";
import MeImg from "../assets/me1.png";
import { ImLinkedin } from 'react-icons/im'
import { BsGithub } from 'react-icons/bs'
import { SiIndeed } from 'react-icons/si'

export default function Home() {

  const handleDownload = () => {
    fetch('../assets/Madhav_resume.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Resume.pdf';
        alink.click();
      })
    })
  }

  return (
    <div id="home" className="h-[100vh]">
      <header className="text-center h-[50%] flex flex-col align-middle justify-center">
        <div>
          <h4>Hello, I'm </h4>
          <h6 className="text-[30px] font-bold">Madhav Jadhav</h6>
          <h6>MERN Stack Developer</h6>
        </div>
        <div className="flex justify-center gap-5 mt-2">
          <button onClick={handleDownload} className="rounded-[15px] outline-none btn overflow-hidden  border border-sky-500/100 px-2 py-1">Download CV</button>
          <button className="rounded overflow-hidden bg-sky-500/100 hover:bg-sky-700 text-white font-bold  px-2 py-1" >Let's Talk</button>

        </div>
        <div className="flex gap-5 mx-auto mt-10">
          <a href="https://www.linkedin.com/in/madhav-jadhav-a2264417a" target="blank">  <ImLinkedin className=" text-white bg-sky-500 overflow-hidden active:scale-75" /></a>
          <a href="https://github.com/jadhavmadhav" target='_blank'> <BsGithub className="text-sky-500 active:scale-75" /></a>
          <a href="https://www.linkedin.com/in/madhav-jadhav-a2264417a" target="blank">  <SiIndeed className=" active:text-blue-500 active:scale-75" /></a>
        </div>
      </header>

      <div className="h-[50%] overflow-hidden bg-gradient-to-b from-teal-400 to-slate-700 rounded-t-[50%] max-w-[90%] w-[300px]  mx-auto">
        <img src={MeImg} className=" h-[100%] scale-[1.1] mx-auto" />
      </div>
    </div>
  );
}

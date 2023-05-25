import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServerLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

const active = {
  backgroundColor: ' rgb(80, 179, 245)',
  height: '35px',
  width: '35px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', 
}
const unActive = {
  height: '35px',
  width: '35px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export default function FooterMenu() {
  const [activebtn, setActivebtn] = useState("#")
  return (
    <section className="h-[50px]  sticky bottom-0 w-[100%] flex justify-center">

      <div className=" h-[100%] max-w-[90%] w-[300px] rounded-[25px] bg-slate-500/[0.3] flex flex-column justify-around items-center">
        <a href="#" onClick={() => setActivebtn('#')} style={activebtn == "#" ? active : unActive}><AiOutlineHome className="text-xl active:scale-110" /></a>
        <a href="#about" onClick={() => setActivebtn('#about')} style={activebtn === "#about" ? active : unActive} ><AiOutlineUser className="text-xl active:scale-110" /></a>
        <a href="#experience" onClick={() => setActivebtn('#experience')} style={activebtn === "#experience" ? active : unActive}><BiBook className="text-xl active:scale-110" /></a>
        {/* <a href="#services" onClick={() => setActivebtn('#services')} style={activebtn === "#services" ? active : unActive}><RiServerLine className="text-xl active:scale-110" /></a> */}
        <a href='#contact' onClick={() => setActivebtn('#contact')} style={activebtn === "#contact" ? active : unActive}><BiMessageSquareDetail className="text-xl active:scale-110" /></a>
      </div>
    </section>
  );
}

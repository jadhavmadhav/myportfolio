import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'


export default function Contact() {
  return (
    <section id='contact' className='py-14 flex flex-col items-center gap-3 justify-center pt-2'>
      <div className="bg-blue-600/50 rounded-[15px] h-[180px]   w-[80%] flex justify-center align-middle ">
        <div className="h-[100%] flex items-center justify-center gap-5 flex-col ">
          <AiOutlineMail className="text-[50px] " />
          <h4 className="font-bold">Email</h4>
          <h4 className="font-bold">jadhavmadhav1998@outlook.com</h4>
          <p className="text-[10px] font-[500] mt-[-20px]">send a message</p>
        </div>
      </div>

      <div className="bg-blue-600/50 rounded-[15px] h-[180px]   w-[80%] flex justify-center align-middle "
      >
        <a href="https://wa.me/917620643217/?text=hi madhav">
          <div className="h-[100%] flex items-center justify-center gap-5 flex-col ">
            <BsWhatsapp className="text-[50px] " />
            <h4 className="font-bold">WhatsApp</h4>
            <h4 className="font-bold">+91 7620643217</h4>
            <p className="text-[10px] font-[500] mt-[-20px]">send a message</p>
          </div>
        </a>
      </div>

    </section>
  )
}

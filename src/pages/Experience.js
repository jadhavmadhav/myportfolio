import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'

export default function Experience() {
  const frontEnd = [
    {
      id: 1,
      name: 'HTML',
      exp: 'Experienced'
    },
    {
      id: 2,
      name: 'CSS',
      exp: 'Experienced'
    },
    {
      id: 3,
      name: 'JavaScript',
      exp: 'Experienced'
    },
    {
      id: 4,
      name: 'Bootstrap',
      exp: 'Experienced'
    },
    {
      id: 5,
      name: 'Tailwind',
      exp: 'Intermediate'
    },
    {
      id: 6,
      name: 'React',
      exp: 'Experienced'
    },
    {
      id: 7,
      name: 'Material UI',
      exp: 'Intermediate'
    },
    {
      id: 8,
      name: 'Redux',
      exp: 'Experienced'
    }
  ]

  const backEnd = [
    {
      id: 1,
      name: 'Node Js',
      exp: 'Intermediate'
    },
    {
      id: 2,
      name: 'MongoDB',
      exp: 'Intermediate'
    },
    {
      id: 3,
      name: 'Express JS',
      exp: 'Intermediate'
    },
    {
      id: 4,
      name: 'Mongoose JS',
      exp: 'Experienced'
    },

  ]
  return (
    <section id='experience' className='h-[100vh] flex flex-col items-center py-5'>
      <h3 className='text-[14px] font-[500]'>What Skills I Have</h3>
      <h2 className='text-[20px] font-[700] text-blue-400 mt-[1px]'>My Experience</h2>

      <div className='bg-blue-600/50 w-[90%] my-5 rounded-3xl p-5'>
        <h2 className='text-center text-xl font-bold text-sky-400'>Front End Development</h2>
        <div className='mt-5 grid grid-cols-2'>
          {
            frontEnd?.map((item, index) => {
              return (
                <div key={index} className='flex gap-4  py-2'>
                  <BsFillPatchCheckFill className='text-sky-400' />
                  <div className='mt-[-5px]'>
                    <h3 className='p-0 text-[14px] font-[550]'>{item.name}</h3>
                    <h5 className='text-[12px] font-[400]'>{item.exp}</h5>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className='bg-blue-600/50 w-[90%]  rounded-3xl p-5'>
        <h2 className='text-center text-xl font-bold text-sky-400'>Back End Development</h2>
        <div className='mt-5 grid grid-cols-2'>
          {
            backEnd?.map((item, index) => {
              return (
                <div key={index} className='flex gap-4  py-2'>
                  <BsFillPatchCheckFill className='text-sky-400' />
                  <div className='mt-[-5px]'>
                    <h3 className='p-0 text-[14px] font-[550]'>{item.name}</h3>
                    <h5 className='text-[12px] font-[400]'>{item.exp}</h5>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

    </section>
  )
}

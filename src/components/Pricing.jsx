import React from 'react';
import {FcCheckmark} from 'react-icons/fc'

function Pricing() {
  return (
    <div name="pricing" className='w-full text-white my-24'>
        <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay '></div>
        <div className='max-w-[1240px] mx-auto py-12'>
           <div className='text-center py-8 text-slate-300'>
              <h2 className='text-3xl uppercase'>Pricing</h2>
              <h3 className='text-5xl font-bold text-white py-8'>The right price for your research.</h3>
               <p className='text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum ut soluta inventore quis eum blanditiis voluptatibus natus quo ex cumque!
               </p>
           </div>
           <div className='grid md:grid-cols-2'>
               <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                  <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-xl text-sm'>Standard</span>
                  <div>
                       <p className='text-6xl font-bold flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                  </div>
                  <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor sit amet consectetur </p>
                  <div className='text-2xl'>
                      <p className='flex py-4'><FcCheckmark className='w-8 mr-5' /> ipsum dolor sit</p>
                      <p className='flex py-4'><FcCheckmark className='w-8 mr-5'/> ipsum dolor sit</p>
                      <p className='flex py-4'><FcCheckmark className='w-8 mr-5'/> ipsum dolor sit</p>
                      <p className='flex py-4'><FcCheckmark className='w-8 mr-5'/> ipsum dolor sit</p>
                      <p className='flex py-4'><FcCheckmark className='w-8 mr-5'/> ipsum dolor sit</p>
                      <button className='w-full py-4 my-4'>Get Started</button>
                  </div>
               </div>
               <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
               <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-xl text-sm'>Premium</span>
               <div>
                    <p className='text-6xl font-bold flex'>$99<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
               </div>
               <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor sit amet consectetur </p>
               <div className='text-2xl'>
                   <p className='flex py-4'><FcCheckmark className='w-8 mr-5' /> ipsum dolor sit</p>
                   <p className='flex py-4'><FcCheckmark className='w-8 mr-5'/> ipsum dolor sit</p>
                   <p className='flex py-4'><FcCheckmark className='w-8 mr-5'/> ipsum dolor sit</p>
                   <p className='flex py-4'><FcCheckmark className='w-8 mr-5'/> ipsum dolor sit</p>
                   <p className='flex py-4'><FcCheckmark className='w-8 mr-5'/> ipsum dolor sit</p>
                   <button className='w-full py-4 my-4'>Get Started</button>
               </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Pricing
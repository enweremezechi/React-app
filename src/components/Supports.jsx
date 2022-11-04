import React from 'react';
import {BiPhone} from 'react-icons/bi';
import {FiArrowRight} from 'react-icons/fi';
import {MdSupport} from 'react-icons/md';
import {HiChip} from 'react-icons/hi';
import SucessKey from '../assets/sucesskey.jpg'

function Supports() {
  return (
      <div name="supports" className='w-full mt-24'>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
               <img className='w-full h-full object-cover mix-blend-overlay' src={SucessKey} alt="/"/>
            </div>
           <div  className='max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-12'>
                    <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Supports</h2>
                    <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
                    <p className='py-4 text-3xl text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ut soluta inventore quis eum blanditiis voluptatibus natus quo ex cumque!</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <BiPhone className='w-16 bg-indigo-600 h-14 p-4 text-white rounded-lg mt-[-4rem] '/>
                            <h3 className='font-bold text-2xl my-6'>Sales</h3>
                            <p className='text-gray-500 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ut soluta inventore quis eum blanditiis voluptatibus natus quo ex cumque!</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                          <p className='flex items-center text-indigo-600'>Contact Us<FiArrowRight className='w-5 ml-2'/></p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <MdSupport className='w-16 bg-indigo-600 h-14 p-4 text-white rounded-lg mt-[-4rem] '/>
                            <h3 className='font-bold text-2xl my-6'>Technical Supports</h3>
                            <p className='text-gray-500 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ut soluta inventore quis eum blanditiis voluptatibus natus quo ex cumque!</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                             <p className='flex items-center text-indigo-600'>Contact Us<FiArrowRight className='w-5 ml-2'/></p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <HiChip className='w-16 bg-indigo-600 h-14 p-4 text-white rounded-lg mt-[-4rem] '/>
                            <h3 className='font-bold text-2xl my-6'>Technical Supports</h3>
                            <p className='text-gray-500 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ut soluta inventore quis eum blanditiis voluptatibus natus quo ex cumque!</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'>Contact Us<FiArrowRight className='w-5 ml-2'/></p>
                        </div>
                    </div>
              </div>
           </div>
      </div>
   )
}

export default Supports
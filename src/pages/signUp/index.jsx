import { useState } from 'react';
import shopping from '../../assets/images/shopping.svg'
import picture from '../../assets/images/picture.png'
import doodle from '../../assets/images/doodle.svg'
import bg from '../../assets/images/bg.jpg'
import { Eye, EyeOff } from 'lucide-react'
import pattern from '../../assets/images/image.png'
import vector from '../../assets/images/vector.png'



const SignUp = () => {
    
    
    return (
        <>
        <div className=' bg-black'>
        <img src={doodle} alt="" />
        </div>
            <div className='flex gap-10 bg-black'>
                
                <div className='w-1/2 mt-24 ml-24'>
                    <img className='size-96' src={vector} alt="" />
                </div>

                <div className='bg-black w-1/2 shadow-lg mt-6 mr-5 p-5'>
                    <h3 className='text-6xl mb-5 text-white'>Sign up as a Vendor</h3>
                    {/* <p className='mb-2'>Start selling better</p> */}
                    <form className='space-y-5 '>
                        <label htmlFor="name" className="block text-sm font-medium text-white">Full name</label>
                        <input
                            type="text"
                            id="fullname"
                            placeholder="Enter your fullname"
                            className="w-96 px-3 py-2 mt-1 border  rounded-md shadow-sm focus:outline-none focus:ring  focus:ring-teal-400"
                        />
                        
                        <label htmlFor="name" className="block text-sm font-medium text-white">Email</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="Enter your email"
                            className="w-96 px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring  focus:ring-teal-400"
                        />

                        <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                        <input
                            type="text"
                            id="password"
                            placeholder="password"
                            className="w-96 px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring  focus:ring-teal-400"
                        />
                        <label htmlFor="confirm password" className="block text-sm font-medium text-white">Confirm Password</label>
                        <input
                            type="text"
                            id="password"
                            placeholder="confirm password"
                            className="w-96 px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring  focus:ring-black"
                        />
                       
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp
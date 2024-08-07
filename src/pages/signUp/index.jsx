import { useState } from 'react';
import doodle from '../../assets/images/doodle.svg';
import vector from '../../assets/images/vector.png';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import google from '../../assets/images/google.png'

const SignUp = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <>
      <div className='bg-black'>
        <img src={doodle} alt="" />
      </div>
      <div className='flex gap-10 bg-black'>
        <div className='w-1/2 mt-24 ml-24'>
          <img className='size-96' src={vector} alt="" />
        </div>

        <div className='bg-black w-1/2 shadow-lg mt-6 mr-5 p-5'>
          <h3 className='text-4xl mb-5 text-white'>Register below</h3>
          <form className='space-y-5'>
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium text-white">Name</label>
              <input
                type="text"
                id="fullname"
                placeholder="Kofi Poku"
                className="w-96 px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-700"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-96 px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-700"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-96 px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-700"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-white">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Retype Password"
                className="w-96 px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-700"
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="text-black focus:ring focus:ring-gray-700" />
              <label htmlFor="terms" className="ml-2 text-sm font-medium text-white">
                I agree to all the <span className="text-teal-400">Terms, Privacy Policy and Fees.</span>
              </label>
            </div>
            <button className='bg-red-600 px-3 py-2 w-96 rounded-md mt-6 text-white hover:bg-red-500'>Create an account</button>
          </form>
          <div className="mt-6 flex items-center justify-center space-x-3">
            <div className="h-px bg-gray-700 w-full"></div>
            <span className="text-gray-400">OR</span>
            <div className="h-px bg-gray-700 w-full"></div>
          </div>
          <button className="flex items-center justify-center w-96 mt-6 border border-gray-700 py-2 rounded-md hover:bg-gray-800">
            <img src={google} alt="Google logo" className="w-8 h-7  mr-1" />
            <span className="text-white">Sign up with Google</span>
          </button>
          <div className="mt-6 text-center text-sm flex justify-center items-center">
            <span className="text-gray-400">Have an account? </span>
            <button onClick={handleLoginClick} className="text-gray-200">Login here</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;

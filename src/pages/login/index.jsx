import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import doodle from '../../assets/images/doodle.svg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <>
      <img className='bg-black' src={doodle} alt="" />
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <div className="flex justify-center items-center w-full">
          <div className="bg-black border border-white shadow-lg mt-6 p-6">
            <h3 className="text-4xl mb-5 text-white">Login</h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your email"
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
              <div className="flex justify-end text-sm">
                <button type="button" className="text-gray-400">Forgot password?</button>
              </div>
              <button className='bg-red-600 px-3 py-2 w-96 rounded-md mt-6 text-white hover:bg-red-500'>Login</button>
            </form>
            <div className="mt-6 flex items-center justify-center space-x-3">
              <div className="h-px bg-gray-700 w-full"></div>
              <span className="text-gray-400">OR</span>
              <div className="h-px bg-gray-700 w-full"></div>
            </div>
            <button className="flex items-center justify-center w-96 mt-6 border border-gray-700 py-2 rounded-md hover:bg-gray-800">
              <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google logo" className="w-5 h-5 mr-2" />
              <span className="text-white">Login with Google</span>
            </button>
            <div className="mt-6 text-center text-sm">
              <span className="text-gray-400">Don't have an account yet? </span>
              <button onClick={handleSignUpClick} className="text-white">Sign up here</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

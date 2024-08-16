import { useState } from 'react';
import doodle from '../../assets/images/doodle.svg';
import { useNavigate } from 'react-router-dom';
import google from '../../assets/images/google.png'
import { apiSignUp } from '../../services/auth';
import {useForm} from  'react-hook-form'

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm(); 
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

 
  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    try {

      const res = await apiSignUp({
        firstName: data.firstName,
        lastName: data.lastname,
        email: data.email,
        password: data.password,
        confirmPassword: data['confirm-password'], 
      });

    
      if (res.status === 201 || res.status === 200) { 
        console.log("Response: ", res.data);
       
        navigate('/dashboard'); 
      } else {
        console.log("Unexpected response status: ", res.status);
      }
    } catch (error) {
      console.error("Error during sign-up: ", error);
   
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <>
      <img className='bg-black fixed' src={doodle} alt="" />
      <div className='bg-black min-h-screen flex flex-col items-center'>
        <div className='w-full h-16 bg-repeat-x'></div>
        <div className='bg-black w-full max-w-md mt-16 p-8 border border-white'>
          <h2 className='text-3xl mb-6 text-white font-bold'>Register below</h2>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <div>
              <label htmlFor="firstname" className="block text-sm font-medium text-white">First name</label>
              <input
                type="text"
                id="fullname"
                placeholder="Kofi Poku"
                className="w-full px-3 py-2 mt-1 bg-white border border-gray-700 rounded-md text-black focus:outline-none focus:ring-1 focus:ring-gray-500"
                {
                ...register("firstName", { required: "First Name is required" })
                }
              />
            </div>
            <div>
              <label htmlFor="Lastname" className="block text-sm font-medium text-white">Last name</label>
              <input
                type="text"
                id="lastname"
                placeholder="Kofi Poku"
                className="w-full px-3 py-2 mt-1 bg-white border border-gray-700 rounded-md text-black focus:outline-none focus:ring-1 focus:ring-gray-500"
                {
                ...register("lastname", { required: "lastname is required" })
                }
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full px-3 py-2 mt-1 bg-white border border-gray-700 rounded-md text-black focus:outline-none focus:ring-1 focus:ring-gray-500
              "
                {
                ...register("email", { required: "email is required" })
                }
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-3 py-2 mt-1 bg-white border border-gray-700 rounded-md text-black focus:outline-none focus:ring-1 focus:ring-gray-500"
                {
                ...register("password", { required: "password is required" })
                }
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-white">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Retype Password"
                className="w-full px-3 py-2 mt-1 bg-white border border-gray-700 rounded-md text-black focus:outline-none focus:ring-1 focus:ring-gray-500"
                {
                ...register("comfirm-password", { required: "comfirm-password is required" })
                }
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="text-black focus:ring focus:ring-gray-700" />
              <label htmlFor="terms" className="ml-2 text-sm font-medium text-white">
                I agree to all the <span className="text-teal-400">Terms, Privacy Policy and Fees.</span>
              </label>
            </div>
            <button className='bg-red-600 px-3 py-2 w-full rounded-md text-white hover:bg-red-700'>Create an account</button>
          </form>
          <div className="mt-6 flex items-center justify-center space-x-3">
            <div className="h-px bg-gray-700 w-full"></div>
            <span className="text-gray-400 text-sm">OR</span>
            <div className="h-px bg-gray-700 w-full"></div>
          </div>
          <button className="flex items-center justify-center w-full mt-6 border border-gray-700 py-2 rounded-md hover:bg-gray-800 text-white">
            <img src={google} alt="Google logo" className="w-5 h-5 mr-2" />
            <span>Sign up with Google</span>
          </button>
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-400">Have an account? </span>
            <button
              tye='submit'
              onClick={handleLoginClick} className="text-blue-400 hover:underline">Login here</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
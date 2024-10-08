import { useState } from 'react';
import {useForm} from  'react-hook-form'
import { Eye, EyeOff } from 'lucide-react';
import doodle from '../../assets/images/doodle.svg';
import { useNavigate } from 'react-router-dom';
import { apiLogIn } from '../../services/auth';
import Loader from "../../components/loader";
import { toast } from "react-toastify";


const Login = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const handleSignUpClick = () => {
    navigate('/signup');
  };
  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    try {
      const res = await apiLogIn({
        email: data.email,
        password: data.password
      })

      console.log("Response: ", res.data);
      toast.success("Login has been successful");
      
      // Store the username in local storage
      localStorage.setItem("username", data.username);
      
      setTimeout(() => { navigate("/dashboard") }, 5000);
      
    } catch (error) {
      console.log(error);
      toast.error("Failed to create account. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <>
      <img className='bg-black' src={doodle} alt="" />
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <div className="flex justify-center items-center w-full">
          <div className="bg-black border border-white shadow-lg mt-3 p-6">
            <h3 className="text-4xl mb-5 text-white">Login</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">Username or Email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your email"
                  className="w-96 px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-700"
                  {
                    ...register("email", { required: "Email is required" })
                    }
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="w-96 px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-700"
                  {
                    ...register("password", { required: "Password is required" })
                    }
                />
              </div>
              <div className="flex justify-end text-sm">
                <button type="button" className="text-gray-400">Forgot password?</button>
              </div>
              <button
              type='submit' className='bg-red-600 px-3 py-2 w-96 rounded-md mt-6 text-white hover:bg-red-500'>
                {isSubmitting ? <Loader/> : "Login"}</button>
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
              <button onClick={handleSignUpClick} className="text-blue-400">Sign up here</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

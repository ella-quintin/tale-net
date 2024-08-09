import pattern from '../../assets/images/pattern.svg';
import logo from '../../assets/images/logo.jpg';
import framer from '../../assets/images/framer.svg'
import mj from '../../assets/images/mj.jpg'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


const Creatives = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className="flex justify-between items-center h-16 bg-black bg-opacity-75 px-8">
        <div className="text-2xl font-sans">
          <h3>Tale-net</h3>
        </div>
        <div className="flex items-center gap-6 text-lg font-normal">
        <h3 className="cursor-pointer">Home</h3>
          <h3 className="cursor-pointer">Bio</h3>
          <h3 className="cursor-pointer">Gallery</h3>
          <h3 className="cursor-pointer">Marketplace</h3>
        </div>
      </div>

      {/* Background Image and Profile */}
      <div className="relative">
        {/* Background Pattern */}
        <img src={pattern} alt="Pattern Background" className="w-full h-64 object-cover" />

        {/* Brand LOgo*/}
        <div className="flex flex-col items-center -mt-12">
          <div className="rounded-full border-4 border-white p-2 bg-black">
            <img
              src={logo}
              alt="Profile"
              className="rounded-full w-24 h-24 object-cover"
            />
          </div>
          <h1 className="mt-4 text-2xl font-bold">Efata By Juba</h1>
          <p className="text-sm text-gray-400">Afropolitan Clothing</p>
          <p className="text-md font-thin mt-2">The Efata By Juba ‘Sankofa Collection’ features the stylized heart. The inspiration for this collection was the desire to encourage the <br /> African Woman to come back to appreciate her rich culture and to introduce our African heritage to the world. The purpose of this <br />collection is to start a discourse through the styles and fabric combinations. Especially at this particular time when it is imperative to <br />understand other cultures and for them to understand ours.</p>

          {/* Stats Section */}
          <div className="flex justify-around mt-6 gap-8 text-center">
           <FaInstagram size={30}/>
           <FaTwitter size={30}/>
           <FaFacebook size={30}/>
        </div>
        </div>

        {/* Action Buttons */}
        {/* <div className="absolute top-4 right-4 flex space-x-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg">
            Add Item
          </button>
          <button className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-lg">
            Edit Profile
          </button>
        </div> */}
      </div>
      <div className="mt-40 flex justify-start ml-16 items-center gap-6">
        <div className="relative w-1/4">
          <img src={framer} alt="" className="w-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={mj} alt="MJ" className="max-w-[95%] max-h-[95%] object-contain" />
          </div>
        </div>
        <div className=''>
          <h3 className='text-4xl'>Julie Baidoe - Ansah</h3>
          <p>Creative Director</p>
        </div>
      </div>
    </div>
  );
}

export default Creatives;

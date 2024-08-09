import grid from '../../assets/images/grid.png'
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className='min-h-full max-h-screen flex'>
            <div className="m-4 bg-black h-[calc(100vh-3.5rem-2rem)] shadow-lg w-64 flex flex-col justify-between rounded-xl">
                <h3 className='text-white text-lg'>Tale-Net</h3>
                <div className="flex py-6">
                    <ul className="space-y-2 w-full">
                        <Link to='/dashboard'>
                            <li className="flex items-center text-[18px] text-white space-x-4 p-4 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">
                                <img color='' className='text-red-600 hover:text-white' src={grid} alt="" />
                                <span>Dashboard</span>
                            </li>
                        </Link>

                        <Link to='/profile'>
                            <li className="flex items-center text-[18px] text-white space-x-4 p-4 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">
                                <img className='text-red-600 hover:text-white' src={grid} alt="" />
                                <span>Profile</span>
                            </li>
                        </Link>

                        <Link to='/company'>
                            <li className="flex items-center text-[18px] text-white space-x-4 p-4 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">
                                <img className='text-red-600 hover:text-white' src={grid} alt="" />
                                <span>Company details</span>
                            </li>
                        </Link>

                        <Link to='/product'>
                            <li className="flex items-center text-[18px] text-white space-x-4 p-4 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">
                                <img className='text-red-600 hover:text-white' src={grid} alt="" />
                                <span>Product</span>
                            </li>
                        </Link>
                        <Link to='/event'>
                            <li className="flex items-center text-[18px] text-white space-x-4 p-4 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">
                                <img className='text-red-600 hover:text-white' src={grid} alt="" />
                                <span>Event</span>
                            </li>
                        </Link>
                        <Link to='/payment'>
                            <li className="flex items-center text-[18px] text-white space-x-4 p-4 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">
                                <img className='text-red-600 hover:text-white' src={grid} alt="" />
                                <span>Payment</span>
                            </li>
                        </Link>

                        <li className="flex items-center text-[18px] text-white space-x-4 p-4 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">
                            <img className='text-red-600 hover:text-white' src={grid} alt="" />
                            <span>Orders</span>
                        </li>
                        <Link to='/invoice'>
                        <li className="flex items-center text-[18px] text-white space-x-4 p-4 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">
                            <img className='text-red-600 hover:text-white' src={grid} alt="" />
                            <span>Invoice</span>
                        </li>
                        </Link>
                        <Link to='/receipts'>
                        <li className="flex items-center text-[18px] text-white space-x-4 p-4 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">
                            <img className='text-red-600 hover:text-white' src={grid} alt="" />
                            <span>Invoice</span>
                        </li>
                        </Link>
                    </ul>
                </div>

                <div className='flex justify-between flex-row px-4 py-2 bg-white rounded-b-xl text-[#304A70]'>
                    <span>Logout</span>
                    <img src={grid} alt="" />
                </div>
            </div>
        </div>
    );
}

import { useState } from 'react';
import { ArrowTopRightOnSquareIcon, BuildingStorefrontIcon, CalendarDaysIcon, PhotoIcon, ShoppingBagIcon, ShoppingCartIcon, UserCircleIcon, CreditCardIcon, Bars3Icon } from '@heroicons/react/24/outline';
import grid from '../../assets/images/grid.png';
import logout from '../../assets/images/logout.svg'
import { Link } from 'react-router-dom';
import { LogOut, ReceiptCent, ReceiptIcon, ReceiptText } from 'lucide-react';

export default function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(true); // Default state is collapsed

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };



    return (
        <div className='min-h-full max-h-screen flex'>
            <div className={`m-4 bg-black border border-white h-full shadow-lg ${isCollapsed ? 'w-20' : 'w-64'} flex flex-col justify-between rounded-xl transition-all duration-300`}>
                <div className='flex items-center justify-between mt-6 px-4'>
                    <h3 className={`text-teal-500 text-xl font-bold ${isCollapsed ? 'hidden' : 'block'}`}>Tale-Net</h3>
                    <button onClick={toggleSidebar} className='text-white hover:text-teal-500 transition-colors duration-300'>
                        <Bars3Icon className='h-6 w-6' />
                    </button>
                </div>

                <div className="flex py-6">
                    <ul className="space-y-2 w-full">
                        <Link to='/creativepage'>  <li className="flex items-center space-x-4 p-4 hover:bg-teal-500 hover:text-black transition-colors duration-200 cursor-pointer">
                            <ArrowTopRightOnSquareIcon className='h-6 w-6 text-white' />
                            <span className={`${isCollapsed ? 'hidden' : 'block'} text-white text-[16px]`}>View Storefront</span>
                        </li>
                        </Link>
                        <Link to='/dashboard'>
                            <li className="flex items-center space-x-4 p-4 hover:bg-teal-500 hover:text-black transition-colors duration-200 cursor-pointer">
                                <img className='h-6 w-6' src={grid} alt="dashboard" />
                                <span className={`${isCollapsed ? 'hidden' : 'block'} text-white text-[18px]`}>Dashboard</span>
                            </li>
                        </Link>

                        <Link to='/profile'>
                            <li className="flex items-center space-x-4 p-4 hover:bg-teal-500 hover:text-black transition-colors duration-200 cursor-pointer">
                                <UserCircleIcon className='h-6 w-6 text-white' />
                                <span className={`${isCollapsed ? 'hidden' : 'block'} text-white text-[18px]`}>Profile</span>
                            </li>
                        </Link>

                        <Link to='/company'>
                            <li className="flex items-center space-x-4 p-4 hover:bg-teal-500 hover:text-black transition-colors duration-200 cursor-pointer">
                                <BuildingStorefrontIcon className='h-6 w-6 text-white' />
                                <span className={`${isCollapsed ? 'hidden' : 'block'} text-white text-[18px]`}>Company details</span>
                            </li>
                        </Link>

                        <Link to='/add-product'>
                            <li className="flex items-center space-x-4 p-4 hover:bg-teal-500 hover:text-black transition-colors duration-200 cursor-pointer">
                                <ShoppingBagIcon className='h-6 w-6 text-white' />
                                <span className={`${isCollapsed ? 'hidden' : 'block'} text-white text-[18px]`}>Product</span>
                            </li>
                        </Link>

                        <Link to='/add-gallery'>
                            <li className="flex items-center space-x-4 p-4 hover:bg-teal-500 hover:text-black transition-colors duration-200 cursor-pointer">
                                <PhotoIcon className='h-6 w-6 text-white' />
                                <span className={`${isCollapsed ? 'hidden' : 'block'} text-white text-[18px]`}>Gallery</span>
                            </li>
                        </Link>

                        <Link to='/add-event'>
                            <li className="flex items-center space-x-4 p-4 hover:bg-teal-500 hover:text-black transition-colors duration-200 cursor-pointer">
                                <CalendarDaysIcon className='h-6 w-6 text-white' />
                                <span className={`${isCollapsed ? 'hidden' : 'block'} text-white text-[18px]`}>Event</span>
                            </li>
                        </Link>

                        <Link to='/payment'>
                            <li className="flex items-center space-x-4 p-4 hover:bg-teal-500 hover:text-black transition-colors duration-200 cursor-pointer">
                                <CreditCardIcon className='h-6 w-6 text-white' />
                                <span className={`${isCollapsed ? 'hidden' : 'block'} text-white text-[18px]`}>Payment</span>
                            </li>
                        </Link>

                        <Link to='/orders'>
                            <li className="flex items-center space-x-4 p-4 hover:bg-teal-500 hover:text-black transition-colors duration-200 cursor-pointer">
                                <ShoppingCartIcon className='h-6 w-6 text-white' />
                                <span className={`${isCollapsed ? 'hidden' : 'block'} text-white text-[18px]`}>Orders</span>
                            </li>
                        </Link>

                        <Link to='/invoice'>
                            <li className="flex items-center space-x-4 p-4 hover:bg-teal-500 hover:text-black transition-colors duration-200 cursor-pointer">
                                <ReceiptText className='h-6 w-6 text-white' />
                                <span className={`${isCollapsed ? 'hidden' : 'block'} text-white text-[18px]`}>Invoice</span>
                            </li>
                        </Link>

                        <Link to='/receipts'>
                            <li className="flex items-center space-x-4 p-4 hover:bg-teal-500 hover:text-black transition-colors duration-200 cursor-pointer">
                                <ReceiptCent className='h-6 w-6 text-white' />
                                <span className={`${isCollapsed ? 'hidden' : 'block'} text-white text-[18px]`}>Receipt</span>
                            </li>
                        </Link>
                    </ul>
                </div>

                <Link to='/'><div className='flex justify-between items-center flex-row px-4 py-2 bg-black rounded-b-xl text-white'>
                    <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Logout</span>
                    <LogOut className='h-6 w-6' />
                </div></Link>
            </div>
        </div>
    );
}

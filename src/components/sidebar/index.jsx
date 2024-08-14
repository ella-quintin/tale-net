import { ArrowTopRightOnSquareIcon, BuildingOfficeIcon, BuildingStorefrontIcon, CalendarDaysIcon, PhotoIcon, ShoppingBagIcon, ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import grid from '../../assets/images/grid.png'
import { Link } from 'react-router-dom';
import { CreditCardIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
    return (
        <div className='min-h-full max-h-screen flex'>
            <div className="m-4 bg-black border border-white h-full shadow-lg w-64 flex flex-col justify-between rounded-xl">
                <h3 className='text-teal-500 text-xl font-bold mt-10 ml-5'>Tale-Net</h3>
                <div className="flex py-6">
                    <ul className="space-y-2 w-full">
                        <li className="flex items-center text-[16px] text-white space-x-4 p-4 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">
                            <span>View Storefront</span>
                            <ArrowTopRightOnSquareIcon size className='size-6' />
                        </li>

                        <Link to='/dashboard'>
                            <li className="flex items-center text-[18px] text-white space-x-4 p-4 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">
                                <img color='' className='text-red-600 hover:text-black' src={grid} alt="" />
                                <span>Dashboard</span>
                            </li>
                        </Link>

                        <Link to='/profile'>
                            <li className="flex items-center text-white text-[18px] space-x-4 p-4 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">
                                <UserCircleIcon size className='size-8' />
                                <span>Profile</span>
                            </li>
                        </Link>

                        <Link to='/company'>
                            <li className="flex items-center text-white text-[18px] space-x-4 p-4 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">
                                <BuildingStorefrontIcon size className='size-7' />
                                <span>Company details</span>
                            </li>
                        </Link>



                        <Link to='/product'>
                            <li className="flex items-center text-[18px] text-white space-x-4 p-4 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">
                                <ShoppingBagIcon size className='size-7' />
                                <span>Product</span>
                            </li>
                        </Link>
                        <Link to='/dgallery'>
                            <li className="flex items-center text-[18px] text-white space-x-4 p-4 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">
                                <PhotoIcon size className='size-7' />
                                <span>Gallery</span>
                            </li>
                        </Link>
                        <Link to='/event'>
                            <li className="flex items-center text-[18px] text-white space-x-4 p-4 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">
                                <CalendarDaysIcon size className='size-7' />
                                <span>Event</span>
                            </li>
                        </Link>
                        <Link to='/payment'>
                            <li className="flex items-center text-[18px] text-white space-x-4 p-4 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">
                                <CreditCardIcon size className='size-7' />
                                <span>Payment</span>
                            </li>
                        </Link>

                        <Link to='/orders'> 
                            <li className="flex items-center text-[18px] text-white space-x-4 p-4 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">
                                <ShoppingCartIcon size className='size-7' />
                                <span>Orders</span>
                            </li>
                        </Link>
                        <Link to='/invoice'>
                            <li className="flex items-center text-[18px] text-white space-x-4 p-4 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">
                                <img className='text-red-600 hover:text-black' src={grid} alt="" />
                                <span>Invoice</span>
                            </li>
                        </Link>
                        <Link to='/receipts'>
                            <li className="flex items-center text-[18px] text-white space-x-4 p-4 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">
                                <img className='text-red-600 hover:text-black' src={grid} alt="" />
                                <span>Receipt</span>
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

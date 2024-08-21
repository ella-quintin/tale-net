import { useState } from 'react';
import mtnLogo from '../../../assets/images/mtn.png';
import telecashLogo from '../../../assets/images/tele.png';
import at from '../../../assets/images/at.png';
import tlogo from '../../../assets/images/tlogo.png';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaMinus, FaPlus } from 'react-icons/fa';


const Checkout = ({ cartItemsCount }) => {

    // State for form inputs
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        location: '',
        paymentMethod: 'mobile-money',
        mobileMoneyProvider: '',
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle mobile money provider change
    const handleProviderChange = (provider) => {
        setFormData({ ...formData, mobileMoneyProvider: provider });
    };

    // Toggle the visibility of the billing details
    const toggleBillingDetails = () => {
        setShowBillingDetails(!showBillingDetails);
    };




    return (
        <div>
            <div className="min-h-scree text-white flex flex-col ">
                <div>

                    <h3 className='text-white text-2xl font-bold text-center'>Billing Details</h3>
                    <form className="mt-4">
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="fullname">
                                Full Name
                            </label>
                            <input
                                className="w-full p-2 text-black rounded-md border-2 "
                                type="text"
                                name="fullname"
                                id="fullname"
                                value={formData.fullname}
                                onChange={handleInputChange}
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full p-2 text-black rounded-md border-2 "
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="phone">
                                Phone Number
                            </label>
                            <input
                                className="w-full p-2 text-black rounded-md border-2 "
                                type="tel"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="location">
                                Location
                            </label>
                            <input
                                className="w-full p-2 text-black rounded-md border-2 "
                                type="text"
                                name="location"
                                id="location"
                                value={formData.location}
                                onChange={handleInputChange}
                                placeholder="Enter your location"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="paymentMethod">
                                Payment Method
                            </label>

                            <div className='flex gap-3'>
                                <div className="flex items-center">
                                    <input
                                        className="mr-2 leading-tight"
                                        type="radio"
                                        name="paymentMethod"
                                        id="mobile-money"
                                        value="mobile-money"
                                        checked={formData.paymentMethod === 'mobile-money'}
                                        onChange={handleInputChange}
                                    />
                                    <label className="text-sm" htmlFor="mobile-money">
                                        Mobile Money
                                    </label>
                                </div>

                                <div className="flex items-center ">
                                    <input
                                        className="mr-2 leading-tight"
                                        type="radio"
                                        name="paymentMethod"
                                        id="bank"
                                        value="Bank"
                                        checked={formData.paymentMethod === 'Bank'}
                                        onChange={handleInputChange}
                                    />
                                    <label className="text-sm" htmlFor="Bank">
                                        Bank
                                    </label>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        className="mr-2 leading-tight"
                                        type="radio"
                                        name="paymentMethod"
                                        id="cash-on-delivery"
                                        value="cash-on-delivery"
                                        checked={formData.paymentMethod === 'cash-on-delivery'}
                                        onChange={handleInputChange}
                                    />
                                    <label className="text-sm" htmlFor="cash-on-delivery">
                                        Cash on Delivery
                                    </label>
                                </div>
                            </div>
                        </div>

                        {formData.paymentMethod === 'mobile-money' && (
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">
                                    Select Mobile Money Provider
                                </label>
                                <div className="flex space-x-4">
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            name="mobileMoneyProvider"
                                            value="mtn"
                                            checked={formData.mobileMoneyProvider === 'mtn'}
                                            onChange={() => handleProviderChange('mtn')}
                                            className="mr-2"
                                        />
                                        <img src={mtnLogo} alt="MTN Mobile Money" className="w-20 h-10" />
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            name="mobileMoneyProvider"
                                            value="telecash"
                                            checked={formData.mobileMoneyProvider === 'telecash'}
                                            onChange={() => handleProviderChange('telecash')}
                                            className="mr-2"
                                        />
                                        <img src={telecashLogo} alt="Telecash" className="bg-white rounded-md w-20 h-10" />
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            name="mobileMoneyProvider"
                                            value="airteltigo"
                                            checked={formData.mobileMoneyProvider === 'airteltigo'}
                                            onChange={() => handleProviderChange('airteltigo')}
                                            className="mr-2"
                                        />
                                    <img src={at} alt="AirtelTigo Money" className="bg-white rounded-md h-10" />
                                    </div>
                                </div>
                            </div>
                        )}
                        <button className=" mt-3 bg-red-600 font-medium text-white py-2 px-4 rounded-lg hover:bg-red-500 transition">
                            Make Payment
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Checkout
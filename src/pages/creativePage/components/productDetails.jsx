import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import lsix from '../../../assets/images/lsix.jpg';
import lfive from '../../../assets/images/lfive.jpg';
import lthree from '../../../assets/images/lthree.jpg';
import mtnLogo from '../../../assets/images/mtn.png';
import telecashLogo from '../../../assets/images/tele.png';
import airteltigoLogo from '../../../assets/images/at.png';


const ProductDetails = ({ addToCart }) => {
    const { productId } = useParams();

    const [isLoading, setIsLoading] = useState(false);
    const handleAddToCart = () => {
        setIsLoading(true);

        // Simulate an async operation for API call
        setTimeout(() => {
            addToCart(product);
            setIsLoading(false);
        }, 1000);
    };

    

    // Mock data, replace with actual data fetch based on productId
    const productData = {
        "1": {
            name: 'African Ancestry',
            price: 'GH₵500.00',
            description: 'A beautiful piece celebrating African heritage.',
            images: [lsix, lfive, lthree],
        },
        "2": {
            name: 'African Ancestry',
            price: 'GH₵500.00',
            description: 'A beautiful piece celebrating African heritage.',
            images: [lsix, lsix, lsix], // Replace with actual product images
        },
        // Add other products here with their respective IDs
    };

    const product = productData[productId];

    // Check if product exists
    if (!product) {
        return <p>Product not found</p>;
    }

    // State to track the selected image
    const [selectedImage, setSelectedImage] = useState(product.images[0]);

    // State for form inputs
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        location: '',
        paymentMethod: 'mobile-money',
        mobileMoneyProvider: '',
    });

    // State to show or hide billing details
    const [showBillingDetails, setShowBillingDetails] = useState(false);

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
        <div className="min-h-screen bg-black text-white p-8">
            <Link to='/productspage'>
                <button className='top-8 left-8 border mb-5 border-white text-white py-2 px-8 rounded-lg hover:bg-white hover:text-black transition'>
                    Back
                </button>
            </Link>
            <h1 className="text-4xl font-bold mb-8">{product.name}</h1>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                    <img src={selectedImage} alt={product.name} className="w-96 object-cover mb-4" />
                    <div className="grid grid-cols-3 gap-4">
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`${product.name} ${index + 1}`}
                                className={`w-full h-32 object-cover cursor-pointer ${selectedImage === image ? 'border-2 border-white' : ''}`}
                                onClick={() => setSelectedImage(image)}
                            />
                        ))}
                    </div>
                </div>
                <div className="md:w-1/3 ml-16">
                    <p className="text-lg mb-4">{product.description}</p>
                    <p className="text-2xl font-bold mb-4">{product.price}</p>

                    {/* Buy Button to Toggle Billing Details */}
                    <button
                        className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition mb-4"
                        onClick={handleAddToCart}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                        ) : (
                            'Add to Cart'
                        )}
                    </button>

                    {/* Billing Details Section */}
                    {showBillingDetails && (
                        <>
                            <h3 className='text-teal-500 text-2xl font-bold text-center'>Billing Details</h3>
                            <form className="mt-4">
                                <div className="mb-4">
                                    <label className="block text-sm font-bold mb-2" htmlFor="fullname">
                                        Full Name
                                    </label>
                                    <input
                                        className="w-full p-2 text-white rounded-md border-2 bg-black"
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
                                        className="w-full p-2 text-white rounded-md border-2 bg-black"
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
                                        className="w-full p-2 text-white rounded-md border-2 bg-black"
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
                                        className="w-full p-2 text-white rounded-md border-2 bg-black"
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
                                                <img src={airteltigoLogo} alt="AirtelTigo Money" className="bg-white rounded-md h-10" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <button className=" mt-3 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-500 transition">
                                    Proceed to Checkout
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

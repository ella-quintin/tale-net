import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaMinus, FaPlus } from 'react-icons/fa';
import tlogo from '../../../assets/images/tlogo.png';
import Checkout from './checkout'; 

const CartPage = ({ cart, removeFromCart, updateQuantity }) => {
  const [quantities, setQuantities] = useState(cart.map(() => 1));
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);  // State to manage checkout visibility

  const formatPrice = (price) => {
    const numPrice = typeof price === 'string' ? parseFloat(price.replace(/[^\d.-]/g, '')) : price;
    return isNaN(numPrice) ? '0.00' : numPrice.toFixed(2);
  };

  const calculateItemTotal = (price, quantity) => {
    return (parseFloat(formatPrice(price)) * quantity).toFixed(2);
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item, index) => {
      return total + parseFloat(calculateItemTotal(item.price, quantities[index]));
    }, 0).toFixed(2);
  };

  const handleQuantityChange = (index, change) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(1, newQuantities[index] + change);
    setQuantities(newQuantities);
    updateQuantity(cart[index].id, newQuantities[index]);
  };

  const handleRemove = (itemId) => {
    removeFromCart(itemId);
    setQuantities(quantities.filter((_, index) => cart[index].id !== itemId));
  };

  useEffect(() => {
    setTotalPrice(calculateSubtotal());
  }, [quantities, cart]);

  const handleCheckoutClick = () => {
    setIsCheckoutVisible(true);
  };

  const closeCheckout = () => {
    setIsCheckoutVisible(false);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 relative">
      <header className="p-4 flex justify-between items-center bg-black">
        <div className="ml-8 h-14 flex items-center pr-12 pl-12 ">
          <img className='w-60 h-auto' src={tlogo} alt="Logo" />
        </div>
        <nav className="space-x-8 flex items-center">
          <Link to='/'><a href="#" className="hover:underline">Home</a></Link>
          <Link to='/allcreatives'><a href="#" className="hover:underline">View all Creatives</a></Link>
          <Link to='/creativepage'><a href="#" className="hover:underline">Profile</a></Link>
          <Link to='/productspage'><a href="#" className="hover:underline">Marketplace</a></Link>
          <a href="#" className="hover:underline">Report</a>
          <Link to='/cart'>
            <div className="relative ml-4">
              <FaShoppingCart className="text-white text-2xl" />
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                {cart.length}
              </span>
            </div>
          </Link>
        </nav>
      </header>

      <div className="flex mt-8">
        <div className="w-2/3 pr-8">
          <h1 className="text-2xl font-bold mb-4">Cart ({cart.length})</h1>
          {cart.map((item, index) => (
            <div key={index} className="flex items-center mb-4 border-b border-gray-600 pb-4">
              <img src={item.images[0]} alt={item.name} className="w-24 h-24 object-cover mr-4" />
              <div className="flex-grow">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-400">Seller: {item.seller}</p>
                <p className="text-sm text-gray-400">{item.stock || '4'} units left</p>
                <div className="flex items-center mt-2">
                  <button onClick={() => handleRemove(item.id)} className="text-red-600 text-sm">REMOVE</button>
                  <div className="ml-auto flex items-center">
                    <button onClick={() => handleQuantityChange(index, -1)} className="bg-gray-700 p-1 rounded"><FaMinus /></button>
                    <span className="mx-2">{quantities[index]}</span>
                    <button onClick={() => handleQuantityChange(index, 1)} className="bg-yellow-500 p-1 rounded"><FaPlus /></button>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">GHC {calculateItemTotal(item.price, quantities[index])}</p>
                <p className="text-sm line-through text-gray-400">GHC {(parseFloat(formatPrice(item.price)) * 1.3 * quantities[index]).toFixed(2)}</p>
                <p className="text-sm text-teal-500 ">-30%</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/3 bg-gray-900 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">CART SUMMARY</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>GHC {totalPrice}</span>
          </div>
          <p className="text-sm text-gray-400 mb-4">Delivery fees not included yet.</p>
          <div className="bg-yellow-500 text-white p-2 rounded mb-4">
            <p>Free delivery</p>
            <p className="text-sm"> Express items are eligible for free delivery</p>
          </div>
          <button onClick={handleCheckoutClick} className="w-full bg-red-600 text-white py-2 rounded font-bold">
            CHECKOUT (GHC {totalPrice})
          </button>
          <div className="mt-4">
            <p className="font-semibold">Returns are easy</p>
            <p className="text-sm text-gray-400">Free 7 days return if eligible Details</p>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isCheckoutVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={closeCheckout}></div>
      )}

      {/* Checkout Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-69 bg-gray-900 p-8 z-40 transform transition-transform duration-300 ${
          isCheckoutVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button onClick={closeCheckout} className="text-white mb-4">Close</button>
        <Checkout />
      </div>
    </div>
  );
};

export default CartPage;

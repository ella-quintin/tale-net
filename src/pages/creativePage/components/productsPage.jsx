
import pattern from '../../../assets/images/pattern.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { cproducts } from '../../creativePage/components/cproducts';
import Shop from './shop';
import { FaShoppingCart } from 'react-icons/fa';
import tlogo from '../../../assets/images/tlogo.png';

const ProductsPage = ({ cartItemsCount }) => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col ">
            <div>
                <header className="p-4 flex justify-between items-center bg-black">
                    <div className="ml-8 h-14 flex items-center pr-12 pl-12 ">
                        <img className='w-60 h-auto' src={tlogo} alt="Logo" />
                    </div>
                    <nav className="space-x-8 flex items-center">
                        <Link to='/'><a href="#" className="hover:underline">Home</a></Link>
                        <Link to='/creativepage'><a href="#" className="hover:underline">Profile</a></Link>
                        <Link to='/productspage'><a href="#" className="hover:underline">Marketplace</a></Link>
                        <a href="#" className="hover:underline">Report</a>
                        <Link to='/cart'>
                            <div className="relative">
                                <FaShoppingCart className="text-white text-2xl" />
                                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                                    {cartItemsCount}
                                </span>
                            </div>
                        </Link>
                    </nav>
                </header>
            </div>

            <div className='flex flex-col items-center p-8'>
                <h3 className="text-4xl font-bold mb-8">Shop All Products</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cproducts.map((product) => (
                        <Link key={product.id} to={`/products/${product.id}`}>
                            <Shop
                                productImage={product.productImage}
                                productName={product.productName}
                                price={product.price}
                                productDescription={product.productDescription}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default ProductsPage;

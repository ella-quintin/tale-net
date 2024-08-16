
import pattern from '../../../assets/images/pattern.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { cproducts } from '../../creativePage/components/cproducts'; 
import Shop from './shop';

const ProductsPage = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col ">
            <div>
            <header className="p-4 flex justify-between items-center bg-black">
                <Link to='/'><h1 className="text-xl font-bold">Tale-net</h1></Link>
                <nav className="space-x-8">
                    <Link to='/allcreatives'><a href="#" className="hover:underline">Home</a></Link>
                    <Link to='/creativepage'><a href="#" className="hover:underline">Profile</a></Link>
                    <a href="#" className="hover:underline">Gallery</a>
                    <Link to='/productspage'><a href="#" className="hover:underline">Marketplace</a></Link>
                    <a href="#" className="hover:underline">Report</a>
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

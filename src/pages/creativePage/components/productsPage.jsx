import React from 'react';
import { Link } from 'react-router-dom';
import lsix from '../../../assets/images/lsix.jpg';
import Shop from './shop';

const ProductsPage = () => {
    const products = [
        {
            id: '1',
            productImage: lsix,
            productName: 'African Ancestry',
            price: '$500.00',
            productDescription: 'A beautiful piece celebrating African heritage.',
        },
        {
            id: '2',
            productImage: lsix,
            productName: 'African Ancestry',
            price: '$500.00',
            productDescription: 'A beautiful piece celebrating African heritage.',
        },
        // I will add more products here
    ];

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center p-8">
            <Link to='/creativepage'>
                <button className='absolute top-8 left-8 border border-white text-white py-2 px-8 rounded-lg hover:bg-white hover:text-black transition'>Back</button>
            </Link>
            <h3 className="text-4xl font-bold mb-8">Shop All Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <Link key={product.id} to={`/products/${product.id}`}>
                        <Shop
                            productImage={product.productImage}
                            productName={product.productName}
                            price={product.price}
                            productDescription={product.productDescription}
                            cta="View Details"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
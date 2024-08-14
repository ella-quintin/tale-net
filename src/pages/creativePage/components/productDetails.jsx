import React from 'react';
import { useParams, Link } from 'react-router-dom';
import lsix from '../../../assets/images/lsix.jpg'; 

const ProductDetails= () => {
    const { productId } = useParams();

    // Mock data, replace with actual data fetch based on productId
    const productData = {
        "1": {
            name: 'African Ancestry',
            price: '$500.00',
            description: 'A beautiful piece celebrating African heritage.',
            images: [lsix, lsix, lsix], 
        },
        "2": {
            name: 'African Ancestry',
            price: '$500.00',
            description: 'A beautiful piece celebrating African heritage.',
            images: [lsix, lsix, lsix], // Replace with actual product images
        },
        // Add other products here with their respective IDs
    };

    const product = productData[productId];

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <Link to='/productspage'><button className=' top-8 left-8 border mb-5 border-white text-white py-2 px-8 rounded-lg hover:bg-white hover:text-black transition'>Back</button></Link>
            <h1 className="text-4xl font-bold mb-8">{product.name}</h1>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                    <img src={product.images[0]} alt={product.name} className="w-96  object-cover mb-4" />
                    <div className="grid grid-cols-3 gap-4">
                        {product.images.map((image, index) => (
                            <img key={index} src={image} alt={`${product.name} ${index + 1}`} className="w-full h-32 object-cover" />
                        ))}
                    </div>
                </div>
                <div className=" md:w-1/3">
                    <p className="text-lg mb-4">{product.description}</p>
                    <p className="text-2xl font-bold mb-4">{product.price}</p>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-600 transition">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

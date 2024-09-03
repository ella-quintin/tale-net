import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Sidebar from "../../../components/sidebar";

export default function AddProductPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    // Load products from localStorage when the component mounts
    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setProducts(storedProducts);
    }, []);

    // Save the new product from location.state to localStorage
    useEffect(() => {
        if (location.state) {
            const newProduct = location.state;
            // Check if the product already exists
            const existingProducts = products.find(p => p.sku === newProduct.sku);
            if (!existingProducts) {
                const updatedProducts = [...products, newProduct];
                setProducts(updatedProducts);
                localStorage.setItem('products', JSON.stringify(updatedProducts));
            }
            // Clear location.state after processing to avoid duplicate additions
            navigate('/add-product', { replace: true });
        }
    }, [location.state]);

    const handleAddProduct = () => {
        navigate('/product'); // Navigate to the Product page to add a new product
    };

    const handleEditProduct = (product) => {
        navigate('/product', { state: { product } }); // Navigate to the Product page with the product data
    };

    const handleDeleteProduct = (index) => {
        const updatedProducts = products.filter((_, i) => i !== index);
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
    };

    return (
        <div className="bg-white min-h-screen flex">
            <Sidebar />
            <div className="flex-grow p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl text-black font-bold">Added Products</h1>
                    <div>
                        <button 
                            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-slate-800"
                            onClick={handleAddProduct}
                        >
                            Add Product
                        </button>
                    </div>
                </div>
                {products.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-4">
                                <h2 className="text-xl font-bold text-black mb-2">{product.productName}</h2>
                                <p className="text-gray-700 mb-2">{product.description}</p>
                                <p className="text-gray-700 mb-2">Category: {product.category}</p>
                                <p className="text-gray-700 mb-2">Brand: {product.brand}</p>
                                <p className="text-gray-700 mb-2">SKU: {product.sku}</p>
                                <p className="text-gray-700 mb-2">Stock: {product.stock}</p>
                                <p className="text-gray-700 mb-2">Price: {product.price}</p>
                                <div className="grid grid-cols-3 gap-2 mt-4">
                                    {product.images.map((image, imgIndex) => (
                                        <div key={imgIndex} className="w-24 h-24 bg-gray-200 rounded-md">
                                            <img
                                                src={image}
                                                alt={`Product thumbnail ${imgIndex}`}
                                                className="w-full h-full object-cover rounded-md"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-end mt-4">
                                    <button 
                                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 mr-2"
                                        onClick={() => handleEditProduct(product)}
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                                        onClick={() => handleDeleteProduct(index)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600">No products added yet.</p>
                )}
            </div>
        </div>
    );
}

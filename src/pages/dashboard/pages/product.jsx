import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Sidebar from "../../../components/sidebar";
import profile from "../../../assets/images/profile.svg";

export default function Product() {
    const [images, setImages] = useState([]);
    const navigate = useNavigate(); 

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(prevImages => [...prevImages, ...files]);
    };

    const handleImageRemove = (index) => {
        setImages(prevImages => prevImages.filter((_, i) => i !== index));
    };

    const handleUpload = () => {
        //  logic for upload
        // ...
        
        navigate('/add-product');
    };

    const handleCancel = () => {
        // Navigate back to AddProductPage on cancel
        navigate('/add-product');
    };

    return (
        <div className="bg-white min-h-screen flex">
            <Sidebar />
            <div className="flex-grow p-6">
                <h1 className="text-3xl text-black font-bold mb-6">Product Details</h1>
                <div className="bg-white rounded-lg shadow-md p-8">
                
                    <form className="grid grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-900 font-bold mb-2" htmlFor="product-name">Product Name</label>
                                <input type="text" id="product-name" className="w-full px-4 py-2 border rounded-md bg-gray-100" placeholder="Lorem Ipsum" />
                            </div>
                            <div>
                                <label className="block text-gray-900 font-bold mb-2" htmlFor="description">Description</label>
                                <textarea id="description" className="w-full px-4 py-2 border rounded-md bg-gray-100" placeholder="Lorem Ipsum Is A Dummy Text"></textarea>
                            </div>
                            <div>
                                <label className="block text-gray-900 font-bold mb-2" htmlFor="category">Category</label>
                                <input type="text" id="category" className="w-full px-4 py-2 border rounded-md bg-gray-100" placeholder="Sneaker" />
                            </div>
                            <div>
                                <label className="block text-gray-900 font-bold mb-2" htmlFor="brand">Brand Name</label>
                                <input type="text" id="brand" className="w-full px-4 py-2 border rounded-md bg-gray-100" placeholder="Addidas" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-900 font-bold mb-2" htmlFor="sku">SKU</label>
                                    <input type="text" id="sku" className="w-full px-4 py-2 border rounded-md bg-gray-100" placeholder="#32A53" />
                                </div>
                                <div>
                                    <label className="block text-gray-900 font-bold mb-2" htmlFor="stock">Stock Quantity</label>
                                    <input type="number" id="stock" className="w-full px-4 py-2 border rounded-md bg-gray-100" placeholder="211" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-900 font-bold mb-2" htmlFor="regular-price">Price</label>
                                    <input type="text" id="regular-price" className="w-full px-4 py-2 border rounded-md bg-gray-100" placeholder="₹110.40" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-900 font-bold mb-2">Product Gallery</label>
                            <input 
                                type="file" 
                                accept="image/jpeg, image/png" 
                                multiple 
                                onChange={handleImageChange}
                                className="mb-4 w-full"
                            />
                            <div className="w-full h-48 border-dashed border-2 border-gray-300 flex items-center justify-center bg-gray-50 rounded-md">
                                <p className="text-gray-600">Drop your image here, or browse <br />Jpeg, png are allowed</p>
                            </div>
                            <div className="mt-4 space-y-2">
                                {images.length > 0 ? (
                                    images.map((image, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center">
                                                <img 
                                                    src={URL.createObjectURL(image)} 
                                                    alt={`Product thumbnail ${index}`} 
                                                    className="w-full h-full object-cover" 
                                                />
                                            </div>
                                            <p className="flex-grow text-gray-700">{image.name}</p>
                                            <button 
                                                onClick={() => handleImageRemove(index)} 
                                                className="text-red-500"
                                            >
                                                &#10005;
                                            </button>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-600">No images uploaded</p>
                                )}
                            </div>
                        </div>
                    </form>
                    <div className="flex justify-end space-x-4 mt-8">
                        <button className="px-6 py-2 bg-gray-300 text-gray-900 rounded-lg" onClick={handleCancel}>CANCEL</button>
                        <button className="px-6 py-2 bg-black text-white rounded-lg" onClick={handleUpload}>UPLOAD</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

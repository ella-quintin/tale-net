import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Sidebar from "../../../components/sidebar";

export default function Product() {
    const location = useLocation();
    const navigate = useNavigate();
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [sku, setSku] = useState('');
    const [stock, setStock] = useState('');
    const [price, setPrice] = useState('');
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (location.state?.product) {
            const { productName, description, category, brand, sku, stock, price, images } = location.state.product;
            setProductName(productName);
            setDescription(description);
            setCategory(category);
            setBrand(brand);
            setSku(sku);
            setStock(stock);
            setPrice(price);
            setImages(images.map(img => (img instanceof File ? img : URL.createObjectURL(img)))); // Handle preloaded images
        }
    }, [location.state]);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(prevImages => [...prevImages, ...files]);
    };

    const handleImageRemove = (index) => {
        setImages(prevImages => prevImages.filter((_, i) => i !== index));
    };

    const handleSave = () => {
        // Package the product details
        const productDetails = {
            productName,
            description,
            category,
            brand,
            sku,
            stock,
            price,
            images: images.map(image => (image instanceof File ? URL.createObjectURL(image) : image)) // Convert files to URLs for preview
        };

        // Save or update the product details
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        if (location.state?.product) {
            const updatedProducts = storedProducts.map(p => p.sku === productDetails.sku ? productDetails : p);
            localStorage.setItem('products', JSON.stringify(updatedProducts));
        } else {
            storedProducts.push(productDetails);
            localStorage.setItem('products', JSON.stringify(storedProducts));
        }

        navigate('/add-product');
    };

    const handleCancel = () => {
        navigate('/add-product');
    };

    return (
        <div className="bg-white min-h-screen flex">
            <Sidebar />
            <div className="flex-grow p-6">
                <h1 className="text-3xl text-black font-bold mb-6">
                    {location.state?.product ? 'Edit Product' : 'Add Product'}
                </h1>
                <div className="bg-white rounded-lg shadow-md p-8">
                    <form className="grid grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-900 font-bold mb-2" htmlFor="product-name">Product Name</label>
                                <input 
                                    type="text" 
                                    id="product-name" 
                                    className="w-full px-4 py-2 border rounded-md bg-gray-100" 
                                    placeholder="Lorem Ipsum" 
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-900 font-bold mb-2" htmlFor="description">Description</label>
                                <textarea 
                                    id="description" 
                                    className="w-full px-4 py-2 border rounded-md bg-gray-100" 
                                    placeholder="Lorem Ipsum Is A Dummy Text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </div>
                            <div>
                                <label className="block text-gray-900 font-bold mb-2" htmlFor="category">Category</label>
                                <input 
                                    type="text" 
                                    id="category" 
                                    className="w-full px-4 py-2 border rounded-md bg-gray-100" 
                                    placeholder="Sneaker" 
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-900 font-bold mb-2" htmlFor="brand">Brand Name</label>
                                <input 
                                    type="text" 
                                    id="brand" 
                                    className="w-full px-4 py-2 border rounded-md bg-gray-100" 
                                    placeholder="Adidas" 
                                    value={brand}
                                    onChange={(e) => setBrand(e.target.value)}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-900 font-bold mb-2" htmlFor="sku">SKU</label>
                                    <input 
                                        type="text" 
                                        id="sku" 
                                        className="w-full px-4 py-2 border rounded-md bg-gray-100" 
                                        placeholder="#32A53" 
                                        value={sku}
                                        onChange={(e) => setSku(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-900 font-bold mb-2" htmlFor="stock">Stock Quantity</label>
                                    <input 
                                        type="number" 
                                        id="stock" 
                                        className="w-full px-4 py-2 border rounded-md bg-gray-100" 
                                        placeholder="211" 
                                        value={stock}
                                        onChange={(e) => setStock(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-900 font-bold mb-2" htmlFor="regular-price">Price</label>
                                    <input 
                                        type="text" 
                                        id="regular-price" 
                                        className="w-full px-4 py-2 border rounded-md bg-gray-100" 
                                        placeholder="₹110.40" 
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
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
                                <p className="text-gray-600">Drag and drop images here or click to select files</p>
                            </div>
                            <div className="grid grid-cols-3 gap-2 mt-4">
                                {images.map((image, index) => (
                                    <div key={index} className="relative">
                                        <img 
                                            src={image instanceof File ? URL.createObjectURL(image) : image} 
                                            alt={`Product thumbnail ${index}`} 
                                            className="w-full h-24 object-cover rounded-md"
                                        />
                                        <button 
                                            className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                                            onClick={() => handleImageRemove(index)}
                                        >
                                            X
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="flex space-x-4 mt-4">
                                <button 
                                    type="button" 
                                    className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
                                    onClick={handleSave}
                                >
                                    Save
                                </button>
                                <button 
                                    type="button" 
                                    className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

import Sidebar from "../../../components/sidebar";
import profile from "../../../assets/images/profile.svg";

export default function Product() {
    return (
        <div className="bg-white min-h-screen flex">
            <Sidebar />
            <div className="flex-grow p-6">
                <h1 className="text-3xl text-black font-bold mb-6">Product Details</h1>
                <div className="bg-white rounded-lg shadow-md p-8">
                    <div className="mb-4">
                        <nav className="text-gray-600 mb-6">
                            <a href="#" className="hover:text-gray-900">Home</a> &gt; 
                            <a href="#" className="hover:text-gray-900"> All Products</a> &gt; 
                            <span> Product Details</span>
                        </nav>
                    </div>
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
                                    <label className="block text-gray-900 font-bold mb-2" htmlFor="regular-price">Regular Price</label>
                                    <input type="text" id="regular-price" className="w-full px-4 py-2 border rounded-md bg-gray-100" placeholder="₹110.40" />
                                </div>
                                <div>
                                    <label className="block text-gray-900 font-bold mb-2" htmlFor="sale-price">Sale Price</label>
                                    <input type="text" id="sale-price" className="w-full px-4 py-2 border rounded-md bg-gray-100" placeholder="₹450" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-900 font-bold mb-2" htmlFor="tags">Tag</label>
                                <div className="flex space-x-2">
                                    <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full">Lorem</span>
                                    <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full">Lorem</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-900 font-bold mb-2">Product Gallery</label>
                            <div className="w-full h-48 border-dashed border-2 border-gray-300 flex items-center justify-center bg-gray-50 rounded-md">
                                <p className="text-gray-600">Drop your image here, or browse <br />Jpeg, png are allowed</p>
                            </div>
                            <div className="mt-4 space-y-2">
                                <div className="flex items-center space-x-2">
                                    <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center">
                                        <img src={profile} alt="Product thumbnail" className="w-full h-full object-cover" />
                                    </div>
                                    <p className="flex-grow text-gray-700">Product thumbnail.png</p>
                                    <button className="text-blue-500">&#10003;</button>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center">
                                        <img src={profile} alt="Product thumbnail" className="w-full h-full object-cover" />
                                    </div>
                                    <p className="flex-grow text-gray-700">Product thumbnail.png</p>
                                    <button className="text-blue-500">&#10003;</button>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center">
                                        <img src={profile} alt="Product thumbnail" className="w-full h-full object-cover" />
                                    </div>
                                    <p className="flex-grow text-gray-700">Product thumbnail.png</p>
                                    <button className="text-blue-500">&#10003;</button>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center">
                                        <img src={profile} alt="Product thumbnail" className="w-full h-full object-cover" />
                                    </div>
                                    <p className="flex-grow text-gray-700">Product thumbnail.png</p>
                                    <button className="text-blue-500">&#10003;</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="flex justify-end space-x-4 mt-8">
                        <button className="px-6 py-2 bg-gray-300 text-gray-900 rounded-lg">CANCEL</button>
                        <button className="px-6 py-2 bg-red-600 text-white rounded-lg">DELETE</button>
                        <button className="px-6 py-2 bg-black text-white rounded-lg">UPDATE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

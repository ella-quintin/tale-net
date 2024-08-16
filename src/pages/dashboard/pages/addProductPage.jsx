import { Link } from 'react-router-dom';
import Sidebar from "../../../components/sidebar";

export default function AddProductPage() {
    return (
        <div className="bg-white min-h-screen flex">
            <Sidebar />
            <div className="flex-grow p-6">
                <h3 className="text-3xl text-black font-bold mb-6">Add New Product</h3>
                <div className="bg-white rounded-lg shadow-md p-8">
                    <p className="text-gray-700 mb-6">Click the button below to add a new product.</p>
                    <Link to="/product">
                        <button className="px-6 py-2 bg-black text-white rounded-lg">Add Product</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

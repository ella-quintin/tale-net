import { Link } from 'react-router-dom';
import Sidebar from "../../../components/sidebar";

export default function AddEvent() {
    return (
        <div className="bg-white min-h-screen flex">
            <Sidebar />
            <div className="flex-grow p-6">
                <h3 className="text-3xl text-black font-bold mb-6">Add New Event</h3>
                <div className="bg-white rounded-lg shadow-md p-8">
                    <p className="text-gray-700 mb-6">Click the button below to add a new Event.</p>
                    <Link to="/event">
                        <button className="px-6 py-2 bg-black text-white rounded-lg">Add Event</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

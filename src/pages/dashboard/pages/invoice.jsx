import React, { useState } from 'react';
import Sidebar from "../../../components/sidebar";

export default function Invoice() {
    const [clientName, setClientName] = useState('');
    const [items, setItems] = useState([{ description: '', quantity: 1, price: 0 }]);

    const handleAddItem = () => {
        setItems([...items, { description: '', quantity: 1, price: 0 }]);
    };

    const handleInputChange = (e, index, field) => {
        const newItems = [...items];
        newItems[index][field] = e.target.value;
        setItems(newItems);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle the invoice submission here
    };

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <div className="flex flex-grow overflow-hidden">
                <Sidebar />
                <div className="flex-grow p-6 overflow-hidden">
                    <h1 className="text-3xl text-black font-bold mb-6">Create Invoice</h1>
                    <div className="bg-white rounded-lg shadow-md p-16">
                        <form className="space-y-6 max-w-3xl mx-auto" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-gray-900 font-bold mb-2" htmlFor="clientName">
                                    Client Name
                                </label>
                                <input
                                    type="text"
                                    id="clientName"
                                    value={clientName}
                                    onChange={(e) => setClientName(e.target.value)}
                                    className="w-full px-4 py-2 text-black bg-[#6060601A] border rounded-md"
                                />
                            </div>

                            {items.map((item, index) => (
                                <div key={index} className="flex space-x-4 mb-4">
                                    <input
                                        type="text"
                                        placeholder="Item Description"
                                        value={item.description}
                                        onChange={(e) => handleInputChange(e, index, 'description')}
                                        className="w-1/2 px-4 py-2 text-black bg-[#6060601A] border rounded-md"
                                    />
                                    <input
                                        type="number"
                                        placeholder="Quantity"
                                        value={item.quantity}
                                        onChange={(e) => handleInputChange(e, index, 'quantity')}
                                        className="w-1/4 px-4 py-2 text-black bg-[#6060601A] border rounded-md"
                                    />
                                    <input
                                        type="number"
                                        placeholder="Price"
                                        value={item.price}
                                        onChange={(e) => handleInputChange(e, index, 'price')}
                                        className="w-1/4 px-4 py-2 text-black bg-[#6060601A] border rounded-md"
                                    />
                                </div>
                            ))}

                            <button
                                type="button"
                                onClick={handleAddItem}
                                className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg">
                                Add Item
                            </button>

                            <div className="flex space-x-4 justify-center mt-8">
                                <button type="button" className="w-full py-2 px-4 bg-white text-[#CC212D] font-bold border border-[#CC212D] rounded-lg">
                                    Discard
                                </button>
                                <button type="submit" className="w-full py-2 px-4 bg-black text-white font-bold rounded-lg">
                                    Generate Invoice
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

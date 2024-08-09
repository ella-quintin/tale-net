import Sidebar from "../../../components/sidebar";

export default function Receipt({ invoice }) {
    if (!invoice) {
        return <div>No invoice to display</div>;
    }

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <div className="flex flex-grow overflow-hidden">
                <Sidebar />
                <div className="flex-grow p-6 overflow-hidden">
                    <h1 className="text-3xl text-black font-bold mb-6">Receipt</h1>
                    <div className="bg-white rounded-lg shadow-md p-16">
                        <div className="mb-6">
                            <strong>Client:</strong> {invoice.clientName}
                        </div>
                        <div className="mb-6">
                            <strong>Date:</strong> {new Date().toLocaleDateString()}
                        </div>
                        <div className="mb-6">
                            <strong>Total:</strong> ${invoice.total.toFixed(2)}
                        </div>
                        <div className="mt-8">
                            <h2 className="text-xl font-bold mb-4">Items</h2>
                            <ul>
                                {invoice.items.map((item, index) => (
                                    <li key={index} className="mb-2">
                                        {item.description} - {item.quantity} x ${item.price.toFixed(2)} = ${(item.quantity * item.price).toFixed(2)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import Sidebar from "../../../components/sidebar";

const Orders = () => {
    return (
        <div>
            <div className="bg-white min-h-screen flex flex-col">
                <div className="flex flex-grow overflow-hidden">
                    <Sidebar />
                    <div className="flex-grow p-6 overflow-hidden">
                        <h3 className="text-3xl text-black font-bold mb-6">Orders</h3>
                        <div className="bg-white rounded-lg shadow-md p-20 mb-8">
                            <p className="text-black">No orders to display</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders
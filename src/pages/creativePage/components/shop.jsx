const Shop = ({ productImage, productName, price, productDescription, cta }) => {
    return (
        <div className="bg-black text-white rounded-lg shadow-lg p-4">
            <div className="w-full h-64 bg-gray-800 rounded-t-lg overflow-hidden">
                <img src={productImage} alt={productName} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
                <h2 className="text-xl font-bold">{productName}</h2>
                <p className="text-lg mt-2">{price}</p>
                <p className="text-sm mt-4">{productDescription}</p>
                <button className="mt-6 bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-600 transition">
                    {cta}
                </button>
            </div>
        </div>
    );
};

export default Shop;

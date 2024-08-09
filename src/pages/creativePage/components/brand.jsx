import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Brand = ({ logo, brandName, category, brandDescription, instagram, twitter, facebook }) => {
    return (
        <div className="text-center text-white">
            <div className="rounded-full border-4 p-2 bg-black border-white w-36 mx-auto">
                <img src={logo} alt={`${brandName} Logo`} className="rounded-full object-cover" />
            </div>
            <h2 className="text-2xl text-teal-500 font-bold mt-4">{brandName}</h2>
            <p className="text-sm text-gray-400 italic">{category}</p>
            <p className="mt-4 px-6 max-w-3xl mx-auto font-thin">{brandDescription}</p>
            <div className="flex justify-center space-x-4 mt-4">
                {instagram && <a href={instagram} target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>}
                {twitter && <a href={twitter} target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>}
                {facebook && <a href={facebook} target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>}
            </div>
        </div>
    );
}

export default Brand;

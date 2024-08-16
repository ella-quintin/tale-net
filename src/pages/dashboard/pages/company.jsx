import React, { useState } from "react";
import Sidebar from "../../../components/sidebar";
import profile from "../../../assets/images/profile.svg";
import { useNavigate } from "react-router-dom";

export default function Company() {
    const [isEditing, setIsEditing] = useState(true);
    const navigate = useNavigate();
    const [companyData, setCompanyData] = useState({
        brandName: "",
        category: "",
        location: "",
        brandDescription: "",
        inspiration: "",
        instagram: "",
        twitter: "",
        facebook: "",
        tiktok: "",
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setCompanyData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        // Here you would typically send the data to a server
        console.log("Saving profile data:", companyData);
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        navigate('/dashboard')
    }



    return (
        <div className="bg-white min-h-screen flex flex-col">
            <div className="flex flex-grow overflow-hidden">
                <Sidebar />
                <div className="flex-grow p-6 overflow-hidden">
                    <h1 className="text-3xl text-black font-bold mb-6">Company details</h1>
                    <div className="bg-white rounded-lg shadow-md p-16">
                        <div className="flex flex-col justify-center items-center mb-6">
                            <div className="flex items-center justify-center mb-4">
                                <img src={profile} alt="Profile" />
                            </div>
                            <button className="text-[#CC212D] font-normal">Update Brand Logo</button>
                        </div>
                        <form className="space-y-6 max-w-3xl mx-auto" onSubmit={handleSave}>
                            <div className="flex-col gap-6">
                                <div>
                                    <label className="block text-gray-900 font-bold mb-2" htmlFor="company-name">Brand name</label>
                                    <input
                                        type="text"
                                        id="brandName"
                                        placeholder=""
                                        className="w-full px-4 py-2 text-black bg-[#6060601A] border rounded-md"
                                        value={companyData.brandName}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-900 font-bold mb-2" htmlFor="category">Category</label>
                                    <select id="category" className="w-full px-4 py-2 bg-[#6060601A] text-black border rounded-md">
                                        <option value="">Select a category</option>
                                        <option value="art">Art</option>
                                        <option value="furniture">Furniture</option>
                                        <option value="shoes">Shoes</option>
                                        <option value="bags">Bags</option>
                                        <option value="accessories">Accessories</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-900 font-bold mb-2" htmlFor="location">Location</label>
                                    <input
                                        type="text"
                                        id="location"
                                        placeholder=""
                                        className="w-full px-4 py-2 text-black bg-[#6060601A] border rounded-md"
                                        value={companyData.location}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-900 font-bold mb-2" htmlFor="brand-description">Brand description</label>
                                    <input
                                        type="text"
                                        id="brandDescription"
                                        placeholder="Briefly tell us what your brand is about."
                                        className="w-full px-4 py-8 text-black bg-[#6060601A] border rounded-md"
                                        value={companyData.brandDescription}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-900 font-bold mb-2" htmlFor="last-name">Inspiration</label>
                                    <input
                                        type="text"
                                        id="inspiration"
                                        placeholder="What inspired the start-up of this brand?"
                                        className="w-full px-4 py-8 text-[#A6A6A6] bg-[#6060601A] border rounded-md"
                                        value={companyData.inspiration}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                </div>

                                <div>
                                    <label className="block text-black font-bold mb-2" htmlFor="socials">Socials Links</label>
                                    <span>Instagram</span>
                                    <input
                                        type="url"
                                        id="instagram"
                                        placeholder=""
                                        className="w-full px-4 py-2 bg-[#6060601A] text-black border rounded-md"
                                        value={companyData.instagram}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                    <span>Twitter</span>
                                    <input
                                        type="url"
                                        id="twitter"
                                        placeholder=""
                                        className="w-full px-4 py-2 bg-[#6060601A] text-black border rounded-md"
                                        value={companyData.twitter}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                    <span>Tiktok</span>
                                    <input
                                        type="url"
                                        id="tiktok"
                                        placeholder=""
                                        className="w-full px-4 py-2 bg-[#6060601A] text-black border rounded-md"
                                        value={companyData.tiktok}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                    <span>Facebook</span>
                                    <input
                                        type="url"
                                        id="facebook"
                                        placeholder=""
                                        className="w-full px-4 py-2 bg-[#6060601A] text-black border rounded-md"
                                        value={companyData.facebook}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                </div>
                            </div>
                            <div className="flex space-x-4 justify-center mt-8">
                                {isEditing ? (
                                    <>
                                        <button type="button" className="w-full py-2 px-4 bg-white text-[#CC212D] font-bold border border-[#CC212D] rounded-lg" onClick={handleCancel}>
                                            Cancel
                                        </button>
                                        <button type="submit" className="w-full py-2 px-4 bg-black text-white font-bold rounded-lg">
                                            Save
                                        </button>
                                    </>
                                ) : (
                                    <button type="button" onClick={handleEdit} className="w-48 py-2 px-4 bg-black text-white font-bold rounded-lg">
                                        Edit
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

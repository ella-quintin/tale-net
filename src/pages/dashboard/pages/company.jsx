import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/sidebar";
import profile from "../../../assets/images/profile.svg"; // Placeholder for brand logo
import { useNavigate } from "react-router-dom";
import { FaEdit } from 'react-icons/fa';  // Import the edit icon

export default function Company() {
    const [isEditing, setIsEditing] = useState(true);
    const [brandLogo, setBrandLogo] = useState(profile);  // State for storing brand logo
    const [previewLogo, setPreviewLogo] = useState(null); // State for previewing selected image
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

    // Load company data and brand logo from localStorage on component mount
    useEffect(() => {
        const storedCompanyData = localStorage.getItem('companyData');
        if (storedCompanyData) {
            setCompanyData(JSON.parse(storedCompanyData));
        }

        const storedBrandLogo = localStorage.getItem('brandLogo');
        if (storedBrandLogo) {
            setBrandLogo(storedBrandLogo);
        }
    }, []);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setCompanyData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewLogo(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = (e) => {
        e.preventDefault();
        // Save the company data and brand logo to localStorage
        localStorage.setItem('companyData', JSON.stringify(companyData));
        if (previewLogo) {
            localStorage.setItem('brandLogo', previewLogo);
            setBrandLogo(previewLogo);
        }
        console.log("Saving company data:", companyData);
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setPreviewLogo(null); // Discard the preview if cancel is clicked
        setIsEditing(false);
        navigate('/dashboard');
    };

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <div className="flex flex-grow overflow-hidden">
                <Sidebar />
                <div className="flex-grow p-6 overflow-hidden">
                    <h1 className="text-3xl text-black font-bold mb-6">Company Details</h1>
                    <div className="bg-white rounded-lg shadow-md p-16">
                        <div className="flex flex-col justify-center items-center mb-6">
                            <div className="flex items-center justify-center mb-4">
                                <img src={previewLogo || brandLogo} alt="Brand Logo" className="w-32 h-32 rounded-full object-cover" />
                            </div>
                            {isEditing && (
                                <input type="file" accept="image/*" onChange={handleLogoChange} className="mb-4" />
                            )}
                            <button className="text-[#CC212D] font-normal">Update Brand Logo</button>
                        </div>
                        <form className="space-y-6 max-w-3xl mx-auto" onSubmit={handleSave}>
                            <div className="flex-col gap-6">
                                <div>
                                    <label className="block text-gray-900 font-bold mb-2" htmlFor="brandName">Brand Name</label>
                                    <input
                                        type="text"
                                        id="brandName"
                                        className="w-full px-4 py-2 text-black bg-[#6060601A] border rounded-md"
                                        value={companyData.brandName}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-900 font-bold mb-2" htmlFor="category">Category</label>
                                    <select
                                        id="category"
                                        className="w-full px-4 py-2 bg-[#6060601A] text-black border rounded-md"
                                        value={companyData.category}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    >
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
                                        className="w-full px-4 py-2 text-black bg-[#6060601A] border rounded-md"
                                        value={companyData.location}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-900 font-bold mb-2" htmlFor="brandDescription">Brand Description</label>
                                    <textarea
                                        id="brandDescription"
                                        placeholder="Briefly tell us what your brand is about."
                                        className="w-full px-4 py-8 text-black bg-[#6060601A] border rounded-md"
                                        value={companyData.brandDescription}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-900 font-bold mb-2" htmlFor="inspiration">Inspiration</label>
                                    <textarea
                                        id="inspiration"
                                        placeholder="What inspired the start-up of this brand?"
                                        className="w-full px-4 py-8 text-black bg-[#6060601A] border rounded-md"
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
                                        className="w-full px-4 py-2 bg-[#6060601A] text-black border rounded-md"
                                        value={companyData.instagram}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                    <span>Twitter</span>
                                    <input
                                        type="url"
                                        id="twitter"
                                        className="w-full px-4 py-2 bg-[#6060601A] text-black border rounded-md"
                                        value={companyData.twitter}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                    <span>Tiktok</span>
                                    <input
                                        type="url"
                                        id="tiktok"
                                        className="w-full px-4 py-2 bg-[#6060601A] text-black border rounded-md"
                                        value={companyData.tiktok}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                    <span>Facebook</span>
                                    <input
                                        type="url"
                                        id="facebook"
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
                                    <button type="button" onClick={handleEdit} className="flex items-center justify-center w-48 py-2 px-4 bg-black text-white font-bold rounded-lg">
                                        <FaEdit className="mr-2" />
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

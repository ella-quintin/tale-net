import React, { useState } from "react";
import Sidebar from "../../../components/sidebar";
import profile from "../../../assets/images/profile.svg";
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const [isEditing, setIsEditing] = useState(true);
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState({
        fullName: "",
        bio: "",
        phone: "",
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setProfileData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        // Here you would typically send the data to a server
        console.log("Saving profile data:", profileData);
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        navigate('/dashboard');
    }

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <div className="flex flex-grow overflow-hidden">
                <Sidebar />
                <div className="flex-grow p-6 overflow-hidden">
                    <h1 className="text-3xl text-black font-medium mb-6">Profile</h1>
                    <div className="bg-white rounded-lg shadow-md p-16">
                        <div className="flex flex-col justify-center items-center mb-6">
                            <div className="flex items-center justify-center mb-4">
                                <img src={profile} alt="Profile"/>
                            </div>
                            <button className="text-[#CC212D] font-normal">Update Profile Photo</button>
                        </div>
                        <form className="space-y-6 max-w-3xl mx-auto" onSubmit={handleSave}>
                            <div className="flex-col gap-6">
                                <div>
                                    <label className="block text-black font-bold mb-2" htmlFor="fullName">Full name (Creative Director)</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        placeholder="Kofi Poku"
                                        className="w-full px-4 py-2 text-black border bg-[#6060601A] rounded-md"
                                        value={profileData.fullName}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div>
                                    <label className="block text-black font-bold mb-2" htmlFor="bio">Bio</label>
                                    <textarea
                                        id="bio"
                                        placeholder="Tell a bit about yourself"
                                        className="w-full px-4 py-8 text-black bg-[#6060601A] border rounded-md"
                                        value={profileData.bio}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div>
                                    <label className="block text-black font-bold mb-2" htmlFor="phone">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="+233-24-999-9999"
                                        className="w-full px-4 py-2 bg-[#6060601A] text-black border rounded-md"
                                        value={profileData.phone}
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
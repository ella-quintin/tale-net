import React, { useState } from 'react';
import Sidebar from '../../../components/sidebar';
import { useNavigate } from 'react-router-dom';

const DGallery = () => {
    const [images, setImages] = useState([]);
    const [descriptions, setDescriptions] = useState([]);
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map(file => URL.createObjectURL(file));
        setImages(prevImages => [...prevImages, ...newImages]);
        setDescriptions(prevDescriptions => [...prevDescriptions, ...Array(files.length).fill('')]);
    };

    const handleDescriptionChange = (index, value) => {
        const newDescriptions = [...descriptions];
        newDescriptions[index] = value;
        setDescriptions(newDescriptions);
    };

    const handleImageRemove = (index) => {
        const newImages = images.filter((_, i) => i !== index);
        const newDescriptions = descriptions.filter((_, i) => i !== index);
        setImages(newImages);
        setDescriptions(newDescriptions);
    };

    const handleUpload = () => {
        // Save to local storage
        const existingImages = JSON.parse(localStorage.getItem('galleryImages')) || [];
        const newGalleryData = images.map((image, index) => ({
            src: image,
            description: descriptions[index] || ''
        }));
        const updatedGalleryData = [...existingImages, ...newGalleryData];
        localStorage.setItem('galleryImages', JSON.stringify(updatedGalleryData));
        navigate('/add-gallery'); // Navigate back to AddGallery page
    };

    const handleCancel = () => {
        navigate('/add-gallery');
    };

    return (
        <div className="bg-white min-h-screen flex">
            <Sidebar />
            <div className="flex-grow p-6">
                <h3 className="text-3xl text-black font-bold mb-6">Gallery</h3>
                <p>Display some pictures from your brand</p>
                <div className="bg-white rounded-lg shadow-md p-8">
                    <input 
                        type="file" 
                        accept="image/jpeg, image/png" 
                        multiple 
                        onChange={handleImageChange}
                        className="mb-4"
                    />
                    <div className="space-y-4">
                        {images.map((image, index) => (
                            <div key={index} className="flex items-center space-x-4 border p-4 rounded-md">
                                <img 
                                    src={image} 
                                    alt={`Gallery image ${index}`} 
                                    className="w-24 h-24 object-cover rounded-md"
                                />
                                <div className="flex-grow">
                                    <textarea 
                                        value={descriptions[index]} 
                                        onChange={(e) => handleDescriptionChange(index, e.target.value)} 
                                        placeholder="Add a description..." 
                                        className="w-full px-2 py-1 border rounded-md"
                                    />
                                </div>
                                <button 
                                    onClick={() => handleImageRemove(index)} 
                                    className="text-red-500"
                                >
                                    &#10005;
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end space-x-4 mt-8">
                        <button className="px-6 py-2 bg-gray-300 text-gray-900 rounded-lg" onClick={handleCancel}>CANCEL</button>
                        <button className="px-6 py-2 bg-black text-white rounded-lg" onClick={handleUpload}>UPLOAD</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DGallery;

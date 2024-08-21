import React, { useState, useEffect } from 'react';
import Sidebar from '../../../components/sidebar';
import { useNavigate } from 'react-router-dom';

const AddGallery = () => {
    const [galleryImages, setGalleryImages] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedImages = JSON.parse(localStorage.getItem('galleryImages')) || [];
        setGalleryImages(storedImages);
    }, []);

    const handleEditDescription = (index, newDescription) => {
        const updatedImages = [...galleryImages];
        updatedImages[index].description = newDescription;
        setGalleryImages(updatedImages);
        localStorage.setItem('galleryImages', JSON.stringify(updatedImages));
    };

    const handleDeleteImage = (index) => {
        const updatedImages = galleryImages.filter((_, i) => i !== index);
        setGalleryImages(updatedImages);
        localStorage.setItem('galleryImages', JSON.stringify(updatedImages));
    };

    const handleAddGallery = () => {
        navigate('/dgallery'); // Navigate to the DGallery page
    };

    return (
        <div className="bg-white min-h-screen flex">
            <Sidebar />
            <div className="flex-grow p-6">
                <h1 className="text-3xl text-black font-bold mb-6">Gallery Images</h1>
                <div className="bg-white rounded-lg shadow-md p-8">
                    {galleryImages.length > 0 ? (
                        galleryImages.map((image, index) => (
                            <div key={index} className="flex items-center space-x-4 border p-4 rounded-md mb-4">
                                <img 
                                    src={image.src} 
                                    alt={`Gallery image ${index}`} 
                                    className="w-24 h-24 object-cover rounded-md"
                                />
                                <div className="flex-grow">
                                    <textarea 
                                        value={image.description} 
                                        onChange={(e) => handleEditDescription(index, e.target.value)} 
                                        className="w-full px-2 py-1 border rounded-md"
                                    />
                                </div>
                                <button 
                                    onClick={() => handleDeleteImage(index)} 
                                    className="text-red-500"
                                >
                                    &#10005;
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600">No images found.</p>
                    )}
                    <div className="flex justify-end mt-8 space-x-4">
                        <button className="px-6 py-2 bg-black text-white rounded-lg" onClick={handleAddGallery}>Add Gallery</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddGallery;

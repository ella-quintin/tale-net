const Gallery = ({ image, description }) => {
    return (
      <div className="relative overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
        <img src={image} alt={description} className="w-96 h-96 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-xl font-semibold">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Gallery;
  
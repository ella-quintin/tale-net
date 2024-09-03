import { Link } from 'react-router-dom';

const ViewsCreatives = ({ profilePicture, bio, brand, name }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-80 h-80 overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center top' }} // Aligns the image's top center
          src={profilePicture}
          alt="profile picture of creative"
        />
      </div>
      <p className="text-white text-md font-medium mt-3 max-w-96">{name}</p>
      <p className="text-white text-sm font-thin max-w-96">{bio}</p>
      <p className="text-white text-sm font-bold  max-w-96">{brand}</p>
      <Link to='/creativepage'>
      <button className="mt-6 border border-white text-white py-3 px-8 rounded-lg hover:bg-white hover:text-black transition">
        View Profile
      </button>
      </Link>
    </div>
  );
};

export default ViewsCreatives;

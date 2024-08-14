const ViewsCreatives = ({ profilePicture, bio }) => {
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
      <p className="text-white text-sm font-thin mt-3 max-w-96">{bio}</p>
      <button className="mt-6 border border-white text-white py-3 px-8 rounded-lg hover:bg-white hover:text-black transition">
        View Profile
      </button>
    </div>
  );
};

export default ViewsCreatives;

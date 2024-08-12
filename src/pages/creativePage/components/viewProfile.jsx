import framer from '../../../assets/images/framer.svg';

const ViewProfile = ({  profilePicture, fullName, bio, position }) => {
    return (
        <div className="mt-40 flex justify-start ml-16 items-center gap-6">
        <div className="relative w-1/4">
          <img src={framer} alt="" className='w-full' />
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={profilePicture} alt="profile picture" className="max-w-[95%] max-h-[95%] object-contain" />
          </div>
        </div>
        <div className='text-left'>
          <h3 className='text-4xl text-[#EBB22A]'>{fullName}</h3>
          <p>{position}</p>
          <p className="mt-2 max-w-xl mx-auto  text-gray-400 italic">{bio}</p>
        </div>
      </div>
    )
}

export default ViewProfile
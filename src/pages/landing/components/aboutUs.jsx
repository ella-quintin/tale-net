import Navbar from '../../../components/navbar';
import lsix from '../../../assets/images/lsix.jpg';
import together from '../../../assets/images/together.jpg'


const AboutUs = () => {
    return (
        <>

            <Navbar />
            <div className='bg-black min-h-screen flex flex-col items-center justify-center py-8 pt-24'>
                <div className='flex  bg-black justify-center items-center mt-28 p-14 gap-16'>
                    <img src={together} className='w-full rounded-xl' alt="" />
                    <div className='flex flex-col'>
                        <h3 className='text-5xl text-white font-bold mb-3'>About Us</h3>
                        <p className='text-white text-xl font-light'>Tale-net is a combination of  "talent" and "network" in a unique way. It suggests a connection or network of talented individuals, and the "tale" prefix adds a storytelling element.

                            Tale-Net is a vibrant online market that empowers creatives to showcase their unique talents and products. They get to establish their online presence effortlessly by uploading and managing their products through seamless social media integration. Our vendors get to be a part of a dynamic community to  connect with like-minded artists, participate  in engaging events, and gain access to exclusive opportunities and resources, all designed to help them grow their online business and thrive in the creative economy."</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AboutUs
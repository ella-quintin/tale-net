import Sidebar from "../../../components/sidebar";
import profile from "../../../assets/images/profile.svg"

export default function Company () {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <div className="flex flex-grow overflow-hidden">
                <Sidebar />
                <div className="flex-grow p-6 overflow-hidden">
                    <h1 className="text-3xl text-black font-bold mb-6">Company details</h1>
                    <div className="bg-white rounded-lg shadow-md p-16">
                        <div className="flex flex-col justify-center items-center mb-6">
                            <div className=" flex items-center justify-center mb-4">
                                <img src={profile} alt="Profile"/>
                            </div>
                            <button className="text-[#CC212D] font-normal">Update Brand Logo</button>
                        </div>
                        <form className="space-y-6 max-w-3xl mx-auto">
                            <div className="flex-col gap-6">
                                <div>
                                    <label className="block text-gray-900 font-bold mb-2" htmlFor="email">Brand name</label>
                                    <input
                                        type="text"
                                        id="company-name"
                                        placeholder=""
                                        className="w-full px-4 py-2 text-[#A6A6A6] bg-[#6060601A] border rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-900 font-bold mb-2" htmlFor="email">Brand description</label>
                                    <input
                                        type="text"
                                        id="company-name"
                                        placeholder="Brefly tell us what your brand is about."
                                        className="w-full px-4 py-8 text-[#A6A6A6] bg-[#6060601A] border rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-900 font-bold mb-2" htmlFor="phone">Socials Links</label>
                                    <span>Instagram</span>
                                    <input
                                        type="url"
                                        id="text"
                                        placeholder=""
                                        className="w-full px-4 py-2 bg-[#6060601A] text-[#A6A6A6] border rounded-md"
                                    />
                                    <span>Twitter</span>
                                    <input
                                        type="url"
                                        id="text"
                                        placeholder=""
                                        className="w-full px-4 py-2 bg-[#6060601A] text-[#A6A6A6] border rounded-md"
                                    />
                                    <span>Tiktok</span>
                                    <input
                                        type="url"
                                        id="text"
                                        placeholder=""
                                        className="w-full px-4 py-2 bg-[#6060601A] text-[#A6A6A6] border rounded-md"
                                    />
                                    <span>Facebook</span>
                                    <input
                                        type="url"
                                        id="text"
                                        placeholder=""
                                        className="w-full px-4 py-2 bg-[#6060601A] text-[#A6A6A6] border rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="flex space-x-4 justify-center mt-8">
                                <button type="button" className="w-full py-2 px-4 bg-white text-[#CC212D] font-bold border border-[#CC212D] rounded-lg">
                                    Discard
                                </button>
                                <button type="submit" className="w-full py-2 px-4 bg-black text-white font-bold rounded-lg">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
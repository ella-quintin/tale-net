import { useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar';

const Dashboard = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Get the username from local storage
    const storedUsername = localStorage.getItem('username');
    setUsername(storedUsername);
  }, []);

  return (
    <div className="flex flex-grow overflow-hidden">
      <Sidebar />
      <div className="flex-grow m-4 h-[calc(100vh-3.5rem-2rem)] overflow-auto">
        <h3 className="text-3xl font-normal text-black mb-4">
          Welcome back, {username}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-5">
          <div className="bg-teal-500 p-4 rounded-lg shadow-slate-900 flex flex-col space-y-4 relative">
            <div className="text-left mb-10">
              <h4 className="text-white text-sm">Total Value</h4>
              <p className="text-lg text-black font-bold mt-3">200</p>
            </div>
          </div>
          <div className="bg-teal-500 p-4 rounded-lg shadow-slate-900 flex flex-col space-y-4 relative">
            <div className="text-left mb-10">
              <h4 className="text-white text-sm">Total Value</h4>
              <p className="text-lg text-black font-bold mt-3">200</p>
            </div>
          </div>
          <div className="bg-teal-500 p-4 rounded-lg shadow-slate-900 flex flex-col space-y-4 relative">
            <div className="text-left mb-10">
              <h4 className="text-white text-sm">Total Value</h4>
              <p className="text-lg text-black font-bold mt-3">200</p>
            </div>
          </div>
          {/* Other dashboard items */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

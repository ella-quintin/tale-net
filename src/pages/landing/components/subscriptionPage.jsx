
import Navbar from '../../../components/navbar';

const SubscriptionPage = () => {
  return (
    <>
      <Navbar className="fixed top-0 left-0 w-full z-50" />
      <div className="pt-20 min-h-screen bg-black text-white p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Subscription Plans</h1>
        
        <div className="flex justify-center space-x-8">
          {/* Scout Plan */}
          <div className="w-80 p-6 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Free Trial</h2>
            <p className="mb-2">10 days</p>
            <p className="mb-2">Enjoy all premimum features</p>
            <p className="mb-2"></p>
            <p className="text-3xl font-bold mt-6">Free</p>
            <button className="mt-4 w-full py-2 bg-yellow-700 hover:bg-yellow-800">Get Started</button>
          </div>
          
          {/* Smart Plan */}
          <div className="w-80 p-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Venture</h2>
            <p className="mb-2">10% discunt on branding kits</p>
            <p className="mb-2">Part take in sale & exhibition events</p>
            <p className="mb-2">Users get to interact with creatives on WhatsApp</p>
            <p className="mb-2">Unique sub-domain name</p>
            <p className="text-3xl font-bold mt-6">GH₵300 <span className="text-sm font-normal">/ per month</span></p>
            <button className="mt-4 w-full py-2 bg-blue-600 rounded-md hover:bg-blue-700">Get Started</button>
          </div>
          
          {/* Select Plan */}
          <div className="w-80 p-6 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Unlimited</h2>
            <p className="mb-2">Everything in Venture</p>
            <p className="mb-2">Financial Consultation with experts</p>
            <p className="mb-2">Abandoned cart saver</p>
            <p className="mb-2">Advanced discounting</p>
            <p className="mb-2">Mobile store management app</p>
            <p className="text-3xl font-bold mt-6">GH₵800<span className="text-sm font-normal">/ per month</span></p>
            <button className="mt-4 w-full py-2 bg-teal-700 rounded-md hover:bg-purple-700">Get Started</button>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto grid grid-cols-2 gap-8">
          {/* Billing Information */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Billing Information</h2>
            <p className="mb-2">Company Name</p>
            <input 
              type="text" 
              placeholder="Microsoft Corporation" 
              className="w-full p-3 bg-gray-900 rounded-md text-white placeholder-gray-400 focus:outline-none"
            />
          </div>
          
          {/* Invoice History */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Invoices History</h2>
            <p className="mb-2">Monthly Subscription — Select</p>
            <p className="text-gray-400">GH₵500.0049.90</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionPage;

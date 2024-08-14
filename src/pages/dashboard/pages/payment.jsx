import { useState } from "react";
import Sidebar from "../../../components/sidebar";

const Payment = () => {
  const [accountType, setAccountType] = useState("");

  const handleAccountTypeChange = (e) => {
    setAccountType(e.target.value);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="flex flex-grow overflow-hidden">
        <Sidebar />
        <div className="flex-grow p-6 overflow-hidden">
          <h3 className="text-3xl text-black font-bold mb-6">Payment details</h3>
          <div className="bg-white rounded-lg shadow-md p-20 mb-8">
            <label
              className="block text-gray-900 font-bold mb-2"
              htmlFor="accountType"
            >
              Choose your mode of payment
            </label>
            <select
              id="accountType"
              className="w-72 px-4 py-2 bg-[#6060601A] text-black border rounded-md"
              value={accountType}
              onChange={handleAccountTypeChange}
            >
              <option value="">Select account type</option>
              <option value="bank">Bank Account</option>
              <option value="mobile">Mobile Money</option>
            </select>

            {accountType === "mobile" && (
              <div className="mt-8">
                <label
                  className="block text-gray-900 font-bold mb-2"
                  htmlFor="provider"
                >
                  Provider<span className="text-red-500">*</span>
                </label>
                <select
                  id="provider"
                  className="w-72 px-4 py-2 bg-[#6060601A] text-black border rounded-md"
                >
                  <option value="">Choose an option</option>
                  <option value="mtn">MTN</option>
                  <option value="telecel">Telecel</option>
                  <option value="airteltigo">AirtelTigo</option>
                </select>

                <label
                  className="block text-gray-900 font-bold mt-4 mb-2"
                  htmlFor="phoneNumber"
                >
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  className="w-72 px-4 py-2 border rounded-md bg-[#6060601A]"
                  placeholder="Enter phone number"
                />

                <label
                  className="block text-gray-900 font-bold mt-4 mb-2"
                  htmlFor="accountName"
                >
                  Name on Account<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="accountName"
                  className="w-72 px-4 py-2 border rounded-md bg-[#6060601A]"
                  placeholder="Enter name on account"
                />

                <p className="text-gray-600 mt-4 max-w-96">
                  To help us verify your account, the name on your corporate
                  bank account should match the name you provided for your Legal
                  Business Name.
                </p>
              </div>
            )}

            {accountType === "bank" && (
              <div className="mt-8">
                <p className="text-gray-900 font-bold text-sm mb-2 flex items-center">
                  The minimum settlement threshold for using a Bank Account is
                  GHS 50.{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 ml-2"
                  >
                    Learn more
                  </a>
                </p>

                <label
                  className="block text-gray-900 font-bold mt-4 mb-2"
                  htmlFor="bankName"
                >
                  Bank Name<span className="text-red-500">*</span>
                </label>
                <select
                  id="bankName"
                  className="w-72 px-4 py-2 bg-[#6060601A] text-black border rounded-md"
                >
                  <option value="">Choose an option</option>
                  <option value="bank1">Bank 1</option>
                  <option value="bank2">Bank 2</option>
                  <option value="bank3">Bank 3</option>
                </select>

                <label
                  className="block text-gray-900 font-bold mt-4 mb-2"
                  htmlFor="accountNumber"
                >
                  Account Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="accountNumber"
                  className="w-72 px-4 py-2 border rounded-md bg-[#6060601A]"
                  placeholder="Enter account number"
                />

                <label
                  className="block text-gray-900 font-bold mt-4 mb-2"
                  htmlFor="bankAccountName"
                >
                  Name on Account<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="bankAccountName"
                  className="w-72 px-4 py-2 border rounded-md bg-[#6060601A]"
                  placeholder="Enter name on account"
                />

                <p className="text-gray-600 mt-4 max-w-96">
                  To help us verify your account, the name on your corporate
                  bank account should match the name you provided for your Legal
                  Business Name.
                </p>
              </div>
            )}

            <div className="flex justify-end space-x-4 mt-8">
              <button className="px-6 py-2 bg-gray-300 text-gray-900 rounded-lg">
                CANCEL
              </button>
              <button className="px-6 py-2 bg-green-500 text-white rounded-lg">
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

import { Button } from "../ui/button";
import { SectionTag } from "./section-tag";

export function Register() {
  return (
    <div className="bg-[url('/register-bg.png')] bg-contain min-h-screen font-oxanium overflow-hidden text-primary bg-red-500 py-14">
      <div className="container">
        <SectionTag content="Register" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row mt-8 gap-8">
          <div className="flex-1 h-[400px] lg:h-[600px]">
            <img
              src="/register-img.png"
              alt="Registration"
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          <form className="flex-1 bg-dark-200 p-6 lg:p-8 rounded-lg shadow-2xl space-y-6 border-2 border-brand-gray-600">
            <h3 className="~text-xl/3xl">Register Now!!</h3>
            <div className="flex flex-col gap-2">
              <label className="font-medium ~text-sm/base">Full Name</label>
              <input
                type="text"
                className="text-[10px] md:text-base bg-dark-400 w-full p-3 rounded-md placeholder:text-brand-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-purple-100"
                placeholder="Enter your full name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium ~text-sm/lg">Company Name</label>
              <input
                type="text"
                className="text-[10px] md:text-base bg-dark-400 w-full p-3 rounded-md placeholder:text-brand-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-purple-100"
                placeholder="Enter your company name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium ~text-sm/lg">
                Company E-Mail ID
              </label>
              <input
                type="email"
                className="text-[10px] md:text-base bg-dark-400 w-full p-3 rounded-md placeholder:text-brand-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-purple-100"
                placeholder="Enter your company email"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium ~text-sm/lg">Mobile Number</label>
              <input
                type="number"
                className="text-[10px] md:text-base bg-dark-400 w-full p-3 rounded-md placeholder:text-brand-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-purple-100"
                placeholder="Enter your mobile number"
              />
            </div>

            <div className="flex gap-4">
              <Button className="bg-brand-purple-300 hover:bg-brand-purple-200 text-white py-3 border-2 border-brand-purple-100 rounded-md sm:w-full">
                Get A Call Back
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

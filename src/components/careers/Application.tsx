import {FiArrowUpCircle, FiPaperclip} from 'react-icons/fi';
import {Button} from "@/components/ui/button.tsx";

function Application() {
    return (
        <div className="mt-[40px]">
            <div className="border border-[#404040] p-6 rounded-lg flex flex-col md:flex-row">
                <div className="flex flex-col justify-between mb-4 md:mb-0 md:mr-6">
                    <div className="flex items-center">
                        <FiPaperclip className="text-[#DAFF00] size={24px} mr-2"/>
                        <h2 className="text-lg font-semibold">Autofill from Resume</h2>
                    </div>
                    <p className="text-white mt-2 text-sm font-normal">
                        Upload your resume here to autofill key application fields.
                    </p>
                </div>

                <div className="flex md:ml-auto items-center">
                    <Button className={"lg:flex gap-1"}>Upload File <FiArrowUpCircle size={18}/></Button>
                </div>
            </div>

            <div className='mt-14 pb-5 border-b border-b-[#404040]'>
                <p className='text-2xl font-semibold'>Take your career to the next level at metaroon labs 🚀</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                <div className="flex flex-col">
                    <label htmlFor="firstName" className="mb-2 text-sm font-normal text-white">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="p-2 border border-[#404040] rounded-[5px] font-normal placeholder:text-sm focus:outline-none focus:border-[#404040]"
                        placeholder="Your first name"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="lastName" className="mb-2 text-sm font-normal text-white">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="p-2 border border-[#404040] rounded-[5px] font-normal placeholder:text-sm focus:outline-none focus:border-[#404040]"
                        placeholder="Your last name"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-2 text-sm font-normal text-white">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        className="p-2 border border-[#404040] rounded-[5px] font-normal placeholder:text-sm focus:outline-none focus:border-[#404040]"
                        placeholder="hello@example.com"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="contactnumber" className="mb-2 text-sm font-normal text-white">Contact
                        Number</label>
                    <input
                        type="text"
                        id="contactnumber"
                        name="contactnumber"
                        className="p-2 border border-[#404040] rounded-[5px] font-normal placeholder:text-sm focus:outline-none focus:border-[#404040]"
                        placeholder="Your contact number"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="portfoliolink" className="mb-2 text-sm font-normal text-white">Portfolio
                        Link</label>
                    <input
                        type="text"
                        id="portfoliolink"
                        name="portfoliolink"
                        className="p-2 border border-[#404040] rounded-[5px] font-normal placeholder:text-sm focus:outline-none focus:border-[#404040]"
                        placeholder="Your Portfolio Link"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="expectedSalary" className="mb-2 text-sm font-normal text-white">Expected
                        Salary</label>
                    <div className="relative ">
                        <div
                            className="absolute inset-y-0 left-0 flex items-center bg-[#131313] border border-[#404040] rounded-[5px] rounded-tr-none rounded-br-none">
                            <select id="currency" name="currency"
                                    className="h-full rounded-md border-0 py-0 pl-2 pr-3 text-white text-sm">
                                <option>LKR</option>
                                <option>USD</option>
                            </select>
                        </div>
                        <input type="text" name="price" id="price"
                               className="w-full p-2 pl-20 placeholder:text-sm border border-[#404040] rounded-[5px] focus:outline-none focus:border-[#404040]"
                               placeholder="0.00"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:col-span-2">
                    <label htmlFor="yearsofexperience" className="mb-2 text-sm font-normal text-white">Years of
                        Experience</label>
                    <input
                        type="text"
                        id="yearsofexperience"
                        name="yearsofexperience"
                        className="p-2 border border-[#404040] rounded-[5px] font-normal placeholder:text-sm focus:outline-none focus:border-[#404040]"
                        placeholder="Type here..."
                    />
                </div>


            </div>
        </div>

    );
}

export default Application;
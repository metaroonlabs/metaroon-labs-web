import {Button} from "@/components/ui/button.tsx";
import uploadIcon from '../../../public/assets/images/careers/Icon.png'
import magicWand from '../../../public/assets/images/careers/magicWand.png'
import blackArrow from '../../../public/assets/images/careers/blackArrow.png'
import sendArrow from '../../../public/assets/images/careers/submitArrow.png'

function Application() {
    return (
        <div className="mt-[40px]">
            <div className="border border-[#404040] p-6 rounded-lg flex flex-col md:flex-row">
                <div className="flex flex-col justify-between mb-4 md:mb-0 md:mr-6">
                    <div className="flex items-center">
                        <img
                            src={magicWand} // Replace with the actual path to your image
                            alt="Magic Wand"
                            className="w-6 h-6 mr-2" // Adjust width and height as needed
                        />
                        <h2 className="text-lg font-semibold">Autofill from Resume</h2>
                    </div>
                    <p className="text-white mt-2 text-sm font-normal">
                        Upload your resume here to autofill key application fields.
                    </p>
                </div>

                <div className="flex md:ml-auto items-center">
                    <Button className={"lg:flex gap-1"}>Upload File
                        <img
                            src={blackArrow}
                            alt="Upload Arrow"
                            className="w-4 h-4"
                        />
                    </Button>
                </div>
            </div>

            <div className='mt-14 pb-5 border-b border-b-[#404040]'>
                <p className='text-2xl font-semibold'>Take your career to the next level at metaroon labs 🚀</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                <div className="flex flex-col">
                    <label htmlFor="firstName" className="mb-2 text-sm font-normal text-white">First Name
                        <span className='text-[#FF3939] ml-1'>*</span>
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="p-2 border border-[#404040] rounded-[5px] font-normal placeholder:text-sm focus:outline-none focus:border-[#404040]"
                        placeholder="Your first name"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="lastName" className="mb-2 text-sm font-normal text-white">Last Name
                        <span className='text-[#FF3939] ml-1'>*</span>
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="p-2 border border-[#404040] rounded-[5px] font-normal placeholder:text-sm focus:outline-none focus:border-[#404040]"
                        placeholder="Your last name"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-2 text-sm font-normal text-white">Email
                        <span className='text-[#FF3939] ml-1'>*</span>
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        className="p-2 border border-[#404040] rounded-[5px] font-normal placeholder:text-sm focus:outline-none focus:border-[#404040]"
                        placeholder="hello@example.com"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="contactNumber" className="mb-2 text-sm font-normal text-white">Contact Number
                        <span className='text-[#FF3939] ml-1'>*</span>
                    </label>
                    <input
                        type="text"
                        id="contactNumber"
                        name="contactNumber"
                        className="p-2 border border-[#404040] rounded-[5px] font-normal placeholder:text-sm focus:outline-none focus:border-[#404040]"
                        placeholder="Your contact number"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="portfolioLink" className="mb-2 text-sm font-normal text-white">Portfolio Link
                        <span className='text-[#FF3939] ml-1'>*</span>
                    </label>
                    <input
                        type="text"
                        id="portfolioLink"
                        name="portfolioLink"
                        className="p-2 border border-[#404040] rounded-[5px] font-normal placeholder:text-sm focus:outline-none focus:border-[#404040]"
                        placeholder="Your Portfolio Link"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="expectedSalary" className="mb-2 text-sm font-normal text-white">Expected Salary
                        <span className='text-[#FF3939] ml-1'>*</span>
                    </label>
                    <div className="relative ">
                        <div
                            className="absolute inset-y-0 left-0 pr-1 flex items-center bg-[#131313] border border-[#404040] rounded-[5px] rounded-tr-none rounded-br-none">
                            <select id="currency" name="currency"
                                    className="h-full rounded-md border-0 py-0 pl-2 pr-3 text-white text-sm">
                                <option>LKR</option>
                                <option>USD</option>
                            </select>
                        </div>
                        <input type="text" name="price" id="price"
                               className="w-full p-2 pl-24 placeholder:text-sm border border-[#404040] rounded-[5px] focus:outline-none focus:border-[#404040]"
                               placeholder="0.00"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:col-span-2">
                    <label htmlFor="yearsofExperience" className="mb-2 text-sm font-normal text-white">Years of
                        Experience
                        <span className='text-[#FF3939] ml-1'>*</span>
                    </label>
                    <input
                        type="text"
                        id="yearsofExperience"
                        name="yearsofExperience"
                        className="p-2 border border-[#404040] rounded-[5px] font-normal placeholder:text-sm focus:outline-none focus:border-[#404040]"
                        placeholder="Type here..."
                    />
                </div>

                <div className="flex flex-col md:col-span-2">
                    <label htmlFor="resumeUpload" className="mb-2 text-sm font-normal text-white">Upload Resume
                        <span className='text-[#FF3939] ml-1'>*</span>
                    </label>
                    <div
                        className="relative w-full border border-dashed border-[#404040] rounded-[5px] p-6 text-center h-40 bg-[#151515]">
                        <div className="absolute inset-0 flex flex-col justify-center items-center space-y-2">
                            <div className="bg-[rgba(218,255,0,0.06)] p-3 rounded-full">
                                <img
                                    src={uploadIcon}
                                    alt="Upload Arrow"
                                    className="w-6 h-6"
                                />
                            </div>

                            <p className="text-sm font-normal">
                                <span className="text-[#DAFF00]">Upload a file</span>
                                <span className="text-white"> or drag and drop here</span>
                            </p>

                        </div>

                        <input
                            type="file"
                            id="resumeUpload"
                            name="resumeUpload"
                            className="opacity-0 w-full h-full absolute inset-0 cursor-pointer"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:col-span-2">
                    <label htmlFor="coverLetterUpload" className="mb-2 text-sm font-normal text-white">Upload Cover
                        Letter
                        <span className='text-[#FF3939] ml-1'>*</span>
                    </label>
                    <div
                        className="relative w-full border border-dashed border-[#404040] rounded-[5px] p-6 text-center h-40 bg-[#151515]">
                        <div className="absolute inset-0 flex flex-col justify-center items-center space-y-2">
                            <div className="bg-[rgba(218,255,0,0.06)] p-3 rounded-full">
                                <img
                                    src={uploadIcon}
                                    alt="Upload Arrow"
                                    className="w-6 h-6"
                                />
                            </div>

                            <p className="text-sm font-normal">
                                <span className="text-[#DAFF00]">Upload a file</span>
                                <span className="text-white"> or drag and drop here</span>
                            </p>

                        </div>

                        <input
                            type="file"
                            id="coverLetterUpload"
                            name="coverLetterUpload"
                            className="opacity-0 w-full h-full absolute inset-0 cursor-pointer"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:col-span-2">
                    <label htmlFor="employmentType" className="mb-2 text-sm font-normal text-white">
                        What is your preferred employment type?
                        <span className='text-[#FF3939] ml-1'>*</span>
                    </label>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center border border-[#404040] rounded-[5px] p-2">
                            <input
                                type="radio"
                                name="employmentType"
                                value="full-time"
                                className="form-radio accent-[#DAFF00]"
                            />
                            <span className="ml-2 text-white text-sm font-normal">Full Time</span>
                        </div>
                        <div className="flex items-center border border-[#404040] rounded-[5px] p-2">
                            <input
                                type="radio"
                                name="employmentType"
                                value="full-time"
                                className="form-radio accent-[#DAFF00]"
                            />
                            <span className="ml-2 text-white text-sm font-normal">Part Time</span>
                        </div>
                        <div className="flex items-center border border-[#404040] rounded-[5px] p-2">
                            <input
                                type="radio"
                                name="employmentType"
                                value="full-time"
                                className="form-radio accent-[#DAFF00]"
                            />
                            <span className="ml-2 text-white text-sm font-normal">Hourly / Contract basis</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:col-span-2">
                    <label htmlFor="employmentType" className="mb-2 text-sm font-normal text-white">
                        Do any of these job types apply?
                        <span className='text-[#FF3939] ml-1'>*</span>
                    </label>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center border border-[#404040] rounded-[5px] p-2">
                            <input
                                type="radio"
                                name="employmentType"
                                value="full-time"
                                className="form-radio accent-[#DAFF00]"
                            />
                            <span className="ml-2 text-white text-sm font-normal">Contract</span>
                        </div>
                        <div className="flex items-center border border-[#404040] rounded-[5px] p-2">
                            <input
                                type="radio"
                                name="employmentType"
                                value="full-time"
                                className="form-radio accent-[#DAFF00]"
                            />
                            <span className="ml-2 text-white text-sm font-normal">Temporary</span>
                        </div>
                        <div className="flex items-center border border-[#404040] rounded-[5px] p-2">
                            <input
                                type="radio"
                                name="employmentType"
                                value="full-time"
                                className="form-radio accent-[#DAFF00]"
                            />
                            <span className="ml-2 text-white text-sm font-normal">Internship</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:col-span-2">
                    <label htmlFor="startDate" className="mb-2 text-sm font-normal text-white">
                        When would you be available to start upon receiving an offer?
                    </label>
                    <input
                        type="text"
                        id="startDate"
                        name="startDate"
                        className="p-2 border border-[#404040] rounded-[5px] font-normal placeholder:text-sm focus:outline-none focus:border-[#404040]"
                        placeholder="Type here..."
                    />
                </div>

                <div className="flex flex-col md:col-span-2">
                    <label htmlFor="jobReferralSource" className="mb-2 text-sm font-normal text-white">
                        How did you hear about this job posting?
                    </label>
                    <input
                        type="text"
                        id="jobReferralSource"
                        name="jobReferralSource"
                        className="p-2 border border-[#404040] rounded-[5px] font-normal placeholder:text-sm focus:outline-none focus:border-[#404040]"
                        placeholder="Type here..."
                    />
                </div>

                <div className="flex flex-col md:col-span-2">
                    <Button className={"lg:flex gap-1"}>Submit Application
                        <img
                            src={sendArrow}
                            alt="Submit Arrow"
                            className="w-4 h-4"
                        />
                    </Button>
                </div>

            </div>
        </div>

    );
}

export default Application;
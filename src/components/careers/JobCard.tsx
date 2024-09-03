import {FiBriefcase, FiChevronRight, FiMapPin, FiMonitor} from "react-icons/fi";
import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";

function JobCard() {
    const [activeTab, setActiveTab] = useState("Overview");
    const [showMore, setShowMore] = useState(false);

    const tabs = [
        { name: "Overview" },
        { name: "Application" }
    ];
    return (
        <>
            <div className="max-w-[1240px] mx-auto p-[2px] rounded-[10px] bg-gradient-to-br from-[#9D9D9D] via-[#202020] to-[#202020] mt-12">
                <div className="bg-[#131313] rounded-[10px] p-10 space-y-8">
                    <div className="flex justify-between items-center w-[1060px] mx-auto">
                        <h2 className="text-[30px] font-bold leading-[30px]">Senior UX-UI Designer</h2>
                        <Button className={"hidden lg:flex"}>Apply Now <FiChevronRight size={18}/>
                        </Button>
                    </div>

                    <div className="flex items-center gap-[10px] w-[1060px] mx-auto">
                        <div
                            className="flex items-center bg-[#1B1B1B] text-[#DAFF00] px-[14px] py-[7px] rounded-[38px] w-[127px] h-[34px] space-x-[6px]">
                            <FiMapPin size={20}/>
                            <span className="text-[16px] font-[400]">Sri Lanka</span>
                        </div>

                        <div
                            className="flex items-center bg-[#1B1B1B] text-[#DAFF00] px-[14px] py-[7px] rounded-[38px] w-[127px] h-[34px] space-x-[6px]">
                            <FiBriefcase size={20}/>
                            <span className="text-[16px] font-[400]">Full time</span>
                        </div>

                        <div
                            className="flex items-center bg-[#1B1B1B] text-[#DAFF00] px-[14px] py-[7px] rounded-[38px] w-[127px] h-[34px] space-x-[6px]">
                            <FiMonitor size={20}/>
                            <span className="text-[16px] font-[400]">Full time</span>
                        </div>

                    </div>

                    <hr className="my-4 border-[#212121] w-[1060px] mx-auto"/>

                    <p className="text-[16px] text-[#C1C1C1] font-[300] leading-[22.4px] tracking-wide w-[1060px] mx-auto">
                        We’re looking to hire a full-time remote Senior UX/UI Designer to join our team and contribute
                        to
                        creating seamless user experiences for our projects. In this role, you will be responsible for
                        designing
                        fully responsive visuals from start to finish, ensuring a high-quality user experience.
                    </p>

                    <div className="w-[1060px] mx-auto">
                        <div
                            onClick={() => setShowMore(!showMore)}>{showMore ? "Show Less" : "Show More"} <FiChevronRight size={18}/>
                        </div>
                    </div>

                    {showMore && (
                        <>
                            <div className="flex items-center gap-[10px] w-[1056px] mx-auto">
                                <div className="flex">
                                    {tabs.map((tab) => (
                                        <div
                                            key={tab.name}
                                            onClick={() => setActiveTab(tab.name)}
                                            className={`cursor-pointer py-2 px-4 font-[16px] leading-[16px] transition ease-in-out ${
                                                activeTab === tab.name
                                                    ? 'text-white underline decoration-2 underline-offset-[16px] font-bold'
                                                    : 'text-[#C1C1C1] font-normal'
                                            }`}
                                        >
                                            {tab.name}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <div className="w-[1056px] border-t border-[#212121] mt-[-25px]"></div>
                            </div>

                            <div className="w-[1060px] mx-auto">
                                <h3 className="text-xl font-bold mb-2">Company Overview</h3>
                                <p className="mb-4">
                                    At Metaroon Labs, we are dedicated to delivering top-notch tech solutions that meet
                                    the unique
                                    needs of our clients. Our team of experienced professionals is passionate about
                                    utilizing the
                                    latest and most effective technology to create innovative and practical solutions.
                                    We are committed
                                    to excellence, collaboration, and continuous learning to provide the highest quality
                                    services to our
                                    clients.
                                </p>
                            </div>
                        </>
                    )}
                </div>

            </div>

        </>
    );
}

export default JobCard;
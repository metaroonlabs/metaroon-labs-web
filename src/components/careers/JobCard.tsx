import {FiBriefcase, FiChevronRight, FiMapPin, FiMonitor} from "react-icons/fi";
import {Button} from "@/components/ui/button.tsx";

function JobCard() {
    return (
        <>
            <div className="max-w-[1240px] mx-auto p-[2px] rounded-[10px] bg-gradient-to-br from-[#9D9D9D] via-[#202020] to-[#202020] mt-10">
                <div className="bg-[#131313] rounded-[10px] p-10 space-y-8">
                    <div className="flex justify-between items-center w-[1060px] mx-auto">
                        <h2 className="text-[30px] font-bold leading-[30px]">Senior UX-UI Designer</h2>
                        <Button className={"hidden lg:flex"}>Apply Now <FiChevronRight size={18}/>
                        </Button>
                    </div>

                    <div className="flex items-center gap-[10px] mb-4 w-[1060px] mx-auto">
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

                    <p className="mb-4 text-[16px] text-[#C1C1C1] font-[300] leading-[22.4px] tracking-[3%] w-[1060px] mx-auto">
                        We’re looking to hire a full-time remote Senior UX/UI Designer to join our team and contribute to
                        creating seamless user experiences for our projects. In this role, you will be responsible for designing
                        fully responsive visuals from start to finish, ensuring a high-quality user experience.
                    </p>

                </div>

            </div>

        </>
    );
}

export default JobCard;
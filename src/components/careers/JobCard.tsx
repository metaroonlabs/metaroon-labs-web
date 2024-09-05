import {FiChevronDown, FiChevronRight, FiChevronUp} from "react-icons/fi";
import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";

type JobCardProps = {
    title: string,
    description: string,
    badges: object[],
    heading1: string,
    description1: string,
    heading2: string,
    description2: string,
    description3: string,
    heading3: string,
    responsibilities: string[],
    heading4: string
    requirements: object[]
}
function JobCard({
                     title,
                     description,
                     badges,
                     heading1,
                     description1,
                     heading2,
                     description2,
                     description3,
                     heading3,
                     responsibilities,
                     heading4,
                     requirements

                }:JobCardProps) {

    const [activeTab, setActiveTab] = useState("Overview");
    const [showMore, setShowMore] = useState(false);

    const tabs = [
        { name: "Overview" },
        { name: "Application" }
    ];

    return (
        <>
            <div className="max-w-[350px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1240px] mx-auto p-[2px] rounded-[10px] bg-gradient-to-br from-[#9D9D9D] via-[#202020] to-[#202020] mt-[60px]">
                <div className="bg-[#131313] rounded-[10px] py-[35px] px-[30px] md:py-[40px] md:px-[70px] lg:py-[50px] lg:px-[90px]">
                    <div className="md:flex justify-between items-start w-[340px] md:w-[550px] lg:w-[765px] xl:w-[1060px] mx-auto mb-6 md:mb-0">
                        <h2 className="text-[25px] md:text-[30px] font-bold leading-[30px] mb-[30px]">{title}</h2>
                        <Button className={"lg:flex"}>Apply Now <FiChevronRight size={18}/>
                        </Button>
                    </div>

                    <div className="flex flex-wrap items-center gap-[10px] mx-auto mb-[30px]">
                        {badges.map((badge: any) => (
                            <div
                                className="flex items-center bg-[#1B1B1B] text-[#DAFF00] px-[14px] py-[7px] rounded-[38px] w-[127px] h-[34px] space-x-[6px]">

                                    {badge.icon}
                                    <span className="text-[16px] font-[400]">{badge.title}</span>

                            </div>
                        ))}

                    </div>

                    <hr className="my-4 border-[#212121] w-[1060px] mx-auto"/>

                    <p className="text-[16px] text-[#C1C1C1] font-[300] leading-[22.4px] tracking-wide mx-auto mt-[18px]">
                        {description}
                    </p>


                    {showMore && (
                        <>
                            <div className="flex items-center gap-[10px] w-[1056px] mx-auto mt-[60px]">
                                <div className="flex">
                                    {tabs.map((tab, index) => (
                                        <div
                                            key={tab.name}
                                            onClick={() => setActiveTab(tab.name)}
                                            className={`cursor-pointer py-2 ${index === 0 ? 'pl-0' : 'px-4'} font-[16px] leading-[16px] transition ease-in-out ${
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
                                <div className="w-[1056px] border-t border-[#212121] mt-[6px]"></div>
                            </div>

                            <div className="mt-[40px]">
                                <h3 className="text-xl font-bold mb-6">{heading1}</h3>
                                <p className="mb-4 text-[#C1C1C1] text-[16px] font-light">
                                    {description1}
                                </p>
                            </div>

                            <div className="mt-[40px]">
                                <h3 className="text-xl font-bold mb-6">{heading2}</h3>
                                <p className="mb-4 text-[#C1C1C1] text-[16px] font-light">
                                    {description2}
                                </p>
                                <p className="mb-4 text-[#C1C1C1] text-[16px] font-light">
                                    {description3}
                                </p>
                            </div>

                            <div className="mt-[40px]">
                                <h3 className="text-xl font-bold mb-6">{heading3}</h3>
                                <ul className="list-disc list-inside space-y-2">
                                    {responsibilities.map((responsibility, index) => (
                                        <li key={index} className="text-[#C1C1C1] text-[16px] font-light">
                                            {responsibility}
                                        </li>
                                    ))}

                                </ul>
                            </div>

                            <div className="mt-[40px]">
                                <h3 className="text-xl font-bold mb-6">{heading4}</h3>
                                <ul className="list-disc list-inside space-y-2">
                                    {requirements.map((requirement: any) => (
                                    <li>
                                        <strong className="text-white text-[16px] font-bold">{requirement.requirementsTitle}:  </strong>
                                        <span className="text-[#C1C1C1] text-[16px] font-light">{requirement.requirementDescription}</span>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    )}

                    <div className="mt-[45px]">
                        <div
                            className="flex cursor-pointer justify-end text-[16px] underline font-semibold gap-2"
                            onClick={() => setShowMore(!showMore)}>
                            {showMore ? "Show Less" : "Show More"}
                            {showMore ? <FiChevronUp size={18}/> : <FiChevronDown size={18}/>}
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default JobCard;
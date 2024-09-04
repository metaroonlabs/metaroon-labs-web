import {FiBriefcase, FiChevronDown, FiChevronRight, FiChevronUp, FiMapPin, FiMonitor} from "react-icons/fi";
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
            <div className="max-w-[350px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1240px] mx-auto p-[2px] rounded-[10px] bg-gradient-to-br from-[#9D9D9D] via-[#202020] to-[#202020] mt-[60px]">
                <div className="bg-[#131313] rounded-[10px] py-[35px] px-[30px] md:py-[40px] md:px-[70px] lg:py-[50px] lg:px-[90px]">
                    <div className="md:flex justify-between items-start w-[340px] md:w-[550px] lg:w-[765px] xl:w-[1060px] mx-auto mb-6 md:mb-0">
                        <h2 className="text-[25px] md:text-[30px] font-bold leading-[30px] mb-[30px]">Senior UX-UI Designer</h2>
                        <Button className={"lg:flex"}>Apply Now <FiChevronRight size={18}/>
                        </Button>
                    </div>

                    <div className="flex flex-wrap items-center gap-[10px] mx-auto mb-[30px]">
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

                    <p className="text-[16px] text-[#C1C1C1] font-[300] leading-[22.4px] tracking-wide mx-auto mt-[18px]">
                        We’re looking to hire a full-time remote Senior UX/UI Designer to join our team and contribute
                        to
                        creating seamless user experiences for our projects. In this role, you will be responsible for
                        designing
                        fully responsive visuals from start to finish, ensuring a high-quality user experience.
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
                                <h3 className="text-xl font-bold mb-6">Company Overview</h3>
                                <p className="mb-4 text-[#C1C1C1] text-[16px] font-light">
                                    At Metaroon Labs, we are dedicated to delivering top-notch tech solutions that meet
                                    the unique needs of our clients. Our team of experienced professionals is passionate
                                    about
                                    utilizing the latest and most effective technology to create innovative and
                                    practical solutions.
                                    We are committed to excellence, collaboration, and continuous learning to provide
                                    the highest quality
                                    services to our clients.
                                </p>
                            </div>

                            <div className="mt-[40px]">
                                <h3 className="text-xl font-bold mb-6">About the Role</h3>
                                <p className="mb-4 text-[#C1C1C1] text-[16px] font-light">
                                    We’re looking to hire a full-time remote Senior UX/UI Designer to join our team and
                                    contribute to creating seamless user experiences for our projects. In this role, you
                                    will be responsible for designing fully responsive visuals from start to finish,
                                    ensuring a high-quality user experience.
                                </p>
                                <p className="mb-4 text-[#C1C1C1] text-[16px] font-light">
                                    You'll have the opportunity to collaborate with a team of top-tier designers,
                                    focusing on teamwork, communication, and product quality. While aligning some of
                                    your
                                    working hours with the US team is important, the overall work schedule is flexible.
                                </p>
                            </div>

                            <div className="mt-[40px]">
                                <h3 className="text-xl font-bold mb-6">Responsibilities</h3>
                                <ul className="list-disc list-inside space-y-2">
                                    <li className="text-[#C1C1C1] text-[16px] font-light">Conduct thorough user research to understand needs, behaviors, and preferences
                                    </li>
                                    <li className="text-[#C1C1C1] text-[16px] font-light">Analyze data and insights to inform design decisions and improvements.</li>
                                    <li className="text-[#C1C1C1] text-[16px] font-light">Design intuitive, user-friendly interfaces that align with brand guidelines.
                                    </li>
                                    <li className="text-[#C1C1C1] text-[16px] font-light">Develop information architecture and user flows to optimize user experience.
                                    </li>
                                    <li className="text-[#C1C1C1] text-[16px] font-light">Create low-fidelity and high-fidelity wireframes and interactive prototypes to
                                        visualize, test, and iterate on designs.
                                    </li>
                                    <li className="text-[#C1C1C1] text-[16px] font-light">Plan and conduct usability testing to gather feedback and iterate designs.</li>
                                </ul>
                            </div>

                            <div className="mt-[40px]">
                                <h3 className="text-xl font-bold mb-6">Requirements</h3>
                                <ul className="list-disc list-inside space-y-2">
                                    <li className="text-[#C1C1C1] text-[16px] font-light">
                                        <strong className="text-white text-[16px] font-bold">Experience: </strong>
                                        +4 years of design experience with a strong emphasis on UI design. Experience at
                                        a startup agency is highly desirable!
                                    </li>
                                    <li className="text-[#C1C1C1] text-[16px] font-light">
                                        <strong className="text-white text-[16px] font-bold">UI Skills: </strong>
                                        Excel in creating scalable UI designs for desktop and mobile using Figma and
                                        Adobe Suite.
                                    </li>
                                    <li className="text-[#C1C1C1] text-[16px] font-light">
                                        <strong className="text-white text-[16px] font-bold">Web Mastery: </strong>
                                        Showcase advanced proficiency in web design, with a deep understanding of user interfaces,
                                        user experience principles, and the ability to create visually compelling and user-friendly
                                        websites.
                                    </li>
                                    <li className="text-[#C1C1C1] text-[16px] font-light">
                                        <strong className="text-white text-[16px] font-bold">Organization: </strong>
                                        Skilled in systemic design for team-wide use, covering components, typography, colors, grids,
                                        and margins.
                                    </li>
                                    <li className="text-[#C1C1C1] text-[16px] font-light">
                                        <strong className="text-white text-[16px] font-bold">Accountable: </strong>
                                        Take ownership, solve problems independently, and commit to project success.
                                    </li>
                                    <li className="text-[#C1C1C1] text-[16px] font-light">
                                        <strong className="text-white text-[16px] font-bold">Communication: </strong>
                                        Effective in team and client communication, presenting research and design concepts.
                                    </li>
                                    <li className="text-[#C1C1C1] text-[16px] font-light">
                                        <strong className="text-white text-[16px] font-bold">Language: </strong>
                                        Fluent in English for global collaboration.
                                    </li>
                                    <li className="text-[#C1C1C1] text-[16px] font-light">
                                        <strong className="text-white text-[16px] font-bold">User-Centric: </strong>
                                        Understand user and client needs, focusing on accessibility, scalability, and storytelling.
                                    </li>
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
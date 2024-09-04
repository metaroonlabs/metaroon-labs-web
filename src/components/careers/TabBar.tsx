import {useState} from "react";

function TabBar() {

    const [activeTab, setActiveTab] = useState("All Jobs");

    const tabs = [
        { name: "All Jobs" },
        { name: "Design & Creatives" },
        { name: "Engineering" },
        { name: "Marketing" },
        { name: "Product" },
    ];

    return (
        <>
            <div className="w-full flex justify-center pt-[100px]">
                <h1 className="text-[40px] font-bold leading-[40px]">Current Opportunities</h1>
            </div>

            <div className="w-full flex justify-center mt-[65px]">
                <div className="flex space-x-[10px] w-[691px] p-2 shadow-md">
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

            <div className="w-full flex justify-center">
                <div className="w-[691px] border-t border-[#212121] mt-[-2px]"></div>
            </div>
        </>
    );
}

export default TabBar;
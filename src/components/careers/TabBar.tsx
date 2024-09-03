import {useState} from "react";

function TabBar() {

    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <div className="w-full flex justify-center pt-20 pb-10">
                <h1 className="text-[40px] font-bold leading-[40px]">Current Opportunities</h1>
            </div>

            <div className="w-full flex justify-center">
                <div className="flex space-x-[10px] w-[691px] p-2 shadow-md">
                    {['All Jobs', 'Design & Creatives', 'Engineering', 'Marketing', 'Product'].map((tab, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveTab(index + 1)}
                            className={`cursor-pointer py-2 px-4 font-[16px] leading-[16px] transition ease-in-out ${
                                activeTab === index + 1
                                    ? 'text-white underline decoration-2 underline-offset-[16px] font-bold'
                                    : 'text-[#C1C1C1] font-normal'
                            }`}
                        >
                            {tab}
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
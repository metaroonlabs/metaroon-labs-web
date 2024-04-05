import {SectionTitle} from "@/components/SectionTitle.tsx";
import {OurVisionCard} from "@/components/OurVisionCard.tsx";
import {FiChevronRight} from "react-icons/fi";
import {Button} from "@/components/ui/button.tsx";

export function AboutUs() {
    const calendlyUrl = 'https://calendly.com/bathiyaw';

    return (
        <div className={"px-[25px] lg:px-[100px] 2xl:max-w-[1420px] mx-auto"} id={"about"}>
            <div className={"pt-[90px]"}></div>
            <SectionTitle primaryTitle={"Our Vision"} secondaryTitle={"About Us"} logoInclude={true} medium={true}/>
            <OurVisionCard/>
            <div className={"mt-10"}>
                <div
                    className={"bg-gradient-to-br from-[#9D9D9D] via-[#202020] to-[#202020] p-[2px] rounded-[10px] w-full"}>
                    <div
                        className={"font-bold w-full h-full rounded-[10px] bg-[#131313] flex flex-col items-center justify-center text-center p-10 relative overflow-hidden"}>
                        <img src="/assets/images/vision/grid.png" alt="grid"
                             className={"w-full absolute top-0 left-0 z-0 h-full"}/>
                        <div className={"mb-10 relative z-10 text-[20px] md:text-[28px] lg:text-[50px]"}>Book a call
                            with our <br/>co-founder
                        </div>
                        <Button onClick={() => window.open(calendlyUrl, '_blank')}
                                className={"w-[150px] my-2 relative z-10"}>Book a
                            call <FiChevronRight
                            size={18}/></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
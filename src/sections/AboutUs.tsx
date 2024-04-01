import {SectionTitle} from "@/components/SectionTitle.tsx";
import {OurVisionCard} from "@/components/OurVisionCard.tsx";

export function AboutUs() {

    return (
        <div className={"px-[25px] lg:px-[100px]"}>
            <SectionTitle primaryTitle={"Our Vision"} secondaryTitle={"About Us"} logoInclude={true}/>
            <OurVisionCard/>
        </div>
    )
}
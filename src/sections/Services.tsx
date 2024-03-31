import {ServicesCard} from "@/ServicesCard.tsx";
import {SectionTitle} from "@/components/SectionTitle.tsx";

export function Services() {

    return (
        <>
            <SectionTitle primaryTitle={"Services"} secondaryTitle={"What We do"}/>
            <div className={"flex flex-wrap gap-10 px-[100px] mt-10"}>
                <ServicesCard imgUrl={"/assets/images/services/web3.svg"} title={`Web 3.0`}
                              secondTitle={"Product and Services"}/>
                <ServicesCard imgUrl={"/assets/images/services/FullStack.svg"} title={"Web"}
                              secondTitle={"Development"}/>
                <ServicesCard imgUrl={"/assets/images/services/Cloud.svg"} title={"Cloud Solutions"}/>
                <ServicesCard imgUrl={"/assets/images/services/Mobile.svg"} title={"Mobile"}
                              secondTitle={"Applications"}/>
                <ServicesCard imgUrl={"/assets/images/services/AI.svg"} title={"AI and ML"}
                              secondTitle={"Innovations"}/>
                <ServicesCard imgUrl={"/assets/images/services/AR.svg"} title={"AR / VR Interactive"}
                              secondTitle={"Solutions"}/>
                <ServicesCard imgUrl={"/assets/images/services/game.png"} title={"Game Design"}
                              secondTitle={"& development"}/>
            </div>
        </>
    )
}
import {SectionTitle} from "@/components/SectionTitle.tsx";
import {PortfolioCard} from "@/components/PortfolioCard.tsx";
import {ServicesCard} from "@/ServicesCard.tsx";

export function Lab() {

    return (
        <>
            <SectionTitle primaryTitle={"Lorem Ipsum"} secondaryTitle={"Lorem ipsum lorem"} logoInclude={true}/>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-10 px-[100px]"}>
                <PortfolioCard title={"DeFi Kingdoms"} slogan={"Forge Fantasy, Finance Future"}
                               imgUrl={"/assets/images/portfolio/dfk.jpg"} tagOneTitle={"Gaming"}
                               tagTwoTitle={"Web 3.0"}/>
                <PortfolioCard title={"Draftables"} slogan={"The Ultimate Web3.0 Football Emulator"}
                               imgUrl={"/assets/images/portfolio/draftables.jpg"} tagOneTitle={"Gaming"}/>
            </div>
            <div className={"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 px-[100px] mt-10"}>
                <PortfolioCard title={"Roulettopia"} slogan={"Lorem ipsum dolor sit"}
                               imgUrl={"/assets/images/portfolio/roulettopia.jpg"} tagOneTitle={"Web 3.0"}
                               secondaryCard={true}/>
                <PortfolioCard title={"Scooby Doo & You"} slogan={"Scooby Doo & You Unleash the Mystery Within"}
                               imgUrl={"/assets/images/portfolio/scooby.jpg"} tagOneTitle={"AI & ML"}
                               secondaryCard={true}/>
                <PortfolioCard title={"Sport Aircraft"} slogan={"The Ultimate Web3.0 Football Emulator"}
                               imgUrl={"/assets/images/portfolio/sport-aircraft.jpg"} tagOneTitle={"Mobile"}
                               secondaryCard={true}/>
            </div>
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
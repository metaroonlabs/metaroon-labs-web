import {SectionTitle} from "@/components/SectionTitle.tsx";
import {PortfolioCard} from "@/components/PortfolioCard.tsx";

export function Lab() {

    return (
        <>
            <SectionTitle primaryTitle={"Lorem Ipsum"} secondaryTitle={"Lorem ipsum lorem"} logoInclude={true}/>
            <div className={"flex justify-center gap-10 px-[100px]"}>
                <PortfolioCard title={"DeFi Kingdoms"} slogan={"Forge Fantasy, Finance Future"}
                               imgUrl={"/assets/images/portfolio/dfk.jpg"} tagOneTitle={"Gaming"}
                               tagTwoTitle={"Web 3.0"}/>
                <PortfolioCard title={"Draftables"} slogan={"The Ultimate Web3.0 Football Emulator"}
                               imgUrl={"/assets/images/portfolio/draftables.jpg"} tagOneTitle={"Gaming"}/>
            </div>
            <div className={"flex justify-center gap-10 px-[100px] mt-10"}>
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
        </>
    )
}
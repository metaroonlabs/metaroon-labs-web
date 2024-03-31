import {SectionTitle} from "@/components/SectionTitle.tsx";
import {PortfolioCard} from "@/components/PortfolioCard.tsx";

export function Showcase() {

    return (
        <>
            <SectionTitle primaryTitle={"Showcase"} secondaryTitle={"Made in metaroon"} logoInclude={true}/>
            <div className={"px-100"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-10 px-[100px]"}>
                    <PortfolioCard title={"DeFi Kingdoms"} slogan={"Forge Fantasy, Finance Future"}
                                   imgUrl={"/assets/images/portfolio/dfk.jpg"} tagOneTitle={"Gaming"}
                                   tagTwoTitle={"Web 3.0"}/>
                    <PortfolioCard title={"Draftables"} slogan={"The Ultimate Web3.0 Football Emulator"}
                                   imgUrl={"/assets/images/portfolio/draftables.jpg"} tagOneTitle={"Gaming"}/>
                    <PortfolioCard title={"Critterpedia"} slogan={"Nature's Decode in your Pocket"}
                                   imgUrl={"/assets/images/portfolio/critterpedia.jpg"} tagOneTitle={"Mobile"}
                                   tagTwoTitle={"Web 3.0"}/>
                    <PortfolioCard title={"Insighto"} slogan={"Elevating Product Interaction"}
                                   imgUrl={"/assets/images/portfolio/insighto.jpg"} tagOneTitle={"Gaming"}
                                   tagTwoTitle={"AR/VR"}/>
                    <PortfolioCard title={"FPS Lounge"} slogan={"By Gamers, For Gamers"}
                                   imgUrl={"/assets/images/portfolio/fps.jpg"} tagOneTitle={"Web"}/>
                    <PortfolioCard title={"Shop Assist"} slogan={"By Gamers, For Gamers"}
                                   imgUrl={"/assets/images/portfolio/shop_assist.jpg"} tagOneTitle={"Web"}/>
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
                    <PortfolioCard title={"SkillForge"} slogan={"Empowering Your Workforce"}
                                   imgUrl={"/assets/images/portfolio/scooby.jpg"} tagOneTitle={"Mobile"}/>
                    <PortfolioCard title={"ChianWork"} slogan={"Lorem ipsum dolor sit amet consectetur. Tortor nulla."}
                                   imgUrl={"/assets/images/portfolio/sport-aircraft.jpg"} tagOneTitle={"Web 3.0"}
                                   secondaryCard={true}/>
                </div>
            </div>
        </>
    )
}
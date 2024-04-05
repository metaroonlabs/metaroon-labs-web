import {SectionTitle} from "@/components/SectionTitle.tsx";
import {PortfolioCard} from "@/components/PortfolioCard.tsx";

export function Showcase() {

    return (
        <div id={"projects"} className={"2xl:max-w-[1420px] mx-auto"}>
            <div className={"py-24"}></div>
            <SectionTitle primaryTitle={"Showcase"} secondaryTitle={"Made in metaroon"} logoInclude={true}/>
            <div className={"px-[25px] lg:px-[100px]"}>
                <div className={"grid grid-cols-1 sm:grid-cols-2 gap-10"}>
                    <PortfolioCard title={"DeFi Kingdoms"} slogan={"Forge Fantasy, Finance Future"}
                                   imgUrl={"/assets/images/portfolio/dfk.png"} tagOneTitle={"Gaming"}
                                   tagTwoTitle={"Web 3.0"}/>
                    <PortfolioCard title={"Draftables"} slogan={"The Ultimate Web3.0 Football Emulator"}
                                   imgUrl={"/assets/images/portfolio/draftables.png"} tagOneTitle={"Gaming"}
                                   tagTwoTitle={"Web 3.0"}/>
                    <PortfolioCard title={"Critterpedia"} slogan={"Nature's Decode in your Pocket"}
                                   imgUrl={"/assets/images/portfolio/critterpedia.png"} tagOneTitle={"Mobile"}
                                   tagTwoTitle={"Web 3.0"}/>
                    <PortfolioCard title={"Insighto"} slogan={"Elevating Product Interaction"}
                                   imgUrl={"/assets/images/portfolio/insighto.png"} tagOneTitle={"Gaming"}
                                   tagTwoTitle={"AR/VR"}/>
                    <PortfolioCard title={"FPS Lounge"} slogan={"By Gamers, For Gamers"}
                                   imgUrl={"/assets/images/portfolio/fps.png"} tagOneTitle={"Web"}/>
                    <PortfolioCard title={"Shop Assist"} slogan={"Elevating Shopify Shopping"}
                                   imgUrl={"/assets/images/portfolio/shop-assist.png"} tagOneTitle={"Web"}/>
                </div>
                <div className={"grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-10 mt-10"}>
                    <PortfolioCard title={"Plus Roulette"} slogan={"Blockchain Revolutionizes Gambling"}
                                   imgUrl={"/assets/images/portfolio/roulettopia.png"} tagOneTitle={"Web 3.0"}
                                   secondaryCard={true}/>
                    <PortfolioCard title={"Scooby Doo & You"} slogan={"Scooby Doo & You Unleash the Mystery Within"}
                                   imgUrl={"/assets/images/portfolio/scooby.png"} tagOneTitle={"AI & ML"}
                                   secondaryCard={true}/>
                    <PortfolioCard title={"Sport Aircraft"} slogan={"The Ultimate Web3.0 Football Emulator"}
                                   imgUrl={"/assets/images/portfolio/sport.png"} tagOneTitle={"Mobile"}
                                   secondaryCard={true}/>
                    <PortfolioCard title={"SkillForge"} slogan={"Empowering Your Workforce"}
                                   imgUrl={"/assets/images/portfolio/skillforge.png"} tagOneTitle={"Mobile"}
                                   secondaryCard={true}/>
                    <PortfolioCard title={"ChianWork"} slogan={"Empowering the Freelance Economy with Blockchain"}
                                   imgUrl={"/assets/images/portfolio/chainwork.png"} tagOneTitle={"Web 3.0"}
                                   secondaryCard={true}/>
                </div>
            </div>
        </div>
    )
}
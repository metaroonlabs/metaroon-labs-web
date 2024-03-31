import {SectionTitle} from "@/components/SectionTitle.tsx";
import {PortfolioCard} from "@/components/PortfolioCard.tsx";
import {ServicesCard} from "@/ServicesCard.tsx";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

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
            
            <SectionTitle primaryTitle={"Testimonials"} secondaryTitle={"What our clients say"} logoInclude={true}/>
            <div className="flex justify-center gap-10 px-[100px]">
                <div className="flex flex-col gap-8">
                    <TestimonialCard testimonial={"“Lorem ipsum dolor sit amet consectetur. Ac bibendum nunc egestas pulvinar sed. Non porta ultrices interdum duis gravida lectus. Vel morbi massa sit viverra nunc velit diam.i.”"} username={"Vytas Butkevicius"} designation={"Founder at Outframe"} imgUrl={"/assets/testimonial/avatar.jpg"} />
                    {/* <TestimonialCard testimonial={"“Lorem ipsum dolor sit amet consectetur. Ac bibendum nunc egestas pulvinar sed. Non porta ultrices interdum duis gravida lectus. Vel morbi massa sit viverra nunc velit diam.i.”"} username={"Vytas Butkevicius"} designation={"Founder at Outframe"} imgUrl={"/assets/testimonial/avatar.jpg"} /> */}
                </div>
                {/* Large card
                <TestimonialCard testimonial={"“Lorem ipsum dolor sit amet consectetur. Purus arcu curabitur rhoncus vitae felis metus in semper ut. Pretium maecenas nisl amet sapien mi. Eu dignissim fermentum urna iaculis dictum adipiscing in integer. Nisl ut a lectus commodo non viverra sodales nunc in. Ut ultricies sed proin in tellus ut aliquam cursus urna. Ut viverra sit iaculis dolor magna id sagittis sodales. Morbi nisl odio id eu felis nunc. Pellentesque ac integer ut venenatis. Sed lobortis enim ultrices ultricies ac nisl nullam commodo risus. Urna placerat egestas lectus eget tristique in tempor. Placerat felis sapien blandit vitae dui facilisi sed. Pulvinar amet purus lobortis rhoncus tempus id amet. Cursus risus ultrices orci sit. Volutpat aenean amet nisi dui nec pellentesque mauris habitant faucibus. Maecenas nisl tempor neque sed. Volutpat hendrerit egestas placerat.”"} username={"Vytas Butkevicius"} designation={"Founder at Outframe"} imgUrl={"/assets/testimonial/avatar.jpg"} largeCard={true} /> */}
            </div> 
        </>
    )
}
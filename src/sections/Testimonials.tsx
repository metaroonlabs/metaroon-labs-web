import {SectionTitle} from "@/components/SectionTitle.tsx";
import {TestimonialCard} from "@/components/testimonial-card.tsx";


export function Testimonials() {
    return (
        <>
            <SectionTitle primaryTitle={"Testimonials"} secondaryTitle={"What our clients say"} logoInclude={true}/>
            <div className="flex flex-col xl:flex-row justify-center gap-5 px-[25px] lg:px-[100px]">
                <div className="w-full xl:w-[52%] flex flex-col gap-5 justify-between">
                    <TestimonialCard
                        testimonial={"“Metaroon Labs has been a game-changer for my company. Their reasonable cost, frequent communication, and high efficiency has made them stand out from the competition, and it's been a pleasure to work with them!”"}
                        username={"Brian Ross"} designation={"CEO/Co Founder - Draft Labs"}
                        imgUrl={"/assets/images/testimonials/draft-labs.png"}/>
                    <TestimonialCard
                        testimonial={"“MetaRoon labs is a needle in a haystack, very often people find themselves disappointed with an outsourced dev team but this isn’t the case with MetaRoon. Their team is brilliant, kind and easy to work with.”"}
                        username={"Adin Zweigbaum"} designation={"Chief Innovation Officer - Wisdom Gaming"}
                        imgUrl={"/assets/images/testimonials/wisdom.png"}/>
                </div>
                <div className={"w-full xl:w-[48%]"}>
                    <TestimonialCard
                        testimonial={"“My journey with Metaroon Labs has been a remarkable experience, characterized by effortless collaboration and exceptional communication. Throughout the duration of gaming projects, ranging from six to eight months, their approach to project management stood out as both efficient and effective. What I particularly appreciated was their adeptness in straddling the domains of Web 3.0 and game development, a testament to their broad competencies and innovative edge. The team's ability to navigate complex projects with ease, while maintaining an open and responsive line of communication, significantly contributed to the seamless progression and success of our endeavors. Engaging with Metaroon Labs not only elevated the quality of our projects but also enriched my professional growth and understanding of cutting-edge technologies in the digital landscape.”"}
                        username={"Jared Belson"} designation={"Founder at EndFrame"}
                        imgUrl={"/assets/images/testimonials/logo.jpg"} largeCard={true}/>
                </div>
            </div>
        </>
    );
}
import {SectionTitle} from "@/components/SectionTitle.tsx";
import {TestimonialCard} from "@/components/testimonial-card.tsx";


export function Testimonials() {
    return (
        <div className={"relative"}>
            <img src="/assets/images/testimonials/left-light.png" alt="light"
                 className={"left-0 absolute w-[50%] top-0 xl:top-[-400px] z-0 lg:block hidden"}/>
            <img src="/assets/images/testimonials/right-light.png" alt="light"
                 className={"right-0 absolute w-[50%] z-0 lg:block hidden"}/>
            <div className={"2xl:max-w-[1420px] mx-auto relative z-10 "}>
                <SectionTitle primaryTitle={"Testimonials"} secondaryTitle={"What our clients say"} logoInclude={true}
                              medium={true}/>
                <div className="flex flex-col xl:flex-row justify-center gap-5 px-[25px] lg:px-[100px]">
                    <div className="w-full xl:w-[50%] flex flex-col gap-5 justify-between">
                        <TestimonialCard
                            testimonial={"“Metarune Labs has been a game-changer for my company. Their reasonable cost, frequent communication, and high efficiency has made them stand out from the competition, and it's been a pleasure to work with them!”"}
                            username={"Brian Ross"} designation={"CEO/Co Founder - Draft Labs"}
                            imgUrl={"/assets/images/testimonials/draft-labs.png"}/>
                        <TestimonialCard
                            testimonial={"“Metarune labs is a needle in a haystack, very often people find themselves disappointed with an outsourced dev team but this isn’t the case with Metarune. Their team is brilliant, kind and easy to work with.”"}
                            username={"Adin Zweigbaum"} designation={"Chief Innovation Officer - Wisdom Gaming"}
                            imgUrl={"/assets/images/testimonials/wisdom.png"}/>
                        <TestimonialCard
                            testimonial={"“We’ve had the pleasure of working with Metaroon Labs on three projects for our startup, and we couldn’t be more satisfied. Their expertise in tech development is impressive, as they handle every challenge seamlessly and frequently exceed our expectations. What we particularly appreciate is their ability to stay within budget while delivering outstanding results. Their communication is exceptional, providing detailed project reviews and timely updates throughout the process. As a business owner, nothing could be more important than great communication from the dev team”"}
                            username={"Muray Scarce"} designation={"Co-founder - Wandrlust by Critterpedia Pty Ltd"}
                            imgUrl={"/assets/images/testimonials/wandrlust.png"}/>
                    </div>
                    <div className="w-full xl:w-[50%] flex flex-col gap-5 justify-between">
                        <TestimonialCard
                            testimonial={"“Metarune has a strong and ever-evolving grasp of the latest technologies and are incredibly flexible, seamlessly navigating through complex challenges and embracing new opportunities with a positive attitude and professionalism. What impresses me most is their ability to tackle complex problems head-on, always ready to explore new frontiers in technology. But it’s not just their technical skills that stand out; their personable approach and sense of fun make every collaboration enjoyable. They’re the kind of team members who not only delivers great results but also makes the journey there equally rewarding.”"}
                            username={"Ian Anderson"} designation={"Founder - The Math Team"}
                            imgUrl={"/assets/images/testimonials/math-team.png"} largeCard={true}/>
                        <TestimonialCard
                            testimonial={"“Metarune Labs has been instrumental in developing the WandrLust Mobile Application and Ordinals Collection. Their exceptional technical expertise and dedication truly set them apart as an amazing team.”"}
                            username={"Nic Scarce"} designation={"Co-founder - Wandrlust by Critterpedia Pty Ltd"}
                            imgUrl={"/assets/images/testimonials/wandrlust.png"}/>
                        <TestimonialCard
                            testimonial={"“Metarune Labs has excelled in developing cutting-edge web3 technology and crafting an engaging website within an exceptionally tight timeline. Their remarkable self-motivation, responsiveness, professionalism, and ease of collaboration made working with them an absolute pleasure.”"}
                            username={"Cooper Kerns"} designation={"Project Manager/Advisor - BeatFarm"}
                            imgUrl={"/assets/images/testimonials/beatfarm.png"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
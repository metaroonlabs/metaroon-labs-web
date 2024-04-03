import {SectionTitle} from "@/components/SectionTitle.tsx";
import {TestimonialCard} from "@/components/testimonial-card.tsx";


export function Testimonials() {
    return (
        <>
            <SectionTitle primaryTitle={"Testimonials"} secondaryTitle={"What our clients say"} logoInclude={true}/>
            <div className="flex flex-col xl:flex-row justify-center gap-5 px-[25px] lg:px-[100px]">
                <div className="w-full xl:w-[52%] flex flex-col gap-5 justify-between">
                    <TestimonialCard
                        testimonial={"Metaroon Labs has been a game-changer for my company. Their reasonable cost, frequent communication, and high efficiency has made them stand out from the competition, and it's been a pleasure to work with them!"}
                        username={"Brian Ross"} designation={"CEO/Co Founder - Draft Labs"}
                        imgUrl={"/assets/images/testimonials/draft-labs.png"}/>
                    <TestimonialCard
                        testimonial={"MetaRoon labs is a needle in a haystack, very often people find themselves disappointed with an outsourced dev team but this isn’t the case with MetaRoon. Their team is brilliant, kind and easy to work with."}
                        username={"Adin Zweigbaum"} designation={"Chief Innovation Officer - Wisdom Gaming"}
                        imgUrl={"/assets/images/testimonials/wisdom.png"}/>
                </div>
                <div className={"w-full xl:w-[48%]"}>
                    <TestimonialCard
                        testimonial={"“Lorem ipsum dolor sit amet consectetur. Purus arcu curabitur rhoncus vitae felis metus in semper ut. Pretium maecenas nisl amet sapien mi. Eu dignissim fermentum urna iaculis dictum adipiscing in integer. Nisl ut a lectus commodo non viverra sodales nunc in. Ut ultricies sed proin in tellus ut aliquam cursus urna. Ut viverra sit iaculis dolor magna id sagittis sodales. Morbi nisl odio id eu felis nunc. Pellentesque ac integer ut venenatis. Sed lobortis enim ultrices ultricies ac nisl nullam commodo risus. Urna placerat egestas lectus eget tristique in tempor. Placerat felis sapien blandit vitae dui facilisi sed. Pulvinar amet purus lobortis rhoncus tempus id amet. Cursus risus ultrices orci sit. Volutpat aenean amet nisi dui nec pellentesque mauris habitant faucibus. Maecenas nisl tempor neque sed. Volutpat hendrerit egestas placerat.”"}
                        username={"Vytas Butkevicius"} designation={"Founder at Outframe"}
                        imgUrl={"/assets/images/testimonials/avatar.png"} largeCard={true}/>
                </div>
            </div>
        </>
    );
}
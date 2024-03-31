import { SectionTitle } from "@/components/SectionTitle.tsx";
import { TestimonialCard } from "../components/ui/TestimonialCard";


export function Lab() {
    return (
        <>
            <SectionTitle primaryTitle={"Testimonials"} secondaryTitle={"What our clients say"} logoInclude={true}/>
            <div className="flex justify-center gap-20 px-[100px]">
                <div className="flex flex-col gap-40">
                    <TestimonialCard testimonial={"“Lorem ipsum dolor sit amet consectetur. Ac bibendum nunc egestas pulvinar sed. Non porta ultrices interdum duis gravida lectus. Vel morbi massa sit viverra nunc velit diam.i.”"} username={"Vytas Butkevicius"} designation={"Founder at Outframe"} imgUrl={"/assets/testimonial/avatar.png"} />
                    <TestimonialCard testimonial={"“Lorem ipsum dolor sit amet consectetur. Ac bibendum nunc egestas pulvinar sed. Non porta ultrices interdum duis gravida lectus. Vel morbi massa sit viverra nunc velit diam.i.”"} username={"Vytas Butkevicius"} designation={"Founder at Outframe"} imgUrl={"/assets/testimonial/avatar.png"} />
                </div>
                <TestimonialCard testimonial={"“Lorem ipsum dolor sit amet consectetur. Purus arcu curabitur rhoncus vitae felis metus in semper ut. Pretium maecenas nisl amet sapien mi. Eu dignissim fermentum urna iaculis dictum adipiscing in integer. Nisl ut a lectus commodo non viverra sodales nunc in. Ut ultricies sed proin in tellus ut aliquam cursus urna. Ut viverra sit iaculis dolor magna id sagittis sodales. Morbi nisl odio id eu felis nunc. Pellentesque ac integer ut venenatis. Sed lobortis enim ultrices ultricies ac nisl nullam commodo risus. Urna placerat egestas lectus eget tristique in tempor. Placerat felis sapien blandit vitae dui facilisi sed. Pulvinar amet purus lobortis rhoncus tempus id amet. Cursus risus ultrices orci sit. Volutpat aenean amet nisi dui nec pellentesque mauris habitant faucibus. Maecenas nisl tempor neque sed. Volutpat hendrerit egestas placerat.”"} username={"Vytas Butkevicius"} designation={"Founder at Outframe"} imgUrl={"/assets/testimonial/avatar.png"} largeCard={true} />
            </div>            
        </>
    );
}
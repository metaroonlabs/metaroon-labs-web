import {Services} from "@/sections/Services.tsx";
import {Showcase} from "@/sections/Showcase.tsx";
import {Paragraph} from "@/sections/Paragraph.tsx";
import {Hero} from "@/sections/Hero.tsx";
import {Testimonials} from "@/sections/Testimonials.tsx";
import {Footer} from "@/sections/Footer.tsx";
import {AboutUs} from "@/sections/AboutUs.tsx";
import {Contact} from "@/sections/Contact.tsx";
import {DevTools} from "@/sections/DevTools.tsx";

export function Home() {

    return (
        <>
            <div>
                <Hero/>
                <div className={"text-white 2xl:max-w-[1420px] mx-auto"}>
                    <Services/>
                    <div className={"my-24 md:my-48"}></div>
                    <Paragraph/>
                    <Showcase/>
                    <div className={"my-24 md:my-48"}></div>
                    <Testimonials/>
                    <div className={"my-24 md:my-48"}></div>
                    <DevTools/>
                    <AboutUs/>
                    <div className={"my-24 md:my-48"}></div>
                    <Contact/>
                    <Footer/>
                    <div className={"my-10"}></div>
                </div>
            </div>
        </>
    )
}
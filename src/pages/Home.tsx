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
            <div className={"text-white 2xl:max-w-[1420px] mx-auto"}>
                <Hero/>
                <div className={"my-32 md:my-72"}></div>
                <Paragraph/>
                <div className={"my-32 md:my-72"}></div>
                <Services/>
                <div className={"my-32 md:my-72"}></div>
                <Showcase/>
                <div className={"my-32 md:my-72"}></div>
                <Testimonials/>
                <div className={"my-32 md:m-72"}></div>
                <DevTools/>
                <div className={"my-32 md:m-72"}></div>
                <AboutUs/>
                <div className={"my-32 md:m-72"}></div>
                <Contact/>
                <div className={"my-32 md:m-72"}></div>
                <Footer/>
                <div className={"my-10"}></div>

            </div>
        </>
    )
}
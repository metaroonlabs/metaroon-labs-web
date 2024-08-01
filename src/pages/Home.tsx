import {Services} from "@/sections/Services.tsx";
import {Showcase} from "@/sections/Showcase.tsx";
import {Hero} from "@/sections/Hero.tsx";
import {Testimonials} from "@/sections/Testimonials.tsx";
import {Footer} from "@/sections/Footer.tsx";
import {AboutUs} from "@/sections/AboutUs.tsx";
import {Contact} from "@/sections/Contact.tsx";
import {DevTools} from "@/sections/DevTools.tsx";
import {FloatingSocialIcons} from "@/components/ui/FloatingSocialIcons.tsx";

export function Home() {
    /*const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading process
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Adjust time based on your needs

        return () => clearTimeout(timer);
    }, []);*/

    return (
        <>
            <div>
                <Hero/>
                <div className={"text-white"}>
                    <div className={"pt-[100px] md:pt-[200px]"}></div>
                    <Services/>
                    <div className={"pt-[100px] md:pt-[200px]"}></div>
                    <Showcase/>
                    <div className={"pt-[100px] md:pt-[200px]"}></div>
                    <Testimonials/>
                    <div className={"pt-[100px] md:pt-[200px]"}></div>
                    <DevTools/>
                    <div className={"pt-[100px] md:pt-[200px]"}></div>
                    <AboutUs/>
                    <div className={"pt-[100px] md:pt-[200px]"}></div>
                    <div className={"w-full relative"}>
                        <img src="/assets/images/hero/grain-texture.png" alt="grain"
                             className={"absolute top-0 left-0 w-full h-full opacity-60 select-none pointer-events-none"}/>
                        <Contact/>
                        <Footer/>
                    </div>
                </div>
                <div className={"fixed right-5 bottom-10 lg:right-10 lg:bottom-8 z-20"}><FloatingSocialIcons/></div>
            </div>
        </>
    );
}
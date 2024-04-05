import {Services} from "@/sections/Services.tsx";
import {Showcase} from "@/sections/Showcase.tsx";
import {Hero} from "@/sections/Hero.tsx";
import {Testimonials} from "@/sections/Testimonials.tsx";
import {Footer} from "@/sections/Footer.tsx";
import {AboutUs} from "@/sections/AboutUs.tsx";
import {Contact} from "@/sections/Contact.tsx";
import {DevTools} from "@/sections/DevTools.tsx";

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
                    <Services/>
                    <div className={"md:my-48"}></div>
                    <Showcase/>
                    <div className={"md:my-48"}></div>
                    <Testimonials/>
                    <div className={"md:my-48"}></div>
                    <DevTools/>
                    <AboutUs/>
                    <div className={"my-[50px] md:my-48"}></div>
                    <div className={"w-full relative"}>
                        <img src="/assets/images/hero/grain-texture.png" alt="grain"
                             className={"absolute top-0 left-0 w-full h-full opacity-60"}/>
                        <Contact/>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
}
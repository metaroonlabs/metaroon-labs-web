import {Services} from "@/sections/Services.tsx";
import {Hero} from "@/sections/Hero.tsx";

export function Home() {

    return (
        <>
            <div className={"text-white"}>
                <Hero/>
                <Services/>                
            </div>
        </>
    )
}
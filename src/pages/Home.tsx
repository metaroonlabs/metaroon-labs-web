import {Services} from "@/sections/Services.tsx";
import {Showcase} from "@/sections/Showcase.tsx";

export function Home() {

    return (
        <>
            <div className={"text-white"}>
                <Services/>
                <Showcase/>
            </div>
        </>
    )
}
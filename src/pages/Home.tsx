import {Services} from "@/sections/Services.tsx";
import {Showcase} from "@/sections/Showcase.tsx";

export function Home() {

    return (
        <>
            <div className={"text-white"}>
                <Services/>
                <div className={"my-72"}></div>
                <Showcase/>
            </div>
        </>
    )
}
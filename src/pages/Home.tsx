import {Services} from "@/sections/Services.tsx";
import {Showcase} from "@/sections/Showcase.tsx";
import {Paragraph} from "@/sections/Paragraph.tsx";

export function Home() {

    return (
        <>
            <div className={"text-white"}>
                <div className={"my-72"}></div>
                <Paragraph/>
                <div className={"my-72"}></div>
                <Services/>
                <div className={"my-72"}></div>
                <Showcase/>
                <div className={"my-72"}></div>
            </div>
        </>
    )
}
import {Button} from "@/components/ui/button.tsx";
import {FiChevronRight} from "react-icons/fi";

function CallBox() {
    const calendlyUrl = 'https://calendly.com/bathiyaw';
    return (
        <div className={"max-w-[350px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1240px] mx-auto p-[2px] rounded-[10px] mt-10"} id={"about"}>
            <div className={"mt-10"}>
                <div
                    className={"bg-gradient-to-br from-[#9D9D9D] via-[#202020] to-[#202020] p-[2px] rounded-[10px] "}>
                    <div
                        className={"font-bold w-full h-full rounded-[10px] bg-[#131313] flex flex-col items-center justify-center text-center p-10 relative overflow-hidden"}>
                        <img src="/assets/images/vision/grid.png" alt="grid"
                             className={"w-full absolute top-0 left-0 z-0 h-full"}/>
                        <div className={"mb-10 relative z-10 text-[20px] md:text-[28px] lg:text-[50px] font-bold"}>Book a call with our co-founder
                        </div>
                        <Button onClick={() => window.open(calendlyUrl, '_blank')}
                                className={"w-[150px] my-2 relative z-10"}>Book a
                            call <FiChevronRight
                                size={18}/></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CallBox;
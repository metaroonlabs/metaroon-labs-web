import {FiChevronRight} from "react-icons/fi";
import {Button} from "@/components/ui/button.tsx";

export function Hero() {
    return (
        <div className={"relative min-h-[100vh] overflow-y-hidden"}>
            <div className={'min-h-screen flex flex-col justify-between'}>
                <div className={"relative z-20 flex flex-col justify-center items-center"}>
                    <div className={"flex flex-col justify-end gap-[44px] pt-[238px]"}>
                        <div className={"flex flex-col gap-[36px]"}>
                            <div className={"text-[70px] font-[700] leading-[70px] text-center"}>
                                We transform visionary <br/> ideas into reality
                            </div>
                            <div className={"font-[300] text-[20px] leading-[28px] tracking-[0.03em] text-center"}>
                                Empower your tech dreams with the cutting <br/> edge technology solutions.
                            </div>
                        </div>
                        <div className={"flex justify-center"}>
                            <Button className={"h-[46px] w-[200px]"}>Book a call <FiChevronRight size={18}/></Button>
                        </div>
                    </div>
                </div>
                <div className={"flex gap-[34px] justify-center pb-[60px]"}>
                    Our clients:
                    <div className={"flex h-[26px] w-[573px] justify-between gap-4 place-content-between"}>
                        <img src="/assets/images/hero/logo/airbnb-logo.png" alt="airbnb"
                             className={"w-[69px] h-[26px]"}/>
                        <img src="/assets/images/hero/logo/Company%20logo.png" alt="company"
                             className={"w-[101px] h-[26px]"}/>
                        <img src="/assets/images/hero/logo/asana-logo.png" alt="asana"
                             className={"w-[75.63px] h-[14.9px]"}/>
                        <img src="/assets/images/hero/logo/Group%202149.png" alt="group"
                             className={"w-[102.24px] h-[13.98px]"}/>
                        <img src="/assets/images/hero/logo/Press%20logo.png" alt="press"
                             className={"w-[88px] h-[21px]"}/>
                    </div>
                </div>
            </div>
            <img src="/assets/images/hero/Frame.png" alt="wave"
                 className={'absolute w-full bottom-0 z-10 opacity-[30%]'}/>
            <img src="/assets/images/hero/grain-texture.png" alt="grain"
                 className={'absolute w-full top-0 left-0 z-0 mix-blend-overlay'}/>
        </div>
    )
}
import {FiChevronRight} from "react-icons/fi";
import {Button} from "@/components/ui/button.tsx";
import ThreeScene from "@/components/WaveBackground.tsx";

export function Hero() {
    const calendlyUrl = 'https://calendly.com/bathiyaw';

    return (
        <div className={"relative min-h-[100vh] overflow-hidden"}>
            <img src="/assets/images/hero/bg-light.png" alt="bg-light"
                 className={"absolute top-0 left-[-200px] md:left-[12%] max-w-[670px] z-20"}/>
            <div className={'min-h-screen flex flex-col 2xl:max-w-[1420px] mx-auto'}>
                <div className={"relative z-20 flex flex-col justify-center items-center flex-1 mt-[50px]"}>
                    <div className={"flex flex-col justify-end gap-[44px]"}>
                        <div className={"flex flex-col gap-[20px]"}>
                            <div
                                className={"hidden sm:block text-[42px] sm:text-[70px] font-[700] leading-[45px] sm:leading-[70px] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] from-[70%] to-[#131313] to-[99%] px-[16px] sm:px-[25px] lg:px-[100px]"}>
                                We transform visionary <br/> ideas into reality
                            </div>
                            <div
                                className={"block sm:hidden text-[42px] sm:text-[70px] font-[700] leading-[45px] sm:leading-[70px] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] from-[41.84%] to-[#131313] to-[99%] px-[16px] sm:px-[25px] lg:px-[100px]"}>
                                We transform<br/>visionary ideas<br/> into reality
                            </div>
                            <div
                                className={"hidden sm:block  font-[300] text-[18px] sm:text-[20px] leading-[28px] px-[25px] lg:px-[100px] tracking-[0.03em] text-center"}>
                                Empower your tech dreams with the cutting <br/> edge technology solutions.
                            </div>
                            <div
                                className={"block sm:hidden  font-[300] text-[18px] sm:text-[20px] leading-[28px] px-[25px] lg:px-[100px] tracking-[0.03em] text-center"}>
                                Empower your tech dreams with<br/>the cutting edge technology <br/>solutions.
                            </div>
                        </div>
                        <div className={"flex justify-center"}>
                            <Button onClick={() => window.open(calendlyUrl, '_blank')} className={"h-[46px] w-[200px]"}>Book
                                a
                                call <FiChevronRight size={18}/></Button>
                        </div>
                    </div>
                </div>
                <div
                    className={"flex flex-col xl:flex-row gap-[24px] md:gap-[34px] justify-center items-center pb-[60px] text-[#BBBBBB] px-[25px] lg:px-[100px] z-20"}>
                    Our clients:
                    <div className={"flex flex-wrap justify-center items-center gap-4 lg:gap-8 place-content-between"}>
                        <img src="/assets/images/hero/logo/draft-labs.png" alt="draft-labs"
                             className={"w-[45px] xl:w-[76px]"}/>
                        <img src="/assets/images/hero/logo/wisdom.png" alt="wisdom"
                             className={"w-[86px] xl:w-[140px]"}/>
                        <img src="/assets/images/hero/logo/math-team.png" alt="the-math-team"
                             className={"w-[22px] xl:w-[35px]"}/>
                        <img src="/assets/images/hero/logo/sport.png" alt="sport-aircraft-seats"
                             className={"w-[71px] xl:w-[115px]"}/>
                        <img src="/assets/images/hero/logo/critterpedia.png" alt="critterpedia"
                             className={"w-[107px] xl:w-[173px]"}/>
                        <img src="/assets/images/hero/logo/fps.png" alt="FPS"
                             className={"w-[65px] xl:w-[106px]"}/>
                        <img src="/assets/images/hero/logo/acme.png" alt="acme"
                             className={"w-[18px] xl:w-[30px]"}/>
                    </div>
                </div>
            </div>
            <div className={'absolute w-full bottom-[-175px] z-10'}><ThreeScene/></div>
            <img src="/assets/images/hero/grain-texture.png" alt="grain"
                 className={'absolute w-full h-full top-0 left-0 z-10 mix-blend-overlay pointer-events-none select-none'}/>
        </div>
    )
}
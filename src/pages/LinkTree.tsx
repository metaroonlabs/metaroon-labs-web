import {useNavigate} from "react-router-dom";
import {LinktreeSocialMediaIcon} from "@/components/LinktreeSocialMediaIcon.tsx";

export function LinkTree() {
    const navigate = useNavigate()

    return (
        <div
            className={"w-full min-h-screen 2xl:max-w-[1420px] px-[16px] sm:px-[25px] lg:px-[100px] mx-auto flex items-center"}>
            <div className={"w-full flex justify-center gap-2"}>
                <div
                    className={"w-[46%] h-[612px] relative rounded-[8px] border-2 border-[#202020] text-[#FFFFFF] bg-[#131313] overflow-hidden cursor-pointer group hover:bg-[#FFFFFF] hover:text-[#1A1A1A] duration-500"}
                    onClick={() => navigate('/')}>
                    <div className={"font-medium text-[50px] pl-5 pt-5 w-[70%]"}>Explore Our Portfolio</div>
                    <img src="/assets/images/linktree/linktree.png" alt="linktree-img"
                         className={"w-full absolute bottom-[-150px] left-[-100px]"}/>
                    <img src="/assets/images/linktree/arrow.png" alt="arrow"
                         className={"absolute w-[40px] h-[40px] bottom-5 right-5 z-30"}/>
                </div>
                <div className={"w-[54%] flex flex-col gap-2"}>
                    <a href="tel:+94775555525"
                       className={"w-full flex-1 rounded-[8px] p-8  border-2 border-[#202020] bg-[#131313] overflow-hidden group hover:bg-[#FFFFFF] hover:text-[#1A1A1A] duration-500 relative"}>
                        <div className={"font-medium text-[24px] "}>Book a Call</div>
                        <img src="/assets/images/linktree/arrow.png" alt="arrow"
                             className={"absolute w-[40px] h-[40px] bottom-5 right-5 z-30"}/>
                    </a>
                    <div
                        className={"w-full flex-1 flex flex-col justify-between p-8 rounded-[8px] border-2 border-[#202020] bg-[#131313] overflow-hidden group hover:bg-[#FFFFFF] hover:text-[#1A1A1A] duration-500"}>
                        <div className={"font-medium text-[24px]"}>Connect with Telegram</div>
                        <div
                            className={"hidden items-center gap-10 text-[#1A1A1A] opacity-0 group-hover:flex group-hover:opacity-100 duration-500"}>
                            <a href="https://t.me/paragonthedev" target="_blank" rel="noopener noreferrer"
                               className={"flex items-center gap-3"}>
                                <img src="/assets/images/linktree/telegram.png" alt="telegram-icon"
                                     className={"w-[30px] h-[30px]"}/>@paragonthedev
                            </a>
                            <a href="https://t.me/MetaroonOps" target="_blank" rel="noopener noreferrer"
                               className={"flex items-center gap-3"}>
                                <img src="/assets/images/linktree/telegram.png" alt="telegram-icon"
                                     className={"w-[30px] h-[30px]"}/>@MetaroonOps
                            </a>
                        </div>
                    </div>
                    <div
                        className={"w-full flex-1 flex flex-col justify-between p-8 rounded-[8px] border-2 border-[#202020] bg-[#131313] overflow-hidden group hover:bg-[#FFFFFF] hover:text-[#1A1A1A] duration-500"}>
                        <div className={"font-medium text-[24px]"}>Social Media</div>
                        <div className={"flex gap-5"}>
                            <LinktreeSocialMediaIcon whiteIconUrl={"/assets/images/linktree/fb-white.png"}
                                                     blackIconUrl={"/assets/images/linktree/fb.png"}
                                                     linkUrl={"https://www.facebook.com/metarunelabs?mibextid=LQQJ4d"}/>
                            {/*<LinktreeSocialMediaIcon whiteIconUrl={"/assets/images/linktree/twitter-white.png"} blackIconUrl={"/assets/images/linktree/twitter.png"} linkUrl={""}/>*/}
                            <LinktreeSocialMediaIcon whiteIconUrl={"/assets/images/linktree/linkedin-white.png"}
                                                     blackIconUrl={"/assets/images/linktree/linkedin.png"}
                                                     linkUrl={"https://www.linkedin.com/company/metaroon-labs/"}/>
                            {/*<LinktreeSocialMediaIcon whiteIconUrl={"/assets/images/linktree/tiktok-white.png"} blackIconUrl={"/assets/images/linktree/tiktok.png"} linkUrl={""}/>*/}
                            <LinktreeSocialMediaIcon whiteIconUrl={"/assets/images/linktree/medium-white.png"}
                                                     blackIconUrl={"/assets/images/linktree/medium.png"}
                                                     linkUrl={"https://medium.com/@metarunelabs"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
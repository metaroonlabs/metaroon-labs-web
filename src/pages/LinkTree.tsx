import {useNavigate} from "react-router-dom";
import {LinktreeSocialMediaIcon} from "@/components/LinktreeSocialMediaIcon.tsx";

export function LinkTree() {
    const navigate = useNavigate()

    return (
        <div
            className={"w-full min-h-screen 2xl:max-w-[1420px] px-[16px] sm:px-[25px] lg:px-[100px] mx-auto flex items-center"}>
            <div className={"w-full lg:flex justify-center gap-2"}>
                <div
                    className={"w-full lg:w-[46%] h-[200px] mb-[8px] lg:h-[616px] lg:mb-0 relative rounded-[8px] border-2 border-[#202020] text-[#FFFFFF] bg-[#131313] overflow-hidden cursor-pointer group hover:bg-[#FFFFFF] hover:text-[#1A1A1A] duration-500"}
                    onClick={() => navigate('/')}>
                    <div className={"font-medium text-[24px] lg:text-[50px] pl-8 pt-8 lg:w-[90%]"}>Explore Our
                        Portfolio
                    </div>
                    <img src="/assets/images/linktree/linktree.png" alt="linktree-img"
                         className={"absolute w-[350px] right-[-100px] bottom-[-210px] sm:bottom-[-180px] lg:w-full lg:min-w-[450px] lg:bottom-[-150px] lg:left-[-100px] "}/>
                    <div className={"absolute bottom-5 px-5 flex lg:justify-end w-full"}>
                        <img src="/assets/images/linktree/arrow.png" alt="arrow"
                             className={"w-[40px] h-[40px] opacity-0 group-hover:opacity-100 duration-500 z-30"}/>
                    </div>
                </div>
                <div className={"w-full lg:w-[54%] flex flex-col gap-2"}>
                    <a href="tel:+94775555525"
                       className={"min-h-[200px] h-[200px] lg:h-auto w-full flex-1 rounded-[8px] p-8  border-2 border-[#202020] bg-[#131313] overflow-hidden group hover:bg-[#FFFFFF] hover:text-[#1A1A1A] duration-500 relative"}>
                        <div className={"font-medium text-[24px] "}>Book a Call</div>
                        <div className={"absolute bottom-5 left-0 px-5 flex lg:justify-end w-full"}>
                            <img src="/assets/images/linktree/arrow.png" alt="arrow"
                                 className={"w-[40px] h-[40px] opacity-0 group-hover:opacity-100 duration-500 z-30"}/>
                        </div>
                    </a>
                    <div
                        className={"min-h-[200px] h-[200px] lg:h-auto w-full flex-1 flex flex-col justify-between p-8 rounded-[8px] border-2 border-[#202020] bg-[#131313] overflow-hidden group hover:bg-[#FFFFFF] hover:text-[#1A1A1A] duration-500"}>
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
                        className={"min-h-[200px] h-[200px] lg:h-auto w-full flex-1 flex flex-col justify-between p-8 rounded-[8px] border-2 border-[#202020] bg-[#131313] overflow-hidden group hover:bg-[#FFFFFF] hover:text-[#1A1A1A] duration-500"}>
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
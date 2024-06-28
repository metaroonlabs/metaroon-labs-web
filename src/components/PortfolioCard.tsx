type PortfolioCardProps = {
    title: string;
    slogan: string;
    imgUrl: string;
    tagOneTitle: string;
    tagTwoTitle?: string;
    secondaryCard?: boolean;
}

export function PortfolioCard(props: PortfolioCardProps) {

    return (
        <div
            className="group rounded-[10px] overflow-hidden p-[2px] relative">
            <div
                className="absolute inset-0 bg-gradient-to-br from-[#9D9D9D] via-[#202020] to-[#202020] duration-500 group-hover:opacity-0"></div>
            <div
                className="absolute inset-0 bg-gradient-to-br from-[#9D9D9D] via-[#202020] to-[#9D9D9D] opacity-0 group-hover:opacity-100 duration-500"></div>
            <div
                className={`relative z-10 bg-background rounded-[10px] text-center overflow-hidden w-full flex flex-col justify-between h-full`}>
                <div className={"w-full sm:px-5 xl:px-10 pt-10 pb-5"}>
                    <div
                        className={`font-semibold ${props.secondaryCard ? "text-[16px] sm:text-[22px] xl:text-[34px]" : "text-[28px] lg:text-[40px]"}`}>{props.title}</div>
                    <div
                        className={`${props.secondaryCard ? "text-[12px] sm:text-[13px] xl:text-[16px]" : "text-[14px] lg:text-[20px]"} mb-8`}>{props.slogan}</div>
                    <div className={"flex gap-5 justify-center"}>
                        <div
                            className={"p-[1px] bg-gradient-to-b from-[#FFFFFF] to-[#999999] flex justify-center items-center rounded-[5px]"}>
                            <div
                                className={"bg-[#131313] w-full h-full flex items-center justify-center px-5 py-2 rounded-[5px] text-[12px]"}>
                                {props.tagOneTitle}
                            </div>
                        </div>
                        {props.tagTwoTitle ? <div
                                className={"p-[1px] bg-gradient-to-b from-[#FFFFFF] to-[#999999] flex justify-center items-center rounded-[5px]"}>
                                <div
                                    className={"bg-[#131313] w-full h-full flex items-center justify-center px-5 py-2 rounded-[5px] text-[12px]"}>
                                    {props.tagTwoTitle}
                                </div>
                            </div> :
                            <></>
                        }

                    </div>
                </div>
                <div className={"w-full"}>
                    <img src={props.imgUrl} alt="portfolio-img" className={"w-full"}/>
                </div>
            </div>
        </div>
    )
}
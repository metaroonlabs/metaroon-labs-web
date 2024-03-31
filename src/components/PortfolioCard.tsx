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
        <>
            <div
                className={`border-2 border-[#2C2C2C] rounded-[10px] text-center overflow-hidden w-full flex flex-col justify-between h-full`}>
                <div className={"w-full px-10 pt-10 pb-5"}>
                    <div
                        className={`font-semibold ${props.secondaryCard ? "text-[34px]" : "text-[40px]"}`}>{props.title}</div>
                    <div className={`${props.secondaryCard ? "text-[16px]" : "text-[20px]"} mb-8`}>{props.slogan}</div>
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
        </>
    )
}
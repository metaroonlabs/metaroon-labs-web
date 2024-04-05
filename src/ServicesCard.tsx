type ServicesCardProps = {
    imgUrl: string;
    title: string;
    secondTitle?: string;
}

export function ServicesCard(props: ServicesCardProps) {

    return (
        <div
            className="group max-w-[236px] w-full h-[200px] lg:h-[260px] rounded-[10px] overflow-hidden p-[2px] relative mx-auto">
            <div
                className="absolute inset-0 bg-gradient-to-br from-[#9D9D9D] via-[#202020] to-[#202020] duration-500 group-hover:opacity-0"></div>
            <div
                className="absolute inset-0 bg-gradient-to-br from-[#9D9D9D] via-[#202020] to-[#9D9D9D] opacity-0 group-hover:opacity-100 duration-500"></div>
            <div
                className="w-full h-full bg-[#131313] rounded-[10px] p-3 lg:p-5 flex flex-col justify-between items-center relative z-10">
                <div className={"relative w-[220px] h-[120px] flex justify-center items-center"}>
                    <img src="/assets/images/services/grid.png" alt="grid-img"
                         className={"hidden lg:flex w-[170px] absolute top-[-5px] left-[25px] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}/>
                    <div
                        className={"relative z-10 w-[80px] h-[80px] rounded-[10px]  shadow-[0_2.8px_2.2px_rgba(255,_255,_255,_0.034),_0_6.7px_5.3px_rgba(255,_255,_255,_0.048),_0_12.5px_10px_rgba(255,_255,_255,_0.06)] transition-shadow duration-300 group-hover:shadow-[0_2.8px_2.2px_rgba(255,_255,_255,_0.034),_0_6.7px_5.3px_rgba(255,_255,_255,_0.048),_0_12.5px_10px_rgba(255,_255,_255,_0.26)]"}>
                        <div
                            className={"absolute z-0 top-0 left-0 w-full h-full rounded-[10px] bg-gradient-to-br from-[#666666] via-[#272626] to-[#272626] opacity-100 group-hover:opacity-0 transition-opacity duration-300"}></div>
                        <div
                            className={"absolute z-0 top-0 left-0 w-full h-full rounded-[10px] bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[#ffffff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"}></div>
                        <div className={"relative z-10 p-[1px] w-full h-full"}>
                            <div
                                className={" bg-[#191919] rounded-[10px] w-full h-full flex justify-center items-center"}>
                                <img src={props.imgUrl} className={"w-[44px]"} alt="services-img"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={"relative z-10 w-full text-center text-[12px] lg:text-[16px] font-semibold"}>{props.title} {props.secondTitle &&
                    <>
                        <br/>
                        {props.secondTitle}
                    </>
                }
                </div>
            </div>
        </div>

    )
}
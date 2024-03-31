type ServicesCardProps = {
    imgUrl: string;
    title: string;
    secondTitle?: string;
}

export function ServicesCard(props: ServicesCardProps) {

    return (
        <div
            className={"max-w-[236px] w-full h-[200px] lg:h-[260px] bg-sky-500 rounded-[10px] overflow-hidden bg-gradient-to-br from-[#9D9D9D] via-[#202020] to-[#202020] p-[2px] group"}>
            <div
                className={"w-full h-full bg-[#131313] rounded-[10px] p-3 lg:p-5 flex flex-col justify-between items-center"}>
                <div className={"relative w-[220px] h-[120px] flex justify-center items-center"}>
                    {/* Initially hidden, only shown on hover */}
                    <img src="/assets/images/services/grid.png" alt="grid-img"
                         className={"hidden lg:flex w-[170px] absolute top-[-5px] left-[25px] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"}/>
                    <div
                        className={"relative z-10 w-[80px] h-[80px] bg-[#191919] rounded-[10px] p-[1px] bg-gradient-to-br from-[#666666] via-[#272626] to-[#272626] shadow-[0_2.8px_2.2px_rgba(255,_255,_255,_0.034),_0_6.7px_5.3px_rgba(255,_255,_255,_0.048),_0_12.5px_10px_rgba(255,_255,_255,_0.06)]"}>
                        <div className={"bg-[#191919] rounded-[10px] w-full h-full flex justify-center items-center"}>
                            <img src={props.imgUrl} className={"w-[44px]"} alt="services-img"/>
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
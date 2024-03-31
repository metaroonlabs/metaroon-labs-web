type SectionTitleProps = {
    primaryTitle: string;
    secondaryTitle: string;
    logoInclude?: boolean;
}

export function SectionTitle(props: SectionTitleProps) {

    return (
        <div className={"px-[25px] lg:px-[100px] relative mb-10"}>
            <div
                className="text-[45px] sm:text-[70px] md:text-[85px] lg:text-[115px] xl:text-[155px] 2xl:text-[190px] text-center font-semibold text-transparent bg-clip-text opacity-[15%] bg-gradient-to-b from-[#FFFFFF] from-20% to-[#131313] to-80%">
                {props.primaryTitle}
            </div>
            <div className={"absolute left-0 top-1 sm:top-2 md:top-4 xl:top-8 2xl:top-12 w-full flex justify-center"}>
                <div
                    className={"text-[14px] sm:text-[16px] md:text-[20px] lg:text-[30px] xl:text-[40px] 2xl:text-[50px] flex justify-center gap-4 md:gap-8 items-center py-1 sm:py-2 lg:py-3 px-2 sm:px-5 lg:px-10 backdrop-blur font-bold rounded-[5px] md:rounded-[10px] border border-white text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] from-40% to-[#131313] to-90%"}>
                    {
                        props.logoInclude &&
                        <img src="/assets/images/logo/logo-emblem.png"
                             className={"w-[14px] sm:w-[16px] md:w-[20px] lg:w-[30px] xl:w-[40px] 2xl:w-[50px]"}
                             alt="metaroon-logo"/>
                    }
                    {props.secondaryTitle}
                </div>
            </div>
        </div>
    )
}
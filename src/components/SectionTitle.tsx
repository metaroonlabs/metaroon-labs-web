type SectionTitleProps = {
    primaryTitle: string;
    secondaryTitle: string;
    logoInclude?: boolean;
    medium?: boolean;
    large?: boolean
}

export function SectionTitle(props: SectionTitleProps) {
    let textSizeClass = "text-[60px]";
    if (props.large) {
        textSizeClass = "text-[51px]";
    } else if (props.medium) {
        textSizeClass = "text-[56px]";
    }

    let secondaryTitlePosition = 'top-0'
    if (props.large) {
        secondaryTitlePosition = "top-[-5px]"
    } else if (props.medium) {
        secondaryTitlePosition = 'top-[-2px]'
    }

    return (
        <div className={"px-[5px] sm:px-[25px] lg:px-[100px] relative mb-10"}>
            <div
                className={`${textSizeClass} sm:text-[85px] md:text-[100px] lg:text-[115px] xl:text-[155px] 2xl:text-[170px] text-nowrap text-center font-semibold text-transparent bg-clip-text opacity-[15%] bg-gradient-to-b from-[#FFFFFF] from-20% to-[#131313] to-80%`}>
                {props.primaryTitle}
            </div>
            <div
                className={`absolute ${secondaryTitlePosition} left-0 sm:top-[-3px] md:top-0 xl:top-2 w-full flex justify-center`}>
                <div
                    className={"text-[18px] sm:text-[30px] md:text-[35px] xl:text-[40px] 2xl:text-[45px] flex justify-center gap-4 lg:gap-8 items-center py-1 md:py-2 lg:py-3 px-5 md:px-10 xl:px-14 backdrop-blur font-bold rounded-[5px] md:rounded-[10px] border border-white text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] from-40% to-[#131313] to-90%"}>
                    {
                        props.logoInclude &&
                        <img src="/assets/images/logo/logo-emblem.png"
                             className={"w-[18px] sm:w-[30px] lg:w-[30px] xl:w-[40px] 2xl:w-[45px]"}
                             alt="metarune-logo"/>
                    }
                    {props.secondaryTitle}
                </div>
            </div>
        </div>
    )
}
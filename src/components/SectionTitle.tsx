type SectionTitleProps = {
    primaryTitle: string;
    secondaryTitle: string;
    logoInclude?: boolean;
}

export function SectionTitle(props: SectionTitleProps) {

    return (
        <div className={"px-[100px] relative mb-10"}>
            <div
                className="text-[200px] text-center font-semibold text-transparent bg-clip-text opacity-[15%] bg-gradient-to-b from-[#FFFFFF] from-20% to-[#131313] to-80%">
                {props.primaryTitle}
            </div>
            <div className={"absolute left-0 top-12 w-full flex justify-center"}>
                <div
                    className={"flex justify-center gap-8 items-center py-3 px-10 backdrop-blur font-bold text-[50px] rounded-[10px] border border-white text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] from-40% to-[#131313] to-90%"}>
                    {
                        props.logoInclude &&
                        <img src="/assets/images/logo/logo-emblem.png" className={"w-[50px]"} alt="metaroon-logo"/>
                    }
                    {props.secondaryTitle}
                </div>
            </div>
        </div>
    )
}
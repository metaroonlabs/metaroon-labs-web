type LinktreeSocialmediaIconProps = {
    whiteIconUrl: string,
    blackIconUrl: string,
    linkUrl: string
}

export function LinktreeSocialMediaIcon({whiteIconUrl, blackIconUrl, linkUrl}: LinktreeSocialmediaIconProps) {

    const handleClick = () => {
        const shouldOpenInNewTab = linkUrl.startsWith('http') || linkUrl.startsWith('https');

        if (shouldOpenInNewTab) {
            window.open(linkUrl, '_blank');
        } else {
            window.location.href = linkUrl || '#';
        }
    }


    return (
        <div className={"relative group/item cursor-pointer"} onClick={handleClick}>
            <div
                className={"relative z-10 flex w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] border-[1px] border-[#4A4A4A] rounded-full justify-center items-center group-hover:border-[#C7C7C7] duration-500 group-hover/item:opacity-0"}>
                <img
                    className={"w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] absolute group-hover:opacity-0 transition-opacity duration-500"}
                    src={whiteIconUrl} alt="contact-img"/>
                <img
                    className={"w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500"}
                    src={blackIconUrl} alt="contact-img"/>
            </div>
            <div
                className={"absolute z-0 top-0 left-0 flex w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] bg-[#1A1A1A] rounded-full justify-center items-center opacity-0 duration-500 group-hover/item:opacity-100"}>
                <img
                    className={"w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] absolute transition-opacity duration-500"}
                    src={whiteIconUrl} alt="contact-img"/>
            </div>
        </div>
    )
}
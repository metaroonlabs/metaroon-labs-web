import {HiArrowNarrowRight} from "react-icons/hi";

type ContactCardProps = {
    whiteIconUrl: string;
    blackIconUrl: string;
    title: string;
    secondTitle: string;
    url: string;
    contactDetail?: string;
}
export function ContactCard(props: ContactCardProps) {
    const handleClick = () => {
        const shouldOpenInNewTab = props.url?.startsWith('http') || props.url?.startsWith('https');

        if (shouldOpenInNewTab) {
            window.open(props.url, '_blank');
        } else {
            window.location.href = props.url || '#';
        }
    };

    return (
        <div
            className={"group flex flex-col justify-between border-[1px] border-[#4A4A4A] rounded-[10px] xl:w-[300px] xl:h-[400px] md:w-[240px] md:h-[320px] sm:w-[210px] sm:h-[280px] w-[140px] h-[200px] p-[18px] sm:p-[25px] hover:bg-[#FFFFFF] hover:text-black cursor-pointer duration-500"}
            onClick={handleClick}
        >
            <div>
                <div
                    className={"flex w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px] border-[1px] border-[#4A4A4A] rounded-full justify-center items-center group-hover:border-[#C7C7C7] duration-500"}>
                    <img
                        className={"w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] md:w-[35px] md:h-[35px] absolute group-hover:opacity-0 transition-opacity duration-500"}
                        src={props.whiteIconUrl} alt="contact-img"/>
                    <img
                        className={"w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] md:w-[35px] md:h-[35px] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500"}
                        src={props.blackIconUrl} alt="contact-img"/>
                </div>
                <div
                    className={"mt-5 text-[14px] opacity-0 group-hover:opacity-100 duration-500 text-[#131313]"}>{props.contactDetail}</div>
            </div>
            <div className={'flex items-center justify-between bottom-0'}>
                <div
                    className={'text-[12px] sm:text-[14px] lg:text-[22px] md:text-[18px] font-[700] leading-[20px] sm:leading-[30.8px]'}>{props.title} {props.secondTitle &&
                    <>
                        <br/>
                        {props.secondTitle}
                    </>
                }</div>
                <div className={'flex-none'}>
                    <div
                        className={'flex justify-center items-center rounded-full lg:w-[50px] lg:h-[50px] md:w-[45px] md:h-[45px] sm:w-[32px] sm:h-[32px] w-[28px] h-[28px] bg-white group-hover:bg-black duration-500'}>
                        <HiArrowNarrowRight
                            className={'w-[20px] h-[20px] text-black group-hover:text-white duration-500'}/></div>
                </div>
            </div>
        </div>
    )
}
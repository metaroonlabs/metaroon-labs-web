import {HiArrowNarrowRight} from "react-icons/hi";

type ContactCardProps = {
    whiteIconUrl: string;
    blackIconUrl: string;
    title: string;
    secondTitle: string;
}
export function ContactCard(props: ContactCardProps) {
    return (
        <div
            className={"group flex flex-col justify-between border-[1px] border-[#4A4A4A] rounded-[10px] w-[300px] h-[400px] p-[25px] hover:bg-[#FFFFFF] hover:text-black hover:cursor-pointer"}>
            <div className={"flex w-[70px] h-[70px] border-[1px] border-[#4A4A4A] rounded-full justify-center items-center group-hover:border-[#C7C7C7]"}>
                <img className={"w-[35px] h-[35px] absolute group-hover:opacity-0 transition-opacity duration-500"} src={props.whiteIconUrl} alt="contact-img"/>
                <img className={"w-[35px] h-[35px] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500"} src={props.blackIconUrl} alt="contact-img"/>
            </div>
            <div className={'flex items-center justify-between bottom-0'}>
                <div className={'text-[22px] font-[700] leading-[30.8px]'}>{props.title} {props.secondTitle &&
                    <>
                        <br/>
                        {props.secondTitle}
                    </>
                }</div>
                <div className={'flex-none'}>
                    <div className={'flex justify-center items-center rounded-full w-[50px] h-[50px] bg-white group-hover:bg-black'}>
                        <HiArrowNarrowRight className={'w-[20px] h-[20px] text-black group-hover:text-white'}/></div>
                </div>
            </div>
        </div>
    )
}
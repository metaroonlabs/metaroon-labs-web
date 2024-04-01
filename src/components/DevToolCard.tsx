type DevToolCardProps = {
    imgUrl: string;
    title: string;
}
export function DevToolCard(props: DevToolCardProps) {
    return (
        <div className={"flex flex-col items-center gap-[18px]"}>
            <img src={props.imgUrl} alt="devTool-image" className={'h-[40px] w-[40px] grayscale-[100%] group-hover:grayscale-[50%]'}/>
            <div className={'opacity-0 group-hover:opacity-100 transition-opacity duration-500'}>{props.title}</div>
        </div>
    )
}
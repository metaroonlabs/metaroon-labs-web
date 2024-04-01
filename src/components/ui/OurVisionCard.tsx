import vision from "../../assets/vision/vision.svg";

type VisionCardProps = {
  slogan: string;
};

export function VisionCard(props: VisionCardProps) {
  return (
    <div className="max-w-[1240px] mx-auto relative h-[444px]">
      <div className="border-2 border-[#2C2C2C] rounded-[10px] overflow-hidden flex flex-row justify-between h-full">
        <div className="flex flex-col justify-center sm:px-5 xl:px-10 py-10 w-full">
          <div className="text-white font-extralight text-[23px] max-w-[700px] max-h-[224px]">{props.slogan}</div>
          <div className="flex gap-5 justify-center">
            <div className="p-[1px] bg-gradient-to-b from-[#FFFFFF] to-[#999999] flex justify-center items-center rounded-[5px]"></div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0">
          <img src={vision} alt="portfolio-img" className="max-w-[511px] max-h-[311px] object-contain" />
        </div>
      </div>
    </div>
  );
}

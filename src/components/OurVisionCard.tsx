import vision from "../../public/assets/images/vision/vision.svg";

export function OurVisionCard() {
    return (
        <div className="w-full relative">
            <div className={"bg-gradient-to-br from-[#9D9D9D] via-[#202020] to-[#202020] p-[2px] rounded-[10px]"}>
                <div
                    className="relative rounded-[10px] py-8 md:py-12 overflow-hidden flex flex-row justify-between w-full h-full bg-[#131313]">
                    <div className="flex flex-col justify-center px-5 md:px-10 xl:py-10 w-full">
                        <div
                            className="text-white font-extralight text-[16px] md:text-[18px] lg:text-[23px] w-full mb-[270px] sm:mb-0 sm:w-[62%] relative z-10">At
                            Metarune
                            Labs, we are dedicated to delivering top-notch tech solutions that meet the unique needs of
                            our
                            clients. Our team of experienced professionals is passionate about utilizing the latest and
                            most
                            effective technology to create innovative and practical solutions. We are committed to
                            excellence, collaboration, and continuous learning to provide the highest quality services
                            to
                            our clients.
                        </div>
                    </div>
                    <div className="absolute right-0 bottom-0 z-0">
                        <img src={vision} alt="portfolio-img" className="max-w-[511px] max-h-[311px] object-contain"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

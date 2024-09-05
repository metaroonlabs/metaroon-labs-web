function CareersHero() {

    return (
        <>
            <div className="relative min-h-[520px] overflow-hidden">
                <img
                    src="/assets/images/careers/image 45.jpg"
                    alt="careers-hero"
                    className="absolute top-0 left-0 w-full h-[520px] object-cover z-10"
                />
                <div
                    className="relative z-20 flex flex-col justify-center items-center min-h-[520px] 2xl:max-w-[1420px] mx-auto">
                    <div
                        className="flex flex-col justify-center gap-[26px] text-center px-[16px] sm:px-[25px] lg:px-[100px] mt-[50px]">
                        <h1 className="text-[38px] md:text-[50px] font-bold leading-[100%] text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#131313]">
                            Join Our Team at Metaroon Labs
                        </h1>
                        <p className="text-[20px] font-light leading-[140%] mt-[10px] md:mt-0">
                            Become a part of our team and help us build the future.
                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CareersHero
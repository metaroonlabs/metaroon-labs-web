function CareersHero() {
  return (
    <>
        <div className="relative min-h-screen overflow-hidden">
            <img
                src="/assets/images/careers/image 45.jpg"
                alt="careers-hero"
                className="absolute top-0 left-0 w-full h-full object-cover z-10"
            />
            <div className="relative z-20 flex flex-col justify-center items-center min-h-screen 2xl:max-w-[1420px] mx-auto">
                <div className="flex flex-col justify-center gap-[44px] text-center px-[16px] sm:px-[25px] lg:px-[100px]">
                    <h1 className="text-[50px] font-bold leading-[45px] sm:leading-[70px] text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#131313]">
                        Join Our Team at Metaroon Labs
                    </h1>
                    <p className="text-[20px] font-light leading-[45px] sm:leading-[70px]">
                        Become a part of our team and help us build the future.
                    </p>
                </div>
            </div>
        </div>

        <div className="w-full flex justify-center">
            <div className="flex space-x-4 rounded-lg p-2 shadow-md">
                <div className="py-2 px-4 bg-transparent text-white text-[16px] font-bold cursor-pointer">
                    All Jobs
                </div>
                <button className="py-2 px-4 text-[#C1C1C1] text-[16px] font-normal">
                    Design & Creatives
                </button>
                <button className="py-2 px-4 text-[#C1C1C1] text-[16px] font-normal">
                    Engineering
                </button>
                <button className="py-2 px-4 text-[#C1C1C1] text-[16px] font-normal">
                    Marketing
                </button>
                <button className="py-2 px-4 text-[#C1C1C1] text-[16px] font-normal">
                    Product
                </button>
            </div>
        </div>

    </>

  )
}

export default CareersHero
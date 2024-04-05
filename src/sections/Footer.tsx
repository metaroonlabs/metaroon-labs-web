export function Footer() {

    return (
        <div className={"2xl:max-w-[1420px] mx-auto"}>
            <div className={"mx-[25px] lg:mx-[100px] border-t border-[#4A4A4A] text-center"}>
                <div className={"flex flex-col gap-10 lg:flex-row justify-between lg:items-center mt-8"}>
                    <img src="/assets/images/logo/logo.png" alt="metaroon-logo" className={"w-[125px]"}/>
                    <div
                        className={"sm:flex text-start sm:text-center items-center flex-row sm:justify-between gap-5 md:gap-10"}>
                        <div>© 2024 metaroonlabs. All rights reserved.</div>
                        <a href="">Privacy-Policy</a>
                    </div>
                </div>
            </div>
            <div className="py-6"></div>
        </div>

    )
}
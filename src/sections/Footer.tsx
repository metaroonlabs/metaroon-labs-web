import AppConfig from "@/config/app-config.ts";

export function Footer() {

    return (
        <div className={"2xl:max-w-[1420px] mx-auto"}>
            <div className={"mx-[25px] lg:mx-[100px] border-t border-[#4A4A4A] text-center"}>
                <div className={"flex flex-col gap-5 sm:gap-10 lg:flex-row justify-between lg:items-center mt-8"}>
                    <div className={'flex items-end space-x-2'}>
                        <img src="/assets/images/logo/logo.png" alt="metaroon-logo" className={"w-[125px]"}/>
                        <div className={'text-[10px] sm:text-[12px] leading-3 opacity-[60%]'}>{AppConfig.version}</div>
                    </div>
                    <div
                        className={"flex items-center flex-row justify-between gap-2 sm:gap-5 md:gap-10 text-[10px] sm:text-[16px]"}>
                        <div>© 2024 metaroonlabs. All rights reserved.</div>
                        <a href="">Privacy-Policy</a>
                    </div>
                </div>
            </div>
            <div className="py-6"></div>
        </div>

    )
}
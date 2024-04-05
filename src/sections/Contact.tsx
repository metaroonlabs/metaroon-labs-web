import {ContactCard} from "@/components/ContactCard.tsx";

export function Contact() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={"relative overflow-hidden pt-[90px]"}>
            <img src="/assets/images/contact/left-light.png" alt="light"
                 className={"absolute left-0 w-[20%] top-24 min-w-[250px]"}/>
            <div id={"contact"} className={"lg:p-[100px] p-[25px] h-full 2xl:max-w-[1420px] mx-auto"}>
                <div
                    className={'flex flex-col md:flex-row items-center md:items-start justify-between gap-[50px] md:gap-0 relative'}>
                    <div>
                        <div
                            className={'flex-none text-[36px] lg:text-[50px] md:text-[40px] font-[700] leading-[50px] text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] from-[41.84%] to-[#131313] to-[99%]'}>Contact
                            us
                        </div>
                    </div>
                    <div
                        className="absolute bottom-0 left-0 cursor-pointer group w-[78px] hidden md:block">
                        <img src="/assets/images/contact/up-to-top-btn.png"
                             alt="up-arrow"
                             className="absolute bottom-0 left-0 w-[78px] transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                             onClick={scrollToTop}
                        />
                        <img src="/assets/images/contact/up-to-top-btn-hover.png"
                             alt="up-arrow"
                             className="absolute bottom-0 left-0 w-[78px] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                             onClick={scrollToTop}
                        />
                    </div>

                    <div className={'grid grid-cols-2 gap-3 sm:gap-[20px] w-full sm:md:w-auto'}>
                        <ContactCard whiteIconUrl={'/assets/images/contact/phone.png'}
                                     blackIconUrl={'/assets/images/contact/phone-black.png'} title={'Speak on'}
                                     secondTitle={'the Phone'} url="tel:+94775555525" contactDetail={"+94775555525"}/>
                        <ContactCard whiteIconUrl={'/assets/images/contact/mail-03.png'}
                                     blackIconUrl={'/assets/images/contact/mail-black.png'} title={'Send us'}
                                     secondTitle={'an email'} url="mailto:contact@metaroonlabs.com"
                                     contactDetail={"contact@metaroonlabs.com"}/>
                        <ContactCard whiteIconUrl={'/assets/images/contact/linkedln.png'}
                                     blackIconUrl={'/assets/images/contact/linkedln-black.png'} title={'Follow us'}
                                     secondTitle={'on LinkedIn'}
                                     url={"https://www.linkedin.com/company/metaroon-labs/"}/>
                        <ContactCard whiteIconUrl={'/assets/images/contact/telegram.png'}
                                     blackIconUrl={'/assets/images/contact/telegram-black.png'} title={'Connect us'}
                                     secondTitle={'on Telegram'} url="tg://resolve?domain=@paragonthedev"
                                     contactDetail={"@paragonthedev"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
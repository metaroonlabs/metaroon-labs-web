import {ContactCard} from "@/components/ContactCard.tsx";

export function Contact() {
    return (
        <div className={"lg:p-[100px] p-[25px]"}>
            <div className={'flex flex-col md:flex-row items-center md:items-start justify-between gap-[50px] md:gap-0'}>
                <div className={''}>
                    <div
                        className={'flex-none text-[28px] lg:text-[50px] md:text-[40px] font-[700] leading-[50px] text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] from-[41.84%] to-[#131313] to-[99%]'}>Contact
                        US
                    </div>
                </div>
                <div className={'grid grid-cols-2 grid-flow-row gap-[20px]'}>
                    <ContactCard whiteIconUrl={'/assets/images/contact/phone.png'}
                                      blackIconUrl={'/assets/images/contact/phone-black.png'} title={'Speak on'}
                                      secondTitle={'the Phone'}/>
                    <ContactCard whiteIconUrl={'/assets/images/contact/mail-03.png'}
                                      blackIconUrl={'/assets/images/contact/mail-black.png'} title={'Send us'}
                                      secondTitle={'an email'}/>
                    <ContactCard whiteIconUrl={'/assets/images/contact/linkedln.png'}
                                      blackIconUrl={'/assets/images/contact/linkedln-black.png'} title={'Follow us'}
                                      secondTitle={'on LinkedIn'}/>
                    <ContactCard whiteIconUrl={'/assets/images/contact/telegram.png'}
                                      blackIconUrl={'/assets/images/contact/telegram-black.png'} title={'Join us'}
                                      secondTitle={'on Telegram'}/>
                </div>
            </div>
        </div>
    )
}
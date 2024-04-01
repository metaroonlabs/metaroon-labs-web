import {Button} from "@/components/ui/button.tsx";
import {ContactCard} from "@/components/ContactCard.tsx";

export function Contact() {
    return (
        <div>
            <div className={'grid grid-rows-2 grid-flow-col p-[100px]'}>
                <div>
                    <div
                        className={'text-[50px] font-[700] leading-[50px] text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] from-[41.84%] to-[#131313] to-[99%]'}>Contact
                        US
                    </div>
                </div>
                <div className={"flex items-end"}>
                    <Button variant="outline" className={"w-[78px] h-[159px] border-[2px] rounded-[110px]"}><img
                        src="/assets/images/contact/up-arrow.png" alt="up-arrow" className={'h-24'}/></Button>
                </div>
                <div className={'row-span-2 grid grid-rows-2 grid-flow-col gap-[30px] justify-end'}>
                    <div><ContactCard whiteIconUrl={'/assets/images/contact/phone.png'} blackIconUrl={'/assets/images/contact/phone-black.png'} title={'Speak on'} secondTitle={'the Phone'}/></div>
                    <div><ContactCard whiteIconUrl={'/assets/images/contact/mail-03.png'} blackIconUrl={'/assets/images/contact/mail-black.png'} title={'Send us'} secondTitle={'an email'}/></div>
                    <div><ContactCard whiteIconUrl={'/assets/images/contact/linkedln.png'} blackIconUrl={'/assets/images/contact/linkedln-black.png'} title={'Follow us'} secondTitle={'on LinkedIn'}/></div>
                    <div><ContactCard whiteIconUrl={'/assets/images/contact/telegram.png'} blackIconUrl={'/assets/images/contact/telegram-black.png'} title={'Join us'} secondTitle={'on Telegram'}/></div>
                </div>
            </div>
        </div>
    )
}
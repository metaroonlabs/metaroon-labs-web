import {useState} from "react";
import {IoChevronDown, IoChevronUp} from "react-icons/io5";

export function FloatingSocialIcons() {
    const [showAll, setShowAll] = useState(false);

    const handleCollapseClick = () => {
        setShowAll(!showAll)
    }
    const handleSocialIconClick = (url: string) => {
        if (url.startsWith('tel:')) {
            window.location.href = url;
        } else if (url.startsWith('mailto:')) {
            window.location.href = url;
        } else if (url.startsWith('https://www.linkedin.com')) {
            window.open(url, '_blank');
        } else if (url.startsWith('@')) {
            const telegramUrl = `https://t.me/${url.substring(1)}`;
            window.open(telegramUrl, '_blank');
        }
    };


    return (
        <>
            <div className="flex-col hidden md:flex">
                <div
                    className={"cursor-pointer w-[40px] flex justify-center items-center rounded-full border border-[#4A4A4A] h-[40px] group hover:border-white bg-[#121212] hover:bg-white duration-500 relative mb-3"}
                    onClick={(e) => {
                        e.preventDefault();
                        handleSocialIconClick('tel:+94775555525');
                    }}>
                    <img src="/assets/images/contact/phone.png" alt="phone"
                         className="absolute w-[20px] opacity-100 group-hover:opacity-0 transition-opacity duration-500"/>
                    <img src='/assets/images/contact/phone-black.png' alt="phone"
                         className="absolute w-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                </div>
                <div
                    className={"cursor-pointer w-[40px] flex justify-center items-center rounded-full border border-[#4A4A4A] h-[40px] group hover:border-white bg-[#121212] hover:bg-white relative mb-3"}
                    onClick={(e) => {
                        e.preventDefault();
                        handleSocialIconClick('mailto:contact@metaroonlabs.com');
                    }}>
                    <img src="/assets/images/contact/mail-03.png" alt="email"
                         className="absolute w-[20px] opacity-100 group-hover:opacity-0 transition-opacity duration-500"/>
                    <img src="/assets/images/contact/mail-black.png" alt="email"
                         className="absolute w-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                </div>
                <div
                    className={"cursor-pointer w-[40px] flex justify-center items-center rounded-full border border-[#4A4A4A] h-[40px] group hover:border-white bg-[#121212] hover:bg-white relative mb-3"}
                    onClick={(e) => {
                        e.preventDefault();
                        handleSocialIconClick('https://www.linkedin.com/company/metaroon-labs/');
                    }}>
                    <img src="/assets/images/contact/linkedln.png" alt="linkedin"
                         className="absolute w-[20px] opacity-100 group-hover:opacity-0 transition-opacity duration-500"/>
                    <img src="/assets/images/contact/linkedln-black.png" alt="linkedin"
                         className="absolute w-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                </div>
                <div
                    className={"cursor-pointer w-[40px] flex justify-center items-center rounded-full border border-[#4A4A4A] h-[40px] group hover:border-white bg-[#121212] hover:bg-white relative mb-3"}
                    onClick={(e) => {
                        e.preventDefault();
                        handleSocialIconClick('@paragonthedev');
                    }}>
                    <img src="/assets/images/contact/telegram.png" alt="telegram"
                         className="absolute w-[20px] opacity-100 group-hover:opacity-0 transition-opacity duration-500"/>
                    <img src="/assets/images/contact/telegram-black.png" alt="telegram"
                         className="absolute w-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                </div>
            </div>


            <div className="flex flex-col md:hidden">
                {showAll &&
                    <div
                        className={"cursor-pointer w-[40px] flex justify-center items-center rounded-full border border-[#4A4A4A] h-[40px] group hover:border-white bg-[#121212] hover:bg-white duration-500 relative mb-3"}
                        onClick={handleCollapseClick}
                    >
                        <IoChevronDown size={20} className={"group-hover:text-black duration-500"}/>
                    </div>
                }
                {!showAll &&
                    <div
                        className={"cursor-pointer w-[40px] flex justify-center items-center rounded-full h-[40px] group duration-500 relative"}
                        onClick={handleCollapseClick}
                    >
                        <IoChevronUp size={20}/>
                    </div>
                }
                <div
                    className={"cursor-pointer w-[40px] flex justify-center items-center rounded-full border border-[#4A4A4A] h-[40px] group hover:border-white bg-[#121212] hover:bg-white duration-500 relative mb-3"}
                    onClick={(e) => {
                        e.preventDefault();
                        if (showAll) {
                            handleSocialIconClick('tel:+94775555525');
                        } else {
                            setShowAll(true);
                        }
                    }}
                >
                    <img src="/assets/images/contact/phone.png" alt="phone"
                         className="absolute w-[20px] opacity-100 group-hover:opacity-0 transition-opacity duration-500"/>
                    <img src='/assets/images/contact/phone-black.png' alt="phone"
                         className="absolute w-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                </div>
                {showAll && (
                    <>
                        <div
                            className={"cursor-pointer w-[40px] flex justify-center items-center rounded-full border border-[#4A4A4A] h-[40px] group hover:border-white bg-[#121212] hover:bg-white relative mb-3"}
                            onClick={(e) => {
                                e.preventDefault();
                                handleSocialIconClick('mailto:contact@metaroonlabs.com');
                            }}
                        >
                            <img src="/assets/images/contact/mail-03.png" alt="email"
                                 className="absolute w-[20px] opacity-100 group-hover:opacity-0 transition-opacity duration-500"/>
                            <img src="/assets/images/contact/mail-black.png" alt="email"
                                 className="absolute w-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                        </div>
                        <div
                            className={"cursor-pointer w-[40px] flex justify-center items-center rounded-full border border-[#4A4A4A] h-[40px] group hover:border-white bg-[#121212] hover:bg-white relative mb-3"}
                            onClick={(e) => {
                                e.preventDefault();
                                handleSocialIconClick('https://www.linkedin.com/company/metaroon-labs/');
                            }}
                        >
                            <img src="/assets/images/contact/linkedln.png" alt="linkedin"
                                 className="absolute w-[20px] opacity-100 group-hover:opacity-0 transition-opacity duration-500"/>
                            <img src="/assets/images/contact/linkedln-black.png" alt="linkedin"
                                 className="absolute w-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                        </div>
                        <div
                            className={"cursor-pointer w-[40px] flex justify-center items-center rounded-full border border-[#4A4A4A] h-[40px] group hover:border-white bg-[#121212] hover:bg-white relative mb-3"}
                            onClick={(e) => {
                                e.preventDefault();
                                handleSocialIconClick('@paragonthedev');
                            }}
                        >
                            <img src="/assets/images/contact/telegram.png" alt="telegram"
                                 className="absolute w-[20px] opacity-100 group-hover:opacity-0 transition-opacity duration-500"/>
                            <img src="/assets/images/contact/telegram-black.png" alt="telegram"
                                 className="absolute w-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
import {ServicesCard} from "@/ServicesCard.tsx";
import {SectionTitle} from "@/components/SectionTitle.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useEffect, useState} from "react";

export function Services() {
    const [isServices, setIsServices] = useState(true);
    const [transitionClass, setTransitionClass] = useState('');

    useEffect(() => {
        // Trigger the enter animation
        setTransitionClass('fade-enter');
        const timer = setTimeout(() => {
            setTransitionClass('fade-enter-active');
        }, 10); // start animation shortly after render

        return () => clearTimeout(timer);
    }, [isServices]); // This effect runs every time isServices changes

    const handleServicesBtn = () => {
        // Start the exit animation
        setTransitionClass('fade-exit');
        setTimeout(() => {
            setIsServices(!isServices);
        }, 300); // Wait for the exit animation to complete before changing the content
    };

    return (
        <div id={"services"}>
            <div className={"py-24"}></div>
            <SectionTitle primaryTitle={"Services"} secondaryTitle={"What We do"}/>
            <div className={"px-[25px] lg:px-[100px] mt-10"}>
                <div className={"flex justify-center gap-5 mb-10"}>
                    <div className={"w-[170px] p-[1px] bg-gradient-to-b from-[#FFFFFF] to-[#999999] rounded-[5px]"}>
                        <Button variant={`${!isServices ? "secondary" : "default"}`}
                                className={`${isServices && "bg-[#131313] hover:bg-[#1C1C1C]"} w-full h-full`}
                                onClick={handleServicesBtn}>Services</Button>
                    </div>
                    <div className={"w-[170px] p-[1px] bg-gradient-to-b from-[#FFFFFF] to-[#999999] rounded-[5px]"}>
                        <Button variant={`${isServices ? "secondary" : "default"}`}
                                className={`${!isServices && "bg-[#131313] hover:bg-[#1C1C1C]"} w-full h-full`}
                                onClick={handleServicesBtn}>Industry expertise</Button>
                    </div>
                </div>
                <div className={transitionClass}>
                    {isServices ? <div
                            className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 lg:gap-10 "}>
                            <ServicesCard imgUrl={"/assets/images/services/web3.svg"} title={`Web 3.0`}
                                          secondTitle={"Product and Services"}/>
                            <ServicesCard imgUrl={"/assets/images/services/FullStack.svg"} title={"Web"}
                                          secondTitle={"Development"}/>
                            <ServicesCard imgUrl={"/assets/images/services/Cloud.svg"} title={"Cloud Solutions"}/>
                            <ServicesCard imgUrl={"/assets/images/services/Mobile.svg"} title={"Mobile"}
                                          secondTitle={"Applications"}/>
                            <ServicesCard imgUrl={"/assets/images/services/AI.svg"} title={"AI and ML"}
                                          secondTitle={"Innovations"}/>
                            <ServicesCard imgUrl={"/assets/images/services/AR.svg"} title={"AR / VR Interactive"}
                                          secondTitle={"Solutions"}/>
                            <ServicesCard imgUrl={"/assets/images/services/game.png"} title={"Game Design"}
                                          secondTitle={"& development"}/>
                        </div> :
                        <div
                            className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 lg:gap-10 "}>
                            <ServicesCard imgUrl={"/assets/images/services/payment.png"} title={`Payment and`}
                                          secondTitle={"Finance"}/>
                            <ServicesCard imgUrl={"/assets/images/services/entertainment.png"} title={"Entertainment"}/>
                            <ServicesCard imgUrl={"/assets/images/services/retail.png"} title={"Retail"}/>
                            <ServicesCard imgUrl={"/assets/images/services/manufacture.png"} title={"Manufacturing"}/>
                            <ServicesCard imgUrl={"/assets/images/services/ecommerce.png"} title={"E-commerce"}/>

                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
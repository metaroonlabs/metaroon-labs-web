import avatar from "../../assets/testimonials/avatar.png"

type TestimonialCardProps = {
    testimonial: string;
    username: string;
    designation: string;
    imgUrl: string;
    largeCard?: boolean;
};

export function TestimonialCard(props: TestimonialCardProps) {
    return (
        <>
            {props.largeCard ?
                <div className="max-w-[550px]  max-h-[440px] rounded-xl border-2 border-[#2C2C2C] bg-[#151515]">
                    <div className="p-10 font-extralight text-[14px] mb-5">{props.testimonial}</div>
                    <div className="flex items-center ml-10 pb-4">
                        <img
                            src={avatar}
                            alt="avatar"
                            className={`rounded-full mr-3 object-cover w-[40px] h-[40px]`}
                        />
                        <div>
                            <p className={`text-white  text-[14px] `}>{props.username}</p>
                            <p className={`text-white font-extralight text-[10px]`}>
                                {props.designation}
                            </p>
                        </div>
                    </div>
                </div>
                :
                <div className="max-w-[660px] max-h-[205px] rounded-xl border-2 border-[#2C2C2C] bg-[#151515]">
                    <div className="font-extralight text-[14px] p-10">{props.testimonial}</div>
                    <div className="flex items-center ml-10 pb-4">
                        <img
                            src={avatar}
                            alt="avatar"
                            className={`rounded-full mr-3 object-cover w-[40px] h-[40px]`}
                        />
                        <div>
                            <p className={`text-white  text-[14px] `}>{props.username}</p>
                            <p className={`text-white font-extralight text-[10px]`}>
                                {props.designation}
                            </p>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

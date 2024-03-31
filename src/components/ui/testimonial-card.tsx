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
    <div className={"flex flex-wrap gap-10 px-[100px] mt-10 flex-row"}>
      {/* Small card */}
      <div className="flex flex-col">
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
        <div className="max-w-[660px] max-h-[205px] rounded-xl border-2 border-2 border-[#2C2C2C] bg-[#151515] mt-8">
          <div className="font-extralight text-[14px]  p-10">{props.testimonial}</div>
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
      </div>
      {/* Large card */}
      <div className="max-w-[550px]  max-h-[440px] rounded-xl border-2 border-[#2C2C2C] bg-[#151515]">
        <div className="p-10 font-extralight text-[14px]">{props.testimonial}</div>
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
    </div>
  );
}

import {SectionTitle} from "@/components/SectionTitle.tsx";
import BlogCard from "@/components/BlogCard.tsx";

function Blog() {
    return (
        <div className={"px-[25px] lg:px-[100px] 2xl:max-w-[1420px] mx-auto"} id={"about"}>
            <SectionTitle primaryTitle={"Blog Articles"} secondaryTitle={"Metarune Blog"} logoInclude={true}
                          medium={true}/>

            <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mx-auto"}>
                <BlogCard imageSrc={"../../public/assets/images/blog/5G Technology.png"} title={"Advantages and Risks of 5G Technology: Comprehensive Overview"} />
                <BlogCard imageSrc={"../../public/assets/images/blog/Bitcoin Ecosystem.png"} title={"Understanding Bitcoin Ecosystem"}/>
                <BlogCard imageSrc={"../../public/assets/images/blog/Breaks and  Physical Activity.png"} title={"Boosting Productivity Through Regular Breaks and Physical Activity"}/>
            </div>
        </div>
    );
}

export default Blog;
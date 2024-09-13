type CardProps = {
    imageSrc: string;
    title: string;
};

function BlogCard({ imageSrc, title }: CardProps) {
    return (
        <div className={"shadow-lg mx-auto"}>
            <img src={imageSrc} alt={title} className={"w-[397px] h-[223px] object-fill rounded-[10px]"}/>
            <div className={"py-4"}>
                <h3 className={"text-[20px] font-semibold text-white"}>{title}</h3>
            </div>
        </div>
    );
}

export default BlogCard;
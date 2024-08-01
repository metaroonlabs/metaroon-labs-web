import {useInView} from 'react-intersection-observer';
import React from 'react';

type AnimatedLineProps = {
    text: string;
};

const AnimatedLine: React.FC<AnimatedLineProps> = ({text}) => {
    const {ref, inView} = useInView({
        threshold: 0.5,
    });

    return (
        <p
            ref={ref}
            className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'} transform translate-y-5 ${inView ? 'translate-y-0' : ''} text-center text-white text-[18px] sm:text-[25px] md:text-[35px] lg:text-[50px]`}
        >
            {text}
        </p>
    );
};

export function Paragraph() {
    const lines = [
        "Metarune Labs help to make",
        "your dream come true with",
        "software solutions. We are",
        " skilled with multiple",
        "disciplines from software",
        "solutions, designer services",
        "to developing Web 3.0",
        "products and services."
    ];

    return (
        <div className="px-[25px] lg:px-[100px] 2xl:max-w-[1420px] mx-auto">
            <div className="max-w-[1000px] mx-auto">
                {lines.map((line, index) => (
                    <AnimatedLine key={index} text={line}/>
                ))}
            </div>
        </div>
    );
}
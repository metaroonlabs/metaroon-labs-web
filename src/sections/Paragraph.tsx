import {useInView} from 'react-intersection-observer';
import React from 'react';

type AnimatedLineProps = {
    text: string;
};

const AnimatedLine: React.FC<AnimatedLineProps> = ({text}) => {
    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    return (
        <p
            ref={ref}
            className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'} transform translate-y-5 ${inView ? 'translate-y-0' : ''} text-center text-white text-[50px]`}
        >
            {text}
        </p>
    );
};

export function Paragraph() {
    const lines = [
        "Metaroon Labs help to make your dream come true with",
        "software solutions. We are",
        " skilled with multiple",
        "disciplines from software",
        "solutions, designer services",
        "to developing Web 3.0",
        "products and services."
    ];

    return (
        <div className="px-[100px] my-72">
            <div className="max-w-[1000px] mx-auto">
                {lines.map((line, index) => (
                    <AnimatedLine key={index} text={line}/>
                ))}
            </div>
        </div>
    );
}
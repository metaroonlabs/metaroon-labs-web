import React, {useState} from 'react';
import {useInView} from 'react-intersection-observer';

type AnimatedLineProps = {
    text: string;
};

const AnimatedLine: React.FC<AnimatedLineProps> = ({text}) => {
    const [hasBeenInView, setHasBeenInView] = useState(false);
    const {ref, inView} = useInView({
        threshold: 0.5,
        // Removed `triggerOnce: true` to allow re-triggering inView status
    });

    // Update the state when the element comes into view for the first time
    if (inView && !hasBeenInView) {
        setHasBeenInView(true);
    }

    return (
        <p
            ref={ref}
            className={`transition-opacity duration-1000 delay-200 transform text-center text-white text-[50px] 
                        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} 
                        ${hasBeenInView && !inView ? 'opacity-0 translate-y-5' : ''}`}
        >
            {text}
        </p>
    );
};

export function Paragraph() {
    const lines = [
        "Metaroon Labs help to make your dream come true with",
        "software solutions. We are",
        "skilled with multiple",
        "disciplines from software",
        "solutions, designer services",
        "to developing Web 3.0",
        "products and services."
    ];

    return (
        <div className="px-[100px]">
            <div className="max-w-[1000px] mx-auto leading-[60px]">
                {lines.map((line, index) => (
                    <AnimatedLine key={index} text={line}/>
                ))}
            </div>
        </div>
    );
}

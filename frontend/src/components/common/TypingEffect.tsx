import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
    text: string;
    speed?: number;
    className?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 50, className }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                setDisplayedText(text.substring(0, i + 1));
                i++;
                setTimeout(typeWriter, speed);
            }
        };
        typeWriter();
    }, [text, speed]);

    return <span className={className}>{displayedText}</span>;
};

export default TypingEffect;
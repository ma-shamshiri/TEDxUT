import { useState } from "react";
import { Box } from "@chakra-ui/react";

const getTransformStyles = (isMouseEntered: boolean, index: number, delay: number) => ({
    transform: `translateY(${isMouseEntered ? "-100%" : "0%"})`,
    transitionDelay: `${index * delay}s`,
});

const splitStringUsingRegex = (inputString: string): string[] => {
    const characters: string[] = [];
    const regex = /[\s\S]/gu;

    let match;

    while ((match = regex.exec(inputString)) !== null) {
        characters.push(match[0]);
    }

    return characters;
};

interface SliderTextProps {
    text?: string;
    transitionDelay?: number;
    [key: string]: any;
};

const SliderText: React.FC<SliderTextProps> = ({
    text = "item",
    transitionDelay = 0.015,
    ...boxProps
}) => {
    const [isMouseEntered, setIsMouseEntered] = useState(false);

    return (
        <Box
            className="sliderTextContainer"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="fit-content"
            onMouseEnter={() => setIsMouseEntered(true)}
            onMouseLeave={() => setIsMouseEntered(false)}
            {...boxProps}
            _hover={{
                color: "#FF0000",
                transition: "color 0.5s ease-in-out"
            }}
        >
            <Box
                position="relative"
                display="flex"
                overflow="hidden"
            >
                {splitStringUsingRegex(text).map((character, index) => (
                    <Box
                        key={index}
                        position="relative"
                    >
                        <Box
                            as="span"
                            display="inline-block"
                            whiteSpace="pre"
                            transitionProperty="transform"
                            transitionDuration="0.5s"
                            style={getTransformStyles(isMouseEntered, index, transitionDelay)}
                        >
                            {character}
                        </Box>
                        <Box
                            as="span"
                            display="inline-block"
                            whiteSpace="pre"
                            transitionProperty="transform"
                            transitionDuration="0.5s"
                            position="absolute"
                            top="100%"
                            width="100%"
                            left={0}
                            style={getTransformStyles(isMouseEntered, index, transitionDelay)}
                        >
                            {character}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default SliderText;

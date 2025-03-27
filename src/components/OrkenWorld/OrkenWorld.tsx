import React, { useEffect, useRef } from "react";
import "./styles.css";
import { Box, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { gsap } from "gsap";
import { ted, tedx, tedxavelorne, tedxconcordia } from "../../assets";
import { useTranslation } from "react-i18next";
import bg from "./assets/bg.jpg";
import Lenis from "lenis";
import ScrollTrigger from "gsap/ScrollTrigger";

const OrkenWorld: React.FC = () => {
    const { t, i18n } = useTranslation();
    
    const cards = [
        {
            id: 1,
            title: "TED",
            description: "tedDescription",
            img: ted,
            bgColor: useColorModeValue("gray.200", "gray.800"),
            linkUrl: "https://www.ted.com/about/our-organization",
        },
        {
            id: 2,
            title: "TEDx",
            description: "tedxDescription",
            img: tedx,
            // bgColor: "radial-gradient(circle, rgba(215,50,81,1) 0%, rgba(157,39,61,1) 95%, rgba(145,35,56,1) 100%)",
            bgColor: useColorModeValue("gray.200", "gray.800"),
            linkUrl: "https://www.ted.com/participate/organize-a-local-tedx-event/before-you-start/what-is-a-tedx-event",
        },
        {
            id: 3,
            title: "TEDxConcordiaUniversity",
            description: "tedxConcordiaUniversityDescription",
            img: tedxconcordia,
            bgColor: useColorModeValue("gray.200", "gray.800"),
            linkUrl: "https://www.ted.com/tedx/events/59606",
        },
    ];

    const stickySectionRef = useRef<HTMLDivElement>(null);
    const outlineCanvasRef = useRef<HTMLCanvasElement>(null);
    const fillCanvasRef = useRef<HTMLCanvasElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Initialize Lenis for smooth scrolling
        const lenis = new Lenis();
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);

        // Canvas and drawing setup
        const stickySection = stickySectionRef.current!;
        const outlineCanvas = outlineCanvasRef.current!;
        const fillCanvas = fillCanvasRef.current!;
        const cards = cardsRef.current!;
        const outlineCtx = outlineCanvas.getContext("2d")!;
        const fillCtx = fillCanvas.getContext("2d")!;
        const triangleStates = new Map<string, any>();
        const triangleSize = 100;
        const SCALE_THRESHOLD = 0.01;
        let canvasXPosition = 0;

        const setCanvasSize = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);
        };

        const drawTriangle = (
            ctx: CanvasRenderingContext2D,
            x: number,
            y: number,
            fillScale = 0,
            flipped = false
        ) => {
            const halfSize = triangleSize / 2;

            ctx.beginPath();
            if (!flipped) {
                ctx.moveTo(x, y - halfSize);
                ctx.lineTo(x + halfSize, y + halfSize);
                ctx.lineTo(x - halfSize, y + halfSize);
            } else {
                ctx.moveTo(x, y + halfSize);
                ctx.lineTo(x + halfSize, y - halfSize);
                ctx.lineTo(x - halfSize, y - halfSize);
            }
            ctx.closePath();

            if (fillScale < SCALE_THRESHOLD) {
                ctx.strokeStyle = "rgba(255, 255, 255, 0.075)";
                ctx.lineWidth = 1;
                ctx.stroke();
            } else {
                ctx.save();
                ctx.translate(x, y);
                ctx.scale(fillScale, fillScale);
                ctx.translate(-x, -y);
                ctx.fillStyle = "#912338";
                ctx.strokeStyle = "white";
                ctx.lineWidth = 1;
                ctx.stroke();
                ctx.fill();
                ctx.restore();
            }
        };

        const drawGrid = (scrollProgress = 0) => {
            outlineCtx.clearRect(0, 0, outlineCanvas.width, outlineCanvas.height);
            fillCtx.clearRect(0, 0, fillCanvas.width, fillCanvas.height);

            triangleStates.forEach((state) => {
                const x = state.col * (triangleSize * 0.5) + triangleSize / 2 + canvasXPosition;
                const y = state.row * triangleSize + triangleSize / 2;
                const flipped = (state.row + state.col) % 2 !== 0;
                drawTriangle(outlineCtx, x, y, 0, flipped);
            });

            const animationProgress =
                scrollProgress <= 0.65 ? 0 : (scrollProgress - 0.65) / 0.35;

            triangleStates.forEach((state) => {
                const targetScale = state.order <= animationProgress ? 1 : 0;
                const newScale = state.scale + (targetScale - state.scale) * 0.15;

                state.scale = newScale;
                if (state.scale >= SCALE_THRESHOLD) {
                    const x = state.col * (triangleSize * 0.5) + triangleSize / 2 + canvasXPosition;
                    const y = state.row * triangleSize + triangleSize / 2;
                    const flipped = (state.row + state.col) % 2 !== 0;
                    drawTriangle(fillCtx, x, y, state.scale, flipped);
                }
            });
        };

        const initializeTriangles = () => {
            const cols = Math.ceil(window.innerWidth / (triangleSize * 0.5));
            const rows = Math.ceil(window.innerHeight / (triangleSize * 0.5));

            triangleStates.clear();
            Array.from({ length: rows }).forEach((_, row) => {
                Array.from({ length: cols }).forEach((_, col) => {
                    const key = `${row}-${col}`;
                    triangleStates.set(key, { order: Math.random(), scale: 0, row, col });
                });
            });
        };

        setCanvasSize(outlineCanvas, outlineCtx);
        setCanvasSize(fillCanvas, fillCtx);
        initializeTriangles();
        drawGrid();

        // ScrollTrigger animation
        ScrollTrigger.create({
            trigger: stickySection,
            start: "top top",
            end: `+=${window.innerHeight * 5}px`,
            pin: true,
            onUpdate: (self) => {
                canvasXPosition = -self.progress * 200;
                drawGrid(self.progress);

                const progress = Math.min(self.progress / 0.654, 1);
                gsap.set(cards, { x: -progress * window.innerWidth * 2 });
            },
        });

        window.addEventListener("resize", () => {
            setCanvasSize(outlineCanvas, outlineCtx);
            setCanvasSize(fillCanvas, fillCtx);
            initializeTriangles();
            drawGrid();
        });

        return () => {
            window.removeEventListener("resize", () => { });
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <Box
            width="100%"
            overflow="hidden"
        >
            {/* <Box
                position="relative"
                display="flex"
                justifyContent="center"
                alignItems="center"
                bg="#000"
                color="#fff"
                width="100%"
                height="100vh"
                textAlign="center"
                fontSize="80px"
                overflow="hidden"
            >
                <Text fontSize="3rem">
                    Enter a Universe Powered by Imagination
                </Text>
            </Box> */}

            <Box
                ref={stickySectionRef}
                position="relative"
                width="100%"
                height="100vh"
                overflow="hidden"
            >
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                >
                    <Image
                        src={bg}
                        alt="Background"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                    />
                    <Box
                        position="absolute"
                        width="100%"
                        height="100%"
                        top={0}
                        left={0}
                        bg="black"
                        opacity="0.2"
                    />
                </Box>
                <canvas className="outline-layer" ref={outlineCanvasRef}></canvas>
                <Box
                    className="cards"
                    ref={cardsRef}
                    position="absolute"
                    top="0"
                    left="0"
                    // transform="translate(-50%, -50%)"
                    width={{base:"300%", lg:"300%"}}
                    height={{base:"100vh", lg:"100vh"}}
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                    willChange="transform"
                    zIndex={3}
                >
                    {cards.map((card, index) => (
                        <Box
                            key={index}
                            className="card"
                            position="relative"
                            width={{ base: "34rem", lg: "50rem" }}
                            bg={card.bgColor}
                            display="flex"
                            flexDirection="column"
                            gap={{ base: "0", lg: "1em" }}
                            borderWidth="2px"
                            borderColor={useColorModeValue("#000", "#fff")}
                            borderRadius="15px"
                            overflow="hidden"
                        >
                            <Box
                                display="flex"
                                flex={1}
                                overflow="hidden"
                            >
                                <Image
                                    src={card.img}
                                    alt={card.title}
                                    width="100%"
                                    height="100%"
                                    objectFit="cover"
                                />
                            </Box>
                            <Box
                                display="flex"
                                flex={1}
                                overflow="hidden"
                                color="#fff"
                                flexDirection="column"
                                padding={{ base: "1.3em", lg: "1.5em" }}
                            >
                                <Text
                                    color={useColorModeValue("gray.800", "white")}
                                    fontSize={{ base: "2rem", lg: "3rem" }}
                                    fontWeight="bold"
                                    lineHeight="1.3"
                                    margin="1rem 0"
                                    textAlign="center"
                                    paddingBottom="0.7rem"
                                >
                                    {t(card.title)}

                                </Text>
                                <Text
                                    fontSize={{ base: "1.6rem", lg: "1.8rem" }}
                                    marginBottom="1rem"
                                    color={useColorModeValue("gray.800", "gray.200")}
                                >
                                    {t(card.description)}
                                </Text>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <canvas className="fill-layer" ref={fillCanvasRef}></canvas>
            </Box>

            {/* <Box
                position="relative"
                display="flex"
                justifyContent="center"
                alignItems="center"
                bg="#000"
                color="#fff"
                width="100%"
                height="100vh"
                textAlign="center"
                fontSize="80px"
                overflow="hidden"
            >
                <Text fontSize="4rem">
                    Chase the shadows to embrace the light
                </Text>
            </Box> */}
        </Box>
    );
};

export default OrkenWorld;

import React, { useRef, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { TweenMax, Power2, Power3 } from 'gsap';

const AudioCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const c = canvasRef.current;
        const audio = audioRef.current;
        if (!c || !audio) return;

        // Define options that control the animation
        const opt = {
            width: c.offsetWidth,
            height: c.offsetHeight,
            midY: c.offsetHeight / 2,
            points: 80,
            stretch: 10,
            sinHeight: 0,
            speed: -0.1,
            strokeColor: 'red',
            strokeWidth: 1.5,
            power: false,
        };

        // Adjust canvas for high-DPI displays
        c.width = opt.width * 2;
        c.height = opt.height * 2;
        c.style.width = `${opt.width}px`;
        c.style.height = `${opt.height}px`;

        const ctx = c.getContext('2d');
        if (!ctx) return;
        ctx.scale(2, 2);
        ctx.strokeStyle = opt.strokeColor;
        ctx.lineWidth = opt.strokeWidth;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        let time = 0;
        let animationFrameId: number;

        // Render loop to animate the canvas
        const render = () => {
            animationFrameId = requestAnimationFrame(render);
            ctx.clearRect(0, 0, opt.width, opt.height);
            time += 1;
            ctx.beginPath();
            let increment = 0;

            for (let i = 0; i <= opt.points; i++) {
                increment += i < opt.points / 2 ? 0.1 : -0.1;
                const x = (opt.width / opt.points) * i;
                const y =
                    opt.midY +
                    Math.sin(time * opt.speed + i / opt.stretch) *
                    opt.sinHeight *
                    increment;
                ctx.lineTo(x, y);
            }
            ctx.stroke();
        };

        render();

        // Click handler toggles audio playback and animates the canvas options
        const handleClick = () => {
            opt.power = !opt.power;
            if (opt.power) {
                audio.play();
                TweenMax.to(opt, 1, {
                    sinHeight: 4,
                    stretch: 5,
                    ease: Power2.easeInOut,
                });
            } else {
                audio.pause();
                TweenMax.to(opt, 1, {
                    sinHeight: 0,
                    stretch: 10,
                    ease: Power3.easeOut,
                });
            }
            console.log('Audio toggled:', opt.power);
        };

        // Attach click listener directly to the canvas element
        c.addEventListener('click', handleClick);

        // Clean up on unmount
        return () => {
            cancelAnimationFrame(animationFrameId);
            c.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <>
            <Box
                as="canvas"
                ref={canvasRef}
                width="100px"
                height="100px"
                cursor="pointer"
                border={"2px solid red"}
            />
            <audio ref={audioRef} src="./song.mp3" />
        </>
    );
};

export default AudioCanvas;

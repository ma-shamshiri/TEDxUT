import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { amin } from "../../assets";
import { motion } from "framer-motion";
import MyNavbar from "../MyNavbar";
import BlockTeamProfiles from "../BlockTeamProfiles";

const AminShamshiri: React.FC = () => {
    const [boxLoaded, setBoxLoaded] = useState(false);

    const handleBoxLoad = () => {
        setBoxLoaded(true);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                onAnimationComplete={handleBoxLoad}
            >
                <MyNavbar />
                <BlockTeamProfiles
                    name="Amin Shamshiri"
                    title="Website Designer"
                    biography={`Blending technology with creativity, I am passionate about building digital experiences that connect people and amplify ideas. With a Master’s in Computer Science from Concordia University, my expertise spans software engineering, web development, and digital storytelling, where I merge technical innovation with intuitive design. At TEDxConcordiaUniversity, I am driven by this year’s theme, Shaping Tomorrow, committed to crafting an engaging platform that elevates visionary voices, fosters meaningful conversations, and transforms ideas into action. By leveraging my experience in designing seamless digital interfaces, curating interactive content, and optimizing user engagement, I strive to ensure that the TEDx experience is not just inspiring but also accessible and impactful. Through my work, I aim to bridge technology and human connection, creating digital spaces that empower people to share, learn, and shape a better future. 🚀`}
                    image={amin}
                    linkedinAddress="https://www.linkedin.com/in/ma-shamshiri/"
                    emailAddress="mailto:ma.shamshiri@gmail.com/"
                    twitterAddress="https://x.com/"
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

export default AminShamshiri;
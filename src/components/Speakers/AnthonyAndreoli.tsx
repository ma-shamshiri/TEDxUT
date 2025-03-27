import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { anthony_andreoli } from "../../assets";
import { motion } from "framer-motion";
import BlockSpeakerProfiles from "../BlockSpeakerProfiles";
import MyNavbar from "../MyNavbar";
import { useTranslation } from "react-i18next";

const AnthonyAndreoli: React.FC = () => {
    const { t } = useTranslation();

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
                <BlockSpeakerProfiles
                    name="Anthony Andreoli"
                    title={t("anthonyAndreoliTitle")}
                    biography={t(`anthonyAndreoliBio`)}
                    image={anthony_andreoli}
                    linkedinAddress="https://www.linkedin.com/in/anthony-andreoli/"
                    emailAddress=""
                    twitterAddress="https://x.com/"
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

export default AnthonyAndreoli;
import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { doneyli_de_jesus } from "../../assets";
import { motion } from "framer-motion";
import BlockSpeakerProfiles from "../BlockSpeakerProfiles";
import MyNavbar from "../MyNavbar";
import { useTranslation } from "react-i18next";

const DoneyliDeJesus: React.FC = () => {
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
                    name="Doneyli De Jesus"
                    title={t("doneyliDeJesusTitle")}
                    biography={t(`doneyliDeJesusBio`)}
                    image={doneyli_de_jesus}
                    linkedinAddress="https://www.linkedin.com/in/doneyli/"
                    emailAddress=""
                    twitterAddress="https://x.com/"
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

export default DoneyliDeJesus;
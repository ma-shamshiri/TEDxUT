import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { geoffrey_reid2 } from "../../assets";
import { motion } from "framer-motion";
import BlockSpeakerProfiles from "../BlockSpeakerProfiles";
import MyNavbar from "../MyNavbar";
import { useTranslation } from "react-i18next";

const GeoffreyReid: React.FC = () => {
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
                {/* <MyNavbar /> */}
                <BlockSpeakerProfiles
                    name="Geoffrey M. Reid"
                    title={t("geoffreyReidTitle")}
                    biography={t(`geoffreyReidBio`)}
                    image={geoffrey_reid2}
                    linkedinAddress="https://www.linkedin.com/in/geoffrey-reid-b073111"
                    emailAddress=""
                    twitterAddress="https://x.com/"
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

export default GeoffreyReid;
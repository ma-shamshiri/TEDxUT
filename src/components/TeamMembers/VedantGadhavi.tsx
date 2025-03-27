import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { vedant_gadhvi } from "../../assets";
import { motion } from "framer-motion";
import MyNavbar from "../MyNavbar";
import BlockTeamProfiles from "../BlockTeamProfiles";

const VedantGadhavi: React.FC = () => {
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
                    name="Vedant Gadhavi"
                    title="Organiser"
                    biography={``}
                    image={vedant_gadhvi}
                    linkedinAddress="http://linkedin.com/in/vedant-gadhavi"
                    emailAddress=""
                    twitterAddress="https://x.com/"
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

export default VedantGadhavi;
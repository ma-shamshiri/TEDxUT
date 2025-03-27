import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { mahim_rahman } from "../../assets";
import { motion } from "framer-motion";
import MyNavbar from "../MyNavbar";
import BlockTeamProfiles from "../BlockTeamProfiles";

const MahimurRahmanKhan: React.FC = () => {
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
                    name="Mahimur RahmanKhan"
                    title="Marketing"
                    biography={``}
                    image={mahim_rahman}
                    linkedinAddress="https://linkedin.com/in/mahimurrahman-khan"
                    emailAddress=""
                    twitterAddress="https://x.com/"
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

export default MahimurRahmanKhan;
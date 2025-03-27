import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { sepehr_javan } from "../../assets";
import { motion } from "framer-motion";
import MyNavbar from "../MyNavbar";
import BlockTeamProfiles from "../BlockTeamProfiles";

const AdityaThakkar: React.FC = () => {
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
                    name="Aditya Thakkar"
                    title="Organiser"
                    biography={``}
                    image={sepehr_javan}
                    linkedinAddress="http://linkedin.com/in/adityathakkar032"
                    emailAddress=""
                    twitterAddress="https://x.com/"
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

export default AdityaThakkar;
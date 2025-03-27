import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { divyanshu_jaggi } from "../../assets";
import { motion } from "framer-motion";
import MyNavbar from "../MyNavbar";
import BlockTeamProfiles from "../BlockTeamProfiles";

const DivyanshuJaggi: React.FC = () => {
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
                    name="Divyanshu Jaggi"
                    title="Operations"
                    biography={``}
                    image={divyanshu_jaggi}
                    linkedinAddress="https://linkedin.com/in/divyanshu-jaggi"
                    emailAddress=""
                    twitterAddress="https://x.com/"
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

export default DivyanshuJaggi;
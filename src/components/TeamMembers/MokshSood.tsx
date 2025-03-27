import React, { useEffect, useState } from "react";
import { BlockFooter } from "../BlockFooter";
import { moksh_sood } from "../../assets";
import { motion } from "framer-motion";
import MyNavbar from "../MyNavbar";
import BlockTeamProfiles from "../BlockTeamProfiles";

const MokshSood: React.FC = () => {
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
                    name="Moksh Sood"
                    title="Production"
                    biography={``}
                    image={moksh_sood}
                    linkedinAddress="https://www.linkedin.com/in/moksh-sood-3515b3171/"
                    emailAddress=""
                    twitterAddress="https://x.com/"
                />
                <BlockFooter />
            </motion.div>
        </>
    );
};

export default MokshSood;
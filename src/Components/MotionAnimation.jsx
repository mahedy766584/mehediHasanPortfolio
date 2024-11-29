/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const MotionAnimation = ({ children }) => {

    const pageAnimation = {
        initial: { rotateY: 180, opacity: 0 },
        animate: { rotateY: 0, opacity: 1 },
        exit: { rotateY: -180, opacity: 0 },
    };

    return (
        <>
            <motion.div
                className="min-h-screen flex items-center justify-center"
                variants={pageAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 1.8 }}
            >
                {children}
            </motion.div>
        </>
    );
};

export default MotionAnimation;
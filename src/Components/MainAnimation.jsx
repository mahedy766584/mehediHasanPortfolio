/* eslint-disable react/prop-types */
import MotionAnimation from "./MotionAnimation";
import background from "../assets/bg/bg10.png"; ///10/2/6/5/8/

const MainAnimation = ({ children, height }) => {
    return (
        <>
            <MotionAnimation>
                <div className={`relative w-full transition-all duration-700 ${height}`}>
                    <img src={background} className={`bg-center z-0 bg-cover bg-no-repeat bg-blend-overlay w-full h-full ${height}`} />
                    <div className={`w-full h-full absolute top-0 bg-bgColor bg-opacity-85 ${height}`}>
                        {children}
                    </div>
                </div>
            </MotionAnimation>
        </>
    );
};

export default MainAnimation;
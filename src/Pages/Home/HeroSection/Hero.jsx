import Container from "../../../Components/Container/Container";
import { Bio } from "../../../data/constants"
import Typewriter from "typewriter-effect";
import mehediImg from "../../../assets/mehedi_img/Digital Marketer (1).jpg"
import { motion } from "framer-motion";
import { headContainerAnimation, headContentAnimation, headTextAnimation } from "../../../utils/motion";
import { Tilt } from "react-tilt";
import HeroBgAnimation from "../../../Components/HeroBgAnimation";

const Hero = () => {
    return (
        <div className="bg-[#090917] h-[850px] lg:h-full">
            <Container>
                <motion.div {...headContainerAnimation}>
                    <div className="lg:flex justify-between items-center w-full h-screen relative lg:top-0 top-28 text-center lg:text-start">
                        {/* left */}
                        <div className="space-y-6 lg:flex-1 flex flex-col justify-center items-center lg:items-start">
                            <motion.div {...headTextAnimation}>
                                <h1 className="text-[#F2F3F4] font-kanit mb-5 lg:text-5xl text-3xl font-semibold">Hi, Iam <br /><span className="font-bold tracking-wider">{Bio.name}</span></h1>
                                <h1
                                    className="flex gap-2 text-[#F2F3F4] lg:text-4xl text-2xl font-semibold">
                                    I am a
                                    <span className="text-[#854CE6] cursor-pointer">
                                        <Typewriter
                                            options={{
                                                strings: Bio.roles,
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </span>
                                </h1>
                            </motion.div>
                            <motion.div {...headContentAnimation}>
                                <p className="text-[#f2f3f4bb] lg:w-4/5 font-poppins mb-8 lg:text-[20px] text-[16px] leading-8">{Bio.description}</p>
                                <button className="text-[#F2F3F4] font-kanit resume-btn"><a href="#" target="_blank">Check Resume</a></button>
                            </motion.div>
                        </div>
                        {/* right */}
                        <div className="flex justify-center items-center lg:mt-0 mt-10">
                            <div className="absolute lg:w-[600px] lg:h-[600px] w-[450px] h-[450px]">
                                <HeroBgAnimation />
                            </div>
                            <div className="relative ">
                                <motion.div {...headContentAnimation}>
                                    <Tilt>
                                        <div className="border-2 border-[#854CE6] rounded-full z-30">
                                            <img
                                                src={mehediImg}
                                                alt="Mehedi Hasan"
                                                className="rounded-full w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]"
                                            />
                                        </div>
                                    </Tilt>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
};

export default Hero;
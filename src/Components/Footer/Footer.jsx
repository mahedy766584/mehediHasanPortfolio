import { FaArrowUp } from "react-icons/fa";
import footerBg from "../../assets/bg/bg4.avif"
import Container from "../Container/Container";

const Footer = () => {
    return (
        <footer className="relative">
            <div
                style={{
                    backgroundImage: `url(${footerBg}), linear-gradient(to top, #11112c , #090917)`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundBlendMode: "overlay"
                }}
                className="h-[40vh] w-full  absolute top-0 left-0 overflow-hidden bg-gradient-to-b from-[#090917] to-[#090917] ">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="relative block fill-[#090917]"></path>
                </svg>
                <Container>
                    <div className=" text-white flex flex-col space-y-10 justify-center items-center">
                        <ul className="lg:flex  flex-wrap gap-10 items-center text-lg text-center mx-auto">
                            <li className={`hover:text-[#854CE6] duration-700`}><a href="#home">Home</a></li>
                            <li className={`hover:text-[#854CE6] duration-700`}><a href="#skills">Skills</a></li>
                            <li className={`hover:text-[#854CE6] duration-700`}><a href="#projects">Projects</a></li>
                            <li className={`hover:text-[#854CE6] duration-700`}><a href="#about">About</a></li>
                            <li className={`hover:text-[#854CE6] duration-700`}><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </Container>
            </div>
            <div className="absolute top-40 right-10 ">
                <button className="text-white bg-gradient-to-t from-[#B800FF] rounded-md p-4 border-t border-x border-[#B800FF] animate-pulse"><a href="#"><FaArrowUp/></a></button>
            </div>
        </footer>
    );
};

export default Footer;
/* eslint-disable react/no-unescaped-entities */
import mehediImg from "../../assets/mehedi_img/20220820_182110-removebg-preview (1).png";
import Container from "../../Components/Container/Container";
import Typewriter from "typewriter-effect";
import "./home.css";
import { Bio } from "../../data/constants";
import { LiaDownloadSolid } from "react-icons/lia";
import { Tooltip, Button } from "@material-tailwind/react";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Tilt } from "react-tilt";

const Home = () => {
    return (
        <>
            <div className="home">
                <Container>
                    <div className="home-content">
                        <div className="text-content">
                            <div>
                                <h3>Hello I'm</h3>
                                <h1>Mehedi Hasan</h1>
                                <h2>
                                    <Typewriter
                                        options={{
                                            strings: Bio.roles,
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h2>
                                <p className="des">
                                    Creative Junior Web Developer passionate about crafting visually stunning and responsive web experiences.
                                    Skilled in React, Tailwind CSS, and modern front-end technologies,
                                    I bring ideas to life with elegant  hero sections that captivate and engage users.
                                </p>
                            </div>
                            <div className="btn-sci">
                                <a href="#" className="btn-res">Download Resume <LiaDownloadSolid className="mt-2 text-[20px] font-medium" /></a>
                                <div className="sci">
                                    <a href="https://github.com/mahedy766584" target="_blank">
                                        <Tooltip
                                            content="GitHub"
                                            animate={{
                                                mount: { scale: 1, y: 0 },
                                                unmount: { scale: 0, y: 25 },
                                            }}
                                            className="tooltip "
                                        >
                                            <Button className="nav-icon"><AiFillGithub /></Button>
                                        </Tooltip>
                                    </a>

                                    <a href="https://www.linkedin.com/in/mohammad-mehedi-hasan-364b2432b/" target="_blank">
                                        <Tooltip
                                            content="Linkedin"
                                            animate={{
                                                mount: { scale: 1, y: 0 },
                                                unmount: { scale: 0, y: 25 },
                                            }}
                                            className="tooltip "
                                        >
                                            <Button className="nav-icon"><FaLinkedinIn /></Button>
                                        </Tooltip>
                                    </a>

                                    <a href="https://www.facebook.com/MehediWeb2023" target="_blank">
                                        <Tooltip
                                            content="Facebook"
                                            animate={{
                                                mount: { scale: 1, y: 0 },
                                                unmount: { scale: 0, y: 25 },
                                            }}
                                            className="tooltip "
                                        >
                                            <Button className="nav-icon"><FaFacebook /></Button>
                                        </Tooltip>
                                    </a>

                                    <a href="#">
                                        <Tooltip
                                            content="Twitter"
                                            animate={{
                                                mount: { scale: 1, y: 0 },
                                                unmount: { scale: 0, y: 25 },
                                            }}
                                            className="tooltip"
                                        >
                                            <Button className="nav-icon"><FaTwitter /></Button>
                                        </Tooltip>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <Tilt
                            glareEnable={true}
                            glareMaxOpacity={0.8}
                            scale={1.1}
                            tiltMaxAngleX={25}
                            tiltMaxAngleY={25}
                        >
                            <div className="img-wrapper">
                                <div className="img-box about-img">
                                    <img src={mehediImg} />
                                </div>
                            </div>
                        </Tilt>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Home;
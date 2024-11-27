/* eslint-disable react/no-unescaped-entities */
// import HomeAbout from "../../Components/NewAbout/HomeAbout";
// import Navbar from "../../Components/NewNavbar/Navbar";
// import AboutPage from "../../Components/NewAbout/AboutPage";
// import Skills from "../../Components/skills/Skills";
// import { useState } from "react";

// import { IoArrowBackSharp } from "react-icons/io5";
// import { FaGithub } from "react-icons/fa";

import mehediImg from "../../assets/mehedi_img/20220820_182110-removebg-preview (1).png";
import Container from "../../Components/Container/Container";
import Typewriter from "typewriter-effect";
import "./home.css";
import { Bio } from "../../data/constants";
import { LiaDownloadSolid } from "react-icons/lia";
import { Tooltip, Button } from "@material-tailwind/react";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Home = () => {

    // const [activeTab, setActiveTab] = useState('my-work');

    // const handleTabClick = (tabName) => {
    //     setActiveTab(tabName);
    // }

    return (
        // <div>
        //     <Navbar />

        //     <div className="container">
        //         <div className="box">

        //             <HomeAbout />

        //             <AboutPage />
        //             <Skills />

        //             <section className="section portfolio">
        //                 <h2 className="title">Portfolio</h2>
        //                 <div className="tab-box">
        //                     <div className={`tab-list portfolio-list ${activeTab === "my-work" ? "active" : ""}`}
        //                         onClick={() => handleTabClick('my-work')}
        //                     >
        //                         <h3>My Work</h3>
        //                     </div>
        //                     <div className={`tab-list portfolio-list ${activeTab === "my-service" ? "active" : ""}`}
        //                         onClick={() => handleTabClick('my-service')}
        //                     >
        //                         <h3>My Service</h3>
        //                     </div>
        //                 </div>
        //                 {
        //                     activeTab === 'my-work' && (
        //                         <div className="tab-wrapper">
        //                             <div className="tab-item portfolio-item">
        //                                 <div className="work-img">
        //                                     <img src={luxeLodgeImg} />
        //                                 </div>
        //                                 <div className="work-info">
        //                                     <h4>MERN Project</h4>
        //                                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur consectetur consectetur consectetur</p>
        //                                     <div className="tech-used">
        //                                         <p>HTML, CSS, JavaScript</p>
        //                                     </div>
        //                                     <div className="portfolio-icon wor-icon">
        //                                         <a href="#">
        //                                             <IoArrowBackSharp />
        //                                             <span className="tooltip">Preview</span>
        //                                         </a>
        //                                         <a href="#">
        //                                             <FaGithub />
        //                                             <span className="tooltip">GitHub Repository</span>
        //                                         </a>
        //                                     </div>
        //                                 </div>
        //                             </div>

        //                             <div className="tab-item portfolio-item">
        //                                 <div className="work-img">
        //                                     <img src={luxeLodgeImg} />
        //                                 </div>
        //                                 <div className="work-info">
        //                                     <h4>MERN Project</h4>
        //                                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur consectetur consectetur consectetur</p>
        //                                     <div className="tech-used">
        //                                         <p>HTML, CSS, JavaScript</p>
        //                                     </div>
        //                                     <div className="portfolio-icon wor-icon">
        //                                         <a href="#">
        //                                             <IoArrowBackSharp />
        //                                             <span className="tooltip">Preview</span>
        //                                         </a>
        //                                         <a href="#">
        //                                             <FaGithub />
        //                                             <span className="tooltip">GitHub Repository</span>
        //                                         </a>
        //                                     </div>
        //                                 </div>
        //                             </div>

        //                             <div className="tab-item portfolio-item">
        //                                 <div className="work-img">
        //                                     <img src={luxeLodgeImg} />
        //                                 </div>
        //                                 <div className="work-info">
        //                                     <h4>MERN Project</h4>
        //                                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur consectetur consectetur consectetur</p>
        //                                     <div className="tech-used">
        //                                         <p>HTML, CSS, JavaScript</p>
        //                                     </div>
        //                                     <div className="portfolio-icon wor-icon">
        //                                         <a href="#">
        //                                             <IoArrowBackSharp />
        //                                             <span className="tooltip">Preview</span>
        //                                         </a>
        //                                         <a href="#">
        //                                             <FaGithub />
        //                                             <span className="tooltip">GitHub Repository</span>
        //                                         </a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     )
        //                 }
        //                 {
        //                     activeTab === 'my-service' && (
        //                         <div className="tab-wrapper">
        //                             <div className="tab-item portfolio-item">
        //                                 <p>Service TEST</p>
        //                             </div>
        //                         </div>
        //                     )
        //                 }
        //             </section>

        //         </div>
        //     </div>
        // </div>
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

                                    <Tooltip
                                        content="Linkedin"
                                        animate={{
                                            mount: { scale: 1, y: 0 },
                                            unmount: { scale: 0, y: 25 },
                                        }}
                                        className="tooltip "
                                    >
                                        <Button className="nav-icon"><FaLinkedinIn  /></Button>
                                    </Tooltip>

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
                                </div>
                            </div>
                        </div>
                        <div className="img-wrapper">
                            <div className="img-box about-img">
                                <img src={mehediImg} />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Home;
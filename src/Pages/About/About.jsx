/* eslint-disable react/no-unescaped-entities */
import Container from "../../Components/Container/Container";
import Typewriter from "typewriter-effect";
import "./about.css";
import aboutImg from "../../assets/mehedi_img/20220820_182110-removebg-preview (1).png";
import { Bio } from "../../data/constants";
import { useState } from "react";
import Lottie from "lottie-react";

import animation1 from "../../../public/animation/animation2.json";
import animation2 from "../../../public/animation/animation1.json";
import animation3 from "../../../public/animation/animation3.json";
import animation4 from "../../../public/animation/animation4.json";

const About = () => {

    const [visibleSection, setVisibleSection] = useState(0);

    const handleViewMore = () => {
        setVisibleSection((prev) => prev + 1);
    };

    const handleViewLess = () => {
        setVisibleSection(0);
    }

    return (
        <div className="about">
            <Container>
                <div className="about_main">
                    <div className="about_content">
                        <div className="about-img">
                            <div className="img_box about_img_about">
                                <img src={aboutImg} className="about_img" />
                            </div>
                        </div>
                        <div className="text-content">
                            <h1>About Me</h1>
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
                                Welcome to my digital universe! I'm a dreamer, a creator, and above all, a web developer with a passion for turning ideas into immersive online experiences. As a MERN stack artisan, I craft modern applications that are not just functional but also unforgettable.
                            </p>
                            {
                                visibleSection === 0 &&
                                <button onClick={handleViewMore} className="view-btn">View More</button>
                            }
                        </div>
                    </div>

                    <div className="">
                        {
                            visibleSection >= 1 && (
                                <div
                                    className={`second_about`}
                                >
                                    <div className="text-box">
                                        <p className="about1-text">
                                            very project I undertake is a story waiting to be told—a story of seamless interactivity, striking visuals, and purpose-driven design. Whether it’s building intuitive user interfaces with React.js, designing pixel-perfect layouts with Tailwind CSS, or ensuring robust backends with Node.js and MongoDB, I pour my heart and creativity into every line of code.
                                        </p>
                                        {
                                            visibleSection === 1 &&
                                            <button onClick={handleViewMore} className="view-btn">View More</button>
                                        }
                                    </div>
                                    <div className="animate-box">
                                        <Lottie className="animate1" animationData={animation1} />
                                    </div>
                                </div>
                            )
                        }
                        {
                            visibleSection >= 2 && (
                                <div
                                    className={`third_about`}
                                >
                                    <div className="text-box">
                                        <p className="about1-text">
                                            My work isn’t just about development; it’s about connection. From designing a healthcare platform like HealthFusion to managing luxury hotel bookings with LuxeLodge, I strive to create digital solutions that truly resonate with people and solve real-world problems.
                                        </p>
                                        {
                                            visibleSection === 2 &&
                                            <button onClick={handleViewMore} className="view-btn">View More</button>
                                        }
                                    </div>
                                    <div className="animate-box">
                                        <Lottie className="animate1" animationData={animation2} />
                                    </div>
                                </div>
                            )
                        }
                        {
                            visibleSection >= 3 && (
                                <div
                                    className={`forth_about`}
                                >
                                    <div className="text-box">
                                        <p className="about1-text">
                                            But my journey doesn’t stop at technology. I’m an eternal learner, constantly evolving to master new tools, embrace fresh challenges, and push boundaries. For me, web development is more than a career—it’s an adventure where innovation meets artistry.
                                        </p>
                                        {
                                            visibleSection === 3 &&
                                            <button onClick={handleViewMore} className="view-btn">View More</button>
                                        }
                                    </div>
                                    <div className="animate-box">
                                        <Lottie className="animate1" animationData={animation3} />
                                    </div>
                                </div>
                            )
                        }
                        {
                            visibleSection >= 4 && (
                                <div
                                    className={`forth_about`}
                                >
                                    <div className="text-box">
                                        <p className="about1-text">
                                            Explore my portfolio to witness the fusion of creativity, technology, and purpose. If you’re looking for someone who doesn’t just build websites but crafts experiences, let’s connect. Together, we can create the extraordinary. 🌟
                                        </p>
                                        {
                                            visibleSection === 4 &&
                                            <button onClick={handleViewLess} className="view-btn">View Less</button>
                                        }
                                    </div>
                                    <div className="animate-box">
                                        <Lottie className="animate1" animationData={animation4} />
                                    </div>
                                </div>
                            )
                        }
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default About;
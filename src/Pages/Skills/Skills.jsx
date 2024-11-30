import { IoLogoFirebase, IoLogoHtml5, IoLogoJavascript } from "react-icons/io5";
import Container from "../../Components/Container/Container";
import "./skills.css";
import { FaCss3, FaFigma, FaGithub, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { SiChakraui, SiDaisyui, SiExpress, SiMongodb, SiPixlr, SiReactrouter } from "react-icons/si";
import { DiMaterializecss } from "react-icons/di";
import MainAnimation from "../../Components/MainAnimation"


const Skills = () => {
    return (
        <>
            <MainAnimation height="h-[3400px] lg:h-screen">
                <section className="skills">
                    <Container>
                        <div>
                            <h1 className="skill_title">My Skills</h1>
                            <div className="title_divider"></div>
                            <div className="skill_tab_item">
                                <div className="tab-grid">
                                    <div className="tab-item tab-item-hover:text-mainColor">
                                        <IoLogoHtml5 className="skill_logo" />
                                        <p>HTML</p>
                                    </div>
                                    <div className="tab-item">
                                        <FaCss3 className="skill_logo" />
                                        <p>CSS</p>
                                    </div>
                                    <div className="tab-item">
                                        <RiTailwindCssFill className="skill_logo" />
                                        <p>Tailwind.css</p>
                                    </div>
                                    <div className="tab-item">
                                        <IoLogoJavascript className="skill_logo" />
                                        <p>JavaScrpt</p>
                                    </div>
                                    <div className="tab-item">
                                        <GrReactjs className="skill_logo" />
                                        <p>React.js</p>
                                    </div>
                                    <div className="tab-item">
                                        <SiReactrouter className="skill_logo" />
                                        <p>React router dom</p>
                                    </div>
                                    <div className="tab-item">
                                        <SiDaisyui className="skill_logo" />
                                        <p>DaisyUi</p>
                                    </div>
                                    <div className="tab-item">
                                        <DiMaterializecss className="skill_logo" />
                                        <p>Matarial Tailwind</p>
                                    </div>
                                    <div className="tab-item">
                                        <SiChakraui className="skill_logo" />
                                        <p>Chakhra Ui</p>
                                    </div>
                                    <div className="tab-item">
                                        <IoLogoFirebase className="skill_logo" />
                                        <p>Firebase</p>
                                    </div>
                                    <div className="tab-item">
                                        <FaNodeJs className="skill_logo" />
                                        <p>Node.js</p>
                                    </div>
                                    <div className="tab-item">
                                        <SiExpress className="skill_logo" />
                                        <p>Express.js</p>
                                    </div>
                                    <div className="tab-item">
                                        <SiMongodb className="skill_logo" />
                                        <p>MongoDB</p>
                                    </div>
                                    <div className="tab-item">
                                        <FaFigma className="skill_logo" />
                                        <p>Figma</p>
                                    </div>
                                    <div className="tab-item">
                                        <SiPixlr className="skill_logo" />
                                        <p>Pixso</p>
                                    </div>
                                    <div className="tab-item">
                                        <FaGithub className="skill_logo" />
                                        <p>GitHub</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </MainAnimation>
        </>
    );
};

export default Skills;
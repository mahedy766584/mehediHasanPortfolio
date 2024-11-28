import Container from "../../Components/Container/Container";
import "./projects.css";
import ProjectCart from "./ProjectCart";
import { Link } from "react-router-dom";

// LuxeLodge Images
import img1 from "../../assets/luxeLodgeImg/img1.png";
import img2 from "../../assets/luxeLodgeImg/img2.png";
import img3 from "../../assets/luxeLodgeImg/img3.png";
import img4 from "../../assets/luxeLodgeImg/img4.png";
import img5 from "../../assets/luxeLodgeImg/img5.png";
import img6 from "../../assets/luxeLodgeImg/img6.png";
// HealthFusion Images
import img7 from "../../assets/healthFusionImg/helthFusionImg1.png";
import img8 from "../../assets/healthFusionImg/helthFusionImg2.png";
import img9 from "../../assets/healthFusionImg/helthFusionImg3.png";
import img10 from "../../assets/healthFusionImg/helthFusionImg4.png";
import img11 from "../../assets/healthFusionImg/healthFusionImg5.png";
import img12 from "../../assets/healthFusionImg/healthFusionImg6.png";


const Projects = () => {
    return (
        <div className="projects">
            <Container>
                <h1 className="skill_title">My Projects</h1>
                <div className="title_divider"></div>
                <div className="projects_box">
                    {/* projects-1 */}
                    <div className="projects_carousel">
                        <ProjectCart img1={img1} img2={img2} img3={img3} img4={img4} img5={img5} img6={img6} />
                        <div className="icons_box_first">
                            <div className="icons_box_second">
                                <a href="https://luxelodge-5b783.web.app/" className="icons_P" target="_blank">
                                    <button className="icon_btn">Live</button>
                                </a>
                                <a href="https://github.com/mahedy766584/luxelodge-client.git" className="icons_P" target="_blank">
                                    <button className="icon_btn">Client</button>
                                </a>
                                <a href="https://github.com/mahedy766584/luxelodge-server.git" className="icons_P" target="_blank">
                                    <button className="icon_btn icon_box">Server</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* projects-2 */}
                    <div className="projects_box_second">
                        <div className="projects_carousel">
                            <ProjectCart img1={img7} img2={img8} img3={img9} img4={img10} img5={img11} img6={img12} />
                            <div className="icons_box_first">
                                <div className="icons_box_second">
                                    <a href="https://healthfusion-4e69b.web.app/" className="icons_P" target="_blank">
                                        <button className="icon_btn">Live</button>
                                    </a>
                                    <a href="https://github.com/mahedy766584/health-fusion-client.git" className="icons_P" target="_blank">
                                        <button className="icon_btn">Client</button>
                                    </a>
                                    <a href="https://github.com/mahedy766584/health-fusion-server.git" className="icons_P" target="_blank">
                                        <button className="icon_btn icon_box">Server</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Projects;
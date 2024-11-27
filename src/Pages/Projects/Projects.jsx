import Container from "../../Components/Container/Container";
import "./projects.css";
import ProjectCart from "./ProjectCart";


import img1 from "../../assets/luxeLodgeImg/img1.png";
import img2 from "../../assets/luxeLodgeImg/img2.png";
import img3 from "../../assets/luxeLodgeImg/img3.png";
import img4 from "../../assets/luxeLodgeImg/img4.png";
import img5 from "../../assets/luxeLodgeImg/img5.png";
import img6 from "../../assets/luxeLodgeImg/img6.png";
import { Link } from "react-router-dom";

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
                                <button className="icon_btn">Detail</button>
                                <Link className="icon_btn" to="https://luxelodge-5b783.web.app/">
                                    <button>Live</button>
                                </Link>
                                <button className="icon_btn">Client</button>
                                <button className="icon_btn icon_box">Server</button>
                            </div>
                        </div>
                    </div>
                    {/* projects-2 */}
                    <div className="projects_box_second">
                        <div className="projects_carousel">
                            <ProjectCart img1={img1} img2={img2} img3={img3} img4={img4} img5={img5} img6={img6} />
                            <div className="icons_box_first">
                                <div className="icons_box_second">
                                    <button className="icon_btn">Detail</button>
                                    <Link className="icon_btn" to="https://luxelodge-5b783.web.app/">
                                        <button>Live</button>
                                    </Link>
                                    <button className="icon_btn">Client</button>
                                    <button className="icon_btn icon_box">Server</button>
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
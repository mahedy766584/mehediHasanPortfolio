/* eslint-disable react/no-unescaped-entities */
import Container from "../../Components/Container/Container";
// import { MdOutlineMail, MdPhoneInTalk } from "react-icons/md";
// import { IoLocationSharp } from "react-icons/io5";
// import { MdDriveFileRenameOutline } from "react-icons/md";



const About = () => {
    return (
        <div id="about">
            <Container>
                <div className="py-10">
                    <h1 className="text-5xl lg:text-5xl font-kanit font-semibold text-center py-9 mt-10">About Me</h1>
                    <div className="lg:flex lg:justify-between justify-center lg:items-start items-center">
                        <div className="bo-5 ">
                            <div className="card-p-5 font-kanit text-[20px] font-normal text-[#f2f3f4bb]">
                                <p>Hello! I'm a passionate web developer with expertise in building modern and responsive web applications. With a strong foundation in HTML, CSS, and Tailwind CSS, I create clean and user-friendly interfaces. My proficiency in React.js allows me to develop dynamic and interactive front-end experiences, while Node.js and Express.js power my back-end solutions.</p>
                                <p className="mt-5">I leverage Firebase for seamless authentication and real-time databases, and I integrate MongoDB to manage data in scalable and flexible ways. I am constantly exploring new technologies to push the boundaries of what’s possible on the web.</p>
                                <p className="mt-8 text-white">"Let's collaborate and build something amazing!_"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;
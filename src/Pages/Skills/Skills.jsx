import Container from "../../Components/Container/Container";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import reactJs from "../../assets/skillsItems/react.png"
import tailwindCss from "../../assets/skillsItems/taildwind.png"
import nodeJs from "../../assets/skillsItems/node.png"
import firebase from "../../assets/skillsItems/firbase.png"
import mongodb from "../../assets/skillsItems/mongodb.png"
import css from "../../assets/skillsItems/css.png"
import javascript from "../../assets/skillsItems/javascript.png"
import htmL from "../../assets/skillsItems/html.png"

const Skills = () => {



    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div id="skills">
            <Container>
                <div className="py-2">
                    <div className="text-center font-kanit tracking-wider flex flex-col justify-center items-center">
                        <h1 className="text-5xl lg:text-5xl font-kanit font-semibold py-5 ">Skills</h1>
                        <p className="text-[#f2f3f4bb] text-[18px] ">I’m proficient in building dynamic, scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). With expertise in JavaScript, I craft responsive, intuitive front-end interfaces using React.js and modern CSS frameworks. My back-end knowledge allows me to seamlessly integrate APIs and manage databases, ensuring full-stack efficiency. Additionally, I focus on delivering clean, maintainable code, optimizing performance, and enhancing user experiences through modern development tools like Git, Webpack, and Redux</p>
                    </div>
                    <div className="text-white py-8">

                        <div className="slider-container">
                            <Slider {...settings}>
                                <div className="card-slide slide-item overflow-hidden bg-gradient-to-t from-[#00DDD8] border-[#00DDD8]">
                                    <div className="mx-auto">
                                        <img className="w-[100px] h-[100px] mx-auto" src={reactJs} alt="ReatcJS" />
                                        <h1 className="mt-5 text-3xl font-medium text-white">react</h1>
                                        <p className="px-4 mt-5">Skilled in React.js, mastering components, hooks, and state management to create dynamic, scalable applications that deliver responsive, seamless, and high-performance user experiences.</p>
                                    </div>
                                </div>
                                <div className="card-slide overflow-hidden bg-gradient-to-t from-[#E44F26] border-[#E44F26]">
                                    <div className="mx-auto">
                                        <img className="w-[100px] h-[100px] mx-auto" src={htmL} alt="html" />
                                        <h1 className="mt-5 text-3xl font-medium text-white">html</h1>
                                        <p className="px-4 mt-5">Skilled in Tailwind CSS, creating responsive, modern designs with utility-first classes. I build clean, maintainable UIs efficiently, focusing on flexibility, speed, and seamless user experiences.</p>
                                    </div>
                                </div>
                                <div className="card-slide slide-item overflow-hidden bg-gradient-to-t from-[#44A8B3] border-[#44A8B3]">
                                    <div className="mx-auto">
                                        <img className="w-[100px] h-[100px] mx-auto" src={tailwindCss} alt="tailwind" />
                                        <h1 className="mt-5 text-3xl font-medium text-white">tailwind</h1>
                                        <p className="px-4 mt-5">Skilled in Tailwind CSS, creating responsive, modern designs with utility-first classes. I build clean, maintainable UIs efficiently, focusing on flexibility, speed, and seamless user experiences.</p>
                                    </div>
                                </div>
                                <div className="card-slide slide-item overflow-hidden bg-gradient-to-t from-[#205A46] border-[#205A46]">
                                    <div className="mx-auto">
                                        <img className="w-[100px] h-[100px] mx-auto" src={nodeJs} alt="NodeJs" />
                                        <h1 className="mt-5 text-3xl font-medium text-white">node</h1>
                                        <p className="px-4 mt-5">Proficient in Node.js, building scalable server-side applications and APIs. I handle asynchronous operations, ensuring fast, efficient back-end performance for seamless full-stack web development.</p>
                                    </div>
                                </div>
                                <div className="card-slide slide-item overflow-hidden bg-gradient-to-t from-[#8F5C2F] border-[#8F5C2F]">
                                    <div className="mx-auto">
                                        <img className="w-[100px] h-[100px] mx-auto" src={firebase} alt="firebase" />
                                        <h1 className="mt-5 text-3xl font-medium text-white">firebase</h1>
                                        <p className="px-4 mt-5">Skilled in Firebase, integrating real-time databases, authentication, and cloud functions. I streamline full-stack development with serverless architecture for scalable, responsive web applications.</p>
                                    </div>
                                </div>
                                <div className="card-slide overflow-hidden bg-gradient-to-t from-[#439A35] border-[#439A35]">
                                    <div className="mx-auto">
                                        <img className="w-[100px] h-[100px] mx-auto" src={mongodb} alt="mongodb" />
                                        <h1 className="mt-5 text-3xl font-medium text-white">mongodb</h1>
                                        <p className="px-4 mt-5">Proficient in MongoDB, designing flexible, scalable NoSQL databases. I manage data efficiently, ensuring seamless integration with back-end applications for dynamic, full-stack development.</p>
                                    </div>
                                </div>
                                <div className="card-slide overflow-hidden bg-gradient-to-t from-[#1572B6] border-[#1572B6]">
                                    <div className="mx-auto">
                                        <img className="w-[100px] h-[100px] mx-auto" src={css} alt="CSS" />
                                        <h1 className="mt-5 text-3xl font-medium text-white">CSS</h1>
                                        <p className="px-4 mt-5">Skilled in CSS, creating responsive, visually appealing designs with clean, maintainable code. I ensure consistency across devices, enhancing user experience through modern layouts and styling techniques.</p>
                                    </div>
                                </div>
                                <div className="card-slide overflow-hidden bg-gradient-to-t from-[#F5DE19] border-[#F5DE19]">
                                    <div className="mx-auto">
                                        <img className="w-[100px] h-[100px] mx-auto" src={javascript} alt="javascript" />
                                        <h1 className="mt-5 text-3xl font-medium text-white">javascript</h1>
                                        <p className="px-4 mt-5">Proficient in JavaScript, developing dynamic, interactive web applications. I utilize core concepts like ES6+ syntax, DOM manipulation, and asynchronous programming for responsive, high-performance user experiences.</p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Skills;


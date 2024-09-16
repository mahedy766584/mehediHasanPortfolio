import Skills from "../Skills/Skills";
import Hero from "./HeroSection/Hero";
import About from "../About/About"
import  Projects  from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Home = () => {
    return (
        <div className="bg-[#090917] text-white">
            <Hero/>
            <Skills/>
            <Projects/>
            <About/>
            <Contact/>
        </div>
    );
};

export default Home;
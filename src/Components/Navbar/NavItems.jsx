
const NavItems = () => {
    return (
        <ul className="lg:flex hidden gap-10 items-center text-lg">
            <li className={`hover:text-[#854CE6] duration-700`}><a href="#home">Home</a></li>
            <li className={`hover:text-[#854CE6] duration-700`}><a href="#skills">Skills</a></li>
            <li className={`hover:text-[#854CE6] duration-700`}><a href="#projects">Projects</a></li>
            <li className={`hover:text-[#854CE6] duration-700`}><a href="#about">About</a></li>
            <li className={`hover:text-[#854CE6] duration-700`}><a href="#contact">Contact</a></li>
        </ul>
    );
};

export default NavItems;
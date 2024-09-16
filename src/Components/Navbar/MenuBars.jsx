import { FaBars } from "react-icons/fa";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const MenuBars = () => {
    return (
        <Menu>
            <MenuButton><FaBars size={30} /></MenuButton>
            <MenuItems anchor="bottom" className={`bg-gradient-to-r from-[#0e0e27] to-[#21215a] w-full text-center space-y-2 py-3 mt-6  duration-700 font-kanit text-white`}>
                <MenuItem>
                    <li className={`hover:text-[#854CE6] duration-700 block data-[focus]:text-[#854CE6]`}><a href="#home">Home</a></li>
                </MenuItem>
                <MenuItem>
                    <li className={`hover:text-[#854CE6] duration-700 block data-[focus]:text-[#854CE6]`}><a href="#about">About</a></li>
                </MenuItem>
                <MenuItem>
                    <li className={`hover:text-[#854CE6] duration-700 block data-[focus]:text-[#854CE6]`}><a href="#sills">Skills</a></li>
                </MenuItem>
                <MenuItem>
                    <li className={`hover:text-[#854CE6] duration-700 block data-[focus]:text-[#854CE6]`}><a href="#projects">Projects</a></li>
                </MenuItem>
                <MenuItem>
                    <li className={`hover:text-[#854CE6] duration-700 block data-[focus]:text-[#854CE6]`}><a href="#contact">Contact</a></li>
                </MenuItem>
                <MenuItem>
                    <li className={`hover:text-[#854CE6] duration-700 block data-[focus]:text-[#854CE6]`}><a href="#contact"><button className="skew-btn border px-6 py-3 rounded-lg border-[#7909c8]">GitHub Profile</button></a></li>
                </MenuItem>
            </MenuItems>
        </Menu>
    );
};

export default MenuBars;
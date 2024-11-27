import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { SiHyperskill } from "react-icons/si";
import { RiContactsLine } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { Tooltip } from "@material-tailwind/react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="nav">
                <ul className="nav-list">
                    <li>
                        <Tooltip
                            content="Home"
                            animate={{
                                mount: { scale: 1, y: 0 },
                                unmount: { scale: 0, y: 25 },
                            }}
                            className="tooltip"
                        >
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `nav-icon ${isActive ? "text-mainColor bg-secondaryColor" : "text-whiteColor"}`
                                }
                            >
                                <IoHomeOutline className="nav-icon"/>
                            </NavLink>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip
                            content="About Me"
                            animate={{
                                mount: { scale: 1, y: 0 },
                                unmount: { scale: 0, y: 25 },
                            }}
                            className="tooltip"
                        >
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `nav-icon ${isActive ? "text-mainColor bg-secondaryColor" : "text-whiteColor"}`
                                }
                            >
                                <FaRegUser className="nav-icon"/>
                            </NavLink>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip
                            content="Skills"
                            animate={{
                                mount: { scale: 1, y: 0 },
                                unmount: { scale: 0, y: 25 },
                            }}
                            className="tooltip"
                        >
                            <NavLink
                                to="/skills"
                                className={({ isActive }) =>
                                    `nav-icon ${isActive ? "text-mainColor bg-secondaryColor" : "text-whiteColor"}`
                                }
                            >
                                <SiHyperskill className="nav-icon"/>
                            </NavLink>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip
                            content="Projects"
                            animate={{
                                mount: { scale: 1, y: 0 },
                                unmount: { scale: 0, y: 25 },
                            }}
                            className="tooltip"
                        >
                            <NavLink
                                to="/projects"
                                className={({ isActive }) =>
                                    `nav-icon ${isActive ? "text-mainColor bg-secondaryColor" : "text-whiteColor"}`
                                }
                            >
                                <GrProjects className="nav-icon"/>
                            </NavLink>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip
                            content="Contact"
                            animate={{
                                mount: { scale: 1, y: 0 },
                                unmount: { scale: 0, y: 25 },
                            }}
                            className="tooltip"
                        >
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `nav-icon ${isActive ? "text-mainColor bg-secondaryColor" : "text-whiteColor"}`
                                }
                            >
                                <RiContactsLine className="nav-icon"/>
                            </NavLink>
                        </Tooltip>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
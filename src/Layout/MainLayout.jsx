import { Outlet } from "react-router-dom";
import Navbar from "../Components/NewNavbar/Navbar";


const MainLayout = () => {
    return (
        <div className="relative">
            <div className=" relative">
                <Outlet />
                <Navbar />
            </div>
        </div>
    );
};

export default MainLayout;

{/* https://youtu.be/ck3YJDDlgaw */ }
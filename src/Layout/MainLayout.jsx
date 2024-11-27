import { Outlet } from "react-router-dom";
import Navbar from "../Components/NewNavbar/Navbar";
import background from "../assets/bg/bg10.png"; ///2/6/5/8/

const MainLayout = () => {
    return (
        <div className="relative">
            <div className="absolute w-full h-full">
                <img src={background} className="bg-center bg-cover bg-no-repeat bg-blend-overlay w-full h-full" />
            </div>
            <div className=" relative">
                <Outlet />
                <Navbar />
            </div>
        </div>
    );
};

export default MainLayout;

{/* https://youtu.be/ck3YJDDlgaw */ }
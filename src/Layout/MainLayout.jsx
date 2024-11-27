import { Outlet } from "react-router-dom";
import Navbar from "../Components/NewNavbar/Navbar";

const MainLayout = () => {
    return (
        <div className="bg-bgColor">
            <Outlet />
            <Navbar/>
        </div>
    );
};

export default MainLayout;

{/* https://youtu.be/ck3YJDDlgaw */}
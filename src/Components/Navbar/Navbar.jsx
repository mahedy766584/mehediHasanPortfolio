import Container from "../Container/Container";
import MenuBars from "./MenuBars";
import NavItems from "./NavItems";
import mLogo from "../../assets/logos/logo4.png"


const Navbar = () => {

    return (
        <div className="bg-[#090917] text-white font-kanit py-5 fixed w-full z-60 navbar">
            <Container>
                <div className="flex justify-between items-center overflow-hidden">
                    <div className="flex items-center">
                        <img
                            src={mLogo}
                            alt="Mehedi Hasan"
                            className="lg:w-[40px] lg:h-[40px] w-8 h-8"
                        />
                        <h1 className="font-kanit lg:text-3xl text-2xl inline-table text-style">Mehedi Hasan</h1>
                    </div>
                    <div>
                        <NavItems />
                    </div>
                    <div className="lg:flex hidden">
                        <button className="skew-btn border px-6 py-3 rounded-lg border-[#7909c8]">GitHub Profile</button>
                    </div>
                    <div className="lg:hidden">
                        <MenuBars />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
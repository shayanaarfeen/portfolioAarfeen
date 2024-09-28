import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import FooterNavbar from "./components/footer/FooterNavBar";

const Layout = () => {
  return (
    <>
      <div className="bg-darkGrey text-white">

        <NavBar />
        <div className="main-content">
          <Outlet />
        </div>
        <FooterNavbar />
        <Footer />
        
      </div>
    </>
  );
};

export default Layout;

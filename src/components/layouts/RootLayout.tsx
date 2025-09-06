import { Outlet } from "react-router";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
          <div className="flex-1">
              <Outlet/>
          </div>
            <Footer/>
        </div>
    );
};

export default RootLayout;
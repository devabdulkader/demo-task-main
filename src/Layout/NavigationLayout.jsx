import { Outlet } from "react-router-dom";
import ScrollToTop from "@/Components/ChildrenComponents/ScrollToTop";
import SideBar from "@/Components/SideBar";
import BottomNavbar from "@/Components/BottomNavbar";
import Navbar from "@/Components/Navbar";
const NavigationLayout = () => {
  return (
    <>
      <ScrollToTop />
      <div className=" bg-white dark:bg-black">
        {/* Sidebar */}
        {/* <SideBar /> */}
        <Navbar />
        {/* Main content */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
      <BottomNavbar />
    </>
  );
};

export default NavigationLayout;

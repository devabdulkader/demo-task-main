import { Outlet } from "react-router-dom";
import ScrollToTop from "@/Components/ChildrenComponents/ScrollToTop";
import SideBar from "../Components/shared/header/SideBar";
import BottomNavbar from "../Components/shared/header/BottomNavbar";
import Navbar from "../Components/shared/header/Navbar";
import FeatureSidebar from "../Components/shared/header/FeatureSidebar";
const FeatureLayout = () => {
  return (
    <>
      <ScrollToTop />
      <div className=" bg-white dark:bg-black">
        <FeatureSidebar />
        {/* <Navbar /> */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
      <BottomNavbar />
    </>
  );
};

export default FeatureLayout;

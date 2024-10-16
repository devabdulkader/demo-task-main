import { Link, useLocation, useParams } from "react-router-dom";
import { GiQueenCrown } from "react-icons/gi";

import {
  CreditCard,
  FileText,
  Home,
  Info,
  LayoutGrid,
  Mail,
  ShieldCheck,
  User,
  UserPlus,
} from "lucide-react";
import { useAppContext } from "../../../context";
import ConfettiButton from "../../Confetti";
import ModeToggle from "./ModeToggle";
import { BsArrowRight } from "react-icons/bs";
import { CiGrid31 } from "react-icons/ci";
import { FiTool } from "react-icons/fi";
import { IoHelpCircleOutline } from "react-icons/io5";

const FeatureSidebar = () => {
  const context = useAppContext();
  const { username, _id } = context.sharedState;
  const location = useLocation();
  const { device } = useParams();

  // Define the paths where the sidebar should be hidden
  const hideSidebarPaths = [
    "/about",
    "/pricing",
    "/privacy",
    "/terms",
    "/signup",
    "/login",
    "/design",
    "/screenshot-mockup",
    "/code",
    `/device-mockups/${device}`,
    "/videos/typewriter",
    "/tweet-to-screenshot",
    "/reddit-screenshot",
    "/testimonial",
    "/youtube-screenshot",
    "/twitter",
    "/qr-code",
    "/short-blog",
    "/instagram",
    "/bar-code",
  ];

  // Check if the current location path is in the list of paths where sidebar should be hidden
  const shouldHideSidebar = hideSidebarPaths.includes(location.pathname);
  return (
    <>
      {!shouldHideSidebar && (
        <aside className="w-64  relative bg-black dark:bg-black shadow-md hidden md:block select-none min-h-screen  p-2 text-white ">
          <div className="flex items-center justify-between bg-black py-2 rounded-xl w-full">
            <Link to="/sign-up">
              <div
                className="font-inter z-30   text-center bg-gradient-to-t from-[#C92698] to-[#FA5D3A] "
                style={{
                  position: "relative",
                  borderRadius: "12px", // Rounded corners
                  padding: "1px", // Padding for the gradient border
                }}
              >
                <div
                  className="flex items-center text-white bg-black"
                  style={{
                    borderRadius: "inherit", // Inherit border-radius
                    padding: "4px 16px", // Padding for the text inside
                  }}
                >
                  Sign Up
                  <BsArrowRight className="text-xl ml-3" />
                </div>
              </div>
            </Link>

            <div className="">
              <GiQueenCrown className="text-white w-5 h-5 mr-3" />
            </div>
          </div>

          <nav className="space-y-4 text-gray-200 w-full">
            <Link to="/" className="block w-full ">
              <span className="inline-flex items-center w-full px-4 py-2 rounded-lg bg-gray-900 transition-colors duration-200">
                <CiGrid31 className="w-5 h-5 mr-3" />
                Templates
              </span>
            </Link>
            <Link to="/more" className="block w-full ">
              <span className="inline-flex items-center w-full px-4 py-2 rounded-lg bg-gray-900 transition-colors duration-200">
                <FiTool className="w-5 h-5 mr-3" />
                Handy Tools
              </span>
            </Link>
            <Link to="/pricing" className="block w-full">
              <span className="inline-flex items-center w-full px-4 py-2 rounded-lg bg-gray-900 transition-colors duration-200">
                <CreditCard className="w-5 h-5 mr-3" />
                Boilerplate
              </span>
            </Link>

            {/* {_id && _id.length > 0 ? (
              <Link to={`/${username}`} className="block w-full group">
                <span className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-900 transition-colors duration-200">
                  <User className="w-5 h-5 mr-3" />
                  Profile
                </span>
              </Link>
            ) : (
              <Link to="/signup" className="block w-full group">
                <span className="inline-flex items-center px-4 py-2 rounded-lg group-hover:bg-gray-100 dark:group-hover:bg-gray-900 transition-colors duration-200">
                  <UserPlus className="w-5 h-5 mr-3" />
                  Sign Up
                </span>
              </Link>
            )} */}
          </nav>
          <div className="absolute bottom-4 left-0 px-4 flex flex-col items-center space-y-2 text-white w-full">
            {/* <ModeToggle />
            <ConfettiButton /> */}
            <Link to="/pricing" className="block w-full ">
              <span className="inline-flex items-center w-full px-4 py-2 rounded-lg bg-gray-900 transition-colors duration-200">
                <IoHelpCircleOutline className="text-white w-5 h-5 mr-3" />
                Help
              </span>
            </Link>
            <Link to="/pricing" className="block w-full ">
              <span className="inline-flex items-center w-full px-4 py-2 rounded-lg  bg-gray-900 transition-colors duration-200">
                <GiQueenCrown className=" w-5 h-5 mr-3" />
                Upgrade
              </span>
            </Link>
          </div>
        </aside>
      )}
    </>
  );
};

export default FeatureSidebar;

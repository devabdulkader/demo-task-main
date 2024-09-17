import { Link } from "react-router-dom";
import { CiDark } from "react-icons/ci";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineAccountTree } from "react-icons/md";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faqs", label: "FAQs" },
  { href: "/dashboard", label: "Dashboard" },
];

const Navbar = () => {
  return (
    <section>
      <nav className="font-inter mx-auto h-auto w-full lg:px-20 z-30 fixed top-0 lg:top-10 bg-transparent">
        <div className="flex px-6 bg-black rounded-xl items-center justify-between py-1 lg:px-10 xl:px-20">
          {/* Logo */}
          <Link
            to="/"
            className="font-inter font-bold text-2xl flex justify-center items-center gap-2 text-white rounded-lg lg:px-6"
          >
            <MdOutlineAccountTree className="text-2xl text-white" />
            PixLab |
          </Link>

          {/* Navigation Links */}
          <div className="mt-14 hidden xl:flex space-y-8 lg:mt-0 lg:space-x-1 lg:space-y-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-inter text-white rounded-lg lg:px-6"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Sign Up Button */}
          <div className="flex justify-center gap-5 items-center">
            <CiDark className="text-white text-3xl cursor-pointer" />

            <div
              className={`flex flex-col space-y-8 py-2 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0`}
            >
              <Link to="/sign-up">
                <div
                  className="font-inter z-30 text-white text-center"
                  style={{
                    position: "relative",
                    borderRadius: "15px", // Rounded corners
                    padding: "1px", // Padding for the gradient border
                    background:
                      "linear-gradient(358.3deg, rgb(201,38,152) 12.9%, rgb(250,93,58) 130.3%)", // Gradient background
                  }}
                >
                  <div
                    className="flex items-center"
                    style={{
                      borderRadius: "inherit", // Inherit border-radius
                      backgroundColor: "#000", // Background for the inner button content
                      padding: "10px 20px", // Padding for the text inside
                    }}
                  >
                    Sign Up
                    <BsArrowRight className="text-xl ml-3" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

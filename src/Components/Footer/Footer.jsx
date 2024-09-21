import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="block">
        <div className="mx-auto w-full max-w-2xl px-5 py-16 md:px-10 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Ready to Elevate Your Visual Content?
            </h2>
            <button className="px-4 py-2 rounded-xl overflow-hidden border-2 border-purple-500 text-gray-900 dark:text-gray-100">
              Get Started Now &rarr;
            </button>
          </div>
          <div className="grid mb-10 grid-cols-[auto] justify-between gap-8 sm:grid-cols-[auto_auto_auto]">
            <div className="flex flex-col items-start">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase">
                Menu
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2">
                  <Link to="/about" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/features" className="hover:underline">
                    Features
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/pricing" className="hover:underline">
                    Pricing
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/dashboard" className="hover:underline">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase">
                Other Links
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2">
                  <Link to="/" className="hover:underline">
                    Links ipsum
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="hover:underline">
                    More Products
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="hover:underline">
                    Links ipsum
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="hover:underline">
                    Links ipsum
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase">
                Other Links
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2">
                  <Link to="/" className="hover:underline">
                    Links ipsum
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="hover:underline">
                    More Products
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="hover:underline">
                    Links ipsum
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="hover:underline">
                    Links ipsum
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              Copyright © 2017 - 2025,{" "}
              <Link to="https://www.pixlab.in/" className="hover:underline">
                Pixlab
              </Link>{" "}
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

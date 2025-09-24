import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import Button from "./Button";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import vector from "../assets/Vector.webp";
import { HashLink } from "react-router-hash-link";

function Rootlayout() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const location = useLocation();

  
  

  // close menu on resize desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
        setMobileDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  const toggleMobileDropdown = (menu) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="relative w-full bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] z-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4 min-h-[70px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold">
            <img src={logo} className="h-8" alt="Logo" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <ul
              className="
                flex flex-wrap gap-6 items-center
                md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-4
                lg:flex lg:flex-nowrap lg:gap-8
              "
            >
              {/* Case Studies */}
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("case")}
                  className="flex items-center gap-1 hover:text-gray-500/80 transition"
                >
                  Case Studies
                  <IoIosArrowDown
                    className={`transition-transform ${
                      dropdown === "case" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {dropdown === "case" && (
                  <div className="absolute left-0 mt-4 bg-white shadow-lg rounded-md w-72 z-50">
                    <ul>
                      <li>
                        <Link
                          to="/Yalla"
                          onClick={() => setDropdown(null)}
                          className="flex items-start gap-2.5 p-3 hover:bg-gray-100 rounded-md"
                        >
                          <img className="h-6 w-6 mt-1" src={vector} alt="icon" />
                          <div>
                            <p className="font-semibold text-sm">Yalla Delivery</p>
                            <p className="text-xs text-gray-500">
                              Food and Grocery, in One Place
                            </p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              {/* Use Cases */}
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("use")}
                  className="flex items-center gap-1 hover:text-gray-500/80 transition"
                >
                  Use Cases
                  <IoIosArrowDown
                    className={`transition-transform ${
                      dropdown === "use" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {dropdown === "use" && (
                  <div className="absolute left-0 mt-4 bg-white shadow-lg rounded-md w-[600px] max-w-[90vw] grid grid-cols-2 gap-6 p-4 z-50">
                    <Link
                      to="/Milkdelivery"
                      onClick={() => setDropdown(null)}
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                    >
                      <img src={vector} alt="icon" className="h-6 w-6" />
                      Milk Delivery Solution
                    </Link>
                  </div>
                )}
              </li>

              {/* Normal Links */}
              <li>
                <Link
                  to="/Documentaion"
                  onClick={() => setDropdown(null)}
                  className="hover:text-gray-500/80"
                >
                  Documentation
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  onClick={() => setDropdown(null)}
                  className="hover:text-gray-500/80"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  to="/features"
                  onClick={() => setDropdown(null)}
                  className="hover:text-gray-500/80"
                >
                  Features
                </Link>
              </li>

              {/* Pricing HashLink (Fixed Nested li issue) */}
              <li>
                <Link to="/#ouerprices"
                  className="font-semibold"
                  onClick={() => setOpen(false)}> Pricing</Link>
                
              </li>
            </ul>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button />
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700"
          >
            {open ? <IoMdClose size={24} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-50">
          <div className="bg-white w-80 h-full p-6 flex flex-col gap-6">
            {/* Top */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold">
                <img src={logo} alt="Logo" className="h-8" />
              </div>
              <IoMdClose
                size={22}
                className="cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>

            {/* Items */}
            <ul className="flex flex-col gap-4">
              {/* Case Studies */}
              <li>
                <button
                  onClick={() => toggleMobileDropdown("case")}
                  className="flex items-center justify-between w-full font-semibold"
                >
                  Case Studies
                  <IoIosArrowDown
                    className={`transition-transform ${
                      mobileDropdown === "case" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileDropdown === "case" && (
                  <ul className="ml-4 mt-2 space-y-2 text-sm">
                    <li>
                      <Link
                        to="/Yalla"
                        onClick={() => {
                          setMobileDropdown(null);
                          setOpen(false);
                        }}
                        className="block hover:text-gray-600"
                      >
                        Yalla Delivery
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Use Cases */}
              <li>
                <button
                  onClick={() => toggleMobileDropdown("use")}
                  className="flex items-center justify-between w-full font-semibold"
                >
                  Use Cases
                  <IoIosArrowDown
                    className={`transition-transform ${
                      mobileDropdown === "use" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileDropdown === "use" && (
                  <ul className="ml-4 mt-2 space-y-2 text-sm">
                    <li>
                      <Link
                        to="/Milkdelivery"
                        onClick={() => {
                          setMobileDropdown(null);
                          setOpen(false);
                        }}
                        className="block hover:text-gray-600"
                      >
                        Milk Delivery Solution
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Normal Links */}
              <li>
                <Link
                  to="/Documentaion"
                  className="font-semibold"
                  onClick={() => setOpen(false)}
                >
                  Documentation
                </Link>
              </li>

              <li>
                <Link
                  to="/features"
                  className="font-semibold"
                  onClick={() => setOpen(false)}
                >
                  Features
                </Link>
              </li>

              {/* Pricing (Mobile) */}
              <li>
                <HashLink
                  smooth
                  to="/#ouerprices"
                  className="font-semibold"
                  onClick={() => setOpen(false)}
                >
                  Pricing
                </HashLink>
              </li>
            </ul>

            <div className="mt-auto">
              <Button className="w-full" />
            </div>
          </div>
        </div>
      )}

      {/* Outlet for Pages */}
      <div className="w-full">
        <Outlet />
      </div>
    </>
  );
}

export default Rootlayout;

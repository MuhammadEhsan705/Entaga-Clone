import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import Button from "./Button";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import vector from "../assets/Vector.webp";
import { IoMdClose } from "react-icons/io";

function Rootlayout() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null); // for desktop dropdowns
  const [caseOpen, setCaseOpen] = useState(false); // for mobile
  const [useOpen, setUseOpen] = useState(false); // for mobile

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
        setCaseOpen(false);
        setUseOpen(false);
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

  return (
    <>
      {/* Navbar */}
      <nav className="h-[70px] relative w-full bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] z-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/">
            <img src={logo} className="h-10 md:h-8" alt="Logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <ul className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
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

                <div
                  className={`absolute left-0 mt-4 bg-white shadow-lg rounded-md w-72 z-50 ${
                    dropdown === "case" ? "block" : "hidden"
                  }`}
                >
                  <ul>
                    <li>
                      <Link
                        to="/Yalla"
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
                    <li>
                      <Link
                        to="/StylizeNOW"
                        className="flex items-start gap-2.5 p-3 hover:bg-gray-100 rounded-md"
                      >
                        <img className="h-6 w-6 mt-1" src={vector} alt="icon" />
                        <div>
                          <p className="font-semibold text-sm">StylizeNOW</p>
                          <p className="text-xs text-gray-500">
                            On-demand mobile hair services
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/EasyEats"
                        className="flex items-start gap-2.5 p-3 hover:bg-gray-100 rounded-md"
                      >
                        <img className="h-6 w-6 mt-1" src={vector} alt="icon" />
                        <div>
                          <p className="font-semibold text-sm">Easy Eats</p>
                          <p className="text-xs text-gray-500">
                            Campus food delivery company
                          </p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
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

                <div
                  className={`absolute left-0 mt-4 bg-white shadow-lg rounded-md w-[750px] grid grid-cols-3 gap-6 z-50 ${
                    dropdown === "use" ? "grid" : "hidden"
                  }`}
                >
                  <div className="space-y-3">
                    <li>
                      <Link
                        to="/gift"
                        className="flex items-start gap-2.5 p-3 hover:bg-gray-100 rounded-md"
                      >
                        <img className="h-6 w-6 mt-1" src={vector} alt="icon" />
                        <p className="text-sm font-medium">
                          Gift Delivery Solution
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/liquor"
                        className="flex items-start gap-2.5 p-3 hover:bg-gray-100 rounded-md"
                      >
                        <img className="h-6 w-6 mt-1" src={vector} alt="icon" />
                        <p className="text-sm font-medium">
                          Liquor Delivery Solution
                        </p>
                      </Link>
                    </li>
                  </div>
                  <div className="space-y-3">
                    <li>
                      <Link
                        to="/laundry"
                        className="flex items-start gap-2.5 p-3 hover:bg-gray-100 rounded-md"
                      >
                        <img className="h-6 w-6 mt-1" src={vector} alt="icon" />
                        <p className="text-sm font-medium">
                          Laundry On-Demand Services
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Milkdelivery"
                        className="flex items-start gap-2.5 p-3 hover:bg-gray-100 rounded-md"
                      >
                        <img className="h-6 w-6 mt-1" src={vector} alt="icon" />
                        <p className="text-sm font-medium">
                          Milk Delivery Solution
                        </p>
                      </Link>
                    </li>
                  </div>
                  <div className="space-y-3">
                    <li>
                      <Link
                        to="/courier"
                        className="flex items-start gap-2.5 p-3 hover:bg-gray-100 rounded-md"
                      >
                        <img className="h-6 w-6 mt-1" src={vector} alt="icon" />
                        <p className="text-sm font-medium">
                          Courier Delivery Solution
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/grocery"
                        className="flex items-start gap-2.5 p-3 hover:bg-gray-100 rounded-md"
                      >
                        <img className="h-6 w-6 mt-1" src={vector} alt="icon" />
                        <p className="text-sm font-medium">
                          Grocery Delivery Solution
                        </p>
                      </Link>
                    </li>
                  </div>
                </div>
              </li>

              <li>
                <Link
                  to="/documentation"
                  className="hover:text-gray-500/80 transition"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="hover:text-gray-500/80 transition"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-gray-500/80 transition"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <Button />
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="menu-btn"
            type="button"
            onClick={() => setOpen(!open)}
            className="menu-btn inline-block md:hidden active:scale-90 transition"
          >
            {open ? <IoMdClose size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[70px] left-0 w-full bg-white shadow-lg z-40 transition-transform duration-300 md:hidden ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col gap-4 p-6">
          {/* Case Studies */}
          <li>
            <button
              onClick={() => setCaseOpen(!caseOpen)}
              className="flex items-center justify-between w-full text-left font-medium"
            >
              Case Studies
              <IoIosArrowDown
                className={`transition-transform ${
                  caseOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {caseOpen && (
              <ul className="pl-4 mt-2 space-y-2">
                <li>
                  <Link to="/Yalla" className="block hover:text-gray-500">
                    Yalla Delivery
                  </Link>
                </li>
                <li>
                  <Link to="/StylizeNOW" className="block hover:text-gray-500">
                    StylizeNOW
                  </Link>
                </li>
                <li>
                  <Link to="/EasyEats" className="block hover:text-gray-500">
                    Easy Eats
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Use Cases */}
          <li>
            <button
              onClick={() => setUseOpen(!useOpen)}
              className="flex items-center justify-between w-full text-left font-medium"
            >
              Use Cases
              <IoIosArrowDown
                className={`transition-transform ${
                  useOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {useOpen && (
              <ul className="pl-4 mt-2 space-y-2">
                <li>
                  <Link to="/gift" className="block hover:text-gray-500">
                    Gift Delivery
                  </Link>
                </li>
                <li>
                  <Link to="/liquor" className="block hover:text-gray-500">
                    Liquor Delivery
                  </Link>
                </li>
                <li>
                  <Link to="/laundry" className="block hover:text-gray-500">
                    Laundry Services
                  </Link>
                </li>
                <li>
                  <Link to="/Milkdelivery" className="block hover:text-gray-500">
                    Milk Delivery
                  </Link>
                </li>
                <li>
                  <Link to="/courier" className="block hover:text-gray-500">
                    Courier Delivery
                  </Link>
                </li>
                <li>
                  <Link to="/grocery" className="block hover:text-gray-500">
                    Grocery Delivery
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/documentation" className="block hover:text-gray-500">
              Documentation
            </Link>
          </li>
          <li>
            <Link to="/features" className="block hover:text-gray-500">
              Features
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="block hover:text-gray-500">
              Pricing
            </Link>
          </li>
          <li>
            <Button />
          </li>
        </ul>
      </div>

      <div className="w-full">
        <Outlet />
      </div>
    </>
  );
}

export default Rootlayout;

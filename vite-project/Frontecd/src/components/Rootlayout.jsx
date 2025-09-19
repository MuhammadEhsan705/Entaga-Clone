import React from 'react';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from "../assets/logo.webp"
import Button from './Button';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import vector from "../assets/Vector.webp"
import { IoMdClose } from "react-icons/io";


function Rootlayout() {
  const [open, setOpen] = useState(false);
  const [caseOpen, setCaseOpen] = useState(false);
  const [useOpen, setUseOpen] = useState(false);

  return (
    <>
      <div>
        <nav className="h-[70px] relative w-full px-3 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">

          <Link to="/">
            <img src={logo} className='h-10 md:h-8' />
          </Link>

          <ul className="md:flex hidden items-center gap-6">


            {/* Dropdown with Arrow */}
            <li className="relative group">
              <button

                className="flex items-center gap-1 hover:text-gray-500/80 transition"
              >
                Case Studies
                <IoIosArrowDown
                  className="transition-transform group-hover:rotate-180"
                />
              </button>

              <ul
                className="absolute left-0 mt-4 bg-white shadow-lg rounded-md w-72 transition-all duration-300 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
              >
                <li>
                  <Link
                    to=""
                    className="flex items-start gap-2.5 p-3 hover:bg-gray-100 rounded-md"
                  >
                    <img className="h-6 w-6 mt-1" src={vector} alt="icon" />
                    <div>
                      <Link to="/Yalla" className="font-semibold text-sm">Yalla Delivery</Link>
                      <p className="text-xs text-gray-500">Food and Grocery, in One Place</p>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link
                    to=""
                    className="flex items-start gap-2.5 p-3 hover:bg-gray-100 rounded-md"
                  >
                    <img className="h-6 w-6 mt-1" src={vector} alt="icon" />
                    <div>
                      <p className="font-semibold text-sm">StylizeNOW</p>
                      <p className="text-xs text-gray-500">
                        Platform that provides on-demand mobile hair
                      </p>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link
                    to=""
                    className="flex items-start gap-2.5 p-3 hover:bg-gray-100 rounded-md"
                  >
                    <img className="h-6 w-6 mt-1" src={vector} alt="icon" />
                    <div>
                      <p className="font-semibold text-sm">Easy Eats</p>
                      <p className="text-xs text-gray-500">Campus food delivery company</p>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link
                    to=""
                    className="flex items-start gap-2.5 p-3 hover:bg-gray-100 rounded-md"
                  >
                    <img className="h-6 w-6 mt-1" src={vector} alt="icon" />
                    <div>
                      <p className="font-semibold text-sm">Vinifynd</p>
                      <p className="text-xs text-gray-500">
                        Wine retail and delivery business
                      </p>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link
                    to=""
                    className="flex items-start gap-2.5 p-3 hover:bg-gray-100 rounded-md"
                  >
                    <img className="h-6 w-6 mt-1" src={vector} alt="icon" />
                    <div>
                      <p className="font-semibold text-sm">Snap Delivered</p>
                      <p className="text-xs text-gray-500">
                        Food delivery platform powered by Enatega
                      </p>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link
                    to=""
                    className="flex items-start gap-2.5 p-3 hover:bg-gray-100 rounded-md"
                  >
                    <img className="h-6 w-6 mt-1" src={vector} alt="icon" />
                    <div>
                      <p className="font-semibold text-sm">Borku Delivery</p>
                      <p className="text-xs text-gray-500">
                        Bringing African Cuisine to Food Delivery
                      </p>
                    </div>
                  </Link>
                </li>
              </ul>

            </li>
            {/* ---------------ise case---------- */}
            <li className="relative group">
              <button

                className="flex items-center gap-1 hover:text-gray-500/80 transition"
              >
                Use Cases
                <IoIosArrowDown
                  className="transition-transform group-hover:rotate-180"
                />
              </button>

              <ul
                className="absolute c items-center mt-4 bg-white shadow-lg rounded-md w-[750px] grid grid-cols-3 gap-6  opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-300"
              >
                {/* Column 1 */}
                <div className="space-y-3">
                  <li>
                    <Link
                      to="/gift"
                      className="flex items-start gap-2.5 p-3 hover:bg-gray-100 rounded-md"
                    >
                      <img className="h-6 w-6 mt-1" src={vector} alt="icon" />
                      <p className="text-sm font-medium">Gift Delivery Solution</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/liquor"
                      className="flex items-start gap-2.5 p-3 hover:bg-gray-100 rounded-md"
                    >
                      <img className="h-6 w-6 mt-1" src={vector} alt="icon" />
                      <p className="text-sm font-medium">Liquor Delivery Solution</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/food-beverage"
                      className="flex items-start gap-2.5 p-3 hover:bg-gray-100 rounded-md"
                    >
                      <img className="h-6 w-6 mt-1" src={vector} alt="icon" />
                      <p className="text-sm font-medium">Food And Beverage Solution</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/laundry"
                      className="flex items-start gap-2.5 p-3 hover:bg-gray-100 rounded-md"
                    >
                      <img className="h-6 w-6 mt-1" src={vector} alt="icon" />
                      <p className="text-sm font-medium">Laundry On-Demand Services Solution</p>
                    </Link>
                  </li>
                </div>

                {/* Column 2 */}
                <div className="space-y-3">
                  <li>
                    <Link
                      to="/Milkdelivery"
                      className="flex items-start gap-2.5 p-3 hover:bg-gray-100 rounded-md"
                    >
                      <img className="h-6 w-6 mt-1" src={vector} alt="icon" />
                      <p className="text-sm font-medium">Milk Delivery Solution</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/flower"
                      className="flex items-start gap-2.5 p-3 hover:bg-gray-100 rounded-md"
                    >
                      <img className="h-6 w-6 mt-1" src={vector} alt="icon" />
                      <p className="text-sm font-medium">Flower Delivery Solution</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courier"
                      className="flex items-start gap-2.5 p-3 hover:bg-gray-100 rounded-md"
                    >
                      <img className="h-6 w-6 mt-1" src={vector} alt="icon" />
                      <p className="text-sm font-medium">Courier Delivery Solution</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/roadside"
                      className="flex items-start gap-2.5 p-3 hover:bg-gray-100 rounded-md"
                    >
                      <img className="h-6 w-6 mt-1" src={vector} alt="icon" />
                      <p className="text-sm font-medium">Roadside Assistance Services Solution</p>
                    </Link>
                  </li>
                </div>

                {/* Column 3 */}
                <div className="space-y-3">
                  <li>
                    <Link
                      to="/grocery"
                      className="flex items-start gap-2.5 p-3 hover:bg-gray-100 rounded-md"
                    >
                      <img className="h-6 w-6 mt-1" src={vector} alt="icon" />
                      <p className="text-sm font-medium">Grocery Delivery Solution</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/medicine"
                      className="flex items-start gap-2.5 p-3 hover:bg-gray-100 rounded-md"
                    >
                      <img className="h-6 w-6 mt-1" src={vector} alt="icon" />
                      <p className="text-sm font-medium">Medicine Delivery Solution</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/beauty"
                      className="flex items-start gap-2.5 p-3 hover:bg-gray-100 rounded-md"
                    >
                      <img className="h-6 w-6 mt-1" src={vector} alt="icon" />
                      <p className="text-sm font-medium">Beauty Services Scheduling Solution</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/document"
                      className="flex items-start gap-2.5 p-3 hover:bg-gray-100 rounded-md"
                    >
                      <img className="h-6 w-6 mt-1" src={vector} alt="icon" />
                      <p className="text-sm font-medium">Document Delivery Solution</p>
                    </Link>
                  </li>
                </div>
              </ul>
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

          {/* ----------------------mobile menue------------------ */}

          <div className="hidden md:block"><Button /></div>

          <button aria-label="menu-btn" type="button" onClick={() => setOpen(!open)} className="menu-btn inline-block md:hidden active:scale-90 transition">

            <FaBars />

          </button>

          <div
            className={`mobile-menu absolute top-[70px] left-0 w-72 bg-white p-6 md:hidden transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"
              }`}
          >
            {/* Close Btn */}
            <div className="flex justify-end">
              <button onClick={() => setOpen(false)}>
                <IoMdClose />
              </button>
            </div>

            <ul className="items-center gap-6 mt-8">
              {/* -------- Case Studies ---------- */}
              <li>
                <button
                  onClick={() => setCaseOpen(!caseOpen)}
                  className="flex items-center gap-1 hover:text-gray-500/80 transition w-full justify-between"
                >
                  Case Studies
                  <IoIosArrowDown
                    className={`transition-transform ${caseOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {caseOpen && (
                  <ul className="mt-2 bg-white shadow-lg rounded-md w-72 transition-all duration-300 space-y-2">
                    <li>
                      <Link
                        to="//Yalla"
                        className="flex px-3 py-2 hover:bg-gray-100 rounded-md" >
                        Yalla Delivery
                      </Link>
                    </li>

                    <li>
                      <Link
                        to=""
                        className="flex px-3 py-2 hover:bg-gray-100 rounded-md">
                        StylizeNOW

                      </Link>
                    </li>

                    <li>
                      <Link
                        to=""
                        className="flex px-3 py-2 hover:bg-gray-100 rounded-md">
                        Easy Eats

                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* -------- Use Cases ---------- */}
              <li>
                <button
                  onClick={() => setUseOpen(!useOpen)}
                  className="flex items-center gap-1 hover:text-gray-500/80 transition w-full justify-between"
                >
                  Use Cases
                  <IoIosArrowDown
                    className={`transition-transform ${useOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {useOpen && (
                  <ul className="mt-2 bg-white shadow-lg rounded-md transition-all duration-300  gap-4 p-4">
                    <li>
                      <Link to="" className="flex justify-center p-3.5 hover:text-blue-600">
                        Gift Delivery Solution
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="flex justify-center p-3.5 hover:text-blue-600">
                        Liquor Delivery Solution
                      </Link>
                    </li>
                    <li>
                      <Link to="" className=" flex justify-center p-3.5 hover:text-blue-600">
                        Food And Beverage Solution
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="flex justify-center p-3.5 hover:text-blue-600">
                        Laundry On-Demand Services Solution
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="flex justify-start p-3.5 hover:text-blue-600">
                        Milk Delivery Solution
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="flex justify-start p-3.5 hover:text-blue-600">
                        Flower Delivery Solution
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="flex justify-start p-3.5 hover:text-blue-600">
                        Courier Delivery Solution
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="flex justify-start p-3.5 hover:text-blue-600">
                        Roadside Assistance Services Solution
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="flex justify-start p-3.5 hover:text-blue-600">
                        Grocery Delivery Solution
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="flex justify-start p-3.5 hover:text-blue-600">
                        Medicine Delivery Solution
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="flex justify-start p-3.5 hover:text-blue-600">
                        Beauty Services Scheduling Solution
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="flex justify-start p-3.5  hover:text-blue-600">
                        Document Delivery Solution
                      </Link>
                    </li>
                  </ul>


                )}
              </li>

              {/* -------- Other Links ---------- */}
              <li>
                <Link
                  to="/docs"
                  className="hover:text-gray-500/80 transition"
                  onClick={() => setOpen(false)}
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="hover:text-gray-500/80 transition"
                  onClick={() => setOpen(false)}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-gray-500/80 transition"
                  onClick={() => setOpen(false)}
                >
                  Pricing
                </Link>
              </li>
            </ul>



            <Link  className='btn mt-6'><Button /></Link>

          </div>


        </nav>


      </div>
      <Outlet />
    </>
  );
}

export default Rootlayout;

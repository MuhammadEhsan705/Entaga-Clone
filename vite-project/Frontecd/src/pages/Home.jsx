import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import avatar from "../assets/Avatars-270.webp"
import Button from '../components/Button';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";
import yalla from "../assets/yalla-delivery.webp"
import Borku from "../assets/Borku.webp"
import snap from "../assets/snap-delivered.webp"
import Vinifynd from "../assets/Vinifynd.webp"
import Group from "../assets/Group-1000001460.webp"
import customerapp from "../assets/customer-app-1-323x0.webp"
import rider from "../assets/rider-app-323x0.webp"
import resturent from "../assets/restaurant-app-323x0.webp"
import webapp from "../assets/Web-app-323x0.webp"
import adminapp from "../assets/admin-web-dashborad-323x0.webp"
import Server from "../assets/server-1-323x0.webp"
import adminwebdashboard from "../assets/enatega-dashboard-520x0.webp"
import Updateimage from "../assets/img-533x0.webp"


import Customer from './Customer';
import Resturent from './Resturent';
import Rider from './Rider';
import AdminWeb from './AdminWeb';
import Webapp from './Webapp';
import { IoFastFood } from "react-icons/io5";
import { TbUserQuestion } from "react-icons/tb";
import { PiFlowerLotus } from "react-icons/pi";
import { BsBagFill } from "react-icons/bs";
import { LuMilk } from "react-icons/lu";
import { IoMdDocument } from "react-icons/io";
import { FaBottleDroplet } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { IoGiftSharp } from "react-icons/io5";
import { TbRoadSign } from "react-icons/tb";
import { FaHandHoldingWater } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import { RiComputerLine } from "react-icons/ri";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoRefresh } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import thubnail from "../assets/Thumbnail-VSL-img.webp"
import "swiper/css";
import "swiper/css/pagination";
import Form from './Form';
import Footer from '../components/Footer';
function Home() {
    const [play2, setPlay2] = useState(false);

    const slides = [
        {

            src: thubnail,
            video: "https://player.vimeo.com/video/1103420364?autoplay=1",
        },
        {

            src: thubnail,
            video: "https://player.vimeo.com/video/1103420364?autoplay=1",
        },
    ];


    const [open, setOpen] = useState(null);
    const words = ["Grocery Stores", "Cafes", "Restaurants", "Food Chains"];
    const [index, setIndex] = useState(0);
    const [play, setPlay] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <section className="delevery management grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 sm:px-6 md:px-8 py-10 md:py-16 max-w-7xl mx-auto">
                {/* Left Content */}
                <div className="space-y-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
                        The Leading Open Source Food Delivery Management Solution For{" "}
                        <motion.span
                            key={index}
                            className="text-purple-600 inline-block"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -30, opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            {words[index]}
                        </motion.span>
                    </h1>

                    <p className="text-gray-600 text-base sm:text-lg">
                        Get full control over your food delivery platform with Enatega’s open
                        source solution. Launch in as little as 5 days, customize it to your
                        business needs, and enjoy lifetime updates — all with complete code
                        ownership.
                    </p>

                    {/* Ratings */}
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            <img
                                src={avatar}
                                alt="users"
                                className="  rounded-full object-cover"
                            />
                        </div>

                        <div>
                            <div className="flex text-yellow-500 text-lg sm:text-xl">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </div>
                            <span className="text-gray-700 text-sm sm:text-base">
                                4.7/5 out of 150+ users
                            </span>
                        </div>
                    </div>

                    <div>
                        <Button />
                    </div>
                </div>

                {/* Right Video */}
                <div className="bg-[#fbf9fe] flex items-center justify-center w-full rounded-2xl p-4 sm:p-6 md:p-10">
                    {!play ? (
                        <div className="relative w-full max-w-2xl aspect-video">
                            <img
                                src={thubnail}
                                alt="Video Thumbnail"
                                className="w-full h-full object-cover rounded-2xl"
                            />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    onClick={() => setPlay(true)}
                                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-purple-600 flex items-center justify-center text-white text-2xl sm:text-3xl shadow-lg hover:bg-purple-700 transition"
                                >
                                    ▶
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="relative w-full max-w-2xl aspect-video">
                            <iframe
                                src="https://player.vimeo.com/video/1103420364?autoplay=1"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full rounded-2xl"
                                title="Vimeo Video"
                            ></iframe>
                        </div>
                    )}
                </div>
            </section>


            <section className='bg-[#faf9fe]  w-full py-20 '>
                <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
                    <motion.h1
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-4xl font-bold"
                    >
                        Check out products powered by Enatega
                    </motion.h1>

                    <motion.span
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-gray-600"
                    >
                        For more info, Schedule a call with us
                    </motion.span>
                </div>
                {/* ---------------card---------------- */}
                <div className="mt-11 px-4">
                    <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">

                        {/* Card 1 */}
                        <div className="relative p-4 bg-white rounded-xl shadow-md text-center space-y-3 w-48 h-56">
                            <img src={yalla} alt="Yalla" className="w-20 mx-auto pt-4" />
                            <h2 className="text-lg font-semibold">Yalla</h2>
                            <p className="text-gray-500 text-sm">
                                60,000 active users achieved in their first year.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="relative p-4 bg-white rounded-xl shadow-md text-center space-y-3 w-48 h-56">
                            <img src={snap} alt="Snap Delivered" className="w-20 mx-auto pt-2 grayscale" />
                            <h2 className="text-lg font-semibold">Snap Delivered</h2>
                            <p className="text-gray-500 text-sm">
                                Snap Delivered has onboarded over 100 stores so far.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="relative p-4 bg-white rounded-xl shadow-md text-center space-y-3 w-48 h-56">
                            <img src={Vinifynd} alt="Easy Eats" className="w-20 mx-auto pt-2 grayscale" />
                            <h2 className="text-lg font-semibold">Easy Eats</h2>
                            <p className="text-gray-500 text-sm">
                                Successfully launched a brand new startup with investors.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="relative p-4 bg-white rounded-xl shadow-md text-center space-y-3 w-48 h-56">
                            <img src={Borku} alt="Borku" className="w-20 mx-auto pt-2 grayscale" />
                            <h2 className="text-lg font-semibold">Borku</h2>
                            <p className="text-gray-500 text-sm">
                                Borku has saved $100,000 USD in commissions.
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="relative p-4 bg-white rounded-xl shadow-md text-center space-y-3 w-48 h-56">
                            <img src={Group} alt="Vinifynd" className="w-20 mx-auto pt-2 grayscale" />
                            <h2 className="text-lg font-semibold">Vinifynd</h2>
                            <p className="text-gray-500 text-sm">
                                The first ever wine delivery solution in the region.
                            </p>
                        </div>

                    </div>
                </div>

            </section>
            <section id='ouerdemo' className='mt-16'>
                <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
                    <motion.h1
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-4xl font-bold"
                    >
                        Check Out Our Live Demos
                    </motion.h1>


                    <motion.span
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-gray-600"
                    >
                        Preview the complete delivery experience — Customer, Vendor, Rider & Admin in action!
                    </motion.span>
                </div>
                <div className="flex flex-wrap justify-center gap-20 max-w-7xl mx-auto mt-20">
                    <div>
                        <div className='customer bg-[#fbf9fe] max-w-fit rounded-3xl '>
                            <img src={customerapp} />
                        </div>
                        <div className=' p-11'>
                            <h1>1. Customer App</h1>
                            <Link onClick={() => setOpen("Customer")} className="text-blue-800 flex items-center">View Demo <CiPlay1 /></Link>
                        </div>
                        {open === "Customer" && <Customer onClose={() => setOpen(null)} />}

                    </div>
                    {/* -rider---- */}
                    <div>
                        <div className='customer bg-[#fbf9fe] max-w-fit rounded-3xl '>
                            <img src={rider} />
                        </div>
                        <div className=' p-11'>
                            <h1>2. Rider App</h1>
                            <Link onClick={() => setOpen("Rider")} className="text-blue-800 flex items-center">View Demo <CiPlay1 /></Link>
                        </div>
                        {open === "Rider" && <Rider onClose={() => setOpen(null)} />}

                    </div>
                    {/* -resturent------------- */}
                    <div>
                        <div className=' bg-[#fbf9fe] max-w-fit rounded-3xl '>
                            <img src={resturent} />
                        </div>
                        <div className=' p-11'>
                            <h1>3. Restaurant App</h1>
                            <Link onClick={() => setOpen("Resturent")} className="text-blue-800 flex items-center">View Demo <CiPlay1 /></Link>
                        </div>
                        {open === "Resturent" && <Resturent onClose={() => setOpen(null)} />}

                    </div>
                </div>


            </section>
            <section className='mt-16'>

                <div className="flex flex-wrap justify-center items-center gap-20 max-w-7xl mx-auto mt-20">
                    <div>
                        <div className='customer bg-[#fbf9fe] max-w-fit rounded-3xl '>
                            <img src={webapp} />
                        </div>
                        <div className=' p-11'>
                            <h1>4. Web App</h1>
                            <Link onClick={() => setOpen("Webapp")} className="text-blue-800 flex items-center">View Demo <CiPlay1 /></Link>
                        </div>
                        {open === "Webapp" && <Webapp onClose={() => setOpen(null)} />}

                    </div>
                    {/* Admin dahboard---- */}
                    <div>
                        <div className='customer bg-[#fbf9fe] max-w-fit rounded-3xl '>
                            <img src={adminapp} />
                        </div>
                        <div className=' p-11'>
                            <h1>5. Admin Web Dashboard</h1>
                            <Link onClick={() => setOpen("AdminWeb")} className="text-blue-800 flex items-center">View Demo <CiPlay1 /></Link>
                        </div>
                        {open === "AdminWeb" && <AdminWeb onClose={() => setOpen(null)} />}

                    </div>
                    {/* -server------------- */}
                    <div>
                        <div className=' bg-[#fbf9fe] max-w-fit rounded-3xl '>
                            <img src={Server} className='w-80 h-64' />
                        </div>
                        <div className=' p-11'>
                            <h1>6. Server</h1>
                            <Link to="https://v1-api-enatega-multivendor-stage.up.railway.app/graphql" className="text-blue-800 flex items-center">View Demo <CiPlay1 /></Link>
                        </div>


                    </div>
                </div>


            </section>
            <section className="mt-24">
                {/* Heading */}
                <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
                    <h1 className="text-blue-800 flex items-center">Use Cases</h1>
                    <motion.h1
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-4xl font-bold"
                    >
                        Beyond Delivery: A Smarter Way to Serve
                    </motion.h1>

                    <motion.span
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-gray-600"
                    >
                        More than just a food delivery platform
                    </motion.span>
                </div>

                {/* Cards */}
                <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto pt-11 px-4">
                    <div className="h-28 flex flex-col items-center justify-center bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
                        <IoFastFood className="text-purple-500 text-4xl mb-2" />
                        <h1 className="text-sm font-medium text-gray-800">Food Delivery</h1>
                    </div>

                    <div className="h-28 flex flex-col items-center justify-center bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
                        <PiFlowerLotus className="text-purple-500 text-4xl mb-2" />
                        <h1 className="text-sm font-medium text-gray-800">Flower Delivery</h1>
                    </div>
                    <div className="h-28 flex flex-col items-center justify-center bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
                        <BsBagFill className="text-purple-500 text-4xl mb-2" />
                        <h1 className="text-sm font-medium text-gray-800">Grocery Delivery</h1>
                    </div>
                    <div className="h-28 flex flex-col items-center justify-center bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
                        <LuMilk className="text-purple-500 text-4xl mb-2" />
                        <h1 className="text-sm font-medium text-gray-800">Milk Delivery</h1>
                    </div>
                    <div className="h-28 flex flex-col items-center justify-center bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
                        <IoMdDocument className="text-purple-500 text-4xl mb-2" />
                        <h1 className="text-sm font-medium text-gray-800">Document Delivery</h1>
                    </div>
                    <div className="h-28 flex flex-col items-center justify-center bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
                        <FaBottleDroplet className="text-purple-500 text-4xl mb-2" />
                        <h1 className="text-sm font-medium text-gray-800">Liquor Delivery</h1>
                    </div>
                    <div className="h-28 flex flex-col items-center justify-center bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
                        <GiMedicines className="text-purple-500 text-4xl mb-2" />
                        <h1 className="text-sm font-medium text-gray-800">Medicine Delivery</h1>
                    </div>
                    <div className="h-28 flex flex-col items-center justify-center bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
                        <IoGiftSharp className="text-purple-500 text-4xl mb-2" />
                        <h1 className="text-sm font-medium text-gray-800">Courier Service</h1>
                    </div>
                    <div className="h-28 flex flex-col items-center justify-center bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
                        <IoFastFood className="text-purple-500 text-4xl mb-2" />
                        <h1 className="text-sm font-medium text-gray-800">Beauty Services</h1>
                    </div>
                    <div className="h-28 flex flex-col items-center justify-center bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
                        <TbRoadSign className="text-purple-500 text-4xl mb-2" />
                        <h1 className="text-sm font-medium text-gray-800">Roadside Assistance</h1>
                    </div>
                    <div className="h-28 flex flex-col items-center justify-center bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
                        <IoFastFood className="text-purple-500 text-4xl mb-2" />
                        <h1 className="text-sm font-medium text-gray-800">Gift Delivery</h1>
                    </div>
                    <div className="h-28 flex flex-col items-center justify-center bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
                        <FaHandHoldingWater className="text-purple-500 text-4xl mb-2" />
                        <h1 className="text-sm font-medium text-gray-800">Laundry On-Demand Services</h1>
                    </div>


                </div>
            </section>
            <section className="who-is-it-for mt-56 px-6">
                <span className=" flex  justify-center items-center">
                    <TbUserQuestion className="text-purple-500 " />
                </span>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

                    {/* Left side  */}
                    <div className="relative w-full md:w-1/2 flex justify-center">
                        <img src={adminwebdashboard} alt="Admin Dashboard" className="rounded-lg shadow-md" />

                    </div>

                    {/* Right side  */}
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="md:w-1/2 space-y-4 text-gray-700">

                        <h2 className="text-3xl font-bold">Who’s It For?</h2>

                        <div className="space-y-4">

                            <div className="flex flex-col">
                                <div className="flex gap-2">
                                    <TiTickOutline className="text-purple-600 w-10 h-10 " />
                                    <div>
                                        <h1 className="font-bold text-2xl">Flexible Deployment Options</h1>
                                        <p className="text-gray-600 mt-1">
                                            You can deploy the platform yourself if you have the required technical expertise,
                                            or opt for our professional deployment services at an additional cost.
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="flex flex-col">
                                <div className="flex gap-2">
                                    <TiTickOutline className="text-purple-600 w-10 h-10 " />
                                    <div>
                                        <h1 className="font-bold text-2xl">Fast Platform Launch</h1>
                                        <p className="text-gray-600 mt-1">
                                            For those looking to launch their own delivery solution in a few days!
                                            Get set up and start delivering in under two weeks!
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="flex flex-col">
                                <div className="flex gap-2">
                                    <TiTickOutline className="text-purple-600 w-10 h-10 " />
                                    <div>
                                        <h1 className="font-bold text-2xl">Technical Familiarity Recommended</h1>
                                        <p className="text-gray-600 mt-1">
                                            Familiarity with the platform's tech stack and app store compliance guidelines
                                            is recommended for a smooth launch.
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="flex flex-col">
                                <div className="flex gap-2">
                                    <TiTickOutline className="text-purple-600 w-10 h-10 " />
                                    <div>
                                        <h1 className="font-bold text-2xl">Customization & Deployment Support</h1>
                                        <p className="text-gray-600 mt-1">
                                            No Dev team or technical skills? Not a problem! We have partnered with Ninjas Code
                                            to offer expert customization and deployment services.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="flex gap-4 pt-4">
                            <HashLink to="/#ouerdemo" className="bg-purple-600 text-white px-5 py-2 rounded-lg shadow hover:bg-purple-700">

                                Live Demos →
                            </HashLink >
                            <button className="border px-5 py-2 rounded-lg shadow hover:bg-gray-100">
                                Documentation →
                            </button>
                        </div>
                    </motion.div>

                </div>
            </section>
            <section className=" mt-56 px-6">
                <span className=" flex  justify-center items-center">
                    <FiRefreshCcw className="text-purple-500 " />
                </span>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

                    {/* Left side  */}
                    <div className="relative w-full md:w-1/2 flex justify-center">
                        <img src={Updateimage} alt="Updateimage" className="rounded-lg shadow-md" />

                    </div>

                    {/* Right side  */}
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="md:w-1/2 space-y-4 text-gray-700">

                        <h2 className="text-3xl font-bold">Enjoy Free Lifetime Updates</h2>
                        <p>Enatega’s frontend is fully open source, giving you the ability to track real-time updates and address any issues with complete transparency. Our backend, though proprietary, is shared with you during every new release, ensuring your system remains updated with the latest technologies for android and iOS app development.</p>


                        <button>
                            <Link to="" className=" flex items-center border px-5 py-2 rounded-lg shadow hover:bg-gray-100">
                                <FaGithub /> View Projects</Link>
                        </button>

                    </motion.div>

                </div>
            </section>
            <section className="mt-24">
                {/* Heading */}
                <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
                    <h1 className="text-blue-800 flex items-center">Features</h1>
                    <motion.h1
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-4xl font-bold"
                    >
                        What's included? Absolutely everything.
                    </motion.h1>

                    <motion.span
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-gray-600"
                    >
                        Absolutely everything you need to get a fast and efficient delivery business off the ground!
                    </motion.span>
                </div>

                {/* Cards */}
                <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto pt-11 px-4">

                    <div className="flex flex-col items-center text-center px-4">
                        <RiComputerLine className="text-purple-500 text-5xl mb-3" />
                        <h1 className="text-lg font-semibold text-gray-900">Full Source Code</h1>
                        <p className="text-gray-600 text-sm mt-1">
                            Complete access to the entire code for future updates and customizations
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center px-4">
                        <AiFillDollarCircle className="text-purple-500 text-5xl mb-3" />
                        <h1 className="text-lg font-semibold text-gray-900">No Additional Charges</h1>
                        <p className="text-gray-600 text-sm mt-1">
                            What you pay upfront is final - no hidden or extra fees
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center px-4">
                        <BsBagFill className="text-purple-500 text-5xl mb-3" />
                        <h1 className="text-lg font-semibold text-gray-900">All Essential Apps Included</h1>
                        <p className="text-gray-600 text-sm mt-1">
                            Get full access to the customer, rider and restaurant apps for iOS and Android
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center px-4">
                        <RiComputerLine className="text-purple-500 text-5xl mb-3" />
                        <h1 className="text-lg font-semibold text-gray-900">Powerful Admin Dashboard</h1>
                        <p className="text-gray-600 text-sm mt-1">
                            Manage everything from restaurants, riders and food items - all within a single powerful dashboard
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center px-4">
                        <IoRefresh className="text-purple-500 text-5xl mb-3" />
                        <h1 className="text-lg font-semibold text-gray-900">Lifetime Updates</h1>
                        <p className="text-gray-600 text-sm mt-1">
                            Enjoy free updates for life, keeping your delivery solution always up-to-date
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center px-4">
                        <IoSunnySharp className="text-purple-500 text-5xl mb-3" />
                        <h1 className="text-lg font-semibold text-gray-900">2 Hours Free Technical Consultation</h1>
                        <p className="text-gray-600 text-sm mt-1">
                            Two hours of expert guidance to address your technical needs
                        </p>
                    </div>
                </div>
            </section>
            <section className='Testimonials mt-16'>
                <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
                    <h1 className="text-blue-800 flex items-center">Testimonials</h1>
                    <motion.h1
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-4xl font-bold"
                    >
                        Reviews from our Customer
                    </motion.h1>

                    <motion.span
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-gray-600"
                    >
                        Hear what our happy customers are saying about Enatega!
                    </motion.span>
                </div>
                {/* Swiper Slider */}
                <div className="flex justify-center">
                    <div className="w-full max-w-3xl">
                        <Swiper
                            modules={[Pagination]}
                            pagination={{ clickable: true }}
                            spaceBetween={20}
                            slidesPerView={1}
                            className="rounded-2xl shadow-lg"
                        >
                            {slides.map((slide) => (
                                <SwiperSlide key={slide.id}>
                                    <div className="flex justify-center items-center bg-white rounded-2xl overflow-hidden">
                                        <div className="bg-[#fbf9fe] flex items-center justify-center w-full p-6">
                                            {!play ? (
                                                <div className="relative w-full max-w-2xl aspect-video">
                                                    <img
                                                        src={slide.src}
                                                        alt="Video Thumbnail"
                                                        className="w-full h-full object-cover rounded-2xl"
                                                    />
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <button
                                                            onClick={() => setPlay(true)}
                                                            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-purple-600 flex items-center justify-center text-white text-2xl sm:text-3xl shadow-lg hover:bg-purple-700 transition"
                                                        >
                                                            ▶
                                                        </button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="relative w-full max-w-2xl aspect-video">
                                                    <iframe
                                                        src={slide.video}
                                                        frameBorder="0"
                                                        allow="autoplay; fullscreen; picture-in-picture"
                                                        allowFullScreen
                                                        className="w-full h-full rounded-2xl"
                                                        title="Vimeo Video"
                                                    ></iframe>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

            </section>
            <section id='ouerprices' className='Pricing mt-40'>
                <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
                    <h1 className="text-blue-800 flex items-center">Pricing</h1>
                    <motion.h1
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-4xl font-bold"
                    >
                        Transparent, Flexible Pricing
                    </motion.h1>

                    <motion.span
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-gray-600 flex flex-col text-wrap"
                    >
                        Enatega has a simple pricing model. No recurring subscriptions and no additional charges on delivery. <span className="text-blue-800 ">Just pay once</span>  and get the whole solution, no strings attached.
                    </motion.span>
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-8 p-8">
                    {/* Premium  */}
                    <div className=" md:w-96  border rounded-2xl shadow-lg overflow-hidden">
                        <div className="bg-purple-900 text-white font-semibold text-center py-2">
                            Most Popular
                        </div>
                        <div className="p-6">
                            <span className="text-sm rounded-2xl bg-gray-300 p-2  font-medium">Premium Plan</span>
                            <h2 className="text-2xl font-bold mt-2 mb-4">
                                Feature-Rich Delivery Suite
                            </h2>
                            <p className="text-gray-600 text-sm mb-6">
                                Ideal for growing businesses seeking advanced features, scalability
                                and long-term value.
                            </p>
                            <ul className="space-y-3 text-gray-700">
                                {[
                                    "Modern and beautifully designed UI across all apps",
                                    "Rich in features for smooth, scalable operations",
                                    "Built using the latest and most efficient technology stack",
                                    "Includes Admin, Rider, Restaurant, Web and Customer app",
                                    "Full Source Code provided upon purchase",
                                    "No hidden charges, subscription fees, or delivery-based costs",
                                    "No Additional Charges per Delivery",
                                    "Lifetime Access to all Future Updates",
                                    "Openly Available Documentation and Tutorials",
                                    "Free 2 hours technical consultation with Enatega developers",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-green-500">✔</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 flex flex-col gap-3">
                                <button className="bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"><Link to="/form" >
                                    Get A Quote
                                </Link></button>
                                <div className="flex justify-between">
                                    <HashLink to="/#ouerdemo" className="border px-4 py-2 rounded-lg hover:bg-gray-100">

                                    View Demo
                                    </HashLink >
                                   

                                    <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
                                        View GitHub Repo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enterprise  */}
                    <div className="md:w-96  border rounded-2xl shadow-lg overflow-hidden bg-purple-900 text-white">
                        <div className="p-6">
                            <span className="text-sm text-purple-200 font-medium">Enterprise Plan</span>
                            <h2 className="text-2xl font-bold mt-2 mb-4">
                                Custom Plan – Tailored for You
                            </h2>
                            <p className="text-purple-200 text-sm mb-6">
                                Best for enterprises that need advanced features and deployment
                                support.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Everything in Premium Plan + Custom deployment and development",
                                    "Custom Pricing (Installments Available - Pay only for deployment and modifications upfront)",
                                    "Feature integration tailored to your business needs",
                                    "Full system modification as per your requirements",
                                    "Continuous collaboration with Enatega developers",
                                    "Advanced support and personalized technical guidance",
                                    "Development handled by Ninjas Code",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-green-400">✔</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-36 flex flex-col gap-3">
                            <button className="bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"><Link to="/form" >
                                    Get A Quote
                                </Link></button>
                                <button className="bg-white text-purple-900 py-2 rounded-lg hover:bg-gray-200">
                                    Visit NinjasCode
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Form />



            <Footer />







        </>
    );
}

export default Home;

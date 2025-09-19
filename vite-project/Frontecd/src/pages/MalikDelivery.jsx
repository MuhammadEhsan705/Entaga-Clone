import React from 'react';
import btn1 from "../assets/app-store-btn-176x0.webp";
import btn2 from "../assets/google-play-btn-1-176x0.webp";
import milkapp from "../assets/Milk-delivery-220x0.webp";
import milkdeleiv from "../assets/Milk-delivery-customer-440x0.webp";
import riderapp from "../assets/Milk-delivery-rider-440x0.webp";
import store from "../assets/Milk-delivery-store-440x0.webp";
import brand from "../assets/brand-398x0.webp"
import vender from "../assets/vendors-1-398x0.webp"
import brandtracking from "../assets/tracking-1-398x0.webp"
import appsstore from "../assets/apps-1-398x0.webp"
import { HashLink } from 'react-router-hash-link';
import { CheckCircle2 } from "lucide-react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Form from './Form';
import Footer from '../components/Footer';

function MilkDelivery() {
    return (
        <>
            <section className="w-full relative overflow-hidden">

                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                    <img
                        src={milkapp}
                        alt="Milk Delivery App"
                        className="hidden md:block z-10"
                    />
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] relative z-0">
                    <div className="bg-white flex flex-col justify-center px-6 py-12 md:py-16 md:px-12 lg:px-20 z-20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
                            Enatega as a{" "}
                            <span className="text-purple-600">Milk Delivery App</span>
                        </h2>
                        <p className="mt-4 text-gray-600 leading-relaxed max-w-md text-sm sm:text-base">
                            Enatega isnt limited to food delivery. It is a flexible and
                            scalable solution that can power your online milk delivery business
                            with ease.
                        </p>
                    </div>


                    <div className="bg-gradient-to-r from-[#7075f3] to-[#8e6cf5] flex flex-col items-center justify-center text-center px-6 py-12 md:py-16 z-20">

                        <p className="text-white font-medium max-w-md text-sm sm:text-base relative z-20">
                            Whether you are a single milk store or managing a marketplace of vendors!
                        </p>


                        <div className="flex gap-3 mt-6 relative z-20 flex-wrap justify-center">
                            <img src={btn1} alt="App Store" className="h-10 sm:h-12" />
                            <img src={btn2} alt="Google Play" className="h-10 sm:h-12" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white px-6 py-16 md:px-12 lg:px-20">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-2xl md:text-3xl font-bold leading-snug text-gray-900">
                        A Complete
                        <span className="text-purple-600">Milk Delivery</span>{" "}
                        Experience For The Modern Customer
                    </h2>


                    <p className="mt-3 text-gray-600 max-w-3xl">
                        The milk industry is evolving. Customers expect more than just a
                        checkout page. They want a smooth, personalized, and dependable
                        experience from the moment they browse to the moment the milk is
                        delivered.
                    </p>


                    <p className="mt-6 font-semibold text-gray-800">
                        Enatega Supports That With:
                    </p>


                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        {/* Left Side */}
                        <p className="text-gray-600 leading-relaxed max-w-md">
                            Whether the delivery is urgent or scheduled in advance, your
                            customers can select and send milk in just a few steps.
                        </p>

                        {/* Right Side - Features */}
                        <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
                            <ul className="space-y-4 text-gray-800">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                    <span>A wide selection of milk .</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                    <span>Immediate or scheduled delivery.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                    <span>In-app order personalization.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                    <span>
                                        Real-time updates throughout the delivery process.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white px-6 py-16 md:px-12 lg:px-20">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-2xl md:text-3xl font-bold leading-snug text-gray-900">
                        On-Demand
                        <span className="text-purple-600"> Milk Delivery</span>
                        That Works
                    </h2>


                    <p className="mt-3 text-gray-600 max-w-3xl">
                        People dont want to wait. Enatega helps your business respond to that by offering a complete, on-demand delivery solution.
                    </p>


                    <p className="mt-6 font-semibold text-gray-800">
                        Enatega Supports That With:
                    </p>


                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        {/* Left Side */}


                        <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
                            <ul className="space-y-4 text-gray-800">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                    <span>A customizable online Milk Delivery system.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                    <span>Real-time order tracking.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                    <span>Delivery scheduling options.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                    <span>
                                        Personalized features such as milk notes and tipping.
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <p className="text-gray-600 leading-relaxed max-w-md">
                            Whether the delivery is urgent or scheduled in advance, your
                            customers can select and send milk in just a few steps.
                        </p>

                    </div>

                </div>
            </section>
            <section className="">
                <div className="bg-white flex flex-col justify-center items-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
                        What You Get with Enatega’s
                        <span className="text-purple-600">Milk Delivery Platform</span>
                    </h2>
                    <p className="">
                        The complete toolkit for delivery success; Enatega houses all necessary apps, simplifying your operational needs.
                    </p>
                </div>

                <div className="flex  md:flex-row items-center md:items-start pl-36 pt-24">


                    <div className="md:w-1/2 space-y-4 text-gray-700">

                        <h2 className="text-3xl font-bold">Customer App</h2>
                        <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
                            <ul className="space-y-4 text-gray-800">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                    <span>A customizable online Milk Delivery system.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                    <span>Real-time order tracking.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                    <span>Delivery scheduling options.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                    <span>
                                        Personalized features such as milk notes and tipping.
                                    </span>
                                </li>
                            </ul>
                        </div>




                        <div className="flex gap-4 pt-4">
                            <HashLink to="/#ouerdemo" className="bg-purple-600 text-white px-5 py-2 rounded-lg shadow hover:bg-purple-700">

                                Live Demos →
                            </HashLink >
                            <button className="border px-5 py-2 rounded-lg shadow hover:bg-gray-100">
                                Documentation →
                            </button>
                        </div>
                    </div>
                    {/* Left side  */}
                    <div className="relative w-full md:w-1/2 flex justify-center">
                        <img src={milkdeleiv} alt="Admin Dashboard" className="rounded-lg shadow-md" />

                    </div>

                </div>
            </section>
            <section>
                <div className="flex  md:flex-row items-center md:items-start pl-36 pt-24">
                    <div className="relative w-full md:w-1/2 flex justify-center">
                        <img src={store} alt="Admin Dashboard" className="rounded-lg shadow-md" />

                    </div>


                    <div className="md:w-1/2 space-y-4 text-gray-700">

                        <h2 className="text-3xl font-bold">Store App</h2>
                        <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
                            <ul className="space-y-4 text-gray-800">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                    <span>Accept and process new orders.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                    <span>Update product availability.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                    <span>Monitor delivery progress.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                    <span>
                                        Access store-level analytics.
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <HashLink to="/#ouerdemo" className="bg-purple-600 text-white px-5 py-2 rounded-lg shadow hover:bg-purple-700">

                                Live Demos →
                            </HashLink >
                            <button className="border px-5 py-2 rounded-lg shadow hover:bg-gray-100">
                                Documentation →
                            </button>
                        </div>
                    </div>



                </div>

            </section>
            <section>
                <div className="flex  md:flex-row items-center md:items-start pl-36 pt-24">
                    <div className="relative w-full md:w-1/2 flex justify-center">
                        <img src={riderapp} alt="Admin Dashboard" className="rounded-lg shadow-md" />

                    </div>


                    <div className="md:w-1/2 space-y-4 text-gray-700">

                        <h2 className="text-3xl font-bold">Rider App</h2>
                        <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
                            <ul className="space-y-4 text-gray-800">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                    <span>Instant order alerts.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                    <span>Map integration for accurate delivery.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                    <span>Order history access.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                    <span>
                                        Real-time delivery updates.
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <HashLink to="/#ouerdemo" className="bg-purple-600 text-white px-5 py-2 rounded-lg shadow hover:bg-purple-700">

                                Live Demos →
                            </HashLink >
                            <button className="border px-5 py-2 rounded-lg shadow hover:bg-gray-100">
                                Documentation →
                            </button>
                        </div>
                    </div>



                </div>

            </section>
            <section className='mt-40'>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className="text-2xl md:text-3xl font-bold leading-snug text-gray-900">
                        Why Use Enatega for
                        <span className="text-purple-600">Milk Delivery</span>{" "}

                    </h2>
                    <div className=''>
                        <h1 className='flex'>More than just a food delivery platform</h1>
                    </div>

                </div>
                <div className='grid grid-cols-2 gap-2  p-12'>
                    <div className="bg-purple-50 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center max-w-md mx-auto">
                        
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">
                            Fully White-Label And Customizable
                        </h2>
                        <img src={brand} alt="Brand Customization" className="w-full max-w-sm" />
                    </div>
                    <div className="bg-purple-50 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center max-w-md mx-auto">
                        
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">
                        Works for individual vendors or marketplace operators
                        </h2>
                        <img src={vender} alt="Brand Customization" className="w-full max-w-sm" />
                    </div>
                    <div className="bg-purple-50 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center max-w-md mx-auto">
                        
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">
                        Multiple apps designed for every user type
                        </h2>
                        <img src={brandtracking} alt="Brand Customization" className="w-full max-w-sm" />
                    </div>
                    <div className="bg-purple-50 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center max-w-md mx-auto">
                        
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">
                        Real-time logistics and tracking tools
                        </h2>
                        <img src={appsstore} alt="Brand Customization" className="w-full max-w-sm" />
                    </div>
                </div>
            </section>
            <section className='Pricing mt-40'>
                <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
                    <h1 className="text-blue-800 flex items-center">Pricing</h1>
                    <motion.h1
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-4xl font-bold"
                    >
                        Transparent, Flexible Pricing
                    </motion.h1>

                    <motion.span
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
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
                                <button className="bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
                                    Get A Quote
                                </button>
                                <div className="flex justify-between">
                                    <Link><button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
                                        View Demo
                                    </button> </Link>
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
                                <button className="bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
                                    Get A Quote
                                </button>
                                <button className="bg-white text-purple-900 py-2 rounded-lg hover:bg-gray-200">
                                    Visit NinjasCode
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section>
            <Form/>
            </section>
            <Footer/>
            


        </>


    );
}

export default MilkDelivery;

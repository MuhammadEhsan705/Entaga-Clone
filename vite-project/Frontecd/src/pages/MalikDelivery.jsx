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
            {/* HERO */}
            <section className="w-full relative overflow-hidden">
                <div className="absolute inset-0 hidden md:flex justify-center items-center pointer-events-none">
                    <img src={milkapp} alt="Milk Delivery App" className="z-10" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] relative z-0">
                    <div className="bg-white flex flex-col justify-center px-6 py-12 sm:px-8 md:py-16 md:px-12 lg:px-20 z-20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
                            Enatega as a{" "}
                            <span className="text-purple-600">Milk Delivery App</span>
                        </h2>
                        <p className="mt-4 text-gray-600 leading-relaxed max-w-md text-sm sm:text-base">
                            Enatega isn’t limited to food delivery. It powers your online milk delivery business
                            with ease.
                        </p>
                    </div>

                    <div className="bg-gradient-to-r from-[#7075f3] to-[#8e6cf5] flex flex-col items-center justify-center text-center px-6 py-12 md:py-16 z-20">
                        <p className="text-white font-medium max-w-md text-sm sm:text-base">
                            Whether you are a single milk store or managing a marketplace of vendors!
                        </p>
                        <div className="flex gap-3 mt-6 flex-wrap justify-center">
                            <img src={btn1} alt="App Store" className="h-10 sm:h-12" />
                            <img src={btn2} alt="Google Play" className="h-10 sm:h-12" />
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="w-full bg-white px-6 sm:px-8 md:px-12 lg:px-20 py-16">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        A Complete <span className="text-purple-600">Milk Delivery</span> Experience
                    </h2>
                    <p className="mt-3 text-gray-600 max-w-3xl">
                        The milk industry is evolving. Customers want smooth, personalized, dependable experiences.
                    </p>

                    <p className="mt-6 font-semibold text-gray-800">Enatega Supports That With:</p>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <p className="text-gray-600 leading-relaxed max-w-md">
                            Urgent or scheduled, customers can send milk in just a few steps.
                        </p>
                        <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
                            <ul className="space-y-4 text-gray-800">
                                {[
                                    "A wide selection of milk.",
                                    "Immediate or scheduled delivery.",
                                    "In-app order personalization.",
                                    "Real-time updates during delivery."
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ON-DEMAND */}
            <section className="w-full bg-white px-6 sm:px-8 md:px-12 lg:px-20 py-16">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        On-Demand <span className="text-purple-600">Milk Delivery</span> That Works
                    </h2>
                    <p className="mt-3 text-gray-600 max-w-3xl">
                        People don’t want to wait. Enatega helps your business offer fast, reliable delivery.
                    </p>

                    <p className="mt-6 font-semibold text-gray-800">Enatega Supports That With:</p>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
                            <ul className="space-y-4 text-gray-800">
                                {[
                                    "Customizable Milk Delivery system.",
                                    "Real-time order tracking.",
                                    "Delivery scheduling options.",
                                    "Milk notes & tipping."
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-gray-600 leading-relaxed max-w-md">
                            Customers can order and schedule deliveries easily.
                        </p>
                    </div>
                </div>
            </section>

            {/* CUSTOMER APP */}
            <section className="px-6 sm:px-8 md:px-12 lg:px-20 py-16">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 space-y-4 text-gray-700">
                        <h2 className="text-3xl font-bold">Customer App</h2>
                        <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
                            <ul className="space-y-4 text-gray-800">
                                {[
                                    "Customizable system.",
                                    "Real-time tracking.",
                                    "Delivery scheduling.",
                                    "Milk notes & tipping."
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex gap-4 pt-4 flex-wrap">
                            <HashLink to="/#ouerdemo" className="bg-purple-600 text-white px-5 py-2 rounded-lg shadow hover:bg-purple-700">
                                Live Demos →
                            </HashLink>
                            <button className="border px-5 py-2 rounded-lg shadow hover:bg-gray-100">
                                Documentation →
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img src={milkdeleiv} alt="Customer App" className="rounded-lg shadow-md max-w-full h-auto" />
                    </div>
                </div>
            </section>

            {/* STORE APP */}
            <section className="px-6 sm:px-8 md:px-12 lg:px-20 py-16">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 flex justify-center">
                        <img src={store} alt="Store App" className="rounded-lg shadow-md max-w-full h-auto" />
                    </div>
                    <div className="md:w-1/2 space-y-4 text-gray-700">
                        <h2 className="text-3xl font-bold">Store App</h2>
                        <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
                            <ul className="space-y-4 text-gray-800">
                                {[
                                    "Accept and process orders.",
                                    "Update product availability.",
                                    "Monitor delivery progress.",
                                    "Access store analytics."
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex gap-4 pt-4 flex-wrap">
                            <HashLink to="/#ouerdemo" className="bg-purple-600 text-white px-5 py-2 rounded-lg shadow hover:bg-purple-700">
                                Live Demos →
                            </HashLink>
                            <button className="border px-5 py-2 rounded-lg shadow hover:bg-gray-100">
                                Documentation →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* RIDER APP */}
            <section className="px-6 sm:px-8 md:px-12 lg:px-20 py-16">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 flex justify-center">
                        <img src={riderapp} alt="Rider App" className="rounded-lg shadow-md max-w-full h-auto" />
                    </div>
                    <div className="md:w-1/2 space-y-4 text-gray-700">
                        <h2 className="text-3xl font-bold">Rider App</h2>
                        <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
                            <ul className="space-y-4 text-gray-800">
                                {[
                                    "Instant order alerts.",
                                    "Map integration.",
                                    "Order history access.",
                                    "Real-time delivery updates."
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex gap-4 pt-4 flex-wrap">
                            <HashLink to="/#ouerdemo" className="bg-purple-600 text-white px-5 py-2 rounded-lg shadow hover:bg-purple-700">
                                Live Demos →
                            </HashLink>
                            <button className="border px-5 py-2 rounded-lg shadow hover:bg-gray-100">
                                Documentation →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY ENATEGA */}
            <section className="mt-40 px-6 sm:px-8 md:px-12 lg:px-20">
                <div className="flex flex-col justify-center items-center text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Why Use Enatega for <span className="text-purple-600">Milk Delivery</span>
                    </h2>
                    <p className="mt-2">More than just a food delivery platform</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                    {[ 
                        {title:"Fully White-Label And Customizable", img:brand}, 
                        {title:"Works for individual vendors or marketplace operators", img:vender}, 
                        {title:"Multiple apps designed for every user type", img:brandtracking}, 
                        {title:"Real-time logistics and tracking tools", img:appsstore} 
                    ].map((box, i)=>(
                        <div key={i} className="bg-purple-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">{box.title}</h2>
                            <img src={box.img} alt={box.title} className="w-full max-w-sm h-auto" />
                        </div>
                    ))}
                </div>
            </section>

            {/* PRICING */}
            <section className="Pricing mt-40 px-6 sm:px-8 md:px-12 lg:px-20">
                <div className="flex flex-col items-center text-center space-y-3">
                    <h1 className="text-blue-800">Pricing</h1>
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
                        className="text-gray-600"
                    >
                        Enatega has a simple pricing model. <span className="text-blue-800">Just pay once</span> and get the whole solution.
                    </motion.span>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-8 p-8">
                    {/* Premium */}
                    <div className="md:w-96 border rounded-2xl shadow-lg overflow-hidden">
                        <div className="bg-purple-900 text-white font-semibold text-center py-2">Most Popular</div>
                        <div className="p-6">
                            <span className="text-sm rounded-2xl bg-gray-300 p-2 font-medium">Premium Plan</span>
                            <h2 className="text-2xl font-bold mt-2 mb-4">Feature-Rich Delivery Suite</h2>
                            <p className="text-gray-600 text-sm mb-6">Ideal for growing businesses seeking scalability.</p>
                            <ul className="space-y-3 text-gray-700">
                                {[
                                    "Modern UI across all apps",
                                    "Feature-rich & scalable",
                                    "Latest tech stack",
                                    "Includes Admin, Rider, Store, Web, Customer app",
                                    "Full Source Code",
                                    "No hidden charges",
                                    "Lifetime Updates",
                                    "Free 2 hours consultation"
                                ].map((item, i)=>(
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-green-500">✔</span><span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 flex flex-col gap-3">
                                <button className="bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">Get A Quote</button>
                                <div className="flex justify-between">
                                    <Link><button className="border px-4 py-2 rounded-lg hover:bg-gray-100">View Demo</button></Link>
                                    <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">View GitHub Repo</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enterprise */}
                    <div className="md:w-96 border rounded-2xl shadow-lg overflow-hidden bg-purple-900 text-white">
                        <div className="p-6">
                            <span className="text-sm text-purple-200 font-medium">Enterprise Plan</span>
                            <h2 className="text-2xl font-bold mt-2 mb-4">Custom Plan – Tailored for You</h2>
                            <p className="text-purple-200 text-sm mb-6">For enterprises needing advanced features & support.</p>
                            <ul className="space-y-3">
                                {[
                                    "Everything in Premium + Custom deployment",
                                    "Custom Pricing (Installments Available)",
                                    "Feature integration as per needs",
                                    "Full system modification",
                                    "Advanced support",
                                    "Development by Ninjas Code"
                                ].map((item, i)=>(
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-green-400">✔</span><span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-12 flex flex-col gap-3">
                                <button className="bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">Get A Quote</button>
                                <button className="bg-white text-purple-900 py-2 rounded-lg hover:bg-gray-200">Visit NinjasCode</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT FORM */}
            <section><Form/></section>
            <Footer/>
        </>
    );
}

export default MilkDelivery;

import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from "lucide-react";
import rider from "../assets/rider-app-323x0.webp"
import yallaapp from "../assets/yalla-app-2-360x0.webp"
import webapp from "../assets/Web-app-323x0.webp"
import Footer from '../components/Footer';
import video1 from "../assets/Videos/yalla-delivery-1.webm"
import video2 from "../assets/Videos/yalla-delivery-2.mp4"
import video3 from "../assets/Videos/yalla-delivery-3.webm"
function Yalladeliver() {

    const [activeTab, setActiveTab] = useState(1);
    return (
        <>
            <section className=" z-50 w-full bg-gradient-to-b from-purple-500 to-indigo-600 text-white px-6 py-20">
                <div className="max-w-6xl mx-auto text-center">

                    <p className="text-sm opacity-80 mb-3">Powered by Enatega</p>


                    <h1 className="text-3xl md:text-4xl font-bold leading-snug">
                        Yalla: Redefining Food And Grocery Delivery <br />
                        <span className="block">Across The Region</span>
                    </h1>


                    <p className="mt-4 text-sm md:text-base max-w-2xl mx-auto opacity-90">
                        Yalla is a dynamic food and grocery delivery app built on Enatega,
                        offering a seamless bilingual experience. Designed for growth, it
                        delivers fast, intuitive service across the regional market.
                    </p>


                    <div className="mt-6">
                        <Link className="px-6 py-2 border border-white rounded-lg font-medium hover:bg-white hover:text-purple-600 transition cursor-pointer">Visit Website</Link>

                    </div>
                </div>



            </section>
            <section className=''>
                <div className="flex flex-wrap gap-7 items-center justify-center text-center">
                    {/* Mobile App Mockup */}
                    <div className="flex justify-center">
                        <img
                            src={rider}
                            alt="Mobile App"
                            className="rounded-2xl shadow-lg"
                        />
                    </div>

                    {/* Dashboard Mockup */}
                    <div className="flex justify-center">
                        <img
                            src={webapp}
                            alt="Dashboard"
                            className="rounded-2xl shadow-lg"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="max-w-3xl">
                        <p>
                            <span className="font-bold">Yalla</span> is a powerful, all-in-one food
                            and grocery delivery app built on top of the Enatega platform. Designed
                            to meet the fast-paced demands of a growing customer base, Yalla combines
                            intuitive design with modern features to offer a world-class delivery
                            experience in both Arabic and English. From concept to launch, this case
                            study highlights how Yalla became a standout player in the regional
                            market, and how it continues to grow.
                        </p>
                    </div>
                </div>


            </section>
            <section className=" mt-40 bg-gray-50 ">
                <div className="max-w-4xl mx-auto">
                    {/* Heading */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        The Challenges Faced By <span className="text-indigo-600">Yalla:</span>
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Yalla set out to solve a common frustration in the delivery space;
                        juggling multiple apps for different needs. The goal was to build a
                        single platform that supports:
                    </p>

                    {/* Challenges List */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-indigo-600 text-white text-sm font-bold">
                                1
                            </div>
                            <p className="text-gray-700">
                                <span className="font-semibold">Multifunctional Deliveries:</span>{" "}
                                Combining food, grocery, and retail orders into one seamless app.
                            </p>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-indigo-600 text-white text-sm font-bold">
                                2
                            </div>
                            <p className="text-gray-700">
                                <span className="font-semibold">Multi-language Accessibility:</span>{" "}
                                With a focus on Arabic and English to serve diverse communities.
                            </p>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-indigo-600 text-white text-sm font-bold">
                                3
                            </div>
                            <p className="text-gray-700">
                                <span className="font-semibold">Feature-Rich Functionality:</span>{" "}
                                Standing out in a market dominated by giants like Wolt and Haat.
                            </p>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-indigo-600 text-white text-sm font-bold">
                                4
                            </div>
                            <p className="text-gray-700">
                                <span className="font-semibold">Localized Payments:</span>{" "}
                                Offering region-specific payment gateways that match local
                                expectations.
                            </p>
                        </div>
                    </div>


                    <p className="mt-8 text-gray-600">
                        To bring this ambitious vision to life, Yalla needed a flexible,
                        scalable solution—and a partner that could deliver quickly without
                        compromising quality.
                    </p>
                </div>
            </section>
            <section className="w-full bg-white px-6 py-16">
                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
                        The <span className="text-indigo-600">Development Journey</span>
                    </h2>


                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">


                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 p-4 bg-white border rounded-lg shadow text-sm text-gray-600">
                                <h3 className="font-semibold text-gray-900 mb-1">
                                    Adapting Enatega for Multifunctional Delivery
                                </h3>
                                <p>
                                    Using Enatega’s white-label framework, the team customized it to
                                    support groceries, retail, and restaurants with vendor tools and
                                    regional fulfillment models.
                                </p>
                            </div>
                            <div className="w-28 h-28 flex items-center justify-center rounded-full bg-purple-700 text-white font-bold shadow-lg">
                                PHASE I
                            </div>
                        </div>


                        <div className="flex flex-col items-center text-center">
                            <div className="w-28 h-28 flex items-center justify-center rounded-full bg-purple-700 text-white font-bold shadow-lg mb-4">
                                PHASE II
                            </div>
                            <div className="p-4 bg-white border rounded-lg shadow text-sm text-gray-600">
                                <h3 className="font-semibold text-gray-900 mb-1">
                                    Multi-Language, User-Centric Interface
                                </h3>
                                <p>
                                    The UI supported both RTL and LTR, with seamless toggling
                                    between Arabic and English.
                                </p>
                            </div>
                        </div>


                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 p-4 bg-white border rounded-lg shadow text-sm text-gray-600">
                                <h3 className="font-semibold text-gray-900 mb-1">
                                    Market-Leading Features
                                </h3>
                                <p>
                                    Real-time maps, smart search, personalized recommendations, and
                                    category-based menus for food and groceries.
                                </p>
                            </div>
                            <div className="w-28 h-28 flex items-center justify-center rounded-full bg-purple-700 text-white font-bold shadow-lg">
                                PHASE III
                            </div>
                        </div>


                        <div className="flex flex-col items-center text-center">
                            <div className="w-28 h-28 flex items-center justify-center rounded-full bg-purple-700 text-white font-bold shadow-lg mb-4">
                                PHASE IV
                            </div>
                            <div className="p-4 bg-white border rounded-lg shadow text-sm text-gray-600">
                                <h3 className="font-semibold text-gray-900 mb-1">
                                    Payment Gateway Customization
                                </h3>
                                <p>
                                    Integrated HyperPay for secure credit/debit card payments
                                    tailored to the regional market.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="w-full py-16 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center text-center md:text-left">

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Launch <span className="text-purple-600">& Results:</span>
                        </h2>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            With a laser-focused agile approach, Yalla’s MVP was launched within
                            just a few months. The results were immediate and impressive:
                        </p>

                        <ul className="mt-6 space-y-4 text-left inline-block">
                            <li className="flex items-start space-x-3">
                                <CheckCircle2 className="w-6 h-6 text-purple-500 mt-1" />
                                <span className="text-gray-800 font-semibold">
                                    60,000+ active monthly users
                                </span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <CheckCircle2 className="w-6 h-6 text-purple-500 mt-1" />
                                <span className="text-gray-800 font-semibold">
                                    50+ operational restaurants and vendors{" "}
                                    <span className="font-normal">onboarded</span>
                                </span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <CheckCircle2 className="w-6 h-6 text-purple-500 mt-1" />
                                <span className="text-gray-800">
                                    Growing engagement with{" "}
                                    <span className="font-semibold">
                                        daily order volume increasing steadily
                                    </span>
                                </span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <CheckCircle2 className="w-6 h-6 text-purple-500 mt-1" />
                                <span className="text-gray-800">
                                    Positive reviews citing{" "}
                                    <span className="font-semibold">
                                        UI simplicity and multi-functionality
                                    </span>
                                </span>
                            </li>
                        </ul>

                        <p className="mt-6 text-gray-600 leading-relaxed">
                            Yalla has quickly cemented its reputation as a go-to app in the food
                            and grocery delivery space and it’s only getting started.
                        </p>
                    </div>


                    <div className="flex justify-center">
                        <img
                            src={yallaapp}
                            alt="Yalla App screen"
                            className=" drop-shadow-lg"
                        />
                    </div>
                </div>
            </section>
            <section className="w-full py-16 px-6 md:px-12 bg-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Client Showcase:{" "}
                    <span className="text-purple-600">See Yalla In Action</span>
                </h2>
                <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
                    Explore how Yalla is transforming food and grocery delivery through
                    real-world product footage. Swipe through the carousel below to view:
                </p>

                {/* Tabs */}
                <div className="mt-10">
                    <div className="flex justify-center space-x-8 ">
                        {["Video 1", "Video 2", "Video 3"].map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index + 1)}
                                className={`pb-2 ${activeTab === index + 1
                                        ? "text-purple-600 border-b-2 border-purple-600 font-semibold"
                                        : "text-gray-700"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Video Preview */}
                    <div className="mt-8 flex justify-center">
                        {activeTab === 1 && (
                            <video
                                src={video1}
                                controls
                                className="rounded-xl shadow-lg max-h-[500px]"
                            />
                        )}
                        {activeTab === 2 && (
                            <video
                                src={video2}
                                controls
                                className="rounded-xl shadow-lg max-h-[500px]"
                            />
                        )}
                        {activeTab === 3 && (
                            <video
                                src={video3}
                                controls
                                className="rounded-xl shadow-lg max-h-[500px]"
                            />
                        )}
                    </div>
                </div>
            </section>

            <section className="w-full py-16 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center text-center md:text-left">

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Looking Ahead:<span className="text-purple-600">Scaling Up and Reaching Further</span>
                        </h2>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            With a strong foundation in place, Yalla is not slowing down. The roadmap includes:


                        </p>

                        <ul className="mt-6 space-y-4 text-left inline-block">
                            <li className="flex items-start space-x-3">
                                <CheckCircle2 className="w-6 h-6 text-purple-500 mt-1" />
                                <span className="text-gray-800 font-semibold">
                                    Expanding to more cities and restaurant partners
                                </span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <CheckCircle2 className="w-6 h-6 text-purple-500 mt-1" />
                                <span className="text-gray-800 font-semibold">
                                    Onboarding retail and pharmacy partners{" "}
                                    <span className="font-normal">onboarded</span>
                                </span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <CheckCircle2 className="w-6 h-6 text-purple-500 mt-1" />
                                <span className="text-gray-800">
                                    Enhancing loyalty programs and in-app promotions
                                </span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <CheckCircle2 className="w-6 h-6 text-purple-500 mt-1" />
                                <span className="text-gray-800">
                                    Further optimizing performance for low-bandwidth regions
                                </span>
                            </li>
                        </ul>

                        <p className="mt-6 text-gray-600 leading-relaxed">
                            Yalla’s success is a testament to what’s possible with a clear vision, strong technology, and the right development team.
                            So are you ready to take your delivery business to the next level? Get started with us today so that we can discuss your future!
                        </p>
                    </div>


                    <div className="flex justify-center">
                        <img
                            src={yallaapp}
                            alt="Yalla App screen"
                            className=" drop-shadow-lg"
                        />
                    </div>
                </div>
            </section>
            <Footer />

        </>
    );
}

export default Yalladeliver;

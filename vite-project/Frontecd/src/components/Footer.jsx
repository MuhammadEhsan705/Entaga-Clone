import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.webp"
import iso from "../assets/iso-27001-70x0.webp"
import gbd from "../assets/gdpr-70x0.webp"
function Footer() {
    return (
        <>
            <footer className="px-4 py-10 md:px-16 md:py-20 lg:px-32 lg:py-32 bg-gray-50 overflow-hidden">

                <div className="flex justify-center mb-8">
                    <img className="h-11" src={logo} alt="logo" />
                </div>


                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 text-sm">

                    <div className="flex flex-col">
                        <h1 className="font-bold mb-2">Resources</h1>
                        <Link>Blog</Link>
                        <Link>Documentation</Link>
                        <Link>Feature</Link>
                    </div>


                    <div className="flex flex-col">
                        <h1 className="font-bold mb-2">Compare</h1>
                        <Link>Blink</Link>
                        <Link>Deonde</Link>
                        <Link>GloriaFood</Link>
                        <Link>Ordering.Co</Link>
                        <Link>Shipday</Link>
                        <Link>SpotNeats</Link>
                        <Link>Yelo</Link>
                        <Link>Zeew</Link>
                    </div>


                    <div className="flex flex-col">
                        <h1 className="font-bold mb-2">Case Studies</h1>
                        <Link>Yalla Delivery</Link>
                        <Link>Stylizenow</Link>
                        <Link>Easy Eats</Link>
                        <Link>Vinifynd</Link>
                        <Link>Snap Delivered</Link>
                        <Link>Borku Delivery</Link>
                    </div>


                    <div className="flex flex-col">
                        <h1 className="font-bold mb-2">Get in Touch</h1>
                        <p className="text-sm text-gray-600 break-words">
                            1021 E Lincolnway Suite #6581, Cheyenne, Wyoming 82001, United States
                        </p>
                        <span className="mt-2">sales@enatega.com</span>
                        <span>+1 (307) 776-8999</span>


                        <div className="flex gap-3 mt-3">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-linkedin"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>


                <div className="flex flex-wrap justify-center items-center py-12 gap-6">
                    <img src={iso} alt="iso" className="h-10" />
                    <img src={iso} alt="iso" className="h-10" />
                    <img src={gbd} alt="gbd" className="h-10" />
                    <img src={iso} alt="iso" className="h-10" />
                </div>
            </footer>
        </>
    );
}

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import adminWeb from "../assets/admin-web-dashborad-323x0.webp"
import { FaApple } from "react-icons/fa";
import { FcAndroidOs } from "react-icons/fc";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

function AdminWeb({ onClose }) {
    return (
        <>
            <div class="fixed inset-0 bg-gray-200/40 backdrop-blur-sm flex items-center justify-center z-50">

                <div class="relative bg-white rounded-2xl shadow-lg w-[500px] p-8 text-center">


                    <button onClick={onClose} class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                        <IoCloseSharp />
                    </button>


                    <img src={adminWeb} alt="webapp" class="w-40 mx-auto mb-4" />


                    <h2 class="text-2xl font-semibold mb-2">Admin Web Dashboard</h2>


                    <p class="text-gray-600 text-sm mb-6">
                        Full control at your fingertips. Manage vendors, customers, orders, zones, payouts, notifications, and system settings from a single dashboard.
                    </p>


                    <h3 class="text-md font-medium mb-4">Demo Links</h3>
                    <div class="flex justify-center gap-3 flex-wrap">
                        <Link to="https://apps.apple.com/us/app/enatega-multivendor/id1526488093" className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100"><FaApple />iOS</Link>
                        <Link to="https://play.google.com/store/apps/details?id=com.enatega.multivendor&pli=1" className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100"><FcAndroidOs />Android</Link>
                        <Link className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100"><IoLogoGooglePlaystore />Playstore</Link>



                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminWeb;

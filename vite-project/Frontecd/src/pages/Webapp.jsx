import React from 'react';
import { Link } from 'react-router-dom';
import webapp from "../assets/Web-app-323x0.webp"
import { FaApple } from "react-icons/fa";
import { FcAndroidOs } from "react-icons/fc";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";

function Webapp({onClose}) {
  return (
    <>
      <div className="fixed inset-0 bg-gray-200/40 backdrop-blur-sm flex items-center justify-center z-50">

<div class="relative bg-white rounded-2xl shadow-lg w-[500px] p-8 text-center">
  
  
  <button  onClick={onClose} class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
  <IoCloseSharp />
  </button>


  <img src={webapp} alt="webapp" class="w-40 mx-auto mb-4" />

 
  <h2 class="text-2xl font-semibold mb-2">Web App</h2>


  <p className="text-gray-600 text-sm mb-6">
  A responsive and fast storefront for customers to explore local vendors and place orders from desktop or mobile browsers.
  </p>

  
  <h3 class="text-md font-medium mb-4">Demo Links</h3>
  <div class="flex justify-center gap-3 flex-wrap">
   <Link to="https://apps.apple.com/us/app/enatega-multivendor/id1526488093" className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100"><TfiWorld />WEB</Link>
   
   <Link  className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100"><IoLogoGooglePlaystore />Playstore</Link>
      
      

  </div>
</div>
</div>
    </>
  );
}

export default Webapp;

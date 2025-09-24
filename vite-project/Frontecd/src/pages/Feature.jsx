import React from 'react';
import { useState } from 'react';

function Feature() {
    const [active, setActive] = useState("customer");

  const tabs = [
    { id: "customer", label: "Customer Web/Mobile Application" },
    { id: "restaurant", label: "Restaurant Application" },
    { id: "rider", label: "Rider Application" },
    { id: "admin", label: "Admin Dashboard" },
  ];
  return (
    <>
    <section className="w-full bg-gradient-to-b from-green-200 to-white text-center py-20">
  {/* Heading */}
  <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 max-w-4xl mx-auto leading-tight">
    Enatega Multivendor Is A Full-Featured Multivendor{" "}
    <span className="text-green-600">Food Delivery Solution</span>
  </h1>

  {/* Tabs */}
  <div className="mt-14 border-b">
    <div className="flex flex-wrap justify-center gap-10">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActive(tab.id)}
          className={`relative pb-4 text-base md:text-lg font-medium transition ${
            active === tab.id
              ? "text-black font-semibold"
              : "text-gray-600 hover:text-black"
          }`}
        >
          {tab.label}
          {active === tab.id && (
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-12 h-[2px] bg-black rounded"></span>
          )}
        </button>
      ))}
    </div>
  </div>
</section>

      
    </>
  );
}

export default Feature;

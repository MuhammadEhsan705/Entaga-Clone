import React, { useState } from "react";
import Customerweb from "./Customerweb";
import ResturenApplication from "./ResturenApplication";
import RiderApplication from "./RiderApplication";
import AdminDashboard from "./AdminDashboard";

function Feature() {
  const [active, setActive] = useState("customer");

  const tabs = [
    { id: "customer", label: "Customer Web/Mobile Application" },
    { id: "restaurant", label: "Restaurant Application" },
    { id: "rider", label: "Rider Application" },
    { id: "admin", label: "Admin Dashboard" },
  ];

  // Mapping tab ids to components
  const tabComponents = {
    customer: <Customerweb />,
    restaurant: <ResturenApplication />,
    rider: <RiderApplication />,
    admin: <AdminDashboard />,
  };

  return (
    <section className="w-full bg-gradient-to-b from-green-200 to-white text-center py-14 md:py-20">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 max-w-4xl mx-auto leading-snug px-4">
        Enatega Multivendor Is A Full-Featured Multivendor{" "}
        <span className="text-green-600">Food Delivery Solution</span>
      </h1>

      {/* Tabs */}
      <div className="mt-10 md:mt-14 border-b">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 px-4 md:px-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative pb-2 sm:pb-3 md:pb-4 text-sm sm:text-base md:text-lg font-medium transition ${
                active === tab.id
                  ? "text-black font-semibold"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {tab.label}
              {active === tab.id && (
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-8 sm:w-10 md:w-12 h-[2px] bg-black rounded"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Active Tab Content */}
      <div className="mt-8 md:mt-12 px-4 md:px-0">{tabComponents[active]}</div>
    </section>
  );
}

export default Feature;

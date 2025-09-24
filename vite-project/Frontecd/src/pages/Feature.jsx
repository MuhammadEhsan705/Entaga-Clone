import React from 'react';

function Feature() {
  return (
    <>
    <section className="w-full bg-gradient-to-b from-green-200 to-white text-center py-16">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl mx-auto leading-snug">
        Enatega Multivendor Is A Full-Featured Multivendor{" "}
        <span className="text-green-600">Food Delivery Solution</span>
      </h1>

      {/* Tabs */}
      <div className="mt-10 border-b">
        <div className="flex flex-wrap justify-center gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative pb-3 text-sm md:text-base font-medium transition ${
                active === tab.id
                  ? "text-black font-semibold"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {tab.label}
              {active === tab.id && (
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-10 h-0.5 bg-black rounded"></span>
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

import React from 'react';
import Orderstatu from "../assets/Real-Time-Order-Status-Change-779x0.webp"

import alertimage from "../assets/Instant-Dual-Alert-System-779x0.webp"
import timeimage from "../assets/Time-Limiter-779x0.webp"

function RiderApplication() {
  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6">
        <nav className="space-y-4 text-sm font-medium text-gray-700">
          <a href="#" className="block hover:text-black font-semibold">
            Order Management
          </a>
          <a href="#" className="block hover:text-black">
            Location Services
          </a>
          <a href="#" className="block hover:text-black">
            Communication
          </a>
          <a href="#" className="block hover:text-black">
            Order History
          </a>
          <a href="#" className="block hover:text-black">
            Financial Management
          </a>
          <a href="#" className="block hover:text-black">
            Status Management
          </a>
          <a href="#" className="block hover:text-black">
            Real-Time Order Status Change
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12">
        <div className="bg-white rounded-xl shadow-lg p-12 space-y-12">
          {/* Real-Time Order Status Change */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">• Real-Time Order Status Change</h2>
            <div className="mt-8 flex justify-center">
              <img
                src={Orderstatu}
                alt="Real-Time Order Status Change"
                className="w-[500px] md:w-[650px] rounded-2xl shadow-xl"
              />
            </div>
            <p className="mt-6 text-gray-600 text-base leading-relaxed">
              Enatega’s rider application features provide business owners with instantaneous
              updates on the status changes of their delivery orders.
            </p>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              The moment an order is accepted, out for delivery, or completed, the real-time
              order status change system updates in real-time.
            </p>
          </section>

          {/* Instant Dual-Alert System */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-6">• Instant Dual-Alert System</h2>
            <div className="mt-8 flex justify-center">
              <img
                src={alertimage}
                alt="Instant Dual-Alert System"
                className="w-[500px] md:w-[650px] rounded-2xl shadow-xl"
              />
            </div>
            <p className="mt-6 text-gray-600 text-base leading-relaxed">
              Never miss a beat with Enatega’s rider application features.
            </p>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              Business owners receive instant notifications through a combination of push
              notifications and audible ringers as soon as an order is placed.
            </p>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              The instant dual-alert system ensures that owners are immediately informed
              about incoming orders.
            </p>
          </section>

          {/* Time Limiter */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-6">• Time Limiter</h2>
            <div className="mt-8 flex justify-center">
              <img
                src={timeimage }
                alt="Time Limiter"
                className="w-[500px] md:w-[650px] rounded-2xl shadow-xl"
              />
            </div>
            <p className="mt-6 text-gray-600 text-base leading-relaxed">
              Enatega’s rider application features consist of a time limiter as well, which
              allows business owners to set predefined time limits for different stages of
              the order fulfilment process.
            </p>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              If any stage in the ordering process exceeds the designated time limit, the
              application will send an alert to enable owners to identify and address
              potential delays swiftly.
            </p>
          </section>
        </div>
      </main>
    </div>
    </>
  );
}

export default RiderApplication;

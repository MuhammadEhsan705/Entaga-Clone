import React from 'react';
import Orderimage from "../assets/Order-Notification-779x0.webp"
import notificationimage from "../assets/Real-Time-Order-Receiving-779x0.webp"
import timeimage from "../assets/Time-Limiter-779x0.webp"

function ResturenApplication() {
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
            Restaurant Status & Invoice Printing
          </a>
          <a href="#" className="block hover:text-black">
            Order History & Details
          </a>
          <a href="#" className="block hover:text-black">
            Order Notifications
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12">
        <div className="bg-white rounded-xl shadow-lg p-12 space-y-12">
          {/* Order Management */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">• Order Management</h2>
            <div className="mt-8 flex justify-center">
              <img
                src={Orderimage}
                alt="Orderimage"
                className="w-[500px] md:w-[650px] rounded-2xl shadow-xl"
              />
            </div>
            <p className="mt-6 text-gray-600 text-base leading-relaxed">
              We redefine the way your business handles orders with our advanced order
              notification feature.
            </p>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              Stay ahead in real-time and empower your team to respond promptly to new
              orders and provide customers with the quickest delivery to boost customer
              satisfaction in no time with our restaurant application features.
            </p>
          </section>

          {/* Time Limiter */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-6">• Time Limiter</h2>
            <div className="mt-8 flex justify-center">
              <img
                src={timeimage}
                alt="T"
                className="w-[500px] md:w-[650px] rounded-2xl shadow-xl"
              />
            </div>
            <p className="mt-6 text-gray-600 text-base leading-relaxed">
              With our restaurant application features, you get to take complete control of your
              order processing with Enatega’s time limiter feature.
            </p>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              Set the pace with our intuitive time limiter feature to tailor the acceptance
              periods for orders.
            </p>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              Customize meal preparation times according to your kitchen’s rhythm to optimize
              workflows for enhanced efficiency.
            </p>
          </section>

          {/* Real-Time Order Receiving */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-6">• Real-Time Order Receiving</h2>
            <div className="mt-8 flex justify-center">
              <img
                src={notificationimage}
                alt=""
                className="w-[500px] md:w-[650px] rounded-2xl shadow-xl"
              />
            </div>
            <p className="mt-6 text-gray-600 text-base leading-relaxed">
              Delight your customers with a revolutionary real-time order receiving feature.
            </p>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              As orders move seamlessly through preparation and delivery stages, your team
              stays coordinated to ensure your orders get delivered on time and create an
              unparalleled customer experience.
            </p>
          </section>
        </div>
      </main>
    </div>
      
    </>
  );
}

export default ResturenApplication;

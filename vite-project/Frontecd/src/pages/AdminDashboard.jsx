import React, { useState } from "react";
import usermanag from "../assets/User-Management-779x0.webp";
import rolebase from "../assets/Role-Based-Administration-779x0.webp";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("Role-Based Administration");

  const menuItems = [
    "User & Role Oversight",
    "Establishment Management",
    "Financial & Commission Management",
    "Operational Configuration",
    "Menu & Analytics",
    "Role-Based Administration",
    "User Management",
    "Ratings & Coupon Management",
    "Tipping Option Management",
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6">
        <nav className="space-y-4 text-sm font-medium text-gray-700">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`block text-left w-full ${
                activeTab === item
                  ? "text-black font-semibold"
                  : "hover:text-black"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12">
        <div className="bg-white rounded-xl shadow-lg p-12 space-y-12">
          {/* Role-Based Administration */}
          {activeTab === "Role-Based Administration" && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                • Role-Based Administration
              </h2>
              <div className="mt-8 flex justify-center">
                <img
                  src={rolebase}
                  alt="Role-Based Administration"
                  className="w-[500px] md:w-[650px] rounded-2xl shadow-xl"
                />
              </div>
              <p className="mt-6 text-gray-600 text-base leading-relaxed">
                Experience seamless control and precision with our role-based
                administration feature.
              </p>
              <p className="mt-4 text-gray-600 text-base leading-relaxed">
                Tailored for efficient user and role management in the admin
                dashboard features, this functionality ensures that
                administrators gain unrestricted access to all platform
                features.
              </p>
            </section>
          )}

          {/* User Management */}
          {activeTab === "User Management" && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                • User Management
              </h2>
              <div className="mt-8 flex justify-center">
                <img
                  src={usermanag}
                  alt="User Management"
                  className="w-[500px] md:w-[650px] rounded-2xl shadow-xl"
                />
              </div>
              <p className="mt-6 text-gray-600 text-base leading-relaxed">
                The user management feature is designed to elevate your customer
                engagement strategy.
              </p>
              <p className="mt-4 text-gray-600 text-base leading-relaxed">
                Seamlessly capture and organize customer data to have
                personalized interactions with your customers.
              </p>
              <p className="mt-4 text-gray-600 text-base leading-relaxed">
                From order history tracking to customized promotions, this
                feature present in the list of admin panel features enables you
                to build lasting relationships and enhance customer loyalty.
              </p>
            </section>
          )}

          {/* Ratings & Coupon Management */}
          {activeTab === "Ratings & Coupon Management" && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                • Ratings & Coupon Management
              </h2>
              <p className="mt-6 text-gray-600 text-base leading-relaxed">
                Take control of your online reputation with the ratings and
                coupon management feature present in the admin dashboard
                features toolkit.
              </p>
              <p className="mt-4 text-gray-600 text-base leading-relaxed">
                We help you respond to customer feedback and reviews through the
                restaurant dashboard to highlight your commitment to customer
                satisfaction.
              </p>
              <p className="mt-4 text-gray-600 text-base leading-relaxed">
                The integrated rating and coupon management feature not only
                attracts new customers but also retains existing ones to create
                a win-win scenario for your business.
              </p>
            </section>
          )}

          {/* Tipping Option Management */}
          {activeTab === "Tipping Option Management" && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                • Tipping Option Management
              </h2>
              <p className="mt-6 text-gray-600 text-base leading-relaxed">
                The tipping option management feature is not just a feature; it’s a
                way to appreciate and motivate your delivery team.
              </p>
              <p className="mt-4 text-gray-600 text-base leading-relaxed">
                Enable your customers to show their gratitude and satisfaction
                with your service through a seamless tipping process present in
                the admin panel features.
              </p>
            </section>
          )}

          {/* Other Tabs (placeholders for now) */}
          {[
            "User & Role Oversight",
            "Establishment Management",
            "Financial & Commission Management",
            "Operational Configuration",
            "Menu & Analytics",
          ].includes(activeTab) && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                • {activeTab}
              </h2>
              <p className="mt-6 text-gray-600 text-base leading-relaxed">
                Content for <strong>{activeTab}</strong> will go here.
              </p>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;

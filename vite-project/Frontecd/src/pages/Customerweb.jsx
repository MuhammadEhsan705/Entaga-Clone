import React from "react";
import multiplatform from "../assets/Multi-Platform-Authentication-779x0.webp";

function Customerweb() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-b md:border-b-0 md:border-r p-4 md:p-6">
        <nav className="flex md:block flex-wrap gap-3 md:gap-0 text-sm font-medium text-gray-700">
          <a href="#" className="block hover:text-black font-semibold">
            Authentication
          </a>
          <a href="#" className="block hover:text-black">
            User Interface
          </a>
          <a href="#" className="block hover:text-black">
            Communication
          </a>
          <a href="#" className="block hover:text-black">
            Analytics and Reporting
          </a>
          <a href="#" className="block hover:text-black">
            Order Management
          </a>
          <a href="#" className="block hover:text-black">
            Promotion and Loyalty
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-12 space-y-10 md:space-y-12">
          {/* Email Verification */}
          <section>
            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
              • Email Verification
            </h2>
            <p className="mt-2 text-gray-600 text-sm md:text-base leading-relaxed">
              With the email verification feature in the custom web/mobile application,
              we guarantee the authenticity of user registrations to lower the risk of
              fake orders and create a reliable customer base.
            </p>
            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              As you can quickly secure the confirmation process via the email verification
              feature, there’s an enhancement in the delivery information that enables
              streamlined communication on order updates and delivery details.
            </p>
          </section>

          {/* Multi-Platform Authentication */}
          <section>
            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">
              • Multi-Platform Authentication
            </h2>

            <div className="mt-6 md:mt-8 flex justify-center">
              <img
                src={multiplatform}
                alt="Multi-Platform Authentication"
                className="w-full max-w-sm sm:max-w-md md:max-w-2xl rounded-2xl shadow-xl"
              />
            </div>

            <p className="mt-6 text-gray-600 text-sm md:text-base leading-relaxed">
              It is time to simplify the on-boarding process with the multi-platform
              authentication feature in the custom web/mobile application.
            </p>
            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              We enable our customers to use their existing Google, Apple, or Facebook
              credentials, eliminating the need for a separate account creation.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Customerweb;

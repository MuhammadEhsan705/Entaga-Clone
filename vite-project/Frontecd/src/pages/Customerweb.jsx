import React from "react";
import multiplatform from "../assets/Multi-Platform-Authentication-779x0.webp";

function Customerweb() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6">
        <nav className="space-y-4 text-sm font-medium text-gray-700">
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
      <main className="flex-1 p-12">
        <div className="bg-white rounded-xl shadow-lg p-12 space-y-12">
          {/* Email Verification */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">• Email Verification</h2>
            <p className="mt-2 text-gray-600 text-base leading-relaxed">
              With the email verification feature in the custom web/mobile application,
              we guarantee the authenticity of user registrations to lower the risk of
              fake orders and create a reliable customer base.
            </p>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              As you can quickly secure the confirmation process via the email verification
              feature, there’s an enhancement in the delivery information that enables
              streamlined communication on order updates and delivery details.
            </p>
          </section>

          {/* Multi-Platform Authentication */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              • Multi-Platform Authentication
            </h2>

            <div className="mt-8 flex justify-center">
              <img
                src={multiplatform}
                alt="Multi-Platform Authentication"
                className="w-[500px] md:w-[650px] rounded-2xl shadow-xl"
              />
            </div>

            <p className="mt-6 text-gray-600 text-base leading-relaxed">
              It is time to simplify the on-boarding process with the multi-platform
              authentication feature in the custom web/mobile application.
            </p>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
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

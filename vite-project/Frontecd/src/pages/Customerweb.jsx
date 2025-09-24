import React from 'react';

function Customerweb() {
  return (
    <>
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
      <main className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow p-8 space-y-8">
          {/* Email Verification */}
          <section>
            <h2 className="text-lg font-bold text-gray-900">• Email Verification</h2>
            <p className="mt-2 text-gray-600 text-sm">
              With the email verification feature in the custom web/mobile application,
              we guarantee the authenticity of user registrations to lower the risk of
              fake orders and create a reliable customer base.
            </p>
            <p className="mt-2 text-gray-600 text-sm">
              As you can quickly secure the confirmation process via the email verification
              feature, there’s an enhancement in the delivery information that enables
              streamlined communication on order updates and delivery details.
            </p>
          </section>

          {/* Multi-Platform Authentication */}
          <section>
            <h2 className="text-lg font-bold text-gray-900">
              • Multi-Platform Authentication
            </h2>

            <div className="mt-4 flex justify-center">
              <div className="relative w-80 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-yellow-400 rounded-lg"></div>
                <div className="relative bg-black text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold">Signup or login</h3>
                  <p className="text-sm text-gray-300">Sign up to get your discount</p>
                  <button className="mt-4 w-full py-2 px-4 bg-white text-black font-medium rounded-full flex items-center justify-center">
                    <span className="mr-2 text-lg">G</span> Continue with Google
                  </button>
                </div>
              </div>
            </div>

            <p className="mt-4 text-gray-600 text-sm">
              It is time to simplify the on-boarding process with the multi-platform
              authentication feature in the custom web/mobile application.
            </p>
            <p className="mt-2 text-gray-600 text-sm">
              We enable our customers to use their existing Google, Apple, or Facebook
              credentials, eliminating the need for a separate account creation.
            </p>
          </section>
        </div>
      </main>
    </div>
    </>
  );
}

export default Customerweb;

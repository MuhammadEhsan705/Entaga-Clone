import React from 'react';

function Documentaion() {
  return (
    <>
      <section className="w-full bg-white px-4 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* LEFT SIDEBAR */}
        <aside className="hidden md:block md:col-span-2 border-r pr-4 text-sm text-gray-700 space-y-3">
          <h3 className="font-semibold mb-2">Getting Started</h3>
          <ul className="space-y-2">
            <li className="hover:text-purple-600 cursor-pointer">Introduction</li>
            <li className="hover:text-purple-600 cursor-pointer">High Level Architecture</li>
            <li className="hover:text-purple-600 cursor-pointer">Overview of the API</li>
            <li className="hover:text-purple-600 cursor-pointer">FAQs</li>
            <li className="hover:text-purple-600 cursor-pointer">License</li>
            <li className="hover:text-purple-600 cursor-pointer">Patch Notes</li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">Installation</h3>
          <ul className="space-y-2">
            <li className="hover:text-purple-600 cursor-pointer">Prerequisites</li>
            <li className="hover:text-purple-600 cursor-pointer">Setup locally</li>
            <li className="hover:text-purple-600 cursor-pointer">Deploy for production</li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">Configuration</h3>
          <ul className="space-y-2">
            <li className="hover:text-purple-600 cursor-pointer">Google Maps API</li>
            <li className="hover:text-purple-600 cursor-pointer">Payment Gateways</li>
            <li className="hover:text-purple-600 cursor-pointer">Firebase Setup</li>
            <li className="hover:text-purple-600 cursor-pointer">Database Setup</li>
          </ul>
        </aside>

        {/* MAIN CONTENT */}
        <main className="md:col-span-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h1>
          <p className="text-gray-700 mb-6">
            Enatega Multivendor is a full-featured Multivendor food delivery
            solution for iOS, Android, and the Web. We have ensured that you
            receive a good mobile and dashboard application design as well as a
            complete solution that will allow you to quickly integrate and white
            label into any meal delivery service.
          </p>

          {/* Video Section */}
          <div className="space-y-10">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/here-video-id1"
                title="Tutorial Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/here-video-id2"
                title="Full Platform Showcase"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="hidden md:block md:col-span-2 border-l pl-4 text-sm text-gray-700 space-y-2">
          <h3 className="font-semibold mb-2">On this page</h3>
          <ul className="space-y-2">
            <li className="hover:text-purple-600 cursor-pointer">Customer Mobile/Web App</li>
            <li className="hover:text-purple-600 cursor-pointer">Restaurant App</li>
            <li className="hover:text-purple-600 cursor-pointer">Rider App</li>
            <li className="hover:text-purple-600 cursor-pointer">Admin Dashboard</li>
            <li className="hover:text-purple-600 cursor-pointer">Technology Stack</li>
            <li className="hover:text-purple-600 cursor-pointer">Database</li>
          </ul>
        </aside>
      </div>
    </section>
    </>
  );
}

export default Documentaion;

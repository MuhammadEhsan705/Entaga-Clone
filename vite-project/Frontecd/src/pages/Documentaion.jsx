import React from "react";
import { HashLink } from "react-router-hash-link";
import Footer from "../components/Footer";

function Documentaion() {
  return (
    <>
      <section className="w-full bg-white px-4 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* LEFT SIDEBAR */}
          <aside className="hidden md:block md:col-span-2 border-r pr-4 text-sm text-gray-700 space-y-3">
            <h1 className="font-bold text-gray-900 mb-4">Introduction</h1>
            <ul className="space-y-2">
              <li className="cursor-pointer">High Level Architecture</li>
              <li className="cursor-pointer">Overview of the API</li>
              <li className="cursor-pointer">FAQs</li>
              <li className="cursor-pointer">License</li>
              <li className="cursor-pointer">Patch Notes</li>
            </ul>

            <h3 className="font-semibold mt-4 mb-2">Installation</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer">Prerequisites</li>
              <li className="cursor-pointer">Setup locally</li>
              <li className="cursor-pointer">Deploy for production</li>
            </ul>

            <h3 className="font-semibold mt-4 mb-2">Configuration</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer">Google Maps API</li>
              <li className="cursor-pointer">Payment Gateways</li>
              <li className="cursor-pointer">Firebase Setup</li>
              <li className="cursor-pointer">Database Setup</li>
            </ul>
          </aside>

          {/* MAIN CONTENT */}
          <main className="md:col-span-8">
            <h1 className="font-semibold mb-2">Getting Started</h1>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Introduction
            </h1>
            <p className="text-gray-700 mb-6">
              Enatega Multivendor is a full-featured Multivendor food delivery
              solution for iOS, Android, and the Web. We have ensured that you
              receive a good mobile and dashboard application design as well as a
              complete solution that will allow you to quickly integrate and
              white label into any meal delivery service.
            </p>

            {/* Video Section */}
            <div className="space-y-10">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/d3_Pgx0XX-M?si=G-QxSzr0DrnI_vwv"
                  title="Tutorial Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/pvrZOtJ4cCc?si=EpWbYe4Qw52Sls9a"
                  title="Full Platform Showcase"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Customer App */}
            <section id="customer-app" className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                Customer Mobile/Web Application
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Verification of email and phone numbers</li>
                <li>Using Google, Apple, and Facebook for authentication</li>
                <li>
                  Restaurants displayed on the map and home screen based on
                  location
                </li>
                <li>
                  Information about restaurants includes reviews and ratings,
                  hours of operation, delivery schedules, the menu and items
                  offered, as well as the establishment’s location and minimum
                  order
                </li>
                <li>
                  Adding an address using Maps integration and Google Places
                  suggestions
                </li>
                <li>Analytics and reporting on errors with Amplitude and Sentry</li>
                <li>
                  For account creation and order status updates, push
                  notifications and emails to users also include global push
                  notifications to all customers
                </li>
                <li>Real-time tracking of Rider and chat with Rider option</li>
                <li>Multi-Language and different themes support</li>
                <li>Rating and Review features for order</li>
                <li>Payment Integration for both PayPal and Stripe</li>
                <li>Previous order history and adding favorite restaurants</li>
                <li>
                  Options to add different variations of food items and adding
                  notes to restaurant
                </li>
                <li>Pick-up and delivery options with different timings</li>
                <li>Vouchers and Tipping option</li>
                <li>
                  Searching functionality respective to restaurants and their
                  items
                </li>
              </ul>
            </section>

            {/* Restaurant Application */}
            <section id="restaurant-app" className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Restaurant Application</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Ringer and Push Notification alert for new incoming order</li>
                <li>
                  Time limiter for a restaurant to accept orders and setting time
                  option for meal preparation
                </li>
                <li>Print Invoice option for restaurant</li>
                <li>Delivered orders history</li>
                <li>Changing restaurant status to online/offline</li>
                <li>Order Details with customer information and Order Details</li>
                <li>Real-time order receiving updates</li>
              </ul>
            </section>

            {/* Rider Application */}
            <section id="rider-app" className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Rider Application</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Real-time order status change updates</li>
                <li>Push Notification and Ringer feature for a new order</li>
                <li>
                  Map feature showing markers for delivery address and restaurant
                  address with Google Maps integration
                </li>
                <li>
                  Time limiter for accepting an order and updated time shown for
                  meal preparation time
                </li>
                <li>
                  The distance and anticipated travel time to the destination
                  (Restaurant and Customer) are displayed
                </li>
                <li>
                  Real-time chat with a customer option that includes push
                  notifications for chats received on both ends
                </li>
                <li>History of all orders in progress and new orders</li>
                <li>
                  Online delivery fees that are instantly placed into your wallet,
                  the ability to withdraw money, and wallet history
                </li>
                <li>Option of changing a status online/offline of rider</li>
              </ul>
            </section>

            {/* Admin Dashboard */}
            <section id="admin-dashboard" className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Role-based administration, whereby the administrator has access
                  to all features while the vendor (the owner of the restaurant)
                  only has access to the management of their own establishments
                </li>
                <li>Management of Restaurants, Vendors, Restaurants Section</li>
                <li>Defining Zones for Riders and assigning creating zones to Riders</li>
                <li>Managing withdrawal requests from riders and commission rates</li>
                <li>
                  Configuration of application and global level order status
                  management
                </li>
                <li>
                  Restaurant orders stats and managing their stripe account for
                  receiving commission directly
                </li>
                <li>
                  Restaurants managing their timings and defining delivery bounds
                  where they can operate
                </li>
                <li>
                  Restaurants’ menus feature with complete options to add any
                  variety of food with a discount feature
                </li>
                <li>User, Ratings, Coupon, and tipping option management</li>
              </ul>
            </section>

            {/* Developer Functionalities */}
            <section id="developer-tools" className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                Functionalities for better development experience
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>ESLint to provide you with linting capability in Javascript</li>
                <li>Prettier for code formatting</li>
                <li>Jest for unit testing</li>
                <li>Husky to prevent bad commits</li>
              </ul>
            </section>

            {/* Enatega Full App */}
            <section id="enatega-full-app" className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                What will you have in the Enatega Full App?
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Enatega Multivendor Mobile App (iOS and Android)</li>
                <li>Enatega Multivendor Rider App (iOS and Android)</li>
                <li>Enatega Multivendor Restaurant App (iOS and Android)</li>
                <li>Enatega Multivendor Web App</li>
                <li>Admin Web Dashboard</li>
                <li>Application program interface server</li>
                <li>Analytics Dashboard with Expo Amplitude</li>
                <li>Error reporting that is Sentry</li>
              </ul>
            </section>

            {/* Tech Stack */}
            <section id="technology-stack" className="mb-10">
              <h2 className="text-2xl font-bold mb-2">Enatega Technology Stack</h2>
              <h3 className="text-sm font-medium mb-4">
                Application Program Interface (API) Server
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="text-green-600 font-medium">NodeJS</span>
                </li>
                <li>
                  <span className="text-green-600 font-medium">MongoDB</span>
                </li>
                <li>
                  <span className="text-green-600 font-medium">ExpressJS</span>
                </li>
                <li>
                  <span className="text-green-600 font-medium">Stripe</span>
                </li>
                <li>Paypal</li>
                <li>
                  <span className="text-green-600 font-medium">Nodemailer</span>
                </li>
                <li>
                  <span className="text-green-600 font-medium">Firebase</span>
                  <span className="text-gray-600">
                    {" "}
                    (for push notifications on web)
                  </span>
                </li>
                <li>
                  <span className="text-green-600 font-medium">Express GraphQL</span>
                </li>
                <li>
                  <span className="text-green-600 font-medium">Mongoose</span>
                  <span className="text-gray-600"> (for MongoDB)</span>
                </li>
              </ul>
            </section>
          </main>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden md:block md:col-span-2 border-l pl-4 text-sm text-gray-700 space-y-2">
            <h3 className="font-bold text-2xl mb-2">On this page</h3>
            <ul className="space-y-2">
              <li>
                <HashLink smooth to="#customer-app" className="hover:text-purple-600 cursor-pointer">
                  Customer Mobile/Web App
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#restaurant-app" className="hover:text-purple-600 cursor-pointer">
                  Restaurant App
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#rider-app" className="hover:text-purple-600 cursor-pointer">
                  Rider App
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#admin-dashboard" className="hover:text-purple-600 cursor-pointer">
                  Admin Dashboard
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#technology-stack" className="hover:text-purple-600 cursor-pointer">
                  Technology Stack
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#database" className="hover:text-purple-600 cursor-pointer">
                  Database
                </HashLink>
              </li>
            </ul>
          </aside>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Documentaion;

import React from 'react';
import React from "react";
import { CheckCircle2 } from "lucide-react";

function Schedulemeeting() {
  return (
    <>



    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-purple-50 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full text-center border border-purple-100">
        
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-purple-100 p-3 rounded-full">
            <CheckCircle2 className="w-10 h-10 text-purple-600" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-purple-600 mb-2">
          You're Meeting Is Booked!
        </h1>
        <p className="text-gray-500 mb-8">
          We've scheduled your meeting and shared the details via email.
        </p>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Meeting Info */}
          <div className="bg-purple-50 rounded-xl p-5 text-left shadow-sm">
            <h2 className="text-purple-600 font-semibold mb-3">Meeting Info</h2>
            <p className="text-gray-700">
              <span className="font-medium">From:</span> 2025-09-18, 02:30:00-07:00
            </p>
            <p className="text-gray-700">
              <span className="font-medium">To:</span> 2025-09-18, 03:15:00-07:00
            </p>
            <p className="text-gray-700">
              <span className="font-medium">With:</span> Abbas
            </p>
          </div>

          {/* Invitee Info */}
          <div className="bg-purple-50 rounded-xl p-5 text-left shadow-sm">
            <h2 className="text-purple-600 font-semibold mb-3">Invitee Info</h2>
            <p className="text-gray-700">
              <span className="font-medium">Name:</span> ehsan
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email:</span> muhammadehsan32@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
 

    </>
  );
}

export default Schedulemeeting;

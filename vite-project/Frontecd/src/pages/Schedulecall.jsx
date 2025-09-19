import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TimezoneSelect from "react-timezone-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { CheckCircle2 } from "lucide-react";

function ScheduleCall() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [selectedTimezone, setSelectedTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guestEmails: "",
    notes: "",
    phone: "",
  });

  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  const handleBooking = () => {
    if (!time) {
      alert("⚠️ Please select a time slot.");
      return;
    }
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <section className="w-full bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="flex items-center space-x-3">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step > 1 ? "bg-green-500 text-white" : "bg-purple-600 text-white"
              }`}
            >
              1
            </div>
            <span
              className={`${
                step > 1 ? "text-gray-700" : "font-semibold text-purple-600"
              }`}
            >
              Select Date & Time
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === 2 ? "bg-purple-600 text-white" : step > 2 ? "bg-green-500 text-white" : "border border-gray-400 text-gray-500"
              }`}
            >
              2
            </div>
            <span
              className={`${
                step === 2
                  ? "font-semibold text-purple-600"
                  : step > 2
                  ? "text-gray-700"
                  : "text-gray-500"
              }`}
            >
              Enter Details
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === 3 ? "bg-purple-600 text-white" : "border border-gray-400 text-gray-500"
              }`}
            >
              3
            </div>
            <span
              className={`${
                step === 3 ? "font-semibold text-purple-600" : "text-gray-500"
              }`}
            >
              Confirmation
            </span>
          </div>
        </aside>

        
        <main className="md:col-span-3">
          
          {step === 1 && (
            <>
              <h1 className="text-2xl font-bold mb-2">
                Book Your <span className="text-purple-600">Call</span>
              </h1>
              <p className="text-gray-600 mb-8">
                Pick a date, time and timezone that works best for you.
              </p>

              {/* Calendar + Time Slots */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow-md p-4">
                  <Calendar
                    onChange={setDate}
                    value={date}
                    className="rounded-xl w-full"
                  />
                </div>
                <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col">
                  <h2 className="text-lg font-semibold mb-3">Select a Time</h2>
                  <div className="grid grid-cols-2 gap-3 flex-1">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setTime(slot)}
                        className={`px-3 py-2 rounded-lg border text-sm transition ${
                          time === slot
                            ? "bg-purple-600 text-white border-purple-600"
                            : "bg-gray-50 hover:bg-gray-100 border-gray-200"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timezone */}
              <div className="mt-8 bg-white shadow-md p-4 rounded-2xl">
                <h2 className="text-lg font-semibold mb-3">
                  Select Your Timezone
                </h2>
                <TimezoneSelect
                  value={selectedTimezone}
                  onChange={setSelectedTimezone}
                  className="w-full"
                />
              </div>

              <div className="mt-10 flex justify-end">
                <button
                  onClick={handleBooking}
                  className="px-6 py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 shadow-md"
                >
                  Next: Enter Details →
                </button>
              </div>
            </>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <>
              <h1 className="text-2xl font-bold mb-2">Enter Your Details</h1>
              <p className="text-gray-600 mb-8">
                Provide your info so we can confirm the meeting.
              </p>
              <form
                onSubmit={handleSubmit}
                className="space-y-5 bg-white p-6 rounded-2xl shadow-md"
              >
                <div>
                  <label className="block mb-2 text-sm font-medium">Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full border rounded-lg p-2"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full border rounded-lg p-2"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Guest Email(s)</label>
                  <input
                    type="text"
                    placeholder="Add up to 10 guest emails"
                    className="w-full border rounded-lg p-2"
                    value={formData.guestEmails}
                    onChange={(e) =>
                      setFormData({ ...formData, guestEmails: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Notes</label>
                  <textarea
                    className="w-full border rounded-lg p-2"
                    placeholder="Anything that will help prepare for our meeting..."
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                  />
                </div>

                
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Send text messages to
                  </label>
                  <PhoneInput
                    country={"us"}
                    value={formData.phone}
                    onChange={(phone) =>
                      setFormData({ ...formData, phone })
                    }
                    inputStyle={{ width: "100%" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 shadow-md"
                >
                  Schedule Event
                </button>
              </form>
            </>
          )}

          
          {step === 3 && (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-purple-50 p-6">
              <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full text-center border border-purple-100">
            
                <div className="flex justify-center mb-6">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <CheckCircle2 className="w-10 h-10 text-purple-600" />
                  </div>
                </div>

                
                <h1 className="text-2xl font-bold text-purple-600 mb-2">
                  You're Meeting Is Booked!
                </h1>
                <p className="text-gray-500 mb-8">
                  We've scheduled your meeting and shared the details via email.
                </p>

                
                <div className="grid md:grid-cols-2 gap-6">
                  
                  <div className="bg-purple-50 rounded-xl p-5 text-left shadow-sm">
                    <h2 className="text-purple-600 font-semibold mb-3">
                      Meeting Info
                    </h2>
                    <p className="text-gray-700">
                      <span className="font-medium">Date:</span>{" "}
                      {date.toDateString()}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Time:</span> {time} (
                      {selectedTimezone.label || selectedTimezone})
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">With:</span> Ali Hassan
                    </p>
                  </div>

                  
                  <div className="bg-purple-50 rounded-xl p-5 text-left shadow-sm">
                    <h2 className="text-purple-600 font-semibold mb-3">
                      Invitee Info
                    </h2>
                    <p className="text-gray-700">
                      <span className="font-medium">Name:</span> {formData.name}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Email:</span>{" "}
                      {formData.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </section>
  );
}

export default ScheduleCall;

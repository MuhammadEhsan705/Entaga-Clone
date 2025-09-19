import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


function Form() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  // Step 1 fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Step 2 fields
  const [stage, setStage] = useState("");
  const [budget, setBudget] = useState("");
  const [industry, setIndustry] = useState("");
  const [decisionMaker, setDecisionMaker] = useState("");

  const handleNext = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert("⚠️ Please fill in all fields before continuing.");
      return;
    }
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      stage,
      budget,
      industry,
      decisionMaker,
    };

    console.log("Submitted Data:", formData);

   
    navigate("/schedule-call", { state: formData });
  };

  return (
    <section className="w-full bg-white px-6 py-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Side - Heading */}
        <div className="flex justify-center md:justify-start">
          <h1 className="text-2xl font-bold">
            <span className="text-purple-600">Enatega</span> Quote Form
          </h1>
        </div>

        
        <form className="flex flex-col space-y-5">
          {step === 1 && (
            <>
              
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <PhoneInput
                  country={"pk"}
                  value={phone}
                  onChange={setPhone}
                  enableSearch={true}
                  inputClass="!w-full !py-2 !px-3 !border !rounded-md"
                  buttonClass="!border !bg-white"
                />
              </div>

             
              <button
                onClick={handleNext}
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-5 py-2 rounded-md shadow hover:opacity-90 transition"
              >
                Next Step →
              </button>
            </>
          )}

          {step === 2 && (
            <>
              
              <div>
                <label className="block text-sm font-medium mb-1">
                  What stage are you at in the development process?
                </label>
                <select
                  value={stage}
                  onChange={(e) => setStage(e.target.value)}
                  className="w-full border rounded-md px-3 py-2"
                >
                  <option value="">Select an option</option>
                  <option value="idea">Just exploring /Gathering information</option>
                  <option value="prototype">Have clear idea and ready to start</option>
                  <option value="development">Already have a desighn /prototype</option>
                  <option value="launched">Already Launched</option>
                </select>
              </div>

             
              <div>
                <label className="block text-sm font-medium mb-1">
                  Do you have a budget allocated for this project?
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full border rounded-md px-3 py-2"
                >
                  <option value="">Select Budget</option>
                  <option value="below-5k">Below $5k</option>
                  <option value="5k-10k">$5k - $10k</option>
                  <option value="10k-50k">$10k - $50k</option>
                  <option value="50k+">$50k+</option>
                </select>
              </div>

             
              <div>
                <label className="block text-sm font-medium mb-1">
                  What industry do you belong to?
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full border rounded-md px-3 py-2"
                >
                  <option value="">Select your industry</option>
                  <option value="food">Food & Beverages</option>
                  <option value="tech">Technology</option>
                  <option value="health">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="other">Other</option>
                </select>
              </div>

             
              <div>
                <label className="block text-sm font-medium mb-1">
                  Who will be involved in the decision-making process?
                </label>
                <select
                  value={decisionMaker}
                  onChange={(e) => setDecisionMaker(e.target.value)}
                  className="w-full border rounded-md px-3 py-2"
                >
                  <option value="">Select an option</option>
                  <option value="self">Myself</option>
                  <option value="team">My Team</option>
                  <option value="management">Management</option>
                  <option value="other">Other</option>
                </select>
              </div>

             
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-5 py-2 rounded-md shadow hover:opacity-90 transition"
              >
                Submit →
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

export default Form;

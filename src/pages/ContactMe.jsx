import React from "react";

const ContactMe = () => {
  return (
    <div className="bg-black text-white p-8 rounded-lg border-2 border-[#4B3D10]">
      <h1 className="text-2xl font-bold  mb-6">Contact Me</h1>

      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 rounded-lg border border-[#4B3D10] bg-transparent focus:ring-2 focus:ring-[#B7A261] outline-none"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 rounded-lg border border-[#4B3D10] bg-transparent focus:ring-2 focus:ring-[#B7A261] outline-none"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full p-3 rounded-lg border border-[#4B3D10] bg-transparent focus:ring-2 focus:ring-[#B7A261] outline-none resize-none"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#B7A261] text-black font-semibold py-2 px-4 rounded-lg hover:bg-[#9d8a55] transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;

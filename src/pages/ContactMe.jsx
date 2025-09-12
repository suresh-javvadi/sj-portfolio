import React from "react";

const ContactMe = () => {
  return (
    <div className="bg-[var(--bg-sec)] border-2 border-[var(--border-main)] rounded-lg p-6 space-y-6">
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
            className="w-full p-3 rounded-lg border border-[var(--border-main)] bg-transparent focus:ring-2 focus:ring-[#B7A261] outline-none"
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
            className="w-full p-3 rounded-lg border border-[var(--border-main)] bg-transparent focus:ring-2 focus:ring-[#B7A261] outline-none"
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
            className="w-full p-3 rounded-lg border border-[var(--border-main)] bg-transparent focus:ring-2 focus:ring-[#B7A261] outline-none resize-none"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[var(--bg-hlt)] text-black font-semibold py-2 px-4 rounded-lg hover:bg-[var(--bg-hlt-hover)] transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;

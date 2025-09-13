import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "ser_sj_contact_me_7104",
        "temp_sj_contact_me_7104",
        payload,
        "Z9StIGPStHhnv344k"
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
        },
        (error) => {
          console.error("Email send error:", error.text);
        }
      );

    try {
      await addDoc(collection(db, "contactme"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-[var(--bg-sec)] border-2 border-[var(--border-main)] rounded-lg p-6 space-y-6">
      <h1 className="text-2xl font-bold  mb-6">Contact Me</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
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
            value={formData.name}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.message}
            onChange={handleChange}
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

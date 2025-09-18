import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = { ...formData };

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

      setFormData({ name: "", email: "", message: "" });
      alert("✅ Thanks for reaching out! I'll get back to you soon.");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("❌ Oops! Something went wrong. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection className="bg-[var(--bg-sec)] border-2 border-[var(--border-main)] rounded-lg p-6 space-y-6">
      <motion.h1
        className="text-3xl font-bold text-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        📬 Get in Touch
      </motion.h1>
      <p className="text-center text-gray-600 dark:text-gray-300">
        Have a question, collaboration idea, or just want to say hi? Drop a
        message!
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 rounded-lg border border-[var(--border-main)] bg-transparent focus:ring-2 focus:ring-[#B7A261] outline-none"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 rounded-lg border border-[var(--border-main)] bg-transparent focus:ring-2 focus:ring-[#B7A261] outline-none"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
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
        </motion.div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[var(--bg-hlt)] text-black font-semibold py-2 px-4 rounded-lg hover:bg-[var(--bg-hlt-hover)] transition flex justify-center items-center gap-2 w-full sm:w-auto sm:self-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message ✉️"}
        </motion.button>
      </form>
    </AnimatedSection>
  );
};

export default ContactMe;

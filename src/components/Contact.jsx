import React, { useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Something went wrong");
      }
    } catch (err) {
      setStatus("❌ Server error");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Have questions? We'd love to hear from you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md space-y-4"
        >
          {status && (
            <p className="text-green-500 dark:text-green-400 font-medium">
              {status}
            </p>
          )}

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-900 
                       border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-900 
                       border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-900 
                       border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
          ></textarea>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full py-3 
                       bg-blue-600 hover:bg-blue-700 text-white rounded-lg 
                       transition-colors duration-300 font-medium"
          >
            <Send className="w-5 h-5" /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

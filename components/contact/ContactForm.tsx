"use client";

import { useState } from "react";
import Container from "../ui/Container";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      // API call will come later
      console.log(formData);
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      setStatus("success");

      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
    <Container>
    <div className="bg-white rounded-3xl shadow-lg p-8 body-font">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Send Us a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Full Name */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#009879]"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#009879]"
            placeholder="example@email.com"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Subject
          </label>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#009879]"
            placeholder="Subject"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Message
          </label>

          <textarea
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#009879]"
            placeholder="Write your message..."
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#009879] hover:bg-[#007f66] text-white py-4 rounded-xl font-semibold transition"
        >
         {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>

        {status === "success" && (
          <div className="bg-green-100 text-green-700 p-4 rounded-xl">
            Message sent successfully.
          </div>
        )}

        {status === "error" && (
          <div className="bg-red-100 text-red-700 p-4 rounded-xl">
            Something went wrong. Please try again.
          </div>
        )}
      </form>
    </div>
    </Container>
    </>
  );
}
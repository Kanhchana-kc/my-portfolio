import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="px-8 py-20 bg-slate-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form className="max-w-lg space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-gray-700"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-gray-700"
        />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-gray-700"
        ></textarea>
        <button className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl">
          Send Message
        </button>
      </form>
    </section>
  );
}

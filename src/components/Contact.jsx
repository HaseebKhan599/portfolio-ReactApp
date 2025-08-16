import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">I'm open to opportunities and collaborations. Reach out below:</p>
      <form action="https://formspree.io/f/mwkgnqgk" method="POST" className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded-lg border dark:bg-gray-800" />
        <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded-lg border dark:bg-gray-800" />
        <textarea name="message" rows="5" placeholder="Your Message" required className="w-full p-3 rounded-lg border dark:bg-gray-800"></textarea>
        <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Send Message</button>
      </form>
    </section>
  );
}

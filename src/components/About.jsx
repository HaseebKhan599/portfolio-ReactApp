import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        I'm a passionate Front-End Developer skilled in HTML, CSS, JavaScript, and React.
        I enjoy turning complex problems into simple, beautiful interfaces and writing clean, maintainable code.
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
        <li>React + Component-based architecture</li>
        <li>Responsive, mobile-first design</li>
        <li>REST API integration</li>
        <li>Version control with Git</li>
      </ul>
    </section>
  );
}

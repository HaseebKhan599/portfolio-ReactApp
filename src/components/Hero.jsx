import React from "react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <p className="uppercase text-blue-500 font-semibold">Front-End Developer</p>
      <h1 className="text-4xl md:text-6xl font-extrabold mt-2">
        Hi, I'm <span className="text-blue-500">Abdul Haseeb Khan</span>
      </h1>
      <p className="mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-300">
        I build fast, responsive, and accessible web interfaces using React and modern JavaScript.
      </p>
      <div className="mt-6 flex gap-4">
        <a href="#projects" className="px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600">View My Work</a>
        <a href="#contact" className="px-6 py-3 rounded-lg border border-blue-500 text-blue-500 font-semibold hover:bg-blue-50 dark:hover:bg-gray-800">Contact Me</a>
      </div>
    </section>
  );
}

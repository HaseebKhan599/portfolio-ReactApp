import React from "react";

export default function Navbar({ theme, setTheme }) {
  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <a href="#home" className="text-lg font-bold">HSB<span className="text-blue-500">.</span></a>
        <ul className="hidden md:flex gap-6 font-medium">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
      </nav>
    </header>
  );
}

import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "PhishFender",
      desc: "Chrome Extension for phishing detection using ML and Python.",
      link: "#",
      git: "#"
    },
    {
      title: "Portfolio Website",
      desc: "Responsive portfolio to showcase my work using React.",
      link: "#",
      git: "https://github.com/HaseebKhan599/portfolio-ReactApp"
    },
    {
      title: "Keeper App (Google Keep Clone)",
      desc: "A sleek React app inspired by Google Keep, letting users quickly create, view, and delete notes in an intuitive and responsive interface.",
      link: "#",
      git: "#"
    },
  ];

  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="p-6 rounded-lg shadow bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{p.desc}</p>
            <a href={p.link} className="text-blue-500 hover:underline mt-2 inline-block">View</a><br/>
            <a href={p.git} className="text-blue-500 hover:underline mt-2 inline-block">Github Repo</a>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client"
import Image from "next/image"
import React, { useState } from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const GITHUB_USERNAME = "Imnarendra18"

const filters = ["All", "React", "Next.js", "Full Stack"]

const FeaturedProjects = () => {
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [
    {
      title: "Pictofy",
      img: "/pictofy.png",
      desc: "AI-powered web app that generates stunning images from text.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
      category: "Full Stack",
      github: `https://github.com/${GITHUB_USERNAME}/Pictofy`,
      demo: "https://pictofy.vercel.app",
    },
    {
      title: "ByteBrain",
      img: "/bytebrain.png",
      desc: "A full-stack Second Brain app to organize thoughts & notes.",
      tech: ["TypeScript", "React", "Node.js", "MongoDB", "Express"],
      category: "Full Stack",
      github: `https://github.com/${GITHUB_USERNAME}/ByteBrain`,
      demo: "https://bytebrain.vercel.app",
    },
    {
      title: "AnonQuest",
      img: "/anonquest.png",
      desc: "Anonymous AMA app with secure Q&A.",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      category: "Next.js",
      github: `https://github.com/${GITHUB_USERNAME}/AnonQuest`,
      demo: "https://anonquest.vercel.app",
    },
    {
      title: "Talksy",
      img: "/talksyChat.png",
      desc: "Real-time chat & video communication app.",
      tech: ["React", "Node.js", "MongoDB"],
      category: "React",
      github: `https://github.com/${GITHUB_USERNAME}/Talksy`,
      demo: "https://talksy-jwl9.onrender.com",
    },
  ]

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(p => p.category === activeFilter)

  return (
    <section id="project" className="max-w-6xl mx-auto px-6 py-20">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6">
        <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Featured
        </span>{" "}
        Projects
      </h2>

      {/* Filter Buttons */}
      <div className="flex gap-3 flex-wrap mb-12">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all
              ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
                  : "border border-gray-300 hover:border-blue-500"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filteredProjects.map((p, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden shadow-xl 
                       hover:-translate-y-2 hover:shadow-2xl
                       transition-all duration-500"
          >
            {/* Image */}
            <div className="relative h-72">
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                {p.title}
              </h3>

              <p className="text-sm text-gray-700 mb-4">{p.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="badge badge-outline text-gray-600"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={p.github}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-xl hover:scale-105 transition"
                >
                  <FaGithub /> GitHub
                </a>

                <a
                  href={p.demo}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl hover:scale-105 transition"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="text-center mt-16">
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                     bg-gradient-to-r from-blue-500 to-cyan-400
                     text-white font-semibold hover:scale-105 transition"
        >
          <FaGithub className="text-lg" />
          View All Projects on GitHub
        </a>
      </div>
    </section>
  )
}

export default FeaturedProjects

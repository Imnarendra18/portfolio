"use client"
import Image from "next/image"
import React from "react"

const Contact = () => {
  return (
    <section className="min-h-[35vh] flex flex-col items-center justify-center py-10 px-4 lg:ml-24 bg-gradient-to-br from-gray-900 to-slate-900 text-white rounded-2xl">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Let’s Build Something Together 🚀
      </h2>

      {/* Description */}
      <p className="text-gray-400 mb-8 text-center max-w-2xl leading-relaxed">
        I’m open to collaborating on <span className="text-cyan-400 font-semibold">Full Stack</span>,{" "}
        <span className="text-purple-400 font-semibold">Advanced Java</span>, and{" "}
        <span className="text-emerald-400 font-semibold">AI & Data Science</span>{" "}
        projects. If you have an idea, project, or learning opportunity, feel free to reach out!
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-2">
        {/* Email Button */}
        <a
          href="mailto:nyadav862@rku.ac.in"
          className="flex items-center gap-3 px-6 py-3 rounded-xl 
          bg-gray-800 border border-gray-700 text-white font-semibold 
          hover:bg-gray-700 transition shadow-sm hover:shadow-md"
        >
          <Image
            src="/gmail.png"
            alt="Email"
            width={22}
            height={22}
          />
          Email Me
        </a>

        {/* GitHub Button */}
        <a
          href="https://github.com/Imnarendra18"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 rounded-xl 
          bg-gray-800 border border-gray-700 text-white font-semibold 
          hover:bg-gray-700 transition shadow-sm hover:shadow-md"
        >
          <Image
            src="/profile.png"
            alt="GitHub"
            width={22}
            height={22}
            className="rounded-full"
          />
          Visit GitHub
        </a>
      </div>

      {/* Footer Line */}
      <p className="mt-4 text-sm text-gray-500 italic">
        🌌 Tech Universe — Turning ideas into intelligent solutions
      </p>
    </section>
  )
}

export default Contact

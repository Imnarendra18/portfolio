"use client"
import React, { FC } from "react"

const About: FC = () => {
  return (
    <section id="about" className="mt-16 px-6 lg:ml-24">
      {/* Heading */}
      <h1
        className="relative inline-block text-3xl font-bold font-Ovo mb-6 
        bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
      >
        About Me
        <svg
          className="absolute left-0 -bottom-1 w-full h-1 text-yellow-400"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 5 Q 25 0, 50 5 T 100 5"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
          />
        </svg>
      </h1>

      {/* Description */}
      <div className="flex flex-col gap-4 items-start justify-center max-w-[700px] text-base-content/70 leading-relaxed">
        <p>
          Hi! I am{" "}
          <span className="font-bold text-blue-500">Narendra Kumar Yadav</span>, a passionate{" "}
          <span className="text-cyan-400 font-semibold">Full Stack Developer</span> and{" "}
          <span className="text-purple-500 font-semibold">Advanced Java Developer</span> focused on building robust, scalable, and efficient applications.
        </p>

        <p>
          I specialize in <span className="font-semibold text-blue-500">Core Java</span>,{" "}
          <span className="font-semibold text-cyan-400">JDBC</span>,{" "}
          <span className="font-semibold text-purple-500">Servlets</span>,{" "}
          <span className="font-semibold text-blue-500">MySQL</span>, and{" "}
          <span className="font-semibold text-cyan-400">React.js</span> to create dynamic, database-driven web applications.
        </p>

        <p>
          I am also passionate about{" "}
          <span className="font-semibold text-purple-600">Data Science & AI</span> and continuously learning{" "}
          <span className="font-semibold text-blue-500">Python</span>,{" "}
          <span className="font-semibold text-cyan-400">NumPy</span>,{" "}
          <span className="font-semibold text-purple-500">Pandas</span>, and{" "}
          <span className="font-semibold text-purple-600">Machine Learning</span> to solve real-world problems with data-driven insights.
        </p>

        <p>
          My goal is to merge <span className="font-semibold text-cyan-400">Full Stack Development</span> with{" "}
          <span className="font-semibold text-purple-600">AI & Data Science</span> to deliver smart, impactful, and innovative software solutions.
        </p>

        <p>
          I enjoy learning new technologies, working on hands-on projects, and contributing to{" "}
          <span className="italic">open-source</span> while writing{" "}
          <span className="underline decoration-blue-500">clean, maintainable code</span> that others can rely on.
        </p>
      </div>
    </section>
  )
}

export default About

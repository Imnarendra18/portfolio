"use client"
import React from "react"
import Image from "next/image"
import { GraduationCap } from "lucide-react"

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "RK University, Rajkot",
      duration: "2023 – 2027 (Coursework Completed – Career Transition)",
      logo: "/education/rku-university.png",
      note:
        "Shifted focus to hands-on learning in Full Stack Development, Advanced Java, and Data Science with AI.",
    },
   
  ]

  return (
    <section
      id="education"
      className="relative max-w-4xl mx-auto px-6 py-12 lg:ml-20"
    >
      {/* Heading */}
      <h2 className="relative inline-block text-4xl font-bold mb-8 text-left">
        <span className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
          Education
        </span>
        <svg
          className="absolute left-0 -bottom-1 w-full h-1 text-emerald-400"
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
      </h2>

      {/* Education Card */}
      <div className="flex flex-col gap-6">
        {education.map((edu, i) => (
          <div
            key={i}
            className="group flex flex-col md:flex-row items-start md:items-center justify-between gap-6
              p-6 rounded-2xl bg-white/95 dark:bg-slate-800/80
              border border-gray-200 dark:border-slate-700
              shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-start gap-4">
              {/* Logo */}
              <div className="relative flex items-center justify-center w-14 h-14 rounded-full
                bg-white shadow-sm ring-1 ring-gray-100
                dark:bg-slate-700 dark:ring-slate-700 overflow-hidden">
                {edu.logo ? (
                  <Image
                    src={edu.logo}
                    alt={edu.institution}
                    fill
                    className="object-contain p-2"
                  />
                ) : (
                  <GraduationCap className="text-emerald-400" size={28} />
                )}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white">
                  {edu.degree}
                </h3>

                <p className="text-slate-600 dark:text-slate-300">
                  <a
                    href="https://rku.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    {edu.institution}
                  </a>
                </p>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 max-w-md">
                  {edu.note}
                </p>
              </div>
            </div>

            <p className="text-sm md:text-base text-slate-500 dark:text-slate-300 whitespace-nowrap">
              {edu.duration}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education

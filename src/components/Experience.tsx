"use client"
import Image from "next/image"
import React from "react"

const Experience = () => {
    const experiences = [
        {
            role: "Co-Founder",
            company: "Kraf8ixLab",
            img: "/kraf8ixlab.png",
            type: "Self-employed",
            date: "Mar 2023 - Present",
            location: "Nepal",
        },
        {
            role: "Back End Developer",
            company: "Leapfrog Technology, Inc.",
            img: "/leapfrog.svg",
            type: "Internship",
            date: "Apr 2025 - Jul 2025",
            location: "Nepal",
        },
        {
            role: "Web Developer",
            company: "LogicaBeans",
            img: "/logicabeans.svg",
            type: "Internship",
            date: "Oct 2024 - Dec 2024",
            location: "Kathmandu, Nepal",
        },
    ]

    return (
        <div id="experience" className="relative max-w-5xl mx-auto px-6 py-20 lg:ml-20">
            <h2 className="text-3xl font-bold mb-12">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Cool places I worked at
                </span>
            </h2>

            <div className="space-y-8">
                {experiences.map((exp, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-between"
                    >
                        {/* Left: Logo + Info */}
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12">
                                <Image
                                    src={exp.img}
                                    alt={exp.company}
                                    fill
                                    className="object-contain rounded-full"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">{exp.role}</h3>
                                <p className="text-sm text-gray-400">
                                    {exp.company} · {exp.type}
                                </p>
                            </div>
                        </div>

                        {/* Right: Date */}
                        <p className="text-sm text-gray-400 whitespace-nowrap">
                            {exp.date}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience

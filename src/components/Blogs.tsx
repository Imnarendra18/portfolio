"use client"
import React, { useState } from "react"

interface Blog {
  title: string
  shortDescription: string
  fullDescription: string
  date: string
}

const blogs: Blog[] = [
  {
    title: "My Journey into Full Stack Development",
    shortDescription:
      "How I started learning Full Stack Development and building real-world projects.",
    fullDescription:
      "My journey into Full Stack Development started with curiosity about how websites work. I began with HTML, CSS, and JavaScript, then moved into React, Node.js, and databases. Along the way, I struggled with concepts, failed multiple times, but learned by building real projects instead of just watching tutorials. This journey taught me consistency, problem-solving, and how real-world applications are built.",
    date: "2025-04-22",
  },
  {
    title: "About Me",
    shortDescription:
      "From my childhood curiosity to becoming a self-driven developer.",
    fullDescription:
      "Since childhood, I was curious about technology and computers. Over time, this curiosity turned into passion. I explored programming, web development, and AI. Today, I am focused on improving my skills in Full Stack Development and Data Science with AI, aiming to solve real-world problems through technology.",
    date: "2025-08-15",
  },
  {
    title: "How I Escaped Tutorial Hell",
    shortDescription:
      "From endless tutorials to confident project-based learning.",
    fullDescription:
      "Tutorial hell trapped me for a long time. I watched videos but couldn’t build anything on my own. The turning point came when I started building small projects, making mistakes, and debugging errors myself. This helped me truly understand concepts and gain confidence as a developer.",
    date: "2025-07-30",
  },
  {
    title: "Solving a Real-World Problem Using AI",
    shortDescription:
      "A real challenge I faced and how AI helped me solve it.",
    fullDescription:
      "I faced a real-world problem that required analyzing data and making predictions. Using Python, pandas, and machine learning models, I built a solution that automated the process and improved accuracy. This experience showed me the true power of AI in solving practical problems.",
    date: "2025-07-10",
  },
]

const Blogs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div id="blog" className="max-w-5xl mx-auto px-6 py-16 lg:ml-20">
      <h2 className="text-3xl font-bold mb-8 text-primary">
        My <span className="text-base-content">Blogs</span>
      </h2>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl border border-base-300 bg-base-200 hover:shadow-lg transition"
          >
            {/* Title */}
            <h3 className="text-xl font-bold mb-2">
              {blog.title}
            </h3>

            {/* Date */}
            <p className="text-sm text-base-content/70 mb-3">
              {new Date(blog.date).toDateString()}
            </p>

            {/* Short Description */}
            <p className="text-base-content/80 mb-4">
              {blog.shortDescription}
            </p>

            {/* Learn More */}
            <button
              onClick={() =>
                setActiveIndex(activeIndex === idx ? null : idx)
              }
              className="btn btn-sm btn-outline btn-primary"
            >
              {activeIndex === idx ? "Show Less ↑" : "Learn More →"}
            </button>

            {/* Expanded Content */}
            {activeIndex === idx && (
              <div className="mt-4 text-base-content/90 border-t pt-4">
                {blog.fullDescription}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blogs

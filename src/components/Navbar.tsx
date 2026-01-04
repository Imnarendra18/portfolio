'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Home, FolderKanban, BookOpen } from "lucide-react"

const Navbar = () => {
    const [active, setActive] = useState<string>("");

    useEffect(() => {
        const handleHashChange = () => setActive(window.location.hash || "/");
        handleHashChange(); // run on load
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = href === "/" ? document.body : document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            setActive(href);
        }
    };

    
    const linkClasses = (href: string) =>
        `group relative flex items-center gap-2 px-3 py-1 font-sans transition-all
        ${active === href
            ? "text-white bg-gradient-to-r from-blue-500 to-cyan-400 rounded-md"
            : "text-gray-200 hover:text-white"
        }`;

    return (
        <nav className="fixed top-16 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-auto px-6 py-3 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg">

            {/* Nav Links */}
            <ul className="flex items-center gap-4 lg:gap-10">
                {/* Home */}
                <li>
                    <Link
                        href="/"
                        className={linkClasses("/")}
                        onClick={(e) => handleClick(e, "/")}
                    >
                        <Home size={20} />
                        {active === "/" && <span className="hidden lg:inline font-semibold">Home</span>}

                        {active !== "/" && (
                            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs rounded bg-blue-500 text-white opacity-0 group-hover:opacity-100 transition pointer-events-none">
                                Home
                            </span>
                        )}
                    </Link>
                </li>

                {/* Projects */}
                <li>
                    <Link
                        href="#project"
                        className={linkClasses("#project")}
                        onClick={(e) => handleClick(e, "#project")}
                    >
                        <FolderKanban size={20} />
                        {active === "#project" && <span className="hidden lg:inline font-semibold">Projects</span>}

                        {active !== "#project" && (
                            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs rounded bg-blue-500 text-white opacity-0 group-hover:opacity-100 transition pointer-events-none">
                                Projects
                            </span>
                        )}
                    </Link>
                </li>

                {/* Blogs */}
                <li>
                    <Link
                        href="#blog"
                        className={linkClasses("#blog")}
                        onClick={(e) => handleClick(e, "#blog")}
                    >
                        <BookOpen size={20} />
                        {active === "#blog" && <span className="hidden lg:inline font-semibold">Blogs</span>}

                        {active !== "#blog" && (
                            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs rounded bg-blue-500 text-white opacity-0 group-hover:opacity-100 transition pointer-events-none">
                                Blogs
                            </span>
                        )}
                    </Link>
                </li>
            </ul>

            {/* Availability Badge */}
            <span
                className="relative ml-4 flex items-center justify-center group
                w-8 h-8 rounded-full bg-green-700 text-white
                sm:w-auto sm:h-auto sm:rounded-md sm:px-4 sm:py-1
                sm:bg-[linear-gradient(to_right,#004700,#22c55e)]
                sm:gap-2 sm:shadow-md sm:ml-4 transition-all duration-300"
            >
                {/* Pulsing dot */}
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>

                {/* Text visible only on sm and up */}
                <span className="hidden sm:inline font-medium">Available</span>

                {/* Tooltip (mobile hover) */}
                <span
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded 
                    bg-green-700 text-white opacity-0 group-hover:opacity-100 transition-all
                    pointer-events-none sm:hidden"
                >
                    Available
                </span>
            </span>
        </nav>
    )
}

export default Navbar

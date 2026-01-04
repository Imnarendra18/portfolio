"use client";

import { useEffect, useState } from "react";
import { PaletteIcon } from "lucide-react";

import { THEMES } from "@/constant/theme";

export default function ThemeSelector() {
    const [theme, setTheme] = useState("light");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved && THEMES.some((t) => t.name === saved)) {
            setTheme(saved);
            document.documentElement.setAttribute("data-theme", saved);
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, []);

    const changeTheme = (newTheme: string) => {
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        setOpen(false);
    };

    return (
        <div className="fixed top-5 right-5 z-50">
            {/* Icon button */}
            <button
                onClick={() => setOpen(!open)}
                className="btn btn-circle btn-primary"
            >
                <PaletteIcon className="h-5 w-5" />
            </button>

            {/* Dropdown */}
            {open && (
                <div className="mt-2 p-2 shadow-xl bg-base-200 rounded-xl w-48 border border-base-300 max-h-96 overflow-y-auto">
                    <ul className="space-y-1">
                        {THEMES.map((t) => (
                            <li key={t.name}>
                                <button
                                    className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-2 ${theme === t.name
                                            ? "bg-primary text-primary-content"
                                            : "hover:bg-base-300"
                                        }`}
                                    onClick={() => changeTheme(t.name)}
                                >
                                    {/* Color preview (using primary) */}
                                    <span
                                        className="w-4 h-4 rounded-full border"
                                        style={{ backgroundColor: t.colors.primary }}
                                    ></span>
                                    {t.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

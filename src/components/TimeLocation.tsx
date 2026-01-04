"use client";
import React, { useEffect, useState } from "react";

const TimeLocation = () => {
    const [time, setTime] = useState<string | null>(null); // start with null
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();

            const formattedTime = now.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
            });

            const offsetMinutes = now.getTimezoneOffset();
            const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
            const offsetMins = Math.abs(offsetMinutes) % 60;
            const sign = offsetMinutes <= 0 ? "+" : "-";
            const gmt = `GMT${sign}${offsetHours}:${offsetMins
                .toString()
                .padStart(2, "0")}`;

            const location = "Kathmandu, Nepal";

            setTime(`${formattedTime} (${gmt})  ${location}`);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setVisible(false);
            } else {
                setVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    if (!time) return null;

    return (
        <div
            className={`fixed left-5 top-0 text-green-500 text-sm px-6 py-2 font-mono transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            {time}
        </div>
    );
};

export default TimeLocation;

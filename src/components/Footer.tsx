"use client";

import { useEffect, useState } from "react";

const gitaQuotes: string[] = [
  "You have the right to work, but never to the fruit of work. — BG 2.47",
  "Change is the law of the universe. — BG 2.14",
  "A person can rise through the efforts of his own mind. — BG 6.5",
  "Perform your duty without attachment. — BG 3.19",
  "The mind is the best friend and the worst enemy. — BG 6.6",
  "The soul is neither born nor does it die. — BG 2.20",
  "Whatever happens, happens for the good. — BG 4.18",
];

const Footer = () => {
  const [quote, setQuote] = useState<string>("");

  useEffect(() => {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff =
      today.getTime() -
      startOfYear.getTime();
    const day = Math.floor(diff / (1000 * 60 * 60 * 24));

    setQuote(gitaQuotes[day % gitaQuotes.length]);
  }, []);

  return (
    <footer className="mt-20 px-6 lg:ml-24">
      <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-black
        border border-white/10 backdrop-blur-lg
        py-6 px-4 flex flex-col items-center gap-4">

        {quote && (
          <p className="text-center italic text-gray-400 max-w-3xl">
            “{quote}”
          </p>
        )}

        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-cyan-400">
            Narendra  Kumar Yadav
          </span>{" "}
          • All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

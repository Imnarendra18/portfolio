import type { Metadata } from "next";
// import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import logoNy from "./logoNy.png";

// const outfit = Outfit({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--outfit-font",
// });

// const ovo = Ovo({
//   subsets: ["latin"],
//   weight: ["400"],
//   variable: "--ovo-font",
// });

export const metadata: Metadata = {
  title: "Narendra Kumar Yadav",
  description: "",
  icons: {
    icon: logoNy.src,
  },
};

import ThemeSelector from "@/components/ThemeSelector";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <div className="max-w-6xl mx-auto px-6 md:px-5">
          {children}
        </div>
        <ThemeSelector />
      </body>
    </html>
  );
}


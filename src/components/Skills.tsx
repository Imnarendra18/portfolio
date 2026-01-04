"use client";

import {
  SiC,
  SiSharp,
  SiCplusplus,
  SiHtml5,
  SiPhp,
  SiPython,
  SiOracle,
  SiFirebase,
  SiDotnet,
  SiBootstrap,
  SiFlutter,
  SiApache,
  SiMysql,
  SiCanva,
  SiFigma,
  SiNumpy,
  SiPandas,
  SiGithub,
  SiCisco,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

import { IconType } from "react-icons";

type Skill = {
  name: string;
  icon: IconType;
  bg: string;
};

const skills: Skill[] = [
  { name: "C", icon: SiC, bg: "bg-blue-600" },
  { name: "C#", icon: SiSharp, bg: "bg-green-600" },
  { name: "C++", icon: SiCplusplus, bg: "bg-blue-700" },
  { name: "HTML5", icon: SiHtml5, bg: "bg-orange-600" },
  { name: "Java", icon: FaJava, bg: "bg-yellow-600" },
  { name: "PHP", icon: SiPhp, bg: "bg-indigo-600" },
  { name: "Python", icon: SiPython, bg: "bg-yellow-500" },
  { name: "Oracle", icon: SiOracle, bg: "bg-red-600" },
  { name: "Firebase", icon: SiFirebase, bg: "bg-amber-500" },
  { name: ".NET", icon: SiDotnet, bg: "bg-purple-600" },

  { name: "Bootstrap", icon: SiBootstrap, bg: "bg-purple-700" },
  { name: "Flutter", icon: SiFlutter, bg: "bg-sky-500" },
  { name: "Apache", icon: SiApache, bg: "bg-red-700" },
  { name: "MySQL", icon: SiMysql, bg: "bg-cyan-600" },
  { name: "Canva", icon: SiCanva, bg: "bg-teal-500" },
  { name: "Figma", icon: SiFigma, bg: "bg-pink-600" },
  { name: "NumPy", icon: SiNumpy, bg: "bg-indigo-500" },
  { name: "Pandas", icon: SiPandas, bg: "bg-violet-600" },
  { name: "GitHub", icon: SiGithub, bg: "bg-gray-700" },
  { name: "Cisco", icon: SiCisco, bg: "bg-blue-800" },
];

const Skills = () => {
  return (
    <section className="mt-14 px-6 lg:ml-24" aria-label="Skills">
      <ul className="flex flex-wrap gap-2" role="list">
        {skills.map(({ name, icon: Icon, bg }) => (
          <li key={name} aria-label={name}>
            <div
              className={`${bg} flex items-center gap-2 px-4 py-2 rounded-md text-white text-sm font-semibold shadow-md hover:scale-105 transition-transform`}
            >
              <Icon className="text-base" aria-hidden="true" focusable="false" />
              <span>{name}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

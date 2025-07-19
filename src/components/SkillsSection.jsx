import { useState } from "react"
import { cn } from "../lib/util"
import { FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import { TbBrandGraphql } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa6";
import { TbBrandFigma } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const skills = [

    { name: "HTML/CSS", level: 95, category: "frontend" ,icon:<FaHtml5 />},
    { name: "JavaScript", level: 90, category: "frontend",icon:<TbBrandJavascript /> },
    { name: "React", level: 80, category: "frontend",icon:<FaReact /> },
    { name: "TypeScript", level: 80, category: "frontend",icon:<SiTypescript />
 },
    { name: "Tailwind CSS", level: 80, category: "frontend",icon:<RiTailwindCssLine /> },
    { name: "Next.js", level: 70, category: "frontend",icon:<SiNextdotjs />
 },

    // Backend
    { name: "Node.js", level: 80, category: "backend",icon:<FaNode /> },
    { name: "Express", level: 75, category: "backend",icon:<SiExpress /> },
    { name: "MongoDB", level: 70, category: "backend",icon:<TbBrandMongodb /> },
    // { name: "PostgreSQL", level: 65, category: "backend" },
    // { name: "GraphQL", level: 60, category: "backend",icon:<TbBrandGraphql /> },

    // Tools
    { name: "Git/GitHub", level: 95, category: "tools",icon:<FaGithub /> },
    { name: "Docker", level: 60, category: "tools",icon:<FaDocker /> },
    // { name: "Figma", level: 70, category: "tools",icon:<TbBrandFigma /> },
    { name: "VS Code", level: 95, category: "tools" ,icon:<VscVscode />},
]

const categories = ["all", "frontend", "backend", "tools"]

export default function SkillsSection() {

    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    )

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">

            <div className="container mx-auto  max-w-5xl">

                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>

                </h2>
                {/* category */}
                <div>
                    {categories.map((category, key) => (
                        <button key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn("px-5 py-2 mb-5 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" :
                                    "bg-secondary/70 text-foreground hover:bg-secondary")}>
                            {category}
                        </button>
                    ))}

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {filteredSkills.map((skill, key) => (
                        <div key={key} className='bg-card p-6 rounded-lg shadow-xs card-hover'>
                            <div className="text-left mb-4 flex">
                               <span className=" ml-5 mr-3 text-3xl">{skill.icon}</span> 
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{ width: skill.level + "%" }} />

                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}

                </div>


            </div>
        </section>
    )
};

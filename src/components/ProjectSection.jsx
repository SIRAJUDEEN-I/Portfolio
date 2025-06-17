import { ExternalLink,Github,ArrowRight } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Chef Ai",
        description: "AI-powered web application that helps users generate personalized recipes based on their preferences and available ingredients",
        image: "./src/assets/chefai.png",
        tags: ["React", "gemini ai model", "tailwindcss"],
        demoUrl: "#",
        githubUrl: "#"
    },
     {
        id: 2,
        title: "Talent Quest",
        description: "A Job Board where recruiters can post jobs and seekers can find job",
        image: "./src/assets/talentquest.png",
        tags: ["React", "Typescript", "tailwindcss","Node",'Express'],
        demoUrl: "#",
        githubUrl: "#"
    }
]


export default function ProjectSection() {

    return (


        <section id="projects" className="py-24 px-4 relative">

            <div className="container mx-auto max-w-5xl">

                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,key)=>(
                        
                        <div key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col justify-between">
                        <div className="h-100% w-100% overflow-hidden ">
                            <img src={project.image} alt={project.title} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div>
                            <div>
                                {project.tags.map((tag)=>(
                                    <span className="px-2 py-2  text-xs font-medium rounded-full bg-secondary text-secondary-foreground">{tag}</span>

                                ))}
                            </div>
                        </div>
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="bottom text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex flex-row py-2">

                                    <a href={project.demoUrl} 
                                    className="text-foreground/80 px-5  hover:text-primary transition-colors duration-300">
                                        <ExternalLink/>
                                    </a>
                                    <a href={project.githubUrl}
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Github/>
                                    </a>

                                </div>

                   </div>   


                    ))}
                </div>
               
               <div>
                        <a 
                        className="cosmic-button w-fit flex mt-4 items-center mx-auto gap-2
                        href="https://github.com/SIRAJUDEEN-I"
                        target="_blank">
                        Check My Github <ArrowRight size={16}/>
                        </a>

               </div>

            </div>

        </section>
    )

}
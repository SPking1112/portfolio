import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { title: "NeuraNX.Ai Landing Page (Draft)", image: project1, tags: ["HTML", "CSS", "JS"], description: "Modern AI-based responsive landing page", demo: "https://neuranxai.netlify.app/",
    code: "https://github.com/SPking1112/NeuraNX.AI" },
  { title: "Iphone Landing Page", image: project2, tags: ["HTML", "CSS", "JS"], description: "Developed a modern, responsive iPhone landing page inspired by Apple’s design, showcasing products with clean UI, smooth layout, and engaging user experience.", demo: "https://spkingiphonelandingpage.netlify.app/",
    code: "https://github.com/SPking1112/Iphone-Landing-Page" },
    { title: "Image Extraction", image: project3, tags: ["Python", "Image Processing", "AI"], description: "Built a scalable PDF image processing pipeline to efficiently extract, process, and manage images from documents with optimized performance and automation.", demo: "https://demo1.com",
    code: "https://github.com/project1" },
    { title: "CRUD", image: project4, tags: ["JS", "HTML", "CSS"], description: "Developed a responsive CRUD web application to efficiently manage user data with seamless create, read, update, and delete operations.", demo: "https://cruduserdata.netlify.app/",
    code: "https://github.com/SPking1112/CRUD" },
];

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="works" className="py-24 relative">
  <div className="container mx-auto px-4 sm:px-6" ref={ref}>
    
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center"
    >
      <span className="text-primary font-mono text-sm uppercase tracking-widest">
        Portfolio
      </span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3">
        Latest Works
      </h2>
      <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm sm:text-base">
        Perfect solutions for digital experience
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.15, duration: 0.6 }}
          className="group relative glass-card rounded-2xl overflow-hidden cursor-pointer"
        >
          <div className="relative overflow-hidden aspect-[4/3]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="
              absolute inset-0 
              bg-background/80 backdrop-blur-sm 
              opacity-0 group-hover:opacity-100 
              transition-all duration-500
              flex flex-col items-center justify-center 
              text-center 
              px-4 sm:px-6
            ">

              <h3 className="text-lg sm:text-xl font-bold">
                {project.title}
              </h3>

              <p className="
                text-xs sm:text-sm 
                text-muted-foreground 
                max-w-md 
                mx-auto 
                break-words 
                leading-relaxed
              ">
                {project.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-3 mt-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow bg-primary text-primary-foreground px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2"
                >
                  Demo <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow bg-primary/80 text-primary-foreground px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2"
                >
                  Code <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

          <div className="p-5">
            <h3 className="font-semibold text-sm sm:text-base">
              {project.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
  );
}

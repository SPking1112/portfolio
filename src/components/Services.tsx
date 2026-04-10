import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BookImage, Code2, Cpu} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description: "Building pixel-perfect, responsive interfaces with React and Angular",
    tags: ["React", "Angular"],
  },
  {
    icon: Cpu,
    title: "Backend & API Development",
    description: "Designing robust RESTful APIs with FastAPI and PostgreSQL for scalable applications.",
    tags: ["FastAPI", "PostgreSQL", "Python"],
  },
  {
    icon: BookImage,
    title: "UI/UX",
    description: "Crafting pixel-perfect, user-focused designs in Figma.",
    tags: ["Figma"],
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-widest">What I Do</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">Services</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group glass-card rounded-2xl p-8 hover:-translate-y-2 hover:neon-glow transition-all duration-500 cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-primary/5 text-primary border border-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

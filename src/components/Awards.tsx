import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const timeline = [
  {
    year: "2025 – Present",
    icon: Briefcase,
    items: [
      { org: "NeuraNX.Ai", title: "Full-Stack Developer", description: "Started as an intern and transitioned into a full-time role. Working on full-stack application development, API integration, and scalable AI-powered web solutions." },
    ],
  },
  {
    year: "2025",
    icon: Award,
    items: [
      { org: "Code99 IT Academy", title: "Full Stack Web Development Certification", description: "Completed comprehensive full-stack web development training." },
    ],
  },
  {
    year: "2024",
    icon: GraduationCap,
    items: [
      { org: "Prince Shri Venkateshwara Arts and Science College", title: "Bachelor of Computer Application", description: "Graduated with 67% aggregate." },
    ],
  },
];

export default function Awards() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-widest">Journey</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">Experience & Education</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-24 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

          {timeline.map((group, gi) => (
            <motion.div
              key={group.year}
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: gi * 0.2, duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-start gap-8">
                <div className="w-16 md:w-24 shrink-0 flex flex-col items-center gap-2">
                  <group.icon className="w-5 h-5 text-primary" />
                  <span className="text-primary font-mono font-bold text-sm">{group.year}</span>
                </div>

                <div className="flex-1 space-y-6">
                  {group.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: gi * 0.2 + i * 0.1, duration: 0.5 }}
                      className="glass-card rounded-xl p-5 hover:neon-glow-sm transition-all duration-300"
                    >
                      <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-1">{item.org}</p>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

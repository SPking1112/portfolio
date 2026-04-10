import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const skills = ["React", "Angular","Python", "FastAPI", "PostgreSQL", "REST APIs", "Figma"];

function AnimatedCounter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (!isVisible) return;
    let current = 0;
    const step = target / 60;
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 25);
    return () => clearInterval(interval);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="text-center">
      <span className="text-5xl font-bold text-primary font-mono">{count}</span>
      <p className="text-sm text-muted-foreground uppercase tracking-wider mt-2">{label}</p>
    </div>
  );
}

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Counters & Services */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-2 gap-8 mb-12">
              <AnimatedCounter target={3} label="Projects Built" />
              <AnimatedCounter target={1} label="Year Experience" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {["Design", "Front-End", "SEO", "Backend"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass-card rounded-xl p-5 hover:neon-glow-sm transition-all duration-300"
                >
                  <h4 className="font-semibold text-sm mb-1">{item}</h4>
                  <p className="text-xs text-muted-foreground">Expert level proficiency</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-primary font-mono text-sm uppercase tracking-widest">About Me</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">
              Hello! I'm Raja Sri Veelan M
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Full-Stack Developer focused on crafting scalable web applications, AI-powered solutions, and seamless user experiences. Skilled in React, Angular, FastAPI, PostgreSQL, and UI/UX design with Figma.<br /> <br />Passionate about clean architecture, performance optimization, and building products that solve real-world problems. Currently contributing as a Full-Stack Developer at NeuraNX.Ai.
            </p>

            {/* Skill Badges */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-xl text-sm font-medium border border-primary/20 text-primary bg-primary/5 hover:bg-primary/10 hover:neon-glow-sm transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

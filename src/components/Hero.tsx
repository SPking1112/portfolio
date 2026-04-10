import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import developerImg from "@/assets/developer-portrait.jpg";
import { Code2, Database, Cloud, Terminal } from "lucide-react";

const orbitIcons = [
  { name: "Angular", icon: <Code2 className="w-5 h-5" />, duration: 12, radius: 140, delay: 0 },
  { name: "NodeJS", icon: <Terminal className="w-5 h-5" />, duration: 16, radius: 160, delay: 2 },
  { name: "Python", icon: <Database className="w-5 h-5" />, duration: 14, radius: 150, delay: 4 },
  { name: "JavaScript", icon: <Cloud className="w-5 h-5" />, duration: 18, radius: 170, delay: 1 },
];

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-[image:var(--hero-gradient)]" />
      {/* Subtle radial glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
        />
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle ${8 + Math.random() * 12}s linear ${Math.random() * 5}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-6"
            >
              Full-Stack Developer
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 font-mono"
            >
              Turning ideas into
              <br />
              <span className="gradient-text">scalable apps.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg max-w-md mb-8"
            >
              Building scalable web apps, AI-driven tools, and modern responsive UI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => navigate("/contact")}
                className="btn-glow bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-sm hover:scale-105 transition-transform duration-300 backdrop-blur-sm"
              >
                Let's Chat
              </button>
              <a
                href="#works"
                className="px-8 py-3.5 rounded-xl font-semibold text-sm border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300 backdrop-blur-sm bg-background/30"
              >
                View Work
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-12 mt-12"
            >
              <div>
                <span className="text-4xl font-bold text-primary font-mono">3+</span>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Projects Built</p>
              </div>
              <div>
                <span className="text-4xl font-bold text-primary font-mono">1</span>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Year Experience</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Orbiting icons container */}
            <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem]">
              {/* Radial glow behind image */}
              <div
                className="absolute inset-0 flex items-center justify-center"
              >
                <div
                  className="w-80 h-80 rounded-full opacity-30"
                  style={{
                    background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
                    animation: "glow-pulse 4s ease-in-out infinite",
                  }}
                />
              </div>

              {/* Developer image */}
              <img
                src={developerImg}
                alt="Raja Sri Veelan M - Developer portrait"
                className="relative z-10 w-full h-full object-cover rounded-3xl"
              />

              {/* Orbiting tech icons */}
              {orbitIcons.map((icon) => (
                <div
                  key={icon.name}
                  className="absolute z-20 w-12 h-12 rounded-xl glass-card flex items-center justify-center text-primary neon-glow-sm"
                  title={icon.name}
                  style={{
                    top: "50%",
                    left: "50%",
                    marginTop: "-24px",
                    marginLeft: "-24px",
                    animation: `orbit-${icon.name} ${icon.duration}s linear ${icon.delay}s infinite`,
                  }}
                >
                  {icon.icon}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Orbit keyframes injected via style tag */}
      <style>{`
        ${orbitIcons.map((icon) => `
          @keyframes orbit-${icon.name} {
            0% { transform: translate(${icon.radius}px, 0) rotate(0deg); }
            25% { transform: translate(0, ${icon.radius}px) rotate(90deg); }
            50% { transform: translate(-${icon.radius}px, 0) rotate(180deg); }
            75% { transform: translate(0, -${icon.radius}px) rotate(270deg); }
            100% { transform: translate(${icon.radius}px, 0) rotate(360deg); }
          }
        `).join("")}
        @media (max-width: 640px) {
          ${orbitIcons.map((icon) => {
            const r = Math.round(icon.radius * 0.7);
            return `
              @keyframes orbit-${icon.name} {
                0% { transform: translate(${r}px, 0) rotate(0deg); }
                25% { transform: translate(0, ${r}px) rotate(90deg); }
                50% { transform: translate(-${r}px, 0) rotate(180deg); }
                75% { transform: translate(0, -${r}px) rotate(270deg); }
                100% { transform: translate(${r}px, 0) rotate(360deg); }
              }
            `;
          }).join("")}
        }
      `}</style>
    </section>
  );
}

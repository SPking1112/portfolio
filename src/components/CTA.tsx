import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation();
  const navigate = useNavigate();

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden p-12 sm:p-16 lg:p-20"
          style={{
            background: "linear-gradient(135deg, hsl(var(--primary) / 0.15) 0%, hsl(var(--primary) / 0.05) 100%)",
          }}
        >
          {/* Glow orb */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-3xl"
            style={{ background: "hsl(var(--primary))" }}
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Let's build the future
                <br />
                <span className="gradient-text">together.</span>
              </h2>
              <p className="text-muted-foreground max-w-md">
                Ready to start your next project? Let's connect and make it happen.
              </p>
            </div>

            <div className="lg:text-right space-y-4">
              <p className="text-sm text-muted-foreground">Email</p>
              <a
                href="mailto:rajasriveelanbot@gmail.com"
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold hover:text-primary transition-colors"
              >
               rajasriveelan@gmail.com
              </a>
              <p className="text-sm text-muted-foreground mt-2">Phone: +91 78100 85661</p>

              <div className="mt-8">
                <button
                  onClick={() => navigate("/contact")}
                  className="inline-flex items-center gap-2 btn-glow bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-300"
                >
                  Get In Touch <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

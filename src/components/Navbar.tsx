import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about", route: false },
  { label: "Services", href: "#services", route: false },
  { label: "Work", href: "#works", route: false }
];

const sectionIds = ["about", "services", "works"];



export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (link: typeof navLinks[0]) => {
    setMobileOpen(false);
    if (link.route) {
      navigate(link.href);
      return;
    }
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        if (link.href === "#home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }
    if (link.href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (link: typeof navLinks[0]) => {
    if (link.route) return location.pathname === link.href;
    if (location.pathname !== "/") return false;
    if (link.href === "#home") return activeId === "";
    return activeId === link.href;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-2xl px-6 py-3 flex items-center justify-between">
            <a href="#" className="font-bold text-xl tracking-tight">
              <span className="text-foreground">SP</span>{" "}
              <span className="text-primary">King</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link)}
                  className={`link-underline text-sm font-medium transition-all duration-300 ${
                    isActive(link)
                      ? "text-primary neon-text font-semibold link-underline-active"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                onClick={() => navigate("/contact")}
                className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-xl text-sm font-semibold btn-glow hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me <ArrowUpRight className="w-4 h-4" />
              </motion.button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-10 h-10 rounded-xl glass-card flex items-center justify-center"
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                onClick={() => handleClick(link)}
                className={`text-3xl font-semibold transition-colors ${
                    isActive(link)
                      ? "text-primary neon-text"
                      : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => { setMobileOpen(false); navigate("/contact"); }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1, duration: 0.4 }}
              className="mt-4 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl text-lg font-semibold btn-glow"
            >
              Contact Me <ArrowUpRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

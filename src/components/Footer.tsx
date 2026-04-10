import { Github, Linkedin, Mail, Phone } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/raja-sri-veelan-69b9873a9/" },
  { icon: Github, href: "https://github.com/SPking1112" },
  { icon: Mail, href: "mailto:rajasriveelan@gmail.com" },
  { icon: Phone, href: "tel:+917810085661" },
];

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold">SP</span>
          <span className="text-primary font-bold">King</span>
          <span className="text-xs text-muted-foreground ml-4">© 2026. All Rights Reserved.</span>
        </div>

        <div className="flex items-center gap-4">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-glow-sm transition-all duration-300"
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

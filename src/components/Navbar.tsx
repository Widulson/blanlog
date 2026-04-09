import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "O firmie", href: "#o-nas" },
  { label: "Oceny", href: "#oceny" },
  { label: "Referencje", href: "#referencje" },
  { label: "Kontakt", href: "#kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-primary-foreground font-heading tracking-tight">
          BLAN<span className="text-accent">LOGISTICS</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+48739493974"
            className="inline-flex items-center gap-2 gradient-accent text-accent-foreground text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            <Phone className="w-3.5 h-3.5" />
            Zadzwoń
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-primary-foreground/70 hover:text-primary-foreground py-2 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

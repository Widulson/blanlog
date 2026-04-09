import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-background py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Blan Logistics" className="h-7 rounded-lg opacity-60" loading="lazy" />
            <div className="w-px h-6 bg-border/30 hidden md:block" />
            <p className="text-xs text-foreground/20">
              Blan Logistics Sp. z o.o. • NIP PL1182114447
            </p>
          </div>
          <p className="text-xs text-foreground/20">
            © {new Date().getFullYear()} Blan Logistics. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

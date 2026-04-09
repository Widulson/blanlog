import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <img src={logo} alt="Blan Logistics" className="h-8 brightness-0 invert" loading="lazy" />
            <p className="text-sm text-primary-foreground/50 mt-1">
              Blan Logistics Sp. z o.o. • NIP PL1182114447
            </p>
          </div>
          <div className="text-sm text-primary-foreground/50 text-center md:text-right">
            <p>Jagiellońska 88/51L lok.121, 03-215 Warszawa</p>
            <p className="mt-1">© {new Date().getFullYear()} Blan Logistics. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

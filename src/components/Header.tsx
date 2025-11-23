import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ModeToggle } from './mode-toggle';
import { LeadForm } from './LeadForm';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // Extract the target id from the href (e.g., "/#services" -> "services")
    const targetId = href.replace('/#', '');

    if (location.pathname === '/') {
      // If we are on the home page, smooth scroll to the section
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // If we are not on the home page, navigate to the home page with the hash
      navigate(href);
    }

    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const navLinks = [
    { name: 'Servicios', href: '/#services' },
    { name: 'Proceso', href: '/#process' },
    { name: 'Casos de Éxito', href: '/#sectors' },
    { name: 'Precios', href: '/#pricing' },
    { name: 'Sobre Nosotros', href: '/#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2 group"
        >
          <img
            src="/logo.png"
            alt="Anubis AI Logo"
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105 dark:hidden"
          />
          <img
            src="/logo_negativo.png"
            alt="Anubis AI Logo"
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105 hidden dark:block"
          />
          <span className="text-xl font-semibold tracking-tight hidden sm:block">
            Anubis<span className="text-primary">AI</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setIsLeadFormOpen(true)}
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Auditoría Gratuita
          </button>
          <ModeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border p-4 flex flex-col space-y-4 animate-fade-in z-40">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-primary font-medium transition-colors"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsLeadFormOpen(true);
              setIsMobileMenuOpen(false);
            }}
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-medium hover:opacity-90 transition-opacity w-full"
          >
            Auditoría Gratuita
          </button>
          <div className="pt-2">
            <ModeToggle />
          </div>
        </div>
      )}

      <LeadForm isOpen={isLeadFormOpen} onClose={() => setIsLeadFormOpen(false)} source="Header" />
    </header>
  );
};

import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { label: 'Quiénes Somos', href: '#quienes' },
      { label: 'Servicios', href: '#servicios' },
      { label: 'Proceso', href: '#proceso' },
      { label: 'Contacto', href: '#contacto' },
    ],
    legal: [
      { label: 'Términos y Condiciones', href: '#' },
      { label: 'Política de Privacidad', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/60 rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-xl">Anubis AI</span>
            </div>
            <p className="text-secondary-foreground/70 leading-relaxed mb-4">
              Transformamos negocios con inteligencia artificial y automatización premium.
            </p>
            <p className="text-sm text-secondary-foreground/50">
              Luxury, Automated.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Compañía</h3>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5" />
                <a
                  href="mailto:contacto@anubisaiagency.com"
                  className="text-secondary-foreground/70 hover:text-accent transition-colors"
                >
                  contacto@anubisaiagency.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5" />
                <a
                  href="tel:+34694249575"
                  className="text-secondary-foreground/70 hover:text-accent transition-colors"
                >
                  +34 694 249 575
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-secondary-foreground/70">
                  Mijas Costa, Málaga
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/50">
              © {currentYear} Anubis AI Agency. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/company/anubis-ai-agency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/70 hover:text-accent transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/anubisaiagency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/70 hover:text-accent transition-colors text-sm"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

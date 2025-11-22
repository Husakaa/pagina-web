import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container px-6 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Empecemos algo grande.
          </h2>
          <p className="text-xl text-muted-foreground">
            Agenda una consulta estratégica gratuita de 30 minutos.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-secondary/30 rounded-[2.5rem] p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-6">Consulta Gratuita</h3>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Analizaremos tu negocio y diseñaremos una hoja de ruta para implementar IA de manera efectiva.
          </p>

          <button
            onClick={() => (window as any).Calendly?.initPopupWidget({ url: 'https://calendly.com/anubisaiagency/30min' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-medium hover:bg-primary/90 transition-all mb-12"
          >
            Reservar ahora
            <ArrowRight size={20} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-border">
            <a href="mailto:contacto@anubisaiagency.com" className="flex flex-col items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <span className="text-sm font-medium">Email</span>
            </a>
            <a href="tel:+34694249575" className="flex flex-col items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Phone size={20} />
              </div>
              <span className="text-sm font-medium">Llamar</span>
            </a>
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground">
                <MapPin size={20} />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Málaga, ES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

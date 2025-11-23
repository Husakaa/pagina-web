import { ArrowRight, Play } from 'lucide-react';
import { useState } from 'react';
import { LeadForm } from './LeadForm';

export const Hero = () => {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 via-background to-background opacity-50" />

      <div className="container px-6 mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-balance animate-fade-in-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
            Automatiza lo Aburrido.
            <br />
            <span className="text-primary">Escala lo Importante.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance animate-fade-in-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
            Automatizamos tus procesos de negocio con soluciones de IA elegantes y eficientes. Sin complicaciones.
          </p>

          <div className="flex flex-col items-center gap-8 animate-fade-in-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:400ms]">
              <button
                onClick={() => setIsLeadFormOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
              >
                Solicitar Auditoría
              </button>
              <a
                href="#services"
                className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full text-lg font-medium hover:bg-secondary/80 transition-all hover:scale-105 active:scale-95"
              >
                Ver Servicios
              </a>
            </div>

            {/* Social Proof Strip */}
            <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholders for client logos */}
              {['MijasPan', 'Oasis Café', 'ShopifyStore', 'VTC Fuengirola', 'ModasSur'].map((client) => (
                <span key={client} className="text-lg font-bold text-muted-foreground">{client}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Showroom / Video Container */}
        <div className="mt-20 relative mx-auto max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards] border border-border/50 bg-secondary/20 group">
          <div className="absolute inset-0 flex items-center justify-center bg-black/5">
            <img src="/gif_hero.gif" alt="Demo" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <LeadForm isOpen={isLeadFormOpen} onClose={() => setIsLeadFormOpen(false)} source="Hero" />
    </section>
  );
};
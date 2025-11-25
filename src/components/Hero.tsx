import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { LeadForm } from './LeadForm';

export const Hero = () => {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 via-background to-background opacity-50" />

      <div className="container px-6 mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in opacity-0 [animation-delay:100ms] [animation-fill-mode:forwards]">
            <Sparkles size={14} />
            <span>Startup con arte malagueño</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-balance animate-fade-in-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
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

        {/* Neural Orb Animation Container */}
        <div className="mt-16 md:mt-24 relative mx-auto w-64 h-64 md:w-96 md:h-96 animate-fade-in-up opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
          {/* Core */}
          <div className="absolute inset-0 m-auto w-32 h-32 md:w-48 md:h-48 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute inset-0 m-auto w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-primary to-blue-600 rounded-full shadow-[0_0_50px_rgba(59,130,246,0.5)] animate-float flex items-center justify-center">
            <div className="w-20 h-20 md:w-28 md:h-28 bg-black/10 backdrop-blur-sm rounded-full border border-white/20" />
          </div>

          {/* Orbiting Rings */}
          <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-4 border border-primary/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

          {/* Orbiting Nodes */}
          <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/50" />
          </div>
          <div className="absolute inset-0 animate-[spin_15s_linear_infinite_reverse]">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
          </div>
        </div>
      </div>
      <LeadForm isOpen={isLeadFormOpen} onClose={() => setIsLeadFormOpen(false)} source="Hero" />
    </section>
  );
};
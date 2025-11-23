import { ArrowRight, Play } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

export const Hero = () => {
  const [searchParams] = useSearchParams();
  const sector = searchParams.get('sector');

  const getHeadline = () => {
    if (sector === 'inmobiliaria') return 'IA para Inmobiliarias: Vende casas mientras duermes.';
    if (sector === 'medico') return 'IA para Clínicas: Cero ausencias, más pacientes.';
    if (sector === 'ecommerce') return 'IA para E-commerce: Tu tienda vendiendo 24/7.';
    return (
      <>
        Inteligencia Artificial,
        <br />
        <span className="text-primary">Simplemente Funciona.</span>
      </>
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 via-background to-background opacity-50" />



      <div className="container px-6 mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-secondary/50 backdrop-blur-sm animate-fade-in opacity-0 [animation-fill-mode:forwards]">
            <span className="text-xs font-medium text-muted-foreground">
              Revolucionando empresas en Málaga
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-balance animate-fade-in-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
            {getHeadline()}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance animate-fade-in-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
            Automatizamos tus procesos de negocio con soluciones de IA elegantes y eficientes. Sin complicaciones.
          </p>

          <div className="flex flex-col items-center gap-8 animate-fade-in-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="group px-8 py-4 bg-foreground text-background rounded-full text-lg font-medium hover:bg-foreground/90 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                Consultoría Gratuita
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
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
    </section>
  );
};
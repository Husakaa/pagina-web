import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 via-background to-background opacity-50" />

      {/* Background Logo Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 opacity-[0.03] pointer-events-none select-none">
        <img src="/logo.png" alt="" className="w-[800px] h-auto" />
      </div>

      <div className="container px-6 mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-secondary/50 backdrop-blur-sm animate-fade-in opacity-0 [animation-fill-mode:forwards]">
            <span className="text-xs font-medium text-muted-foreground">
              Revolucionando empresas en Málaga
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-balance animate-fade-in-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
            Inteligencia Artificial,
            <br />
            <span className="text-primary">Simplemente Funciona.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance animate-fade-in-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
            Automatizamos tus procesos de negocio con soluciones de IA elegantes y eficientes. Sin complicaciones.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
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
        </div>

        {/* Abstract Visual / Placeholder for 3D element or Image */}
        <div className="mt-20 relative mx-auto max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards] border border-border/50 bg-secondary/20 group">
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 bg-gradient-to-tr from-blue-50/50 to-purple-50/50 transition-transform duration-700 group-hover:scale-105">
            {/* Central Logo in Hero Visual */}
            <img
              src="/logo.png"
              alt="Anubis AI"
              className="w-32 h-auto opacity-20 drop-shadow-xl"
            />
          </div>

          {/* Overlay gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
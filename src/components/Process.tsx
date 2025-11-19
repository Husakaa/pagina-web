import { useEffect, useRef, useState } from 'react';
import { Search, Target, Rocket, TrendingUp } from 'lucide-react';

export const Process = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const steps = [0, 1, 2, 3];
          steps.forEach((index) => {
            setTimeout(() => {
              setVisibleSteps((prev) => [...prev, index]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Análisis',
      description: 'Estudiamos tu negocio, identificamos oportunidades de automatización y definimos objetivos claros y medibles.',
      duration: '1 semana',
    },
    {
      icon: Target,
      number: '02',
      title: 'Estrategia',
      description: 'Diseñamos una solución personalizada que se integra perfectamente con tus procesos y herramientas existentes.',
      duration: '2 semanas',
    },
    {
      icon: Rocket,
      number: '03',
      title: 'Implementación',
      description: 'Desarrollamos y desplegamos tu solución de IA con pruebas exhaustivas y capacitación para tu equipo.',
      duration: '3-4 semanas',
    },
    {
      icon: TrendingUp,
      number: '04',
      title: 'Optimización',
      description: 'Monitoreamos resultados, ajustamos algoritmos y garantizamos que superes tus KPIs establecidos.',
      duration: 'Continuo',
    },
  ];

  return (
    <section id="proceso" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestro <span className="text-gradient-gold">Proceso</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent/20 via-accent to-accent/20 mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un enfoque sistemático y transparente para garantizar resultados excepcionales
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isVisible = visibleSteps.includes(index);
              
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                >
                  {/* Connection line (desktop only, not for last item) */}
                  {index < steps.length - 1 && index % 2 === 0 && (
                    <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-accent to-transparent" />
                  )}

                  <div className="relative p-8 rounded-2xl border border-border bg-card hover:shadow-luxury-lg transition-all duration-300 group">
                    {/* Step number badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center text-accent-foreground font-bold text-lg shadow-lg">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Duration badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <span className="text-sm font-medium text-accent">{step.duration}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              ¿Listo para comenzar tu transformación digital?
            </p>
            <button
              onClick={() => (window as any).Calendly?.initPopupWidget({ url: 'https://calendly.com/anubisaiagency/30min' })}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-luxury hover:shadow-luxury-lg transition-all duration-300 hover:scale-105"
            >
              Agenda tu Consulta Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

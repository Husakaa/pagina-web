import { Search, Target, Rocket, TrendingUp } from 'lucide-react';

export const Process = () => {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Análisis',
      description: 'Estudiamos tu negocio para identificar oportunidades de automatización.',
    },
    {
      icon: Target,
      number: '02',
      title: 'Estrategia',
      description: 'Diseñamos una solución personalizada integrada con tus herramientas.',
    },
    {
      icon: Rocket,
      number: '03',
      title: 'Implementación',
      description: 'Desarrollamos y desplegamos tu solución con pruebas exhaustivas.',
    },
    {
      icon: TrendingUp,
      number: '04',
      title: 'Optimización',
      description: 'Monitoreamos y ajustamos para garantizar el máximo rendimiento.',
    },
  ];

  return (
    <section id="process" className="py-32 bg-background">
      <div className="container px-6 mx-auto">
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Cómo trabajamos.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un proceso transparente y eficiente para resultados excepcionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-border -z-10" />

          {steps.map((step, index) => {
            return (
              <div key={index} className="relative bg-background pt-8">
                <div className="text-sm font-bold text-primary mb-4 tracking-wider">
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

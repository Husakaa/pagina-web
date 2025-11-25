import { Bot, BrainCircuit, BarChart3, Rocket, Workflow, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards = [0, 1, 2, 3, 4, 5];
          cards.forEach((index) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index]);
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Bot,
      title: 'Ahorra 20h/semana Automatizando',
      description: 'Eliminamos las tareas repetitivas de tu negocio. Desde facturación hasta gestión de leads, deja que la IA se encargue del trabajo sucio.',
    },
    {
      icon: BrainCircuit,
      title: 'Vende y Atiende 24/7',
      description: 'Asistentes virtuales que no duermen. Atiende a tus clientes, resuelve dudas y cierra ventas a cualquier hora del día.',
    },
    {
      icon: BarChart3,
      title: 'Predice Tendencias y Ventas',
      description: 'Convierte tus datos en decisiones rentables. Anticipa la demanda y optimiza tu stock con modelos predictivos.',
    },
    {
      icon: Rocket,
      title: 'Implementación Sin Riesgos',
      description: 'Te acompañamos en cada paso. Estrategia, desarrollo e integración personalizada para asegurar el retorno de inversión.',
    },
    {
      icon: Workflow,
      title: 'Auditoría de Procesos',
      description: 'Analizamos tu flujo de trabajo actual para detectar cuellos de botella y oportunidades de automatización inmediata.',
    },
    {
      icon: Users,
      title: 'Formación Corporativa',
      description: 'Capacitamos a tu equipo para que domine las nuevas herramientas de IA y maximice su productividad diaria.',
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-16 md:py-32 bg-background">
      <div className="container px-6 mx-auto">
        <div className="mb-20 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Servicios diseñados para el futuro.
          </h2>
          <p className="text-xl text-muted-foreground">
            Soluciones de inteligencia artificial que se integran perfectamente en tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            return (
              <div
                key={index}
                className={`group p-5 md:p-6 rounded-2xl border border-transparent hover:border-primary/10 hover:bg-secondary/20 hover:-translate-y-2 hover:shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
              >
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon size={24} />
                </div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

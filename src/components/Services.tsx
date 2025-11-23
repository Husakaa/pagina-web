import { Bot, Workflow, TrendingUp, MessageSquare, Calendar, BarChart3 } from 'lucide-react';
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
      title: 'Agentes de IA',
      description: 'Asistentes virtuales 24/7 que gestionan consultas, reservas y ventas automáticamente.',
    },
    {
      icon: Workflow,
      title: 'Automatización',
      description: 'Conectamos tus herramientas para crear workflows inteligentes que eliminan tareas repetitivas.',
    },
    {
      icon: TrendingUp,
      title: 'Marketing IA',
      description: 'Campañas personalizadas impulsadas por machine learning que maximizan tu ROI.',
    },
    {
      icon: MessageSquare,
      title: 'Chatbots',
      description: 'Conversaciones naturales que convierten visitantes en clientes en tu web y redes.',
    },
    {
      icon: Calendar,
      title: 'Gestión de Citas',
      description: 'Sistema de reservas automatizado que reduce no-shows y optimiza tu calendario.',
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Insights accionables basados en IA para decisiones estratégicas informadas.',
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-background">
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
                className={`group p-6 rounded-2xl border border-transparent hover:border-primary/10 hover:bg-secondary/20 hover:-translate-y-2 hover:shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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

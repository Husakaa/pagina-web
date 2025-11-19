import { useEffect, useRef, useState } from 'react';
import { Bot, Workflow, TrendingUp, MessageSquare, Calendar, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the animation
          const cards = [0, 1, 2, 3, 4, 5];
          cards.forEach((index) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index]);
            }, index * 150);
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
      description: 'Asistentes virtuales 24/7 que gestionan consultas, reservas y ventas automáticamente. Tu empleado digital que nunca duerme.',
      features: ['WhatsApp Business', 'Atención multicanal', 'Respuestas contextuales'],
    },
    {
      icon: Workflow,
      title: 'Automatización de Flujos',
      description: 'Conectamos tus herramientas existentes para crear workflows inteligentes que eliminan tareas repetitivas.',
      features: ['Integración CRM', 'Gestión de inventario', 'Facturación automática'],
    },
    {
      icon: TrendingUp,
      title: 'Marketing con IA',
      description: 'Campañas personalizadas impulsadas por machine learning que maximizan tu ROI y engagement.',
      features: ['Segmentación inteligente', 'A/B testing automático', 'Predicción de conversiones'],
    },
    {
      icon: MessageSquare,
      title: 'Chatbots Avanzados',
      description: 'Conversaciones naturales que convierten visitantes en clientes, disponibles en tu web y redes sociales.',
      features: ['Procesamiento de lenguaje natural', 'Personalización dinámica', 'Análisis de sentimiento'],
    },
    {
      icon: Calendar,
      title: 'Gestión de Citas',
      description: 'Sistema de reservas automatizado que reduce no-shows y optimiza tu calendario sin esfuerzo manual.',
      features: ['Recordatorios automáticos', 'Cancelación inteligente', 'Sincronización multicanal'],
    },
    {
      icon: BarChart3,
      title: 'Analytics Predictivo',
      description: 'Insights accionables basados en IA que te ayudan a tomar decisiones estratégicas informadas.',
      features: ['Forecasting de ventas', 'Detección de patrones', 'Reportes automáticos'],
    },
  ];

  return (
    <section id="servicios" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros <span className="text-gradient-gold">Servicios</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent/20 via-accent to-accent/20 mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluciones de IA personalizadas que transforman la forma en que operas tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <Card
                key={index}
                className={`group hover:shadow-luxury-lg transition-all duration-500 border-border hover:border-accent/50 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

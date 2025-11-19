import { useEffect, useRef, useState } from 'react';
import { ShoppingBag, Utensils, Scissors, Stethoscope, Home, Warehouse } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const Sectors = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const sectors = [
    {
      icon: ShoppingBag,
      title: 'E-commerce',
      description: 'Automatización de atención al cliente, gestión de inventario y recomendaciones personalizadas.',
      benefits: ['Aumento en conversiones', 'Reducción de carritos abandonados', 'Soporte 24/7'],
    },
    {
      icon: Utensils,
      title: 'Restaurantes',
      description: 'Sistema de reservas inteligente, gestión de pedidos y marketing automático.',
      benefits: ['Optimización de mesas', 'Pedidos sin errores', 'Fidelización automatizada'],
    },
    {
      icon: Scissors,
      title: 'Barberías & Salones',
      description: 'Agenda inteligente, recordatorios automáticos y gestión de clientes VIP.',
      benefits: ['Zero no-shows', 'Clientes recurrentes', 'Marketing personalizado'],
    },
    {
      icon: Stethoscope,
      title: 'Clínicas Dentales',
      description: 'Gestión de citas médicas, seguimiento de tratamientos y recordatorios automatizados.',
      benefits: ['Mejor experiencia paciente', 'Reducción administrativa', 'Seguimiento efectivo'],
    },
    {
      icon: Home,
      title: 'Inmobiliarias',
      description: 'Calificación automática de leads, tours virtuales y seguimiento inteligente.',
      benefits: ['Leads calificados', 'Visitas optimizadas', 'Cierre más rápido'],
    },
    {
      icon: Warehouse,
      title: 'Distribuidoras',
      description: 'Gestión de pedidos B2B, predicción de demanda y optimización de rutas.',
      benefits: ['Stock optimizado', 'Entregas eficientes', 'Previsión de demanda'],
    },
  ];

  return (
    <section id="sectores" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sectores que <span className="text-gradient-gold">Transformamos</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent/20 via-accent to-accent/20 mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experiencia demostrada en múltiples industrias con soluciones adaptadas a tus necesidades específicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            
            return (
              <Card
                key={index}
                className={`group hover:shadow-luxury-lg transition-all duration-700 border-border hover:border-accent/50 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {sector.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {sector.description}
                  </p>
                  
                  <div className="space-y-2">
                    {sector.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

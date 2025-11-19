import { useEffect, useRef, useState } from 'react';
import { Award, Users, TrendingUp } from 'lucide-react';

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Award, value: '100+', label: 'Proyectos Completados' },
    { icon: Users, value: '50+', label: 'Clientes Satisfechos' },
    { icon: TrendingUp, value: '40%', label: 'Aumento Promedio en Ventas' },
  ];

  return (
    <section
      id="quienes"
      ref={sectionRef}
      className="py-24 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Quiénes <span className="text-gradient-gold">Somos</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent/20 via-accent to-accent/20 mx-auto mb-8" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`space-y-6 text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p>
              Somos <strong className="text-foreground">Anubis AI Agency</strong>, una agencia boutique de inteligencia artificial con sede en la Costa del Sol. Combinamos expertise técnico con un enfoque personalizado para transformar negocios a través de la automatización inteligente.
            </p>
            
            <p>
              Fundada por dos bioinformáticos con más de una década de experiencia en análisis de datos y machine learning, nos especializamos en crear soluciones de IA que no solo impresionan técnicamente, sino que generan resultados medibles para tu negocio.
            </p>

            <p>
              Nuestra misión es democratizar el acceso a tecnología de punta, ofreciendo soluciones premium adaptadas a empresas de todos los tamaños. Desde pequeños negocios locales hasta corporaciones establecidas, diseñamos sistemas de IA que escalan contigo.
            </p>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-card border border-border shadow-luxury hover:shadow-luxury-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

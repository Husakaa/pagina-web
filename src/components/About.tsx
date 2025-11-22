import { Award, Users, TrendingUp } from 'lucide-react';

export const About = () => {
  const stats = [
    { icon: Award, value: '100+', label: 'Proyectos' },
    { icon: Users, value: '50+', label: 'Clientes' },
    { icon: TrendingUp, value: '40%', label: 'Crecimiento' },
  ];

  return (
    <section id="about" className="py-32 bg-secondary/30">
      <div className="container px-6 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
            Anubis AI Agency
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-balance">
            Somos una agencia boutique de inteligencia artificial en la Costa del Sol.
            Combinamos expertise técnico con diseño estratégico para transformar negocios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            return (
              <div key={index} className="text-center p-8 bg-background rounded-3xl shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

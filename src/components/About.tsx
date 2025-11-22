import { Award, Users, TrendingUp, Play } from 'lucide-react';

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
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-balance mb-12">
            Somos una agencia boutique de inteligencia artificial en la Costa del Sol.
            Combinamos expertise técnico con diseño estratégico para transformar negocios.
          </p>

          {/* Founder Video Placeholder */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-background shadow-xl border border-border group cursor-pointer max-w-2xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/10 transition-colors">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-primary ml-1" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 text-left">
              <p className="text-sm font-medium text-foreground bg-white/90 px-3 py-1 rounded-lg inline-block mb-1">
                Mensaje del Fundador
              </p>
              <p className="text-xs text-muted-foreground bg-white/90 px-3 py-1 rounded-lg inline-block">
                Por qué la IA no es magia, es ingeniería.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
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

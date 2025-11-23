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
            {/* Placeholder for Founder Image */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
              <Users className="w-32 h-32 text-white/10" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-2xl group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
              </div>
            </div>

            <div className="absolute bottom-6 left-6 text-left">
              <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                <p className="text-sm font-semibold text-white mb-0.5">
                  Mensaje de Husaka
                </p>
                <p className="text-xs text-gray-300">
                  Fundador de Anubis AI
                </p>
              </div>
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

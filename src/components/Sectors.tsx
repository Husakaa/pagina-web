import { ShoppingBag, Utensils, Scissors, Stethoscope, Home, Warehouse } from 'lucide-react';

export const Sectors = () => {
  const sectors = [
    {
      icon: ShoppingBag,
      title: 'E-commerce',
      description: 'Automatización de atención y gestión de inventario.',
    },
    {
      icon: Utensils,
      title: 'Restaurantes',
      description: 'Reservas inteligentes y gestión de pedidos.',
    },
    {
      icon: Scissors,
      title: 'Belleza',
      description: 'Agenda inteligente y recordatorios automáticos.',
    },
    {
      icon: Stethoscope,
      title: 'Salud',
      description: 'Gestión de citas y seguimiento de pacientes.',
    },
    {
      icon: Home,
      title: 'Inmobiliaria',
      description: 'Calificación de leads y tours virtuales.',
    },
    {
      icon: Warehouse,
      title: 'Logística',
      description: 'Predicción de demanda y optimización de rutas.',
    },
  ];

  return (
    <section id="sectors" className="py-32 bg-secondary/30">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Transformando cada industria.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experiencia demostrada en múltiples sectores con soluciones a medida.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div
                key={index}
                className="bg-background p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group border border-transparent hover:border-primary/10"
              >
                <Icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-3">{sector.title}</h3>
                <p className="text-muted-foreground">
                  {sector.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

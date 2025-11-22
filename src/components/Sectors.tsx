import { ShoppingBag, Utensils, Scissors, Stethoscope, Home, Warehouse, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export const Sectors = () => {
  const cases = [
    {
      icon: ShoppingBag,
      client: 'ModasSur',
      sector: 'E-commerce',
      result: 'Recuperación de carritos +25%',
      description: 'Implementación de agente de ventas en WhatsApp que contacta automáticamente a carritos abandonados.',
      details: {
        challenge: 'ModasSur perdía miles de euros mensuales en carritos abandonados. Los emails de recuperación tenían una tasa de apertura del 12% y una conversión mínima.',
        solution: 'Implementamos un Agente de IA conectado a Shopify que detecta el abandono y envía un mensaje personalizado por WhatsApp a los 15 minutos, ofreciendo ayuda o un pequeño incentivo si es necesario.',
        results: [
          'Tasa de apertura en WhatsApp del 94%.',
          'Recuperación del 25% de los carritos abandonados.',
          'Incremento de facturación mensual de 4.500€.',
        ]
      }
    },
    {
      icon: Utensils,
      client: 'Restaurante El Patio',
      sector: 'Restauración',
      result: 'Reservas automáticas 100%',
      description: 'Sistema de voz IA que atiende llamadas y gestiona reservas en el libro digital sin intervención humana.',
      details: {
        challenge: 'El personal de sala perdía tiempo valioso atendiendo el teléfono en horas punta, perdiendo llamadas y cometiendo errores en las reservas.',
        solution: 'Desplegamos un Asistente de Voz IA capaz de entender acentos, gestionar horarios, mesas y cancelaciones, sincronizado en tiempo real con el software de gestión del restaurante.',
        results: [
          '0 llamadas perdidas en horario comercial.',
          'Ahorro de 15 horas semanales de personal.',
          'Eliminación total de errores de "doble reserva".',
        ]
      }
    },
    {
      icon: Scissors,
      client: 'Barbería King',
      sector: 'Belleza',
      result: '0 No-Shows en 3 meses',
      description: 'Recordatorios inteligentes y sistema de reprogramación automática vía SMS y WhatsApp.',
      details: {
        challenge: 'El 15% de las citas no se presentaban (No-Shows), dejando huecos vacíos que costaban dinero y tiempo a los barberos.',
        solution: 'Sistema de confirmación proactiva por WhatsApp 24h antes. Si el cliente cancela, la IA contacta automáticamente a la lista de espera para llenar el hueco.',
        results: [
          'Reducción de No-Shows al 0% en el último trimestre.',
          'Agenda llena al 98% de ocupación.',
          'Aumento del ticket medio gracias a upsells automáticos.',
        ]
      }
    },
    {
      icon: Stethoscope,
      client: 'Clínica Dental Pro',
      sector: 'Salud',
      result: 'Ahorro de 20h/semana',
      description: 'Triaje automático de pacientes y gestión de agenda médica integrada.',
      details: {
        challenge: 'La recepción estaba colapsada gestionando citas, dudas básicas y recordatorios, afectando la atención al paciente en clínica.',
        solution: 'Chatbot médico entrenado para realizar un pre-triaje, asignar la duración correcta de la cita según el tratamiento y resolver dudas frecuentes.',
        results: [
          'Liberación de 20 horas semanales de recepción.',
          'Mejora en la satisfacción del paciente.',
          'Optimización de los tiempos de sillón.',
        ]
      }
    },
    {
      icon: Home,
      client: 'InmoCosta',
      sector: 'Inmobiliaria',
      result: 'Ventas cerradas x2',
      description: 'Cualificación de leads 24/7 y agendamiento de visitas solo con clientes pre-aprobados.',
      details: {
        challenge: 'Los agentes perdían el 70% de su tiempo enseñando pisos a curiosos o personas sin capacidad financiera real.',
        solution: 'Agente de IA que cualifica a los leads entrantes de portales inmobiliarios, verificando presupuesto y urgencia antes de agendar visita con un humano.',
        results: [
          'Los agentes solo visitan con clientes "calientes".',
          'Duplicación de la tasa de cierre de ventas.',
          'Atención inmediata 24/7 a leads internacionales.',
        ]
      }
    },
    {
      icon: Warehouse,
      client: 'Logística Express',
      sector: 'Logística',
      result: 'Rutas optimizadas',
      description: 'Predicción de demanda y asignación automática de rutas de reparto.',
      details: {
        challenge: 'La planificación manual de rutas era ineficiente, causando gastos excesivos en combustible y retrasos en las entregas.',
        solution: 'Algoritmo de IA que analiza pedidos, tráfico y ubicaciones para generar las rutas más eficientes cada mañana y asignarlas a los conductores.',
        results: [
          'Reducción del 18% en costes de combustible.',
          'Aumento del 20% en entregas diarias por conductor.',
          'Mejora en la puntualidad percibida por el cliente.',
        ]
      }
    },
  ];

  return (
    <section id="sectors" className="py-32 bg-secondary/30">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Casos de Éxito Reales.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No te contamos lo que podríamos hacer. Te mostramos lo que ya hemos hecho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, index) => {
            const Icon = item.icon;
            return (
              <Dialog key={index}>
                <div className="bg-background p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group border border-transparent hover:border-primary/10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-secondary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground border border-border px-2 py-1 rounded-full">
                      {item.sector}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-1">{item.client}</h3>
                  <p className="text-primary font-medium text-sm mb-4">{item.result}</p>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>

                  <DialogTrigger asChild>
                    <div className="pt-6 border-t border-border flex items-center text-sm font-medium text-primary cursor-pointer group-hover:gap-2 transition-all mt-auto">
                      Ver Caso Estudio <ArrowRight size={16} className="ml-1" />
                    </div>
                  </DialogTrigger>
                </div>

                <DialogContent className="sm:max-w-[600px] rounded-3xl p-0 overflow-hidden">
                  <div className="bg-primary/5 p-8 border-b border-border">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-background rounded-xl text-primary shadow-sm">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <DialogTitle className="text-2xl font-bold">{item.client}</DialogTitle>
                        <DialogDescription className="text-base font-medium text-primary">
                          {item.result}
                        </DialogDescription>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 space-y-6">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">El Desafío</h4>
                      <p className="text-foreground leading-relaxed">
                        {item.details.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">La Solución Anubis</h4>
                      <p className="text-foreground leading-relaxed">
                        {item.details.solution}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Resultados Clave</h4>
                      <ul className="space-y-2">
                        {item.details.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span className="text-sm font-medium">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <Button className="w-full rounded-full" size="lg">
                        Quiero resultados similares
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import { CheckCircle2, ArrowRight, Zap, Rocket, Building2 } from 'lucide-react';

export const Pricing = () => {
    const plans = [
        {
            name: 'Starter',
            price: 'Desde 500€',
            period: '/mes',
            description: 'Automatización esencial para pequeñas empresas.',
            icon: Zap,
            features: ['Chatbot de Atención al Cliente', 'Respuestas Automáticas 24/7', 'Integración con WhatsApp', 'Reporte Mensual Básico'],
            highlight: false
        },
        {
            name: 'Growth',
            price: 'Desde 1.200€',
            period: '/mes',
            description: 'Automatización operativa para empresas en crecimiento.',
            icon: Rocket,
            features: ['Todo lo de Starter', 'Automatización de Procesos (Facturas, Citas)', 'CRM Integrado', 'Dashboard de Analytics Avanzado', 'Soporte Prioritario'],
            highlight: true
        },
        {
            name: 'Enterprise',
            price: 'A Medida',
            period: '',
            description: 'Soluciones complejas para grandes volúmenes.',
            icon: Building2,
            features: ['Agentes Autónomos Multi-rol', 'Integraciones API Personalizadas', 'Despliegue en Servidores Propios', 'SLA Garantizado', 'Consultoría Estratégica Continua'],
            highlight: false
        }
    ];

    return (
        <section id="pricing" className="py-32 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="container px-6 mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                        Inversión clara, retorno medible.
                    </h2>
                    <p className="text-xl text-muted-foreground text-balance">
                        Elige el nivel de automatización que tu negocio necesita hoy. Escala mañana.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {plans.map((plan, index) => {
                        const Icon = plan.icon;
                        return (
                            <div
                                key={index}
                                className={`relative rounded-[2rem] p-8 border flex flex-col h-full transition-all duration-300 hover:-translate-y-2 ${plan.highlight
                                        ? 'bg-secondary/30 border-primary/20 shadow-xl shadow-primary/5'
                                        : 'bg-background border-border hover:border-primary/10 hover:shadow-lg'
                                    }`}
                            >
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full">
                                        Más Popular
                                    </div>
                                )}

                                <div className="mb-6 p-3 bg-secondary/50 rounded-2xl w-fit">
                                    <Icon className="w-6 h-6 text-primary" />
                                </div>

                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-3xl font-bold">{plan.price}</span>
                                    <span className="text-muted-foreground">{plan.period}</span>
                                </div>
                                <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                                    {plan.description}
                                </p>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#contact"
                                    className={`w-full py-4 rounded-xl font-medium text-center transition-all ${plan.highlight
                                            ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20'
                                            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                        }`}
                                >
                                    Empezar ahora
                                </a>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <p className="text-muted-foreground text-sm">
                        ¿Tienes dudas sobre qué plan elegir? <a href="#contact" className="text-primary hover:underline font-medium">Agenda una consultoría gratuita</a> y te asesoramos.
                    </p>
                </div>
            </div>
        </section>
    );
};

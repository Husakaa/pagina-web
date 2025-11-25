import { CheckCircle2, ArrowRight, Zap, Rocket, Building2 } from 'lucide-react';
import { useState } from 'react';
import { SalesContactForm } from './SalesContactForm';
import { LeadForm } from './LeadForm';

export const Pricing = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('');

    const handlePlanClick = (planName: string) => {
        setSelectedPlan(planName);
        setIsContactOpen(true);
    };

    const plans = [
        {
            name: 'Starter',
            price: '399€',
            originalPrice: '599€',
            period: '',
            description: 'Automatización esencial para pequeñas empresas.',
            icon: Zap,
            features: ['Chatbot de Atención al Cliente', 'Respuestas Automáticas 24/7', 'Integración con WhatsApp', 'Reporte Mensual Básico'],
            highlight: false
        },
        {
            name: 'Growth',
            price: '599€',
            originalPrice: '899€',
            period: '',
            description: 'Automatización operativa para empresas en crecimiento.',
            icon: Rocket,
            features: ['Todo lo de Starter', 'Automatización de Procesos (Facturas, Citas)', 'CRM Integrado', 'Dashboard de Analytics Avanzado', 'Soporte Prioritario'],
            highlight: true
        },
        {
            name: 'Pro',
            price: '799€',
            originalPrice: '1199€',
            period: '',
            description: 'Escalabilidad total con agentes autónomos.',
            icon: CheckCircle2,
            features: ['Todo lo de Growth', 'Agentes de Ventas Autónomos', 'Integración con ERPs', 'Consultoría Mensual 1:1', 'SLA de Respuesta < 2h'],
            highlight: false
        }
    ];

    const enterprisePlan = {
        name: 'Enterprise',
        price: 'A Medida',
        period: '',
        description: 'Soluciones complejas para grandes volúmenes.',
        icon: Building2,
        features: ['Agentes Autónomos Multi-rol', 'Integraciones API Personalizadas', 'Despliegue en Servidores Propios', 'SLA Garantizado', 'Consultoría Estratégica Continua']
    };

    return (
        <section id="pricing" className="py-16 md:py-32 bg-background relative overflow-hidden">
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

                {/* Main Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
                                <div className="flex items-baseline gap-2 mb-4 flex-wrap">
                                    <span className="text-lg text-muted-foreground line-through decoration-red-500/50 decoration-2">{plan.originalPrice}</span>
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className="text-sm text-muted-foreground">{plan.period}</span>
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

                                <button
                                    onClick={() => handlePlanClick(plan.name)}
                                    className={`w-full py-4 rounded-xl font-medium text-center transition-all ${plan.highlight
                                        ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20'
                                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                        }`}
                                >
                                    Empezar ahora
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* Enterprise Plan - Full Width */}
                <div className="max-w-5xl mx-auto">
                    <div className="rounded-[2rem] p-8 md:p-12 border border-border bg-gradient-to-br from-secondary/20 to-background flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

                        <div className="flex-1 space-y-6">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="p-3 bg-secondary/50 rounded-2xl">
                                    <Building2 className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold">{enterprisePlan.name}</h3>
                                    <p className="text-lg text-muted-foreground">{enterprisePlan.price}</p>
                                </div>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {enterprisePlan.description}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {enterprisePlan.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full md:w-auto shrink-0">
                            <button
                                onClick={() => handlePlanClick(enterprisePlan.name)}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium bg-foreground text-background hover:opacity-90 transition-opacity whitespace-nowrap w-full md:w-auto"
                            >
                                Contactar Ventas
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16">
                    <p className="text-muted-foreground text-sm">
                        ¿Tienes dudas sobre qué plan elegir? <button onClick={() => setIsLeadFormOpen(true)} className="text-primary hover:underline font-medium">Agenda una consultoría gratuita</button> y te asesoramos.
                    </p>
                </div>
            </div>
            <SalesContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} planName={selectedPlan} />
            <LeadForm isOpen={isLeadFormOpen} onClose={() => setIsLeadFormOpen(false)} source="Pricing" />
        </section>
    );
};

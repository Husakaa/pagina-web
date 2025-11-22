import { Database, GitBranch, TrendingUp, ArrowRight, Scissors } from 'lucide-react';

export const Pricing = () => {
    const factors = [
        {
            icon: Database,
            title: 'Volumen de Datos',
            question: '¿Cuántos pedidos o interacciones maneja al mes?',
            description: 'No es lo mismo procesar 100 pedidos que 10.000. La infraestructura escala según tu carga de trabajo.',
            examples: ['100 vs 10,000 interacciones', 'Almacenamiento histórico', 'Frecuencia de sincronización'],
        },
        {
            icon: GitBranch,
            title: 'Complejidad del Flujo',
            question: '¿Necesita lógica avanzada o simple transferencia?',
            description: 'Desde automatizaciones lineales hasta agentes autónomos con toma de decisiones compleja y validaciones.',
            examples: ['Validaciones condicionales', 'Integración de múltiples APIs', 'Lógica de negocio personalizada'],
        },
        {
            icon: TrendingUp,
            title: 'Retorno de Inversión (ROI)',
            question: '¿Qué beneficio genera la solución?',
            description: 'Diseñamos soluciones que se pagan solas. El coste es una fracción del valor que generamos para tu negocio.',
            examples: ['Ahorro de horas/hombre', 'Incremento de ventas', 'Reducción de errores'],
        },
    ];

    return (
        <section id="pricing" className="py-32 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="container px-6 mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
                        <Scissors size={16} />
                        <span>Trajes a Medida</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                        Inversión adaptada a tu realidad.
                    </h2>
                    <p className="text-xl text-muted-foreground text-balance">
                        Nuestras soluciones son como un traje de sastrería: el precio exacto depende de la complejidad de la confección y la calidad de los materiales.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {factors.map((factor, index) => {
                        const Icon = factor.icon;
                        return (
                            <div key={index} className="bg-secondary/20 rounded-3xl p-8 border border-border/50 hover:border-primary/20 transition-colors">
                                <div className="w-12 h-12 rounded-2xl bg-background flex items-center justify-center text-primary mb-6 shadow-sm">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{factor.title}</h3>
                                <p className="text-sm font-medium text-foreground mb-4">{factor.question}</p>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                    {factor.description}
                                </p>
                                <ul className="space-y-2">
                                    {factor.examples.map((example, i) => (
                                        <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <div className="w-1 h-1 rounded-full bg-primary" />
                                            {example}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                <div className="bg-primary/5 rounded-[2.5rem] p-8 md:p-12 text-center border border-primary/10 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold mb-4">¿Quieres un presupuesto exacto?</h3>
                    <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                        Analicemos tu caso en una sesión de consultoría gratuita. Te daremos una hoja de ruta y un presupuesto cerrado sin compromiso.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20"
                    >
                        Solicitar Presupuesto Personalizado
                        <ArrowRight size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};

import { useState } from 'react';
import { Calculator, ArrowRight, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { LeadForm } from './LeadForm';

export const ROICalculator = () => {
    const [employees, setEmployees] = useState('');
    const [hours, setHours] = useState('');
    const [hourlyRate, setHourlyRate] = useState('20');
    const [result, setResult] = useState<number | null>(null);
    const [email, setEmail] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [isCalculated, setIsCalculated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

    const calculateROI = (e: React.FormEvent) => {
        e.preventDefault();
        const emp = parseFloat(employees);
        const hrs = parseFloat(hours);
        const rate = parseFloat(hourlyRate);

        if (emp && hrs && rate) {
            const annualSavings = emp * hrs * 52 * rate;
            setResult(annualSavings);
            setIsCalculated(true);
        }
    };

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !email.includes('@')) {
            toast.error('Por favor, introduce un email válido.');
            return;
        }

        setIsLoading(true);

        try {
            const webhookUrl = 'https://espacio-desarrollo-n8n.gqmpfk.easypanel.host/webhook-test/d200165b-000c-4f83-94bf-bb2d0a3c3651';

            await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    employees,
                    hoursPerWeek: hours,
                    hourlyRate,
                    estimatedAnnualSavings: result,
                    timestamp: new Date().toISOString()
                }),
            });

            toast.success('¡Informe enviado! Aquí tienes tu resultado.');
            setShowResult(true);
        } catch (error) {
            console.error('Error sending data:', error);
            toast.error('Hubo un error. Por favor, inténtalo de nuevo.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="absolute -left-20 top-40 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

            <div className="container px-6 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            <Calculator size={16} />
                            <span>Calculadora de Ahorro</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                            ¿Cuánto dinero estás perdiendo por no automatizar?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            Descubre el impacto financiero real de las tareas manuales en tu empresa.
                        </p>
                        <ul className="space-y-6 mb-8">
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">✓</div>
                                <div>
                                    <span className="font-medium block text-foreground">Datos Reales</span>
                                    <span className="text-sm text-muted-foreground">Cálculo basado en métricas de mercado.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">✓</div>
                                <div>
                                    <span className="font-medium block text-foreground">Proyección Anual</span>
                                    <span className="text-sm text-muted-foreground">Visualiza tu ahorro a largo plazo.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">✓</div>
                                <div>
                                    <span className="font-medium block text-foreground">Informe Personalizado</span>
                                    <span className="text-sm text-muted-foreground">Recibe el desglose detallado en tu email.</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white/50 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/20 relative overflow-hidden group hover:border-primary/20 transition-all duration-500">
                        {/* Card Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-primary/10 transition-colors duration-500" />

                        {!isCalculated ? (
                            <form onSubmit={(e) => { e.preventDefault(); calculateROI(e); }} className="space-y-8">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="employees" className="text-base font-medium">Número de empleados administrativos</Label>
                                        <Input
                                            id="employees"
                                            type="number"
                                            placeholder="Ej: 5"
                                            value={employees}
                                            onChange={(e) => setEmployees(e.target.value)}
                                            required
                                            className="h-14 text-lg bg-white/50 border-gray-200 focus:border-primary/50 focus:ring-primary/20 rounded-xl transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="hours" className="text-base font-medium">Horas semanales en tareas repetitivas (por empleado)</Label>
                                        <Input
                                            id="hours"
                                            type="number"
                                            placeholder="Ej: 10"
                                            value={hours}
                                            onChange={(e) => setHours(e.target.value)}
                                            required
                                            className="h-14 text-lg bg-white/50 border-gray-200 focus:border-primary/50 focus:ring-primary/20 rounded-xl transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="rate" className="text-base font-medium">Coste hora promedio (€)</Label>
                                        <Input
                                            id="rate"
                                            type="number"
                                            placeholder="Ej: 20"
                                            value={hourlyRate}
                                            onChange={(e) => setHourlyRate(e.target.value)}
                                            required
                                            className="h-14 text-lg bg-white/50 border-gray-200 focus:border-primary/50 focus:ring-primary/20 rounded-xl transition-all"
                                        />
                                    </div>
                                </div>
                                <Button type="submit" className="w-full text-lg h-14 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-[1.02]">
                                    Calcular mi Ahorro
                                </Button>
                            </form>
                        ) : isCalculated && !showResult ? (
                            <div className="text-center space-y-8 animate-fade-in py-8">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary mb-6 animate-pulse-glow">
                                    <Calculator size={40} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-3xl font-bold">¡Cálculo Completado!</h3>
                                    <p className="text-muted-foreground max-w-xs mx-auto text-lg">
                                        Hemos analizado tus datos. Introduce tu email para desbloquear tu informe.
                                    </p>
                                </div>
                                <form onSubmit={handleEmailSubmit} className="space-y-6 max-w-sm mx-auto">
                                    <Input
                                        type="email"
                                        placeholder="tu@email.com"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="h-14 text-lg text-center bg-white/50 border-gray-200 focus:border-primary/50 focus:ring-primary/20 rounded-xl"
                                    />
                                    <Button
                                        type="submit"
                                        className="w-full text-lg h-14 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-[1.02]"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <span className="flex items-center gap-2">
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Enviando...
                                            </span>
                                        ) : 'Ver mis Resultados'}
                                    </Button>
                                    <p className="text-sm text-muted-foreground">
                                        Te enviaremos también una guía de implementación.
                                    </p>
                                </form>
                            </div>) : (
                            <div className="text-center space-y-8 animate-fade-in py-4">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-medium text-muted-foreground">Tu Potencial de Ahorro Anual</h3>
                                    <div className="text-6xl md:text-7xl font-bold text-primary tracking-tight">
                                        {new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(result || 0)}
                                    </div>
                                </div>
                                <p className="text-lg text-muted-foreground max-w-sm mx-auto">
                                    Esto es lo que podrías estar ahorrando cada año implementando soluciones de IA.
                                </p>

                                <div className="pt-8 border-t border-border/50 space-y-4">
                                    <Button
                                        className="w-full h-14 text-lg rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-[1.02]"
                                        onClick={() => setIsLeadFormOpen(true)}
                                    >
                                        Quiero empezar a ahorrar
                                    </Button>
                                    <button
                                        onClick={() => { setShowResult(false); setIsCalculated(false); setEmail(''); }}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors underline decoration-dotted underline-offset-4"
                                    >
                                        Recalcular
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <LeadForm isOpen={isLeadFormOpen} onClose={() => setIsLeadFormOpen(false)} source="ROI Calculator" />
        </section>
    );
};

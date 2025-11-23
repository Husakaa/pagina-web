import { useState } from 'react';
import { Calculator, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export const ROICalculator = () => {
    const [employees, setEmployees] = useState('');
    const [hours, setHours] = useState('');
    const [hourlyRate, setHourlyRate] = useState('20');
    const [result, setResult] = useState<number | null>(null);
    const [email, setEmail] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [isCalculated, setIsCalculated] = useState(false);

    const calculateROI = (e: React.FormEvent) => {
        e.preventDefault();
        const emp = parseFloat(employees);
        const hrs = parseFloat(hours);
        const rate = parseFloat(hourlyRate);

        if (emp && hrs && rate) {
            // Annual savings = Employees * Hours/Week * 52 weeks * Hourly Rate
            const annualSavings = emp * hrs * 52 * rate;
            setResult(annualSavings);
            // Trigger email gate by setting a flag or just using the email state logic in render
            // In my render logic: !showResult && !email -> Input Form
            // !showResult && email -> Email Gate (Wait, my render logic uses 'email' state presence to show gate?)
            // Actually, I need a state to say "Calculation Done, Waiting for Email".
            // Let's use a new state 'isCalculated'.
            setIsCalculated(true);
        }
    };

    return (
        <section className="py-24 bg-primary/5 border-y border-primary/10">
            <div className="container px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            <Calculator size={16} />
                            <span>Calculadora de Ahorro</span>
                        </div>
                        <h2 className="text-4xl font-bold mb-6">
                            ¿Cuánto dinero estás perdiendo por no automatizar?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Descubre el impacto financiero real de las tareas manuales en tu empresa.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-600">✓</div>
                                <span>Cálculo basado en datos reales de mercado</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-600">✓</div>
                                <span>Proyección anual de ahorro</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-600">✓</div>
                                <span>Informe detallado a tu correo</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-background p-8 rounded-3xl shadow-lg border border-border">
                        {!isCalculated ? (
                            <form onSubmit={(e) => { e.preventDefault(); calculateROI(e); }} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="employees">Número de empleados administrativos</Label>
                                    <Input
                                        id="employees"
                                        type="number"
                                        placeholder="Ej: 5"
                                        value={employees}
                                        onChange={(e) => setEmployees(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="hours">Horas semanales en tareas repetitivas (por empleado)</Label>
                                    <Input
                                        id="hours"
                                        type="number"
                                        placeholder="Ej: 10"
                                        value={hours}
                                        onChange={(e) => setHours(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="rate">Coste hora promedio (€)</Label>
                                    <Input
                                        id="rate"
                                        type="number"
                                        placeholder="Ej: 20"
                                        value={hourlyRate}
                                        onChange={(e) => setHourlyRate(e.target.value)}
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full text-lg py-6">
                                    Calcular mi Ahorro
                                </Button>
                            </form>
                        ) : isCalculated && !showResult ? (
                            <div className="text-center space-y-6 animate-fade-in py-8">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary mb-4">
                                    <Calculator size={32} />
                                </div>
                                <h3 className="text-2xl font-bold">¡Cálculo Completado!</h3>
                                <p className="text-muted-foreground max-w-xs mx-auto">
                                    Hemos analizado tus datos. Introduce tu email para desbloquear tu informe de ahorro personalizado.
                                </p>
                                <div className="space-y-4 max-w-sm mx-auto">
                                    <Input
                                        type="email"
                                        placeholder="tu@email.com"
                                        required
                                        className="text-center"
                                        onChange={(e) => {
                                            // Just a dummy validation for now
                                            if (e.target.value.includes('@')) {
                                                setShowResult(true);
                                            }
                                        }}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        Te enviaremos también una guía de implementación.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center space-y-6 animate-fade-in">
                                <h3 className="text-2xl font-semibold">Tu Potencial de Ahorro Anual</h3>
                                <div className="text-5xl font-bold text-primary">
                                    {new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(result || 0)}
                                </div>
                                <p className="text-muted-foreground">
                                    Esto es lo que podrías estar ahorrando cada año implementando soluciones de IA.
                                </p>

                                <div className="pt-6 border-t border-border">
                                    <Button className="w-full rounded-full" size="lg" onClick={() => window.location.href = '#contact'}>
                                        Quiero empezar a ahorrar
                                    </Button>
                                </div>

                                <button
                                    onClick={() => { setShowResult(false); setIsCalculated(false); setEmail(''); }}
                                    className="text-sm text-muted-foreground hover:text-foreground underline"
                                >
                                    Recalcular
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

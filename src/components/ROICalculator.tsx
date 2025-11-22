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

    const calculateROI = (e: React.FormEvent) => {
        e.preventDefault();
        const emp = parseFloat(employees);
        const hrs = parseFloat(hours);
        const rate = parseFloat(hourlyRate);

        if (emp && hrs && rate) {
            // Annual savings = Employees * Hours/Week * 52 weeks * Hourly Rate
            const annualSavings = emp * hrs * 52 * rate;
            setResult(annualSavings);
            setShowResult(true);
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
                        {!showResult ? (
                            <form onSubmit={calculateROI} className="space-y-6">
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
                                    <p className="text-sm font-medium mb-4">¿Quieres saber cómo recuperar este dinero?</p>
                                    <div className="flex gap-2">
                                        <Input
                                            placeholder="Tu mejor email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <Button onClick={() => alert('¡Gracias! Te enviaremos el informe detallado.')}>
                                            Enviar Informe
                                        </Button>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setShowResult(false)}
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

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Loader2, Sparkles } from 'lucide-react';

interface QualificationFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export const QualificationForm = ({ isOpen, onClose }: QualificationFormProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        sector: '',
        website: '',
        fax: '', // Honeypot field (renamed from website)
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Honeypot check: if fax is filled, it's a bot.
        if (formData.fax) {
            // Fake success for the bot
            toast.success('¡Datos enviados! Recibirás tu informe pronto.');
            onClose();
            return;
        }

        setIsLoading(true);

        try {
            const webhookUrl = 'https://espacio-desarrollo-n8n.gqmpfk.easypanel.host/webhook-test/7688c6ba-3045-474e-96f2-012177cbdd2a';

            await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    sector: formData.sector,
                    website: formData.website,
                    timestamp: new Date().toISOString()
                }),
            });

            toast.success('¡Datos enviados! Recibirás tu informe pronto.');
            onClose();
            setFormData({ name: '', email: '', phone: '', sector: '', website: '', fax: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Hubo un error. Por favor, inténtalo de nuevo.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[480px] rounded-[2.5rem] border border-white/20 bg-white/70 backdrop-blur-2xl shadow-2xl p-0 overflow-hidden">
                <div className="p-8">
                    <DialogHeader className="mb-8 text-center space-y-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Sparkles className="w-6 h-6 text-primary" />
                        </div>
                        <DialogTitle className="text-2xl font-semibold tracking-tight text-center">Análisis de Viabilidad</DialogTitle>
                        <DialogDescription className="text-base text-muted-foreground/80 max-w-xs mx-auto text-center">
                            Completa tus datos para recibir un informe preliminar sobre el potencial de IA en tu negocio.
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Honeypot Field - Hidden */}
                        <div className="hidden" aria-hidden="true">
                            <input
                                type="text"
                                name="fax"
                                tabIndex={-1}
                                autoComplete="off"
                                value={formData.fax}
                                onChange={(e) => setFormData({ ...formData, fax: e.target.value })}
                            />
                        </div>

                        <div className="space-y-5">
                            <div className="space-y-2">
                                <Label htmlFor="q-name" className="text-sm font-medium ml-1">Nombre Completo</Label>
                                <Input
                                    id="q-name"
                                    required
                                    placeholder="Tu nombre"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="h-12 rounded-xl bg-white/50 border-white/30 focus:border-primary/20 focus:bg-white/80 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="q-email" className="text-sm font-medium ml-1">Email de Contacto</Label>
                                <Input
                                    id="q-email"
                                    type="email"
                                    required
                                    placeholder="hola@gmail.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="h-12 rounded-xl bg-white/50 border-white/30 focus:border-primary/20 focus:bg-white/80 transition-all"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="q-phone" className="text-sm font-medium ml-1">Teléfono</Label>
                                    <Input
                                        id="q-phone"
                                        type="tel"
                                        required
                                        placeholder="+34..."
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="h-12 rounded-xl bg-white/50 border-white/30 focus:border-primary/20 focus:bg-white/80 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="q-sector" className="text-sm font-medium ml-1">Sector</Label>
                                    <Input
                                        id="q-sector"
                                        required
                                        placeholder="Ej: Hostelería"
                                        value={formData.sector}
                                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                                        className="h-12 rounded-xl bg-white/50 border-white/30 focus:border-primary/20 focus:bg-white/80 transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="q-website" className="text-sm font-medium ml-1">Sitio Web <span className="text-muted-foreground font-normal text-xs">(Opcional)</span></Label>
                                <Input
                                    id="q-website"
                                    type="url"
                                    placeholder="anubisaiagency.com"
                                    value={formData.website}
                                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                    className="h-12 rounded-xl bg-white/50 border-white/30 focus:border-primary/20 focus:bg-white/80 transition-all"
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-12 rounded-xl text-base font-medium shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span className="flex items-center gap-2">
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Analizando...
                                </span>
                            ) : 'Ver si mi negocio es Apto'}
                        </Button>
                    </form>
                </div>

                {/* Footer decoration */}
                <div className="bg-white/30 backdrop-blur-sm p-4 text-center border-t border-white/20">
                    <p className="text-xs text-muted-foreground font-medium">
                        🔒 Tus datos están seguros y no serán compartidos.
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    );
};

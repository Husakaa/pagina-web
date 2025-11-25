import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

interface SalesContactFormProps {
    isOpen: boolean;
    onClose: () => void;
    planName?: string;
}

export const SalesContactForm = ({ isOpen, onClose, planName }: SalesContactFormProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        company: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const webhookUrl = 'https://espacio-desarrollo-n8n.gqmpfk.easypanel.host/webhook/b31892bb-372f-4f4b-bb57-60087e7ae0e7';

            await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    plan: planName,
                    timestamp: new Date().toISOString()
                }),
            });

            toast.success('Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.');
            onClose();
            setFormData({ name: '', email: '', phone: '', message: '', company: '' });
        } catch (error) {
            console.error('Error sending data:', error);
            toast.error('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden rounded-[2rem] border-0 bg-transparent shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-5 h-full bg-white/80 backdrop-blur-3xl">
                    {/* Left Column: Contact Info */}
                    <div className="md:col-span-2 bg-primary/5 p-8 flex flex-col justify-between border-r border-white/20">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Hablemos</h3>
                            <p className="text-muted-foreground mb-8">
                                Estamos aquí para ayudarte a escalar tu negocio con IA.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
                                        <Mail size={18} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-foreground">Email</p>
                                        <a href="mailto:contacto@anubisaiagency.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                            contacto@anubisaiagency.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
                                        <Phone size={18} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-foreground">Teléfono</p>
                                        <a href="tel:+34694249575" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                            +34 694 249 575
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
                                        <MapPin size={18} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-foreground">Ubicación</p>
                                        <p className="text-sm text-muted-foreground">
                                            Málaga, España
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 md:mt-0">
                            <p className="text-xs text-muted-foreground/60">
                                © 2024 Anubis AI Agency
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="md:col-span-3 p-8 md:p-10">
                        <DialogHeader className="mb-6">
                            <DialogTitle className="text-2xl font-bold">
                                {planName ? `Interés en plan ${planName}` : 'Contactar Ventas'}
                            </DialogTitle>
                            <DialogDescription>
                                Completa el formulario y nuestro equipo te contactará en menos de 24h.
                            </DialogDescription>
                        </DialogHeader>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Nombre</Label>
                                    <Input
                                        id="name"
                                        required
                                        placeholder="Tu nombre"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="bg-white/50 border-gray-200 focus:border-primary/30 focus:bg-white transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="company">Empresa</Label>
                                    <Input
                                        id="company"
                                        placeholder="Nombre empresa"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className="bg-white/50 border-gray-200 focus:border-primary/30 focus:bg-white transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        placeholder="tu@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="bg-white/50 border-gray-200 focus:border-primary/30 focus:bg-white transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Teléfono</Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="+34..."
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="bg-white/50 border-gray-200 focus:border-primary/30 focus:bg-white transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Mensaje</Label>
                                <Textarea
                                    id="message"
                                    placeholder="¿En qué podemos ayudarte?"
                                    className="min-h-[100px] bg-white/50 border-gray-200 focus:border-primary/30 focus:bg-white transition-all resize-none"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-12 rounded-xl text-base font-medium shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-[1.02] mt-2"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <span className="flex items-center gap-2">
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Enviando...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        Enviar Mensaje
                                        <Send className="w-4 h-4" />
                                    </span>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

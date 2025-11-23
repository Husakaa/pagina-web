import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface LeadFormProps {
    isOpen: boolean;
    onClose: () => void;
    source?: string;
}

export const LeadForm = ({ isOpen, onClose, source = 'General' }: LeadFormProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Replace with actual n8n webhook URL
            const webhookUrl = 'https://n8n.anubis-ai.agency/webhook/lead-capture';

            await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, source, timestamp: new Date().toISOString() }),
            });

            toast.success('¡Solicitud recibida! Te contactaremos pronto.');
            onClose();
            setFormData({ name: '', email: '', company: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Hubo un error. Por favor, inténtalo de nuevo.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Solicitar Auditoría Gratuita</DialogTitle>
                    <DialogDescription>
                        Déjanos tus datos y analizaremos cómo la IA puede escalar tu negocio.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nombre Completo</Label>
                        <Input
                            id="name"
                            required
                            placeholder="Tu nombre"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Corporativo</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            placeholder="tu@empresa.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="company">Empresa</Label>
                        <Input
                            id="company"
                            placeholder="Nombre de tu empresa"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">¿Qué desafío quieres resolver?</Label>
                        <Textarea
                            id="message"
                            placeholder="Cuéntanos brevemente..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? 'Enviando...' : 'Solicitar Auditoría'}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

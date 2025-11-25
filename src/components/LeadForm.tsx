import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface LeadFormProps {
    isOpen: boolean;
    onClose: () => void;
    source?: string;
}

export const LeadForm = ({ isOpen, onClose, source = 'General' }: LeadFormProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[800px] w-[95vw] h-[90vh] max-h-[800px] p-0 overflow-hidden rounded-2xl bg-background">
                <DialogHeader className="px-6 pt-6 pb-2">
                    <DialogTitle className="text-2xl font-bold">Agendar Consultoría de Viabilidad</DialogTitle>
                    <DialogDescription>
                        Selecciona el horario que mejor te venga para analizar tu caso.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex-1 w-full h-full bg-background">
                    <iframe
                        src="https://calendly.com/anubis-ai-agency/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=000000&primary_color=3b82f6"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        title="Calendly Scheduling Page"
                    ></iframe>
                </div>
            </DialogContent>
        </Dialog>
    );
};

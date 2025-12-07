import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface LeadFormProps {
    isOpen: boolean;
    onClose: () => void;
    source?: string;
}

export const LeadForm = ({ isOpen, onClose, source = 'General' }: LeadFormProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            {/* CAMBIO 1: Añadido 'flex flex-col'. 
               Esto es vital para que el Header se quede arriba y el contenido llene el resto sin empujar.
            */}
            <DialogContent className="sm:max-w-[800px] w-[95vw] h-[90vh] max-h-[800px] p-0 overflow-hidden rounded-2xl bg-background flex flex-col">
                <DialogHeader className="px-6 pt-6 pb-2 shrink-0">
                    <DialogTitle className="text-2xl font-bold">Agendar Consultoría de Viabilidad</DialogTitle>
                    <DialogDescription>
                        Selecciona el horario que mejor te venga para analizar tu caso.
                    </DialogDescription>
                </DialogHeader>

                {/* CAMBIO 2: 'flex-1' asegura que este div tome TODO el espacio restante 
                   después del header, pero no más.
                */}
                <div className="flex-1 w-full relative bg-background">
                    <iframe
                        /* Truco Pro: Añade hide_event_type_details=1 para ocultar la tarjeta de presentación
                           y mostrar directamente el calendario, eliminando aún más espacio blanco visual */
                        src="https://calendly.com/anubis-ai-agency/30min?hide_gdpr_banner=1&hide_event_type_details=1&background_color=ffffff&text_color=000000&primary_color=3b82f6"
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
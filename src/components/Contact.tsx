import { Mail, Phone, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { QualificationForm } from './QualificationForm';

export const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
            Tus competidores ya están automatizando.
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            No te quedes atrás. Descubre si tu negocio es apto para IA hoy mismo.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white/50 backdrop-blur-2xl rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl border border-white/20">
          <div className="mb-10 flex flex-col items-center">
            {/* Guarantee Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-sm mb-6">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold tracking-wide text-foreground/80">GARANTÍA DE IMPLEMENTACIÓN</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Consulta de Viabilidad</h3>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Analizaremos tu negocio y te diremos honestamente si podemos ayudarte a escalar.
            </p>
          </div>

          <button
            onClick={() => setIsFormOpen(true)}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-full text-lg font-medium transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-primary/25 overflow-hidden"
          >
            <span className="relative z-10">Ver si mi negocio es apto</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>

          <p className="text-sm text-muted-foreground mt-8 mb-12 max-w-md mx-auto">
            <strong className="text-foreground font-semibold">Garantía de Riesgo Cero:</strong> Si no identificamos al menos 3 oportunidades de ahorro, te regalamos el informe.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-black/5">
            <a href="mailto:contacto@anubisaiagency.com" className="flex flex-col items-center gap-4 group p-4 rounded-2xl hover:bg-black/5 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform border border-black/5">
                <Mail size={22} />
              </div>
              <span className="text-sm font-medium text-foreground/80">Email</span>
            </a>
            <a href="tel:+34694249575" className="flex flex-col items-center gap-4 group p-4 rounded-2xl hover:bg-black/5 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform border border-black/5">
                <Phone size={22} />
              </div>
              <span className="text-sm font-medium text-foreground/80">Llamar</span>
            </a>
            <div className="flex flex-col items-center gap-4 p-4 rounded-2xl hover:bg-black/5 transition-colors cursor-default">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-muted-foreground border border-black/5">
                <MapPin size={22} />
              </div>
              <span className="text-sm font-medium text-foreground/80">Málaga, ES</span>
            </div>
          </div>
        </div>
      </div>
      <QualificationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

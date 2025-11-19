import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contacto@anubisaiagency.com',
      href: 'mailto:contacto@anubisaiagency.com',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+34 694 249 575',
      href: 'tel:+34694249575',
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Mijas Costa, Málaga',
      href: 'https://maps.google.com/?q=Mijas+Costa+Málaga',
    },
  ];

  return (
    <section id="contacto" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hablemos de tu <span className="text-gradient-gold">Proyecto</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent/20 via-accent to-accent/20 mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para responder tus preguntas y ayudarte a dar el siguiente paso
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  <Card className="group hover:shadow-luxury transition-all duration-300 hover:scale-105 border-border hover:border-accent/50">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="text-sm text-muted-foreground mb-1">{method.label}</div>
                      <div className="font-medium text-foreground">{method.value}</div>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>

          {/* Main CTA Card */}
          <Card className="border-accent/20 bg-gradient-to-br from-card to-accent/5 shadow-luxury-lg">
            <CardContent className="p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-6">
                <Send className="w-8 h-8 text-accent" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Agenda tu Consulta Estratégica
              </h3>
              
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
                30 minutos para analizar tu negocio y diseñar una estrategia de automatización personalizada. 
                <strong className="text-foreground"> Completamente gratis.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-luxury hover:shadow-luxury-lg transition-all duration-300 hover:scale-105"
                  onClick={() => (window as any).Calendly?.initPopupWidget({ url: 'https://calendly.com/anubisaiagency/30min' })}
                >
                  Reservar mi Espacio
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent/20 hover:bg-accent/5 hover:border-accent/40"
                  onClick={() => window.location.href = 'mailto:contacto@anubisaiagency.com'}
                >
                  Enviar Email
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                📞 ¿Prefieres hablar directamente? Llámanos al <a href="tel:+34694249575" className="text-accent hover:underline font-medium">+34 694 249 575</a>
              </p>
            </CardContent>
          </Card>

          {/* Voice Demo Highlight */}
          <div className="mt-12 text-center">
            <Card className="border-accent/30 bg-gradient-to-r from-accent/5 to-transparent">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-xl">🎙️</span>
                  </div>
                  <h4 className="text-xl font-bold">Prueba nuestro Asistente de Voz IA</h4>
                </div>
                <p className="text-muted-foreground">
                  Experimenta la tecnología que implementamos para nuestros clientes. 
                  Haz clic en el ícono flotante de la esquina inferior derecha para conversar con nuestra IA.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

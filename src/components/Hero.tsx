import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Sparkles } from 'lucide-react';

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.scale(dpr, dpr);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const AREA_PER_DOT = 11000;
    const SPEED = 0.10;
    const LINK_DISTANCE = 120;
    const MAX_LINKS = 2;

    const count = Math.floor((w * h) / AREA_PER_DOT);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        radius: 1.5,
      });
    }

    let animationId: number;

    function animate() {
      ctx!.clearRect(0, 0, w, h);

      // Update positions
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      });

      // Draw links
      ctx!.strokeStyle = 'rgba(10, 14, 20, 0.18)';
      ctx!.lineWidth = 0.5;
      
      particles.forEach((p1, i) => {
        let linkCount = 0;
        for (let j = i + 1; j < particles.length; j++) {
          if (linkCount >= MAX_LINKS) break;
          
          const p2 = particles[j];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < LINK_DISTANCE) {
            ctx!.beginPath();
            ctx!.moveTo(p1.x, p1.y);
            ctx!.lineTo(p2.x, p2.y);
            ctx!.stroke();
            linkCount++;
          }
        }
      });

      // Draw particles
      ctx!.fillStyle = 'rgba(10, 14, 20, 0.75)';
      particles.forEach(p => {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fill();
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToServices = () => {
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30 pointer-events-none"
      />
      
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/10 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-scale-in">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-foreground">Luxury, Automated</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Automatización Premium
          <br />
          <span className="text-gradient-gold">para tu Negocio</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 font-light">
          Flujos inteligentes, integraciones eficientes y soluciones digitales de lujo
          <br />
          que potencian tu empresa con IA
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-luxury hover:shadow-luxury-lg transition-all duration-300 hover:scale-105"
            onClick={() => (window as any).Calendly?.initPopupWidget({ url: 'https://calendly.com/anubisaiagency/30min' })}
          >
            Solicita tu Demo
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/20 hover:bg-primary/5 hover:border-primary/40"
            onClick={scrollToServices}
          >
            Descubre nuestros servicios
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <ChevronDown className="w-4 h-4 animate-bounce" />
          <span>Desliza para explorar</span>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

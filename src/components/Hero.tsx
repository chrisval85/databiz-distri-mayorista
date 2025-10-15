import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-warehouse.jpg";

interface HeroProps {
  onOpenChat: () => void;
}

export const Hero = ({ onOpenChat }: HeroProps) => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20 animate-fade-in">
        <div className="max-w-2xl text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Su Proveedor Mayorista de Confianza
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            Alimentos, bebidas y artículos de limpieza para empresas en Asunción, Paraguay
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={onOpenChat}
              className="text-lg px-8 py-6 transition-all hover:scale-105"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Consultar Productos
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 transition-all"
              asChild
            >
              <a href="#contacto">Contáctenos</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

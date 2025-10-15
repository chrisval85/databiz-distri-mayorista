import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contáctenos
          </h2>
          <p className="text-xl text-muted-foreground">
            Estamos ubicados en Asunción, Paraguay
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center animate-scale-in">
            <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Ubicación</h3>
            <p className="text-muted-foreground">Asunción, Paraguay</p>
          </div>

          <div className="text-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Teléfono</h3>
            <p className="text-muted-foreground">+595 XXX XXX XXX</p>
          </div>

          <div className="text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground">info@databiz.com.py</p>
          </div>

          <div className="text-center animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Horario</h3>
            <p className="text-muted-foreground">Lun - Vie: 8:00 - 18:00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

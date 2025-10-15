import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Package, Award } from "lucide-react";

const features = [
  {
    title: "Mejores Precios",
    description: "Precios competitivos para mayoristas",
    icon: TrendingUp,
  },
  {
    title: "Atención Personalizada",
    description: "Equipo dedicado a su servicio",
    icon: Users,
  },
  {
    title: "Amplio Stock",
    description: "Productos siempre disponibles",
    icon: Package,
  },
  {
    title: "Calidad Garantizada",
    description: "Productos de marcas reconocidas",
    icon: Award,
  },
];

export const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Por Qué Databiz?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos su socio estratégico en Asunción, Paraguay, brindando soluciones 
            mayoristas para hacer crecer su negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="text-center hover:shadow-card transition-all duration-300 border-border bg-gradient-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

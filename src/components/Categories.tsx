import { Card, CardContent } from "@/components/ui/card";
import { Apple, Coffee, Sparkles } from "lucide-react";
import foodImage from "@/assets/category-food.jpg";
import beveragesImage from "@/assets/category-beverages.jpg";
import cleaningImage from "@/assets/category-cleaning.jpg";

const categories = [
  {
    title: "Alimentos",
    description: "Amplia variedad de productos alimenticios para abastecer su negocio",
    icon: Apple,
    image: foodImage,
  },
  {
    title: "Bebidas",
    description: "Refrescos, jugos, agua y más para satisfacer a sus clientes",
    icon: Coffee,
    image: beveragesImage,
  },
  {
    title: "Artículos de Limpieza",
    description: "Todo lo necesario para mantener su negocio impecable",
    icon: Sparkles,
    image: cleaningImage,
  },
];

export const Categories = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestras Categorías
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Productos de calidad para todas las necesidades de su empresa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.title}
              className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-scale-in border-border bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground">
                    {category.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

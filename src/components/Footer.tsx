export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-hero" />
              <span className="text-xl font-bold">Databiz</span>
            </div>
            <p className="text-background/80">
              Su proveedor mayorista de confianza en Asunción, Paraguay
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#categorias" className="hover:text-background transition-colors">
                  Categorías
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-background transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-background transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-background/80">
              <li>Asunción, Paraguay</li>
              <li>info@databiz.com.py</li>
              <li>+595 XXX XXX XXX</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} Databiz. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

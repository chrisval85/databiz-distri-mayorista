import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onOpenChat={handleOpenChat} />
      
      <main className="flex-1">
        <Hero onOpenChat={handleOpenChat} />
        
        <section id="categorias">
          <Categories />
        </section>
        
        <section id="nosotros">
          <About />
        </section>
        
        <Contact />
      </main>

      <Footer />
      
      <ChatWidget />
    </div>
  );
};

export default Index;

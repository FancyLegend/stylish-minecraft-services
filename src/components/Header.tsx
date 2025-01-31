import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-secondary py-4 px-6 mb-8 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">SkyBars</Link>
        
        {isMobile ? (
          <>
            <button 
              onClick={toggleMenu}
              className="text-foreground hover:text-primary transition-colors"
              aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isMenuOpen && (
              <nav className="absolute top-full left-0 right-0 bg-secondary border-t border-border py-4 px-6 flex flex-col space-y-4 z-50">
                <Link 
                  to="/" 
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Главная
                </Link>
                <Link 
                  to="/shop" 
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Магазин
                </Link>
                <Link 
                  to="/rules" 
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Правила
                </Link>
                <Link 
                  to="/support" 
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Поддержка
                </Link>
              </nav>
            )}
          </>
        ) : (
          <nav className="space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Главная</Link>
            <Link to="/shop" className="text-foreground hover:text-primary transition-colors">Магазин</Link>
            <Link to="/rules" className="text-foreground hover:text-primary transition-colors">Правила</Link>
            <Link to="/support" className="text-foreground hover:text-primary transition-colors">Поддержка</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-secondary py-4 px-6 mb-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">SkyBars</Link>
        <nav className="space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">Главная</Link>
          <Link to="/shop" className="text-foreground hover:text-primary transition-colors">Магазин</Link>
          <Link to="/rules" className="text-foreground hover:text-primary transition-colors">Правила</Link>
          <Link to="/support" className="text-foreground hover:text-primary transition-colors">Поддержка</Link>
        </nav>
      </div>
    </header>
  );
}
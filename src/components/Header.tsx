import { Pill } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
            <Pill className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">OTC Medicine Selector</span>
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/symptoms" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/symptoms" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Find Medicine
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

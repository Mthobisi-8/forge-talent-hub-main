import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 border-b border-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              <img 
                src="/4-removebg-preview (1).png"
                alt="Forge Talent Logo"
                height="44"
                width="150"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-purple-200 hover:text-purple-400 transition-colors">
              Home
            </a>
            <a href="/about" className="text-purple-200 hover:text-purple-400 transition-colors">
              About
            </a>
            <a href="/courses" className="text-purple-200 hover:text-purple-400 transition-colors">
              Courses
            </a>
            <a href="/testing-centre" className="text-purple-200 hover:text-purple-400 transition-colors">
              Testing Centre
            </a>
            <a href="/pricing" className="text-purple-200 hover:text-purple-400 transition-colors">
              Pricing
            </a>
            <a href="/recruit" className="text-purple-200 hover:text-purple-400 transition-colors">
              Recruit
            </a>
            <a href="/referral" className="text-purple-200 hover:text-purple-400 transition-colors">
              Referral Program
            </a>
            <a href="/contact" className="text-purple-200 hover:text-purple-400 transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <Button variant="default" className="bg-purple-600 hover:bg-purple-700 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <Menu className="h-6 w-6 text-purple-200" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
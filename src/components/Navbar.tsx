import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Pill } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Sezione Logo a sinistra */}
          <div className="flex items-center">
            <Pill className="h-8 w-8 text-medreminder-primary" strokeWidth={2.5} />
            <span className="ml-2 text-xl font-bold text-gray-800">MedReminderAI</span>
          </div>

          {/* Menu Desktop (centro/destra) */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#features" className="text-gray-600 hover:text-medreminder-primary px-3 py-2 transition-colors">Funzionalità</a>
            <a href="#stats" className="text-gray-600 hover:text-medreminder-primary px-3 py-2 transition-colors">Statistiche</a>
            <a href="#mission" className="text-gray-600 hover:text-medreminder-primary px-3 py-2 transition-colors">Missione</a>
            <a href="#team" className="text-gray-600 hover:text-medreminder-primary px-3 py-2 transition-colors">Team</a>
            <Link to="/preview">
              <Button className="bg-medreminder-primary hover:bg-medreminder-dark text-white">
                Scarica Ora
              </Button>
            </Link>
          </div>

          {/* Burger Menu Mobile (destra) */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Apri menu</span>
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </Button>
          </div>
        </div>

        {/* Menu Mobile (sotto la navbar) */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white/95 backdrop-blur-sm border-b">
            <div className="px-4 py-2 space-y-2">
              <a 
                href="#features" 
                className="block px-3 py-2 text-gray-600 hover:text-medreminder-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Funzionalità
              </a>
              <a 
                href="#stats" 
                className="block px-3 py-2 text-gray-600 hover:text-medreminder-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Statistiche
              </a>
              <a 
                href="#mission" 
                className="block px-3 py-2 text-gray-600 hover:text-medreminder-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Missione
              </a>
              <a 
                href="#team" 
                className="block px-3 py-2 text-gray-600 hover:text-medreminder-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </a>
              <Link 
                to="/preview" 
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full bg-medreminder-primary hover:bg-medreminder-dark text-white">
                  Scarica Ora
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
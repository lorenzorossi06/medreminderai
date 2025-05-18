
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Pill, Bell, Search, MessageSquare } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="wavy-bg py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 md:pr-12">
            <div className="mb-8 animate-float">
              <div className="pill-icon inline-block"></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight animate-fade-in">
              Semplificare<br />la gestione dei farmaci
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
              Un'app innovativa progettata per rendere l'assunzione dei farmaci più facile, intuitiva e sicura per tutti.
            </p>
            <div className="animate-fade-in" style={{animationDelay: "0.4s"}}>
              <Link to="/preview">
                <Button size="lg" className="bg-medreminder-primary hover:bg-medreminder-dark text-white">
                  Scarica Ora
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in" style={{animationDelay: "0.6s"}}>
            <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100 relative">
              <div className="absolute -top-4 -right-4 bg-medreminder-primary text-white rounded-full p-3">
                <Pill size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-4">Promemoria Farmaci</h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-medreminder-secondary rounded-lg">
                  <Bell size={20} className="text-medreminder-primary mr-3" />
                  <span>Prendi Amoxicillina - 500mg</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Search size={20} className="text-medreminder-primary mr-3" />
                  <span>Trova informazioni sui farmaci</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <MessageSquare size={20} className="text-medreminder-primary mr-3" />
                  <span>Chiedi all'AI sugli effetti collaterali</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

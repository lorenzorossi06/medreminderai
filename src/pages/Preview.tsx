
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MessageSquare, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const Preview = () => {
  return (
    <div className="min-h-screen bg-medreminder-light flex flex-col">
      {/* Header with back button */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 flex items-center">
            <Link to="/">
              <Button variant="ghost" size="icon" className="mr-2">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Torna alla home</span>
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-gray-800">Anteprima MedReminderAI</h1>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        {/* Download CTA - New prominent section */}
        <div className="text-center mb-16 py-10">
          <h2 className="text-5xl md:text-6xl font-bold text-medreminder-primary animate-fade-in tracking-tight">
            SCARICA LA DEMO ORA
          </h2>
          <div className="mt-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <a 
              href="#" 
              className="inline-block py-3 px-8 text-xl font-medium text-white bg-medreminder-dark hover:bg-medreminder-primary transition-colors duration-300 rounded-lg shadow-lg hover:shadow-xl"
            >
              {/* This is where the link will go */}
              Link placeholder
            </a>
          </div>
        </div>

        {/* App coming soon message */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-medreminder-primary animate-fade-in">
            App disponibile a breve
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "0.2s"}}>
            Stiamo finalizzando l'applicazione per offrirti la migliore esperienza possibile nella gestione dei tuoi farmaci.
          </p>
        </div>

        {/* App features preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md animate-fade-in" style={{animationDelay: "0.3s"}}>
            <div className="flex items-center mb-4 text-medreminder-primary">
              <Search className="h-6 w-6 mr-2" />
              <h3 className="font-bold text-lg">Ricerca Intelligente</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Cerca facilmente qualsiasi medicinale tramite nome o scansionando il codice a barre della confezione.
            </p>
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="/lovable-uploads/f7253029-63b2-4de5-a2bd-44945b3430c0.png" 
                alt="Funzionalità di ricerca" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md animate-fade-in" style={{animationDelay: "0.4s"}}>
            <div className="flex items-center mb-4 text-medreminder-primary">
              <Calendar className="h-6 w-6 mr-2" />
              <h3 className="font-bold text-lg">Gestione Farmaci</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Organizza i tuoi medicinali, imposta promemoria personalizzati e mantieni traccia delle tue terapie in modo semplice.
            </p>
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="/lovable-uploads/e774a4f8-c51a-4873-bb1d-50b5f4eb180d.png" 
                alt="Gestione farmaci" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md animate-fade-in" style={{animationDelay: "0.5s"}}>
            <div className="flex items-center mb-4 text-medreminder-primary">
              <MessageSquare className="h-6 w-6 mr-2" />
              <h3 className="font-bold text-lg">Assistente AI</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Chiedi informazioni sui tuoi farmaci e ottieni risposte affidabili basate sui foglietti illustrativi ufficiali.
            </p>
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="/lovable-uploads/f1bf4aeb-9790-4bc6-a13d-61e3a08472ad.png" 
                alt="Assistente AI" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Preview;

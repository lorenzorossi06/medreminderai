
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MessageSquare, Search, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import Footer from '@/components/Footer';

const Preview = () => {
  const [instagramProfile, setInstagramProfile] = useState('');
  const { toast } = useToast();

  const handleFollow = () => {
    if (!instagramProfile) {
      toast({
        title: "Campo vuoto",
        description: "Per favore inserisci il tuo profilo Instagram",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Grazie!",
      description: "Ti aggiorneremo sulle novità di MedReminderAI",
    });
    
    setInstagramProfile('');
  };

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

        {/* Instagram profile form */}
        <div className="text-center bg-medreminder-secondary p-8 rounded-xl shadow-md animate-fade-in" style={{animationDelay: "0.6s"}}>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Seguici su Instagram</h3>
          <p className="text-gray-600 mb-6">
            Inserisci il tuo profilo Instagram per essere tra i primi a conoscere la data di lancio dell'app
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="relative sm:w-64">
              <Instagram className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={instagramProfile}
                onChange={(e) => setInstagramProfile(e.target.value)}
                placeholder="@il_tuo_profilo"
                className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-medreminder-primary"
              />
            </div>
            <Button 
              className="bg-medreminder-primary hover:bg-medreminder-dark text-white"
              onClick={handleFollow}
            >
              Segui
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Preview;

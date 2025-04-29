
import React from 'react';
import { Calendar, Search, FileText, MessageSquare, Users } from 'lucide-react';

const features = [
  {
    icon: <Calendar className="h-10 w-10 text-medreminder-primary" />,
    title: "Calendario Interattivo",
    description: "Inserisci facilmente i tuoi farmaci, imposta orari precisi e ricevi promemoria personalizzati."
  },
  {
    icon: <Search className="h-10 w-10 text-medreminder-primary" />,
    title: "Ricerca Medicinali Avanzata",
    description: "Trova rapidamente i farmaci per nome, codice univoco o scannerizzando il codice a barre della confezione."
  },
  {
    icon: <FileText className="h-10 w-10 text-medreminder-primary" />,
    title: "Foglietto Illustrativo Digitale",
    description: "Visualizza direttamente nell'app il foglietto illustrativo ufficiale in formato digitale."
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-medreminder-primary" />,
    title: "Assistente AI 'dal Bugiardino'",
    description: "Chiedi informazioni specifiche sui tuoi farmaci e ricevi risposte basate esclusivamente sul foglietto illustrativo ufficiale."
  },
  {
    icon: <Users className="h-10 w-10 text-medreminder-primary" />,
    title: "Funzione 'Aiutante'",
    description: "Aggiungi una persona fidata per supervisionare il tuo piano terapeutico, ideale per anziani e pazienti con assistenza."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Funzionalità Principali</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            MedReminderAI si configura come un ecosistema digitale completo per la gestione della tua salute
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300"
            >
              <div className="bg-medreminder-secondary inline-block p-3 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

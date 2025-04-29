
import React from 'react';
import { Medkit, Heart } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">La Nostra Missione & Visione</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Creiamo tecnologia che semplifica la vita di chi assume farmaci
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-medreminder-secondary p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <Medkit className="h-10 w-10 text-medreminder-primary mr-4" />
              <h3 className="text-2xl font-bold text-gray-800">Missione</h3>
            </div>
            <p className="text-gray-700 text-lg">
              Aiutare le persone con l'assunzione di farmaci semplificata attraverso una tecnologia affidabile, intuitiva e accessibile a tutti.
            </p>
          </div>
          
          <div className="bg-medreminder-secondary p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <Heart className="h-10 w-10 text-medreminder-primary mr-4" />
              <h3 className="text-2xl font-bold text-gray-800">Visione</h3>
            </div>
            <p className="text-gray-700 text-lg">
              Vedere la nostra app come una comodità quotidiana per persone e famiglie, migliorando l'aderenza terapeutica e la qualità della vita.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;

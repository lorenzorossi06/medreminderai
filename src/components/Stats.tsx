
import React from 'react';
import { Pill, Users, CheckCircle } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-20 bg-medreminder-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">I Nostri Numeri</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Un database completo per gestire tutte le tue necessità mediche
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="flex justify-center mb-4">
              <Pill className="h-12 w-12 text-medreminder-primary" />
            </div>
            <h3 className="text-4xl font-bold text-medreminder-primary mb-2">158.213</h3>
            <p className="text-gray-600">Farmaci e medicinali presenti nell'app</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-medreminder-primary" />
            </div>
            <h3 className="text-4xl font-bold text-medreminder-primary mb-2">60%</h3>
            <p className="text-gray-600">Degli utenti assumono medicinali con frequenza</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-12 w-12 text-medreminder-primary" />
            </div>
            <h3 className="text-4xl font-bold text-medreminder-primary mb-2">100%</h3>
            <p className="text-gray-600">Risposte AI basate solo su fonti certificate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

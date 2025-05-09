
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const EmailConfirmed: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-16">
        <div className="max-w-md w-full mx-auto px-4 sm:px-6">
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100 mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Email confermato!</h1>
            <p className="text-gray-600 mb-6">
              Grazie per aver confermato il tuo indirizzo email. Ora puoi accedere a tutte le funzionalità di MedReminderAI.
            </p>
            
            <div className="space-y-4">
              <Link to="/preview">
                <Button className="w-full bg-medreminder-primary hover:bg-medreminder-dark text-white">
                  Scarica l'App
                </Button>
              </Link>
              
              <Link to="/">
                <Button variant="outline" className="w-full">
                  Torna alla Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmailConfirmed;


import React from 'react';
import { Pill, Mail, ExternalLink, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <Pill className="h-8 w-8 text-medreminder-primary" />
              <span className="ml-2 text-xl font-bold text-gray-800">MedReminderAI</span>
            </div>
            <p className="text-gray-600 mt-4 max-w-md">
              Un'applicazione innovativa per rendere più facile, intuitiva e sicura l'assunzione delle medicine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <div>
              <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Prodotto</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-gray-600 hover:text-medreminder-primary transition-colors">Funzionalità</a></li>
                <li><a href="#mission" className="text-gray-600 hover:text-medreminder-primary transition-colors">Missione</a></li>
                <li><a href="#" className="text-gray-600 hover:text-medreminder-primary transition-colors">Download</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Informazioni</h4>
              <ul className="space-y-3">
                <li><a href="#team" className="text-gray-600 hover:text-medreminder-primary transition-colors">Team</a></li>
                <li><a href="/privacy/informativa.pdf" className="text-gray-600 hover:text-medreminder-primary transition-colors">Privacy</a></li>
                <li><a href="/privacy/informativa.pdf" className="text-gray-600 hover:text-medreminder-primary transition-colors">Termini</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Contatti</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 text-medreminder-primary mr-2" />
                  <a href="mailto:medreminderai@gmail.com" className="text-gray-600 hover:text-medreminder-primary transition-colors">medreminderai@gmail.com</a>
                </li>
                <li className="flex items-center">
                  <ExternalLink className="h-4 w-4 text-medreminder-primary mr-2" />
                  <a href="https://itisdalmine.edu.it/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-medreminder-primary transition-colors">ITIS G. Marconi</a>
                </li>
                <li className="flex items-center">
                  <Instagram className="h-4 w-4 text-medreminder-primary mr-2" />
                  <a href="https://www.instagram.com/medreminderai/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-medreminder-primary transition-colors">Instagram</a>
                </li>
                <li className="flex items-center">
                  <Youtube className="h-4 w-4 text-medreminder-primary mr-2" />
                  <a href="https://www.youtube.com/@MedreminderAi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-medreminder-primary transition-colors">YouTube</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} MedReminderAI. Progetto sviluppato nell'ambito del programma JA Italia. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

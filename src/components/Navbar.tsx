
import React from 'react';
import { Button } from "@/components/ui/button";
import { Pill } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Pill className="h-8 w-8 text-medreminder-primary" strokeWidth={2.5} />
            <span className="ml-2 text-xl font-bold text-gray-800">MedReminderAI</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#features" className="text-gray-600 hover:text-medreminder-primary px-3 py-2 transition-colors">Features</a>
            <a href="#stats" className="text-gray-600 hover:text-medreminder-primary px-3 py-2 transition-colors">Stats</a>
            <a href="#mission" className="text-gray-600 hover:text-medreminder-primary px-3 py-2 transition-colors">Mission</a>
            <a href="#team" className="text-gray-600 hover:text-medreminder-primary px-3 py-2 transition-colors">Team</a>
            <Button className="bg-medreminder-primary hover:bg-medreminder-dark text-white">
              Download Now
            </Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-gray-600">
              <span className="sr-only">Open menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

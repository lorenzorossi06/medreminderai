
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import Mission from '@/components/Mission';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Index = () => {
  // Smooth scroll to features section
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        {/* Scroll down button */}
        <div className="flex justify-center -mt-10 relative z-10">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full bg-white shadow-md border-medreminder-primary hover:bg-medreminder-secondary"
            onClick={scrollToFeatures}
          >
            <ArrowDown className="h-5 w-5 text-medreminder-primary" />
            <span className="sr-only">Scroll Down</span>
          </Button>
        </div>
        
        <Features />
        <Stats />
        <Mission />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

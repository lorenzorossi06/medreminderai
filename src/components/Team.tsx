
import React from 'react';
import { User, Code, Palette } from 'lucide-react';

const teamMembers = [
  {
    icon: <User className="h-12 w-12 text-medreminder-primary" />,
    name: "Lorenzo Rossi",
    role: "CEO & Responsabile IT",
    description: "Guida la visione strategica del progetto e coordina le attività del team. Supervisiona l'architettura tecnologica e lo sviluppo tecnico dell'applicazione."
  },
  {
    icon: <Code className="h-12 w-12 text-medreminder-primary" />,
    name: "Adam Harid",
    role: "Sviluppo AI & Comunicazione",
    description: "La mente dietro l'Intelligenza Artificiale di MedReminderAI e responsabile delle strategie di comunicazione e marketing."
  },
  {
    icon: <Palette className="h-12 w-12 text-medreminder-primary" />,
    name: "Giovanni Brignoli",
    role: "UX/UI Design & Amministrazione",
    description: "Cura l'esperienza utente e il design visivo dell'applicazione, assicurando che sia intuitiva e accessibile per tutti."
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-medreminder-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Il Nostro Team</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Un team affiatato di studenti con passione e competenza
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm text-center transform transition hover:-translate-y-1 duration-300"
            >
              <div className="flex justify-center mb-4">
                {member.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-medreminder-primary font-medium mb-4">{member.role}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

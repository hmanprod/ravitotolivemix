import React from 'react';
import { ThumbsUp, FileText, Music, Share2 } from 'lucide-react';
import { theme } from '../constants/theme';

export function Steps() {
  const steps = [
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      title: "Like notre page et la page de Bolo",
      description: "Suivez MiBuzz et Bolo sur Facebook"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Inscription",
      description: "Inscrivez-vous sur https://forms.gle/E8HnR52cVXPxmAye6"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Créez votre mix",
      description: "4 minutes avec au moins une des musiques imposées"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Partagez",
      description: "Publiez sur Facebook avec le hashtag #LiveMixChallengeRavitoto et la mention de la page Mibuzz et Bolo"
    }
  ];

  return (
    <section style={{ backgroundColor: theme.colors.gray[900] }} className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Comment participer ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              style={{ backgroundColor: theme.colors.gray[800] }}
              className="p-6 rounded-lg text-center"
            >
              <div 
                style={{ backgroundColor: theme.colors.primary }}
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white"
              >
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
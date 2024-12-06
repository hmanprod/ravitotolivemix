import React from 'react';
import { Headphones, Trophy, Users } from 'lucide-react';
import { theme } from '../constants/theme';

export function Hero() {
  return (
    <div className="relative bg-black text-white py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?auto=format&fit=crop&q=80')",
        }}
      />
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span style={{ color: theme.colors.primary }}>Live Mix</span>{' '}
            <span>Challenge</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            <b>Utilise</b> au moins l'une des musiques ci-dessous dans ton <b>mix</b>. Montre ton talent de DJ et gagne un <b>abonnement FUVICLAN Créative</b>.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <Headphones style={{ color: theme.colors.primary }} />
              <span>+155 000 morceaux</span>
            </div>
            <div className="flex items-center gap-2">
              <Users style={{ color: theme.colors.primary }} />
              <span>+ 2 000 stems </span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy style={{ color: theme.colors.primary }} />
              <span>4 mois d'accès</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
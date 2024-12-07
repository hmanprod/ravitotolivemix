import React from 'react';
import { theme } from '../constants/theme';

export function Footer() {
  return (
    <footer style={{ backgroundColor: theme.colors.black }} className="text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <img src="https://mibuzz.mg/img/logo-bicolor.png" alt="MiBuzz" className="h-6" />
        </div>
        <p className="text-gray-400 mb-4">
          Deadline : 13 décembre 2024
        </p>
        <p className="text-2xl font-bold" style={{ color: theme.colors.primary }}>
          Soyez ouf. Soyez original. Soyez le meilleur. 🎧
        </p>
      </div>
    </footer>
  );
}
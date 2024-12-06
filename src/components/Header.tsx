import React from 'react';
import { theme } from '../constants/theme';

export function Header() {
  return (
    <header className="text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="https://mibuzz.mg/img/logo-bicolor.png" alt="MiBuzz" className="h-8" />
        </div>
      </div>
    </header>
  );
}
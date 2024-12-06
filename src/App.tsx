import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Steps } from './components/Steps';
import { TrackList } from './components/TrackList';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <TrackList />
      <Steps />
      <Footer />
    </div>
  );
}

export default App;
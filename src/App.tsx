/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Game from './components/Game';
import HowToBuy from './components/HowToBuy';
import Roadmap from './components/Roadmap';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';

export default function App() {
  const CONTRACT_ADDRESS = "6pyY6QAr4xgXmCVyrWMq6amXaLFsSz1qdPzZucqQpump";

  return (
    <div className="min-h-screen bg-zinc-950 text-stone-100 font-sans antialiased overflow-x-hidden selection:bg-gold-500/30 selection:text-gold-200">
      
      {/* Navbar Header */}
      <Navbar contractAddress={CONTRACT_ADDRESS} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero contractAddress={CONTRACT_ADDRESS} />

        {/* Story Section */}
        <Story />

        {/* Game Clicker Section */}
        <Game contractAddress={CONTRACT_ADDRESS} />

        {/* How To Buy Section */}
        <HowToBuy contractAddress={CONTRACT_ADDRESS} />

        {/* Roadmap Section */}
        <Roadmap />

        {/* Tokenomics Section */}
        <Tokenomics contractAddress={CONTRACT_ADDRESS} />
      </main>

      {/* Footer Section */}
      <Footer />

    </div>
  );
}

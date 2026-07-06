import React, { useState } from 'react';
import { Send, Copy, Check, Flame, ArrowDown, Zap } from 'lucide-react';

interface HeroProps {
  contractAddress: string;
}

export default function Hero({ contractAddress }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-[92vh] flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-[#0c0805] via-[#160f09] to-[#0c0805] text-white px-4 py-12">
      
      {/* Cinematic Golden Sunset Glow Backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-amber-600/10 rounded-full blur-[100px] md:blur-[160px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 left-10 w-[200px] h-[200px] bg-gold-600/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Epic Cinematic Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-6 md:space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 self-center lg:self-start bg-gold-950/80 border border-gold-500/40 text-gold-300 font-mono text-xs md:text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg shadow-gold-500/5">
            <Flame className="w-4 h-4 text-gold-400 animate-pulse animate-duration-1000" />
            The Ultimate Solana Power Meme
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
              <span className="block text-gold-100 drop-shadow-sm">THE LEGENDARY</span>
              <span className="block gold-text-gradient gold-glow-animation">CRYPTO BULL</span>
            </h1>
            <p className="font-mono text-gold-400/90 text-lg md:text-xl font-bold tracking-widest uppercase">
              Ticker: $CZBULL • Born on Solana
            </p>
          </div>

          {/* Description */}
          <p className="font-sans text-stone-300 text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            The world knew him as the Emperor of the Binance Realms. Now, <span className="text-gold-300 font-bold">CZ returns unchained</span> to ride the wildest, fastest bull of them all—the Solana Bull. No cages, no limits, pure hyper-speed decentralized dominance. Are you ready to ride with the true king of crypto?
          </p>

          {/* Contract Address Callout Card */}
          <div className="bg-[#1a110a]/90 border-2 border-gold-800/50 rounded-2xl p-4 md:p-5 max-w-xl mx-auto lg:mx-0 shadow-2xl shadow-black/80 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col text-left w-full">
              <span className="font-mono text-[10px] text-gold-500 font-bold uppercase tracking-widest">Official Contract Address</span>
              <span className="font-mono text-xs text-gold-100 break-all select-all font-semibold select-none pr-2">
                {contractAddress}
              </span>
            </div>
            <button
              onClick={handleCopy}
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-gold-900/60 hover:bg-gold-800/80 border border-gold-500/50 text-gold-200 font-mono text-sm px-5 py-3 rounded-xl transition-all duration-300 cursor-pointer hover:scale-102 active:scale-98"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-gold-400" />
                  <span>Copy CA</span>
                </>
              )}
            </button>
          </div>

          {/* Core Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <a
              href="https://pump.fun" /* Standard pump.fun landing link or custom CA link once created */
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-stone-950 font-sans font-black text-base px-8 py-4 rounded-xl shadow-lg shadow-gold-500/30 transition-all duration-300 hover:scale-103 hover:shadow-gold-400/50 transform active:scale-98"
            >
              <Zap className="w-5 h-5 fill-current text-stone-950 animate-bounce" />
              BUY $CZBULL ON PUMP.FUN
            </a>

            <button
              onClick={() => scrollToSection('mini-game')}
              className="flex items-center justify-center gap-2 bg-stone-900/80 hover:bg-stone-800 border-2 border-gold-600/40 hover:border-gold-400 text-gold-300 font-sans font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:scale-103 hover:text-gold-200"
            >
              Play Bull Run Game
              <ArrowDown className="w-4 h-4 text-gold-500 animate-bounce" />
            </button>
          </div>

        </div>

        {/* Right Side: Magnificent Cinematic Main Graphic */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          
          {/* Main Visual Frame */}
          <div className="relative w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden border-4 border-gold-500/60 shadow-[0_0_50px_rgba(218,165,32,0.25)] bg-[#110c08] transition-all duration-500 hover:border-gold-400 hover:shadow-[0_0_70px_rgba(218,165,32,0.4)] group">
            
            {/* The absolute hero image */}
            <img 
              src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/photo_2026-07-06_15-06-16.jpg?v=1783339592" 
              alt="CZ Riding the Mighty Crypto Bull" 
              className="w-full h-auto object-cover transform duration-700 group-hover:scale-105"
            />

            {/* Cinematic Overlay details */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0805] via-transparent to-transparent opacity-80 pointer-events-none"></div>

            {/* Bottom floating details */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md rounded-xl p-3 border border-gold-800/40 text-left">
              <p className="font-serif text-sm font-bold text-gold-300 tracking-wide uppercase">
                "CZ: The Crypto Bull" Official Artwork
              </p>
              <p className="font-sans text-xs text-stone-300 mt-1">
                A masterpiece representing the ultimate power of Decentralization & Solana speed.
              </p>
            </div>
          </div>

          {/* Golden floating particles in background style */}
          <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gold-400/20 rounded-full blur-xl pointer-events-none animate-pulse"></div>
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-amber-500/20 rounded-full blur-xl pointer-events-none animate-pulse"></div>

        </div>

      </div>

      {/* Decorative Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0c0805] to-transparent z-10 pointer-events-none"></div>
    </div>
  );
}

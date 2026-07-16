import React, { useState } from 'react';
import { Wallet, Coins, Search, Zap, Copy, Check } from 'lucide-react';

interface HowToBuyProps {
  contractAddress: string;
}

export default function HowToBuy({ contractAddress }: HowToBuyProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    {
      num: "01",
      icon: <Wallet className="w-6 h-6 text-gold-400" />,
      title: "CREATE A WALLET",
      desc: "Download Phantom or Solflare wallet from the app store, Google Play, or browser extension store. Secure your recovery phrase safely!"
    },
    {
      num: "02",
      icon: <Coins className="w-6 h-6 text-gold-400" />,
      title: "GET SOME SOLANA ($SOL)",
      desc: "Buy SOL on exchanges like Binance, Coinbase, or Kraken. Withdraw the SOL directly to your newly created Solana wallet address."
    },
    {
      num: "03",
      icon: <Search className="w-6 h-6 text-gold-400" />,
      title: "CONNECT TO PUMP.FUN",
      desc: "Go to pump.fun, connect your wallet, and paste the official $catbull contract address below in the search bar to find the token page."
    },
    {
      num: "04",
      icon: <Zap className="w-6 h-6 text-gold-400 text-gold-glow" />,
      title: "SWAP SOL FOR $catbull",
      desc: "Choose the amount of SOL you want to swap, click 'Buy', and confirm the transaction. Hold tight and let CatBull lead the stampede!"
    }
  ];

  return (
    <section id="how-to-buy" className="relative bg-[#110c08] py-20 px-4 border-t border-b border-gold-800/40 overflow-hidden text-white">
      
      {/* Ambient background lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs text-gold-400 font-bold uppercase tracking-widest bg-gold-950/60 px-3 py-1.5 rounded-full border border-gold-800/30">
            Guide Book
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-black text-gold-100 uppercase tracking-tight">
            How to Buy on <span className="gold-text-gradient">Pump.fun</span>
          </h2>
          <p className="font-sans text-stone-300 text-sm md:text-base">
            Follow these 4 simple, secure steps to convert your SOL into high-energy $catbull power.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="bg-gradient-to-b from-[#18110b] to-[#120a05] border border-gold-900/40 rounded-2xl p-6 flex flex-col justify-between shadow-lg relative group hover:border-gold-400 duration-300 transform hover:-translate-y-1.5"
            >
              {/* Card Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="bg-gold-950/80 p-3 rounded-xl border border-gold-800/40 group-hover:bg-gold-900 transition-colors">
                    {step.icon}
                  </div>
                  <span className="font-serif text-3xl font-black text-gold-800/40 group-hover:text-gold-500/30 transition-colors">
                    {step.num}
                  </span>
                </div>
                
                <h3 className="font-serif text-lg font-bold text-gold-200 tracking-wide uppercase">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-stone-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Step indicator arrow */}
              {idx < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3.5 -translate-y-1/2 z-20 bg-gold-900 border border-gold-700/50 rounded-full p-1 text-gold-400">
                  <svg className="w-3.5 h-3.5 rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action and Address Display */}
        <div className="bg-[#1c130b] border border-gold-800/60 rounded-3xl p-6 md:p-8 max-w-3xl mx-auto text-center space-y-6 shadow-2xl">
          <div className="space-y-2">
            <p className="font-serif text-lg font-bold text-gold-300 uppercase">
              Official Verified Contract Address
            </p>
            <p className="font-sans text-xs text-stone-400">
              Always verify the CA matches exactly. Never buy fake copies!
            </p>
          </div>

          <div className="bg-black/60 border border-gold-900/60 rounded-xl px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4 max-w-xl mx-auto">
            <span className="font-mono text-xs text-gold-200 break-all select-all pr-2">
              {contractAddress}
            </span>
            <button 
              onClick={handleCopy}
              className="flex items-center gap-2 bg-gold-950 hover:bg-gold-900 border border-gold-700/50 text-gold-300 font-mono text-xs px-4 py-2.5 rounded-lg shrink-0 w-full md:w-auto justify-center cursor-pointer transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY CA</span>
                </>
              )}
            </button>
          </div>

          <div>
            <a 
              href="https://pump.fun/coin/xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-stone-950 font-sans font-black text-base px-8 py-4 rounded-xl shadow-lg shadow-gold-500/20 hover:shadow-gold-400/40 transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
            >
              <Zap className="w-5 h-5 fill-current" />
              SWAP NOW ON PUMP.FUN
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}

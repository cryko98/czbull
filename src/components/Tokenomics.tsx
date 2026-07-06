import React, { useState } from 'react';
import { Flame, Copy, Check, PieChart, Info, ShieldCheck, Zap } from 'lucide-react';

interface TokenomicsProps {
  contractAddress: string;
}

export default function Tokenomics({ contractAddress }: TokenomicsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = [
    {
      label: "TOTAL SUPPLY",
      value: "1,000,000,000",
      desc: "One Billion $CZBULL tokens, matching the cosmic balance of decentralization."
    },
    {
      label: "BUY / SELL TAX",
      value: "0% / 0%",
      desc: "Zero transaction friction. Pure, unfiltered CZ energy flowing seamlessly."
    },
    {
      label: "LIQUIDITY STATUS",
      value: "100% BURNT & LOCKED",
      desc: "Slick liquidity protocol locked instantly inside pump.fun bonding mechanics."
    },
    {
      label: "FAIR LAUNCH",
      value: "100% FOR THE COMMUNITY",
      desc: "Zero team tokens. Zero pre-sales. Everyone buys at the same starting curve."
    }
  ];

  return (
    <section id="tokenomics" className="relative bg-[#110c08] py-20 px-4 border-t border-b border-gold-800/40 overflow-hidden text-white">
      
      {/* Light highlights */}
      <div className="absolute top-1/2 left-10 w-[300px] h-[300px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs text-gold-400 font-bold uppercase tracking-widest bg-gold-950/60 px-3 py-1.5 rounded-full border border-gold-800/30">
            Gold Stats
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-black text-gold-100 uppercase tracking-tight">
            TOKENOMICS & SECURITY
          </h2>
          <p className="font-sans text-stone-300 text-sm md:text-base">
            No tricks, no hidden wallets, and absolutely no tax. Learn why riding the $CZBULL Bull is mathematically SAFU.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-gradient-to-b from-[#18110b] to-[#120a05] border border-gold-900/40 rounded-2xl p-6 flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-4">
                <span className="font-mono text-[10px] text-gold-500 font-bold uppercase tracking-wider block">
                  {stat.label}
                </span>
                <p className="font-serif text-2xl md:text-3xl font-black text-gold-300 tracking-wide">
                  {stat.value}
                </p>
              </div>
              <p className="font-sans text-xs text-stone-400 mt-4 leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Distribution Details Bar */}
        <div className="bg-[#1c130b] border border-gold-800/60 rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual breakdown bar */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-serif text-lg md:text-xl font-bold text-gold-200 tracking-wide uppercase flex items-center gap-2">
                <PieChart className="w-5 h-5 text-gold-400" />
                Token Distribution Breakdown
              </h3>

              <div className="space-y-4">
                {/* 100% fair launch display */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-stone-300">Community Fair Launch (Pump.fun)</span>
                    <span className="text-gold-400 font-bold">100%</span>
                  </div>
                  <div className="w-full h-4 bg-black/60 rounded-full overflow-hidden border border-gold-900/40">
                    <div className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-amber-500 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-1.5 opacity-40">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-stone-400">Team / Founder Reserve</span>
                    <span className="text-stone-500 font-bold">0%</span>
                  </div>
                  <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden border border-stone-900">
                    <div className="h-full bg-stone-700 w-0"></div>
                  </div>
                </div>

                <div className="space-y-1.5 opacity-40">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-stone-400">Venture Capitalists / Pre-sale</span>
                    <span className="text-stone-500 font-bold">0%</span>
                  </div>
                  <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden border border-stone-900">
                    <div className="h-full bg-stone-700 w-0"></div>
                  </div>
                </div>
              </div>

              {/* Informative tips */}
              <div className="flex items-start gap-2.5 bg-gold-950/40 border border-gold-800/40 rounded-xl p-3 text-stone-400">
                <Info className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-[11px] font-sans leading-relaxed">
                  We believe in organic decentralization. Launching on pump.fun means zero venture capitals can dump on you, zero founders have secret reserves, and the contract is permanently renounced and SAFU from day one.
                </span>
              </div>
            </div>

            {/* Verified contract block */}
            <div className="lg:col-span-5 bg-[#120a05] border border-gold-900/40 rounded-2xl p-6 text-center space-y-4">
              <div className="inline-flex items-center gap-1 bg-emerald-950 text-emerald-400 border border-emerald-500/30 rounded-full px-3 py-1 text-xs font-mono font-bold uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                VERIFIED SOLANA CONTRACT
              </div>
              
              <div className="space-y-1">
                <p className="font-serif text-sm font-bold text-gold-200 uppercase">
                  Contract Address
                </p>
                <p className="font-mono text-[11px] text-stone-400 break-all select-all">
                  {contractAddress}
                </p>
              </div>

              <button 
                onClick={handleCopy}
                className="w-full flex items-center justify-center gap-2 bg-gold-950 hover:bg-gold-900 border border-gold-700/50 text-gold-300 font-mono text-xs py-3 rounded-xl cursor-pointer transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">COPIED SUCCESSFULLY</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY CONTRACT ADDRESS</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}

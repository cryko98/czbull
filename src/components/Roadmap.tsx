import React from 'react';
import { Flame, ShieldCheck, HelpCircle, Trophy, Sparkles, TrendingUp } from 'lucide-react';

export default function Roadmap() {
  const phases = [
    {
      num: "PHASE 1",
      title: "4 (THE GENESIS PROTOCOL)",
      tagline: "Unchained launch & absolute SAFU protocol initiation",
      icon: <Sparkles className="w-5 h-5 text-gold-400" />,
      items: [
        "Stealth launch on pump.fun with 100% liquidity locked & burnt.",
        "Initiate extreme golden meme takeover across Telegram channels.",
        "Spam '4' in every chat to activate the ancient CZ blessings.",
        "Blast through the bonding curve and successfully list on Raydium.",
        "Secure first 1,000 diamond hand riders."
      ]
    },
    {
      num: "PHASE 2",
      title: "THE BULL STAMPEDE",
      tagline: "Viral velocity, market trends, and banking panic",
      icon: <TrendingUp className="w-5 h-5 text-gold-400" />,
      items: [
        "Shatter $1,000,000 Market Cap target within the first sunset.",
        "Trend #1 on DexScreener, DexTools, and Solana Trending list.",
        "Community 'CZ Riding a Bull' photoshop and video editing tournament.",
        "Produce customized Solana sticker packs and high-quality memes.",
        "Coingecko and CoinMarketCap speedrun applications."
      ]
    },
    {
      num: "PHASE 3",
      title: "THE SAFU ASCENDANCY",
      tagline: "Mainstream awareness & tweet manifestations",
      icon: <ShieldCheck className="w-5 h-5 text-gold-400" />,
      items: [
        "Reach $50M Market Cap causing global banker crying noises.",
        "Induce high-grade viral FOMO by targeting premium crypto influencers.",
        "Infiltrate CZ's replies with the masterpiece painting of him on the Bull.",
        "CZ posts a tweet containing the number '4' or a bull icon, causing massive green candles.",
        "Establish 'The Crypto Bull DAO' for community governance on memes."
      ]
    },
    {
      num: "PHASE 4",
      title: "INTERGALACTIC CONQUEST",
      tagline: "Parabolic absolute status & global dominance",
      icon: <Trophy className="w-5 h-5 text-gold-400" />,
      items: [
        "Shatter $1,000,000,000 Market Cap - absolute parabolic state.",
        "Send a high-definition copy of our main CZ Bull image into orbit.",
        "CZ is nominated as the supreme president of decentralized systems.",
        "Replace standard fiat money globally with $CZBULL golden stickers.",
        "Retire on a beautiful island, riding real bulls through clear tropical oceans."
      ]
    }
  ];

  return (
    <section id="roadmap" className="relative bg-gradient-to-b from-[#0c0805] via-[#160f09] to-[#0c0805] py-20 px-4 text-white overflow-hidden">
      
      {/* Dynamic decorative visual elements */}
      <div className="absolute top-10 left-1/3 w-[300px] h-[300px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-10 w-[200px] h-[200px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs text-gold-400 font-bold uppercase tracking-widest bg-gold-950/60 px-3 py-1.5 rounded-full border border-gold-800/30">
            Meme Progression
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-black text-gold-100 uppercase tracking-tight">
            THE SAFU ROADMAP
          </h2>
          <p className="font-sans text-stone-300 text-sm md:text-base">
            Witness the ultimate manifestation phases of $CZBULL. Fasten your seatbelts, hold your golden coins, and get ready for the stampede.
          </p>
        </div>

        {/* Alternate Timeline Layout */}
        <div className="relative border-l-2 border-gold-800/50 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:h-full md:before:w-0.5 md:before:bg-gold-800/40 md:before:-translate-x-1/2 space-y-12">
          
          {phases.map((phase, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx}
                className={`relative flex flex-col md:flex-row items-stretch gap-8 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node Point */}
                <div className="absolute left-[-25px] md:left-1/2 md:-translate-x-1/2 top-4 w-12 h-12 rounded-full bg-[#1c130b] border-2 border-gold-500 flex items-center justify-center shadow-lg shadow-gold-500/15 z-20">
                  {phase.icon}
                </div>

                {/* Content Card Side */}
                <div className="w-full md:w-[46%] ml-6 md:ml-0">
                  <div className="bg-gradient-to-b from-[#18110b] to-[#120a05] border border-gold-900/40 rounded-2xl p-6 md:p-8 hover:border-gold-500/60 duration-300 transition-colors shadow-xl">
                    <span className="font-mono text-xs text-gold-400 font-bold tracking-widest block mb-1">
                      {phase.num}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl font-black text-gold-100 uppercase tracking-wide">
                      {phase.title}
                    </h3>
                    <p className="font-mono text-xs text-gold-500/80 italic mb-4">
                      {phase.tagline}
                    </p>

                    <div className="h-px bg-gold-900/40 mb-4"></div>

                    <ul className="space-y-3">
                      {phase.items.map((item, i_idx) => (
                        <li key={i_idx} className="flex gap-2.5 items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0 mt-2"></div>
                          <span className="font-sans text-xs md:text-sm text-stone-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty Side for visual spacing on large monitors */}
                <div className="hidden md:block w-[46%]"></div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

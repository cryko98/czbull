import React from 'react';
import { Flame, ShieldCheck, Quote, Sparkles } from 'lucide-react';

export default function Story() {
  return (
    <section id="story" className="relative bg-gradient-to-b from-[#0c0805] via-[#160f09] to-[#0c0805] py-20 px-4 text-white overflow-hidden">
      
      {/* Decorative details in background */}
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[200px] h-[200px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Big Epic Header & Gold Callout */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs text-gold-500 font-bold uppercase tracking-widest block">
              Chapter I: The Unchained return
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black leading-none text-gold-100">
              THE STORY <br/>
              OF <span className="gold-text-gradient font-black">CZ</span>
            </h2>
            <p className="font-mono text-xs text-stone-400 border-l border-gold-800 pl-3 leading-relaxed">
              "If you can't hold, you won't be rich. But if you hold CZ, the Solana bull will carry you to the heavens."
            </p>

            {/* Achievement / Stat Card */}
            <div className="bg-[#1a110a] border border-gold-900/60 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-gold-400" />
                <span className="font-serif text-sm font-bold text-gold-200 tracking-wide uppercase">
                  100% DECENTRALIZED POWER
                </span>
              </div>
              <p className="font-sans text-xs text-stone-300 leading-relaxed">
                CZ is not just an influencer; he is the foundational spirit of crypto. By launching $CZBULL on Solana, we merge the absolute authority of the King of Crypto with the absolute velocity of the fastest network on Earth.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Body Text */}
          <div className="lg:col-span-7 space-y-6 text-stone-300 font-sans text-base leading-relaxed">
            
            <div className="relative">
              <Quote className="absolute -top-6 -left-6 w-12 h-12 text-gold-950 fill-current opacity-40 z-0" />
              <p className="relative z-10 font-medium text-gold-100 text-lg md:text-xl italic leading-relaxed">
                "They tried to slow down the master. They thought a physical perimeter could contain digital dominance. They forgot that the spirit of the Bull knows no bounds."
              </p>
            </div>

            <p>
              For years, <strong>Changpeng Zhao (CZ)</strong> reigned supreme as the Emperor of the Binance Realms, constructing a monumental crypto fortress that processed trillions in volume. He withstood regulatory thunderstorms, media hurricanes, and market earthquakes. He became a titan so colossal that standard charts could barely measure his presence.
            </p>

            <p>
              But a true warrior of the blockchain is never idle. After taking a legendary sabbatical, CZ returned. But he didn't return on a standard private jet or a corporate helicopter. Instead, he surfaced in the water-splashed, sunset-soaked canyons of Solana, taming and riding a colossal, black, roaring <strong>Crypto Bull</strong>.
            </p>

            <div className="bg-[#120a05] border border-gold-800/40 rounded-2xl p-5 my-6 flex gap-4 items-start">
              <div className="bg-gold-950 p-2 rounded-xl text-gold-400 shrink-0 mt-1">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-gold-300 uppercase tracking-wide">
                  Solana is SAFU
                </h4>
                <p className="text-xs text-stone-400 mt-1">
                  Solana is known for speed, memes, and wild volatility. CZ is known for absolute trust, security, and holding the line. By joining forces on Solana, the meme landscape gets its ultimate anchor.
                </p>
              </div>
            </div>

            <p>
              The message is crystal clear: <strong>CZ is such a giant in the crypto space that he effortlessly commands any chain he steps on.</strong> The $CZBULL token is more than a memecoin. It is a symbol of financial independence, golden conviction, and absolute power. It is the official flag of the Solana Bull Run, guided by the most reliable hands in crypto history.
            </p>

            <p className="font-semibold text-gold-400 font-serif">
              Join the herd. Grab your $CZBULL, mount the bull, and let's run down the naysayers together.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

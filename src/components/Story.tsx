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
              Chapter I: The Claw and the Horn
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black leading-none text-gold-100">
              THE STORY <br/>
              OF <span className="gold-text-gradient font-black">CATBULL</span>
            </h2>
            <p className="font-mono text-xs text-stone-400 border-l border-gold-800 pl-3 leading-relaxed">
              "If you can't handle the scratch, you don't deserve the horns. CatBull is here to claw up the charts and stampede through the bears."
            </p>

            {/* Achievement / Stat Card */}
            <div className="bg-[#1a110a] border border-gold-900/60 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-gold-400" />
                <span className="font-serif text-sm font-bold text-gold-200 tracking-wide uppercase">
                  UNSTOPPABLE HYBRID GENETICS
                </span>
              </div>
              <p className="font-sans text-xs text-stone-300 leading-relaxed">
                A cat has 9 lives, and a bull has infinite stamina. Combine them, and you get CatBull—a legendary creature mathematically optimized for eternal bull runs on Solana. It merges the hyper-speed reflexes of a feline with the horn-thrusting dominance of the bovine herd.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Body Text */}
          <div className="lg:col-span-7 space-y-6 text-stone-300 font-sans text-base leading-relaxed">
            
            <div className="relative">
              <Quote className="absolute -top-6 -left-6 w-12 h-12 text-gold-950 fill-current opacity-40 z-0" />
              <p className="relative z-10 font-medium text-gold-100 text-lg md:text-xl italic leading-relaxed">
                "In the ancient digital canyons of Solana, the elders spoke of a beast with the razor-sharp reflexes of a kitten and the heavy-hooved power of a massive bull. They called it CatBull, the bringer of eternal green candles."
              </p>
            </div>

            <p>
              For eons, memecoins were hopelessly divided: some worshipped playful dogs, others held onto cute cats, and some looked to the roaring bulls of the traditional markets. The constant rivalry left portfolios bruised, traders weary, and communities fragmented. The market screamed for a ultimate savior—a creature with enough agility to dodge any FUD, and enough mass to trample any bear.
            </p>

            <p>
              Then, in a blinding flash of Solana-green lightning, <strong>CatBull</strong> was born. Having the soft ears, whiskers, and lightning reflexes of a sleek cat, but the raw, muscular chest and golden horns of a colossal bull, CatBull is the absolute apex predator of the meme ecosystem. He doesn't just chase laser pointers; he chases liquidations. He doesn't just graze in fields; he stampedes directly to the moon.
            </p>

            <div className="bg-[#120a05] border border-gold-800/40 rounded-2xl p-5 my-6 flex gap-4 items-start">
              <div className="bg-gold-950 p-2 rounded-xl text-gold-400 shrink-0 mt-1">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-gold-300 uppercase tracking-wide">
                  Double Luck, Triple Momentum
                </h4>
                <p className="text-xs text-stone-400 mt-1">
                  Cats always land on their feet, and bulls always charge upward. By holding $catbull, you are backed by double the protective feline luck and triple the upward bovine momentum on the fastest blockchain on Earth.
                </p>
              </div>
            </div>

            <p>
              The message is crystal clear: <strong>$catbull is here to unite the cat meme lovers and the bull run zealots under one single, gloriously horned banner.</strong> The $catbull token is more than a memecoin. It is a symbol of financial agility, heavy conviction, and extreme power. It is the official flag of the Solana super-cycle.
            </p>

            <p className="font-semibold text-gold-400 font-serif">
              Join the herd of cats. Grab your $catbull, feel the roar of the engines, and let's run down the bears together.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

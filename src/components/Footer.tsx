import React from 'react';
import { Send, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#090604] border-t border-gold-900/40 text-stone-400 py-12 px-4 relative overflow-hidden">
      
      {/* Decorative light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-gold-600/5 rounded-t-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center space-y-8">
        
        {/* Core details */}
        <div className="flex flex-col items-center text-center space-y-3">
          <img 
            src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/photo_2026-07-06_15-06-16.jpg?v=1783339592" 
            alt="The Crypto Bull Logo" 
            className="w-12 h-12 rounded-full border border-gold-400 object-cover shadow-lg shadow-gold-500/10 mb-2"
          />
          <h3 className="font-serif text-lg md:text-xl font-bold tracking-wider text-gold-300">
            THE CRYPTO BULL • $CZBULL
          </h3>
          <p className="font-sans text-xs text-stone-500 max-w-md">
            Unleashing the absolute, unchained power of the legendary Changpeng Zhao on the high-frequency Solana blockchain.
          </p>
        </div>

        {/* Telegram invite bar */}
        <div className="bg-[#140e08] border border-gold-900/40 rounded-2xl p-5 text-center max-w-lg w-full space-y-4 shadow-xl">
          <p className="font-serif text-xs font-bold text-gold-400 uppercase tracking-widest">
            Join the Sovereign Herd Today
          </p>
          <p className="font-sans text-xs text-stone-300">
            Be part of the community building memes, conquering regulatory FUD, and riding the golden bull alongside thousands of like-minded chads.
          </p>
          <div className="pt-2">
            <a 
              href="https://t.me/czthecryptobull"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-gold-950 font-sans font-black text-xs px-6 py-3 rounded-full transition-all duration-300 shadow-md shadow-gold-600/10"
            >
              <Send className="w-4 h-4 fill-current" />
              JOIN TELEGRAM COMMUNITY
            </a>
          </div>
        </div>

        {/* Separator line */}
        <div className="w-full h-px bg-gold-900/30 max-w-2xl"></div>

        {/* Disclaimer section */}
        <div className="max-w-3xl text-center space-y-3 px-4">
          <h4 className="font-mono text-[10px] text-gold-500 font-bold uppercase tracking-widest">
            Disclaimer & Educational Notice
          </h4>
          <p className="font-sans text-[11px] text-stone-500 leading-relaxed">
            $CZBULL (The Crypto Bull) is a memecoin created strictly for amusement, entertainment, and digital community assembly. It has absolutely no association or official endorsement from Changpeng Zhao (CZ) himself. The token carries no utility, promises no financial return, contains zero guarantees, and represents zero intrinsic monetary value. Cryptocurrencies, especially Solana memecoins, are subject to extreme volatility. Please trade responsibly, perform your own detailed homework, and never allocate funds you cannot afford to completely lose. SAFU is a lifestyle, not financial advice.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-between w-full max-w-5xl text-xs text-stone-600 pt-6 border-t border-gold-950/40">
          <p className="font-mono">
            &copy; {currentYear} The Crypto Bull ($CZBULL). Created for the decentralized herd.
          </p>
          <p className="flex items-center gap-1 font-mono">
            <span>Powered by Solana Liquidity</span>
            <Heart className="w-3.5 h-3.5 text-rose-800 fill-current" />
          </p>
        </div>

      </div>

    </footer>
  );
}

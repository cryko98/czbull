import React, { useState } from 'react';
import { Send, Copy, Check, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  contractAddress: string;
}

export default function Navbar({ contractAddress }: NavbarProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0c0805]/85 backdrop-blur-md border-b border-gold-800/40 px-4 py-3 md:px-8 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <img 
            src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/photo_2026-07-06_15-06-16.jpg?v=1783339592" 
            alt="The Crypto Bull Logo" 
            className="w-10 h-10 rounded-full border-2 border-gold-400 object-cover shadow-lg shadow-gold-500/20"
          />
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-bold tracking-wider text-gold-400">
              THE CRYPTO BULL
            </span>
            <span className="font-mono text-xs text-gold-500/80 font-bold tracking-widest">
              TICKER: $CZBULL
            </span>
          </div>
        </div>

        {/* Contract Address Section */}
        <div className="hidden lg:flex items-center gap-2 bg-gold-950/60 border border-gold-800/40 rounded-full px-4 py-1.5 max-w-md">
          <span className="font-mono text-xs text-gold-200/60">CA:</span>
          <span className="font-mono text-xs text-gold-100 truncate max-w-[200px] md:max-w-[240px]">
            {contractAddress}
          </span>
          <button 
            onClick={handleCopy}
            className="text-gold-400 hover:text-gold-200 p-1 rounded-full transition-colors relative group"
            title="Copy Contract Address"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-400 animate-scale-up" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black text-[10px] text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {copied ? 'Copied!' : 'Copy CA'}
            </span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Mobile Copy Indicator / Fallback button */}
          <button 
            onClick={handleCopy}
            className="lg:hidden flex items-center gap-2 bg-gold-950/60 border border-gold-800/40 rounded-full px-3 py-1.5 text-xs text-gold-200 font-mono"
          >
            <span className="truncate max-w-[100px]">{contractAddress}</span>
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-gold-400" />}
          </button>

          <a 
            href="https://t.me/TheCryptoBull_CZ" /* Placeholder link that user can update later */
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-gold-950 font-sans font-bold text-sm px-5 py-2 rounded-full transition-all duration-300 shadow-md shadow-gold-600/20 hover:shadow-lg hover:shadow-gold-400/40 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Send className="w-4 h-4 fill-current" />
            Join Telegram
          </a>
          
          <div className="hidden md:flex items-center gap-1 bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 rounded-full px-3 py-1 text-xs font-mono font-bold">
            <ShieldCheck className="w-3.5 h-3.5 animate-pulse" />
            100% SAFU
          </div>
        </div>

      </div>
    </nav>
  );
}

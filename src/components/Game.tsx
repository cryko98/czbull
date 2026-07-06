import React, { useState, useEffect, useRef } from 'react';
import { Trophy, Zap, Flame, ShieldAlert, Sparkles, Volume2, VolumeX, ShieldCheck } from 'lucide-react';

interface GameProps {
  contractAddress: string;
}

interface FloatingText {
  id: number;
  x: number;
  y: number;
  text: string;
}

interface SplashEffect {
  id: number;
  x: number;
  y: number;
}

export default function Game({ contractAddress }: GameProps) {
  const [clicks, setClicks] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(10); // in MPH
  const [fudActive, setFudActive] = useState<boolean>(false);
  const [fudText, setFudText] = useState<string>('');
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [floatingTexts, setFloatingTexts] = useState<FloatingText[]>([]);
  const [splashes, setSplashes] = useState<SplashEffect[]>([]);
  const [activeTier, setActiveTier] = useState<string>('Solana Rookie');
  const [multiplier, setMultiplier] = useState<number>(1);
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Initialize Web Audio API on first interaction if unmuted
  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtxClass) {
        audioCtxRef.current = new AudioCtxClass();
      }
    }
  };

  const playSynthesizedSound = (type: 'click' | 'fud' | 'milestone') => {
    if (isMuted) return;
    try {
      initAudio();
      const ctx = audioCtxRef.current;
      if (!ctx || ctx.state === 'suspended') return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (type === 'click') {
        // High pitched short synth blip
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.1);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
      } else if (type === 'fud') {
        // Low scary warning sound
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.linearRampToValueAtTime(80, now + 0.3);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === 'milestone') {
        // Rising arpeggio of joy
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.08, ); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
        osc.frequency.setValueAtTime(1046.50, now + 0.24); // C6
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
      }
    } catch (e) {
      console.warn("Audio Context error:", e);
    }
  };

  // Toggle sound
  const handleToggleSound = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    if (!nextMute) {
      // Prompt initialization of Web Audio
      if (!audioCtxRef.current) {
        initAudio();
      }
      if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
    }
  };

  // Click handler
  const handleBullClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const clickedIncrement = 1 * multiplier;
    setClicks(prev => prev + clickedIncrement);
    setSpeed(prev => Math.min(prev + (fudActive ? 0.5 : 1.5), 1000));

    // Synthesis sound
    playSynthesizedSound('click');

    // Float text effect
    const newText: FloatingText = {
      id: Date.now() + Math.random(),
      x,
      y,
      text: `+${clickedIncrement} $CZBULL`
    };
    setFloatingTexts(prev => [...prev, newText]);

    // Splash circle effect
    const newSplash: SplashEffect = {
      id: Date.now() + Math.random(),
      x,
      y
    };
    setSplashes(prev => [...prev, newSplash]);

    // Trigger potential FUD alerts randomly (3% chance per click when clicks > 10, no FUD active)
    if (clicks > 15 && !fudActive && Math.random() < 0.03) {
      triggerFud();
    }
  };

  // Triggering random FUD to conquer
  const triggerFud = () => {
    const fuds = [
      "Gary is looking through his binoculars!",
      "Whale sells 20 SOL of paper hands panic!",
      "A fake influencer claims $CZ is 'too SAFU'!",
      "Traditional banker says Bitcoin is just bubble tea!",
      "Your friend sells at the bottom for lunch money!"
    ];
    const randomFud = fuds[Math.floor(Math.random() * fuds.length)];
    setFudText(randomFud);
    setFudActive(true);
    setMultiplier(0.5); // slows down rewards temporarily
    playSynthesizedSound('fud');
  };

  const conquerFud = () => {
    setFudActive(false);
    setMultiplier(2); // double rewards for courage
    setSpeed(prev => Math.min(prev + 50, 1000));
    playSynthesizedSound('milestone');

    // show victory floating text
    const victoryText: FloatingText = {
      id: Date.now() + Math.random(),
      x: 180,
      y: 120,
      text: "FUD SMASHED! 2X PUMP MULTIPLIER UNLOCKED!"
    };
    setFloatingTexts(prev => [...prev, victoryText]);

    // reset multiplier back to normal in 5 seconds
    setTimeout(() => {
      setMultiplier(1);
    }, 5000);
  };

  // Handle achievement check
  useEffect(() => {
    const achievementsToUnlock: { clicks: number; title: string }[] = [
      { clicks: 10, title: "10 Clicks: Golden Hoof Initiation" },
      { clicks: 50, title: "50 Clicks: Water Splasher Elite" },
      { clicks: 150, title: "150 Clicks: CZ's Favorite Bull Rider" },
      { clicks: 400, title: "400 Clicks: 100% SAFU Certified Holder" },
      { clicks: 1000, title: "1000 Clicks: Interstellar Bull Overlord" }
    ];

    achievementsToUnlock.forEach(ach => {
      if (clicks >= ach.clicks && !unlockedAchievements.includes(ach.title)) {
        setUnlockedAchievements(prev => [...prev, ach.title]);
        playSynthesizedSound('milestone');
      }
    });

    // Update Rider Tier based on clicks
    if (clicks >= 1000) {
      setActiveTier('Solana Emperor of SAFU 👑');
    } else if (clicks >= 400) {
      setActiveTier('Legendary Bull Tamer 🦁');
    } else if (clicks >= 150) {
      setActiveTier('DexScreener Trendsetter 📈');
    } else if (clicks >= 50) {
      setActiveTier('Solana Chad 💎');
    } else {
      setActiveTier('Solana Rookie 🍼');
    }
  }, [clicks]);

  // Clean up floating text and splashes
  useEffect(() => {
    const timer = setInterval(() => {
      setFloatingTexts(prev => prev.filter(t => Date.now() - t.id < 1500));
      setSplashes(prev => prev.filter(s => Date.now() - s.id < 800));
    }, 200);
    return () => clearInterval(timer);
  }, []);

  // Natural speed decay over time
  useEffect(() => {
    const decay = setInterval(() => {
      setSpeed(prev => Math.max(prev - 2, 10));
    }, 300);
    return () => clearInterval(decay);
  }, []);

  return (
    <div id="mini-game" className="relative bg-[#110c08] py-16 px-4 border-t border-b border-gold-800/40 overflow-hidden text-white">
      
      {/* Light highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-gold-950/80 border border-gold-500/30 text-gold-400 font-mono text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-gold-300" />
            Interactive Experience
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-gold-100">
            SOLANA BULL RUN GAME
          </h2>
          <p className="font-sans text-stone-300 text-sm md:text-base">
            Click/tap the epic CZ image to splash golden water, speed up the Bull, and earn billions of $CZBULL. Conquer FUD alerts and unlock CZ-approved title achievements!
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Game Canvas Column (Left/Center) */}
          <div className="lg:col-span-8 flex flex-col space-y-4">
            
            {/* Control Bar */}
            <div className="bg-[#1a110a] border border-gold-900/60 rounded-2xl px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
                <span className="font-mono text-xs text-stone-400">STATUS: PUMP ENGINE ONLINE</span>
              </div>
              
              {/* Sound toggle */}
              <button 
                onClick={handleToggleSound}
                className={`flex items-center gap-2 text-xs font-mono font-bold px-3 py-1.5 rounded-lg border transition-all ${
                  isMuted 
                    ? 'bg-stone-900 text-stone-400 border-stone-800 hover:border-gold-800' 
                    : 'bg-gold-950 text-gold-300 border-gold-700/60 hover:bg-gold-900'
                }`}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-4 h-4 text-stone-500" />
                    <span>SOUND OFF</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 text-gold-400 animate-bounce" />
                    <span className="text-gold-200">SOUND ON</span>
                  </>
                )}
              </button>
            </div>

            {/* Click Stage */}
            <div 
              ref={containerRef}
              onClick={handleBullClick}
              className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden border-2 border-gold-800/60 bg-[#090604] cursor-pointer select-none group active:border-gold-400 duration-150 shadow-2xl"
              style={{ maxHeight: '420px' }}
            >
              {/* Background Art - The Epic Image scaled with dimming */}
              <img 
                src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/photo_2026-07-06_15-06-16.jpg?v=1783339592" 
                alt="Stage Artwork" 
                className={`w-full h-full object-cover object-top transition-transform duration-300 select-none pointer-events-none group-active:scale-[1.01] ${
                  fudActive ? 'filter brightness-40 saturate-50' : 'brightness-75'
                }`}
              />

              {/* Water Splash Ripple Layers on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"></div>

              {/* FLOATING TEXTS */}
              {floatingTexts.map(item => (
                <div 
                  key={item.id}
                  className="absolute font-serif text-lg md:text-2xl font-black text-gold-200 pointer-events-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] animate-bounce select-none"
                  style={{ left: item.x, top: item.y - 15, transform: 'translate(-50%, -100%)', zIndex: 30 }}
                >
                  {item.text}
                </div>
              ))}

              {/* SPLASH EFFECTS */}
              {splashes.map(splash => (
                <div 
                  key={splash.id}
                  className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gold-400 pointer-events-none water-splash"
                  style={{ left: splash.x, top: splash.y }}
                ></div>
              ))}

              {/* Click instruction overlay */}
              <div className="absolute inset-x-0 bottom-4 flex flex-col items-center pointer-events-none text-center">
                <span className="bg-black/80 px-4 py-2 border border-gold-900/60 rounded-full font-serif text-xs md:text-sm text-gold-300 font-bold tracking-widest uppercase shadow-md animate-pulse">
                  ⚡ TAP TO ACCELERATE THE BULL ⚡
                </span>
              </div>

              {/* FUD POPUP WARNING */}
              {fudActive && (
                <div 
                  onClick={(e) => {
                    e.stopPropagation(); // prevent clicking game
                    conquerFud();
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-950/90 border-2 border-red-500 rounded-2xl p-5 max-w-sm w-[90%] text-center shadow-[0_0_40px_rgba(239,68,68,0.4)] z-40 cursor-pointer hover:scale-102 transition-transform"
                >
                  <ShieldAlert className="w-12 h-12 text-red-500 mx-auto mb-3 animate-bounce" />
                  <h4 className="font-serif text-lg font-black text-red-100 uppercase tracking-wider">
                    FUD ALERT INBOUND!
                  </h4>
                  <p className="font-sans text-xs text-stone-300 mt-2 mb-4 italic">
                    "{fudText}"
                  </p>
                  <button 
                    className="w-full bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-xs py-3 rounded-xl shadow-lg uppercase tracking-widest font-mono"
                  >
                    🚀 DEFY FUD & 2X PUMP! 🚀
                  </button>
                </div>
              )}
            </div>

            {/* Quick stats on clicker page */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#1a110a] border border-gold-900/40 rounded-2xl p-3 text-center">
                <p className="text-[10px] font-mono text-stone-400 uppercase">My Clicks</p>
                <p className="text-xl md:text-2xl font-serif font-black text-gold-300">{clicks}</p>
              </div>
              <div className="bg-[#1a110a] border border-gold-900/40 rounded-2xl p-3 text-center">
                <p className="text-[10px] font-mono text-stone-400 uppercase">Current Speed</p>
                <p className="text-xl md:text-2xl font-serif font-black text-amber-400">{speed} MPH</p>
              </div>
              <div className="bg-[#1a110a] border border-gold-900/40 rounded-2xl p-3 text-center">
                <p className="text-[10px] font-mono text-stone-400 uppercase">Reward Multiplier</p>
                <p className="text-xl md:text-2xl font-serif font-black text-emerald-400">{multiplier}x</p>
              </div>
            </div>

          </div>

          {/* Leaderboard / Achievements Column (Right) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            
            {/* Profile / Tier Card */}
            <div className="bg-gradient-to-b from-[#1c130b] to-[#140e08] border border-gold-800/60 rounded-3xl p-5 flex flex-col space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="bg-gold-950 p-2.5 rounded-2xl border border-gold-700/50">
                  <Trophy className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-gold-500 uppercase tracking-widest">Current Rider Rank</p>
                  <p className="text-lg font-serif font-bold text-gold-200">{activeTier}</p>
                </div>
              </div>

              <div className="h-px bg-gold-900/40"></div>

              {/* Progress bar to next tier */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-stone-400">Progress to Next Tier</span>
                  <span className="text-gold-400 font-bold">
                    {clicks >= 1000 ? 'MAX TIER' : `${clicks} / ${clicks >= 400 ? 1000 : clicks >= 150 ? 400 : clicks >= 50 ? 150 : 50} Clicks`}
                  </span>
                </div>
                <div className="w-full h-2 bg-[#090604] rounded-full overflow-hidden border border-gold-900/20">
                  <div 
                    className="h-full bg-gradient-to-r from-gold-600 to-gold-400 transition-all duration-300"
                    style={{ 
                      width: `${Math.min(
                        clicks >= 1000 ? 100 : 
                        clicks >= 400 ? ((clicks - 400) / 600) * 100 : 
                        clicks >= 150 ? ((clicks - 150) / 250) * 100 : 
                        clicks >= 50 ? ((clicks - 50) / 100) * 100 : 
                        (clicks / 50) * 100, 
                        100
                      )}%` 
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Achievement Log */}
            <div className="bg-[#140e08] border border-gold-900/30 rounded-3xl p-5 flex-1 flex flex-col space-y-3 min-h-[220px]">
              <span className="font-serif text-sm font-bold text-gold-400 uppercase tracking-widest flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-gold-400" />
                Unlocked Milestones
              </span>

              {unlockedAchievements.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
                  <p className="text-xs font-mono text-stone-500">
                    No achievements yet.
                  </p>
                  <p className="text-[11px] font-sans text-stone-400 mt-1">
                    Start pumping the bull on the left to activate your legacy!
                  </p>
                </div>
              ) : (
                <div className="flex-1 overflow-y-auto space-y-2 pr-1 max-h-[200px]">
                  {unlockedAchievements.map((ach, idx) => (
                    <div 
                      key={idx} 
                      className="bg-[#1c130b] border border-gold-900/40 rounded-xl p-2.5 flex items-center gap-2.5 animate-fade-in"
                    >
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="font-sans text-xs text-stone-200 font-medium">
                        {ach}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

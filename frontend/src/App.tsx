import React, { useState, useEffect } from 'react';
import { NavTab, KanjiItem } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LearnSection } from './components/LearnSection';
import { ProgressSection } from './components/ProgressSection';
import { SettingsModal } from './components/SettingsModal';
import { ProfileDrawer } from './components/ProfileDrawer';
import { KanjiModal } from './components/KanjiModal';
import { KANJI_DATA } from './data/kanjiData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [selectedKanji, setSelectedKanji] = useState<KanjiItem | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [petalDensity, setPetalDensity] = useState<'off' | 'subtle' | 'breeze' | 'blizzard'>('subtle');
  const [bgVariant, setBgVariant] = useState<'classic' | 'painted'>('classic');
  const [readingPreference, setReadingPreference] = useState<'kanji-only' | 'furigana' | 'romaji'>('furigana');

  const handleSelectTab = (tab: NavTab) => {
    setCurrentTab(tab);
    if (tab === 'settings') {
      setIsSettingsOpen(true);
      return;
    }
    if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'learn') {
      const el = document.getElementById('learn-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (tab === 'progress') {
      const el = document.getElementById('progress-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleGetStarted = () => {
    // Open the featured Sakura Kanji study card or scroll to learn
    const sakuraKanji = KANJI_DATA.find((k) => k.id === 'sakura') || KANJI_DATA[0];
    setSelectedKanji(sakuraKanji);
  };

  const handleScrollDown = () => {
    const el = document.getElementById('learn-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Sync scroll position with current tab indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const height = window.innerHeight;
      if (scrollPos < height * 0.6) {
        setCurrentTab('home');
      } else if (scrollPos < height * 1.8) {
        setCurrentTab('learn');
      } else {
        setCurrentTab('progress');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#070707] text-neutral-100 font-sans selection:bg-neutral-800 selection:text-neutral-100">

      {/* Exact Top Bar Contract */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenProfile={() => setIsProfileOpen(true)}
      />

      {/* Main Hero Section: The Exact Recreation */}
      <main>
        <HeroSection
          onGetStarted={handleGetStarted}
          onScrollDown={handleScrollDown}
          bgVariant={bgVariant}
        />

        {/* Interactive Learn & Kanji Section */}
        <div id="learn-section">
          <LearnSection onSelectKanji={(item) => setSelectedKanji(item)} />
        </div>

        {/* Progress & Milestone Section */}
        <div id="progress-section">
          <ProgressSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 w-full bg-[#050505] border-t border-neutral-900 py-10 px-8 md:px-14 lg:px-20 text-neutral-500 text-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-lg text-neutral-300" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            桜
          </span>
          <span>© 2026 Sakura Kanji. Learn Japanese, your way.</span>
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="hover:text-neutral-300 transition-colors"
          >
            Preferences
          </button>
          <button
            onClick={() => {
              const sakuraKanji = KANJI_DATA.find((k) => k.id === 'sakura');
              if (sakuraKanji) setSelectedKanji(sakuraKanji);
            }}
            className="hover:text-neutral-300 transition-colors"
          >
            Kanji Spotlight: 桜
          </button>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-neutral-300 transition-colors"
          >
            Back to Top ↑
          </button>
        </div>
      </footer>

      {/* Interactive Kanji Detail Modal */}
      <KanjiModal
        kanji={selectedKanji}
        onClose={() => setSelectedKanji(null)}
      />

      {/* Profile Drawer */}
      <ProfileDrawer
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => {
          setIsSettingsOpen(false);
          if (currentTab === 'settings') setCurrentTab('home');
        }}
        petalDensity={petalDensity}
        onSetPetalDensity={setPetalDensity}
        bgVariant={bgVariant}
        onSetBgVariant={setBgVariant}
        readingPreference={readingPreference}
        onSetReadingPreference={setReadingPreference}
      />
    </div>
  );
}

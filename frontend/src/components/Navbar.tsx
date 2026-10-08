import React from 'react';
import { NavTab } from '../types';

interface NavbarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenProfile,
}) => {
  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'learn', label: 'Learn' },
    { id: 'progress', label: 'Progress' },
    { id: 'settings', label: 'Settings' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full px-8 md:px-14 py-6 md:py-8 flex items-center justify-between pointer-events-auto">
      {/* Left: Kanji Logo */}
      <div className="flex items-center gap-12 lg:gap-16">
        <button
          onClick={() => onSelectTab('home')}
          className="group flex items-center justify-center text-2xl md:text-3xl font-light text-neutral-100 hover:text-white transition-colors tracking-widest focus:outline-none"
          style={{ fontFamily: "'Noto Serif JP', 'Cormorant Garamond', serif" }}
          title="桜 - Sakura"
        >
          <span className="inline-block transition-transform duration-300 group-hover:scale-105">
            桜
          </span>
        </button>

        {/* Center-left Nav Links */}
        <nav className="flex items-center gap-8 md:gap-10 text-sm tracking-wide">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`relative py-1 text-[13.5px] md:text-[14.5px] font-normal transition-colors duration-200 focus:outline-none ${
                  isActive
                    ? 'text-neutral-100'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute left-0 bottom-[-2px] w-full h-[1.5px] bg-neutral-200 rounded-full"
                    style={{
                      transformOrigin: 'left',
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Right: Minimal Profile Outline Icon */}
      <div className="flex items-center">
        <button
          onClick={onOpenProfile}
          className="p-1.5 text-neutral-300 hover:text-white transition-colors duration-200 focus:outline-none rounded-full hover:bg-white/5"
          title="Account & Stats"
          aria-label="User Profile"
        >
          {/* Exact wireframe line style user icon as in the screenshot */}
          <svg
            className="w-5 h-5 md:w-[22px] md:h-[22px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </button>
      </div>
    </header>
  );
};

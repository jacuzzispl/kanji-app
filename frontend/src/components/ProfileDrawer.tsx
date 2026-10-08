import React from 'react';

interface ProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileDrawer: React.FC<ProfileDrawerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-sm w-full bg-[#0d0d10] border-l border-neutral-800 p-6 md:p-8 flex flex-col justify-between shadow-2xl text-neutral-200">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
            <h3
              className="text-xl font-light text-neutral-100"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Learner Profile
            </h3>
            <button
              onClick={onClose}
              className="p-1 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800/60"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="6" y1="6" x2="18" y2="18" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* User Avatar & Info */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xl text-neutral-200" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              学
            </div>
            <div>
              <div className="text-base font-medium text-neutral-100">David B.</div>
              <div className="text-xs text-neutral-400">Aiming for JLPT N3</div>
              <div className="text-[11px] text-pink-300 mt-0.5">🔥 14-Day Study Streak</div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="space-y-3 mb-8">
            <div className="flex justify-between items-center p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/60 text-xs">
              <span className="text-neutral-400">Reviews Due Today</span>
              <span className="font-mono text-pink-300 font-medium">18 Kanji</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/60 text-xs">
              <span className="text-neutral-400">Daily Study Time</span>
              <span className="font-mono text-neutral-200">24 mins avg</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/60 text-xs">
              <span className="text-neutral-400">Memory Retention</span>
              <span className="font-mono text-emerald-400">94.2%</span>
            </div>
          </div>

          {/* Current Mastery Badge */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800/80">
            <div className="text-[11px] uppercase tracking-wider text-neutral-500 mb-1">
              Active Focus Level
            </div>
            <div className="text-sm font-medium text-neutral-200">
              JLPT N4 Kanji & Grammar
            </div>
            <p className="text-xs text-neutral-400 mt-1">
              Mastering high-frequency daily vocabulary, verbs of motion, and compound kanji (熟語).
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-neutral-800">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-full border border-neutral-700 hover:border-neutral-500 text-xs text-neutral-300 hover:text-white transition-colors"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
};

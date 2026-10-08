export type NavTab = 'home' | 'learn' | 'progress' | 'settings';

export interface KanjiItem {
  id: string;
  kanji: string;
  meaning: string;
  kunyomi: string;
  onyomi: string;
  romaji: string;
  jlpt: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  strokes: number;
  radicals: string[];
  mnemonic: string;
  examples: {
    japanese: string;
    reading: string;
    meaning: string;
  }[];
}

export interface UserStats {
  streakDays: number;
  kanjiLearned: number;
  reviewsDue: number;
  jlptGoal: string;
  accuracy: number;
}

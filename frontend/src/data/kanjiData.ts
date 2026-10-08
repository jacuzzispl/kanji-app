import { KanjiItem } from '../types';

export const KANJI_DATA: KanjiItem[] = [
  {
    id: 'sakura',
    kanji: '桜',
    meaning: 'Cherry Blossom',
    kunyomi: 'さくら (sakura)',
    onyomi: 'オウ (ou)',
    romaji: 'sakura',
    jlpt: 'N3',
    strokes: 10,
    radicals: ['木 (tree)', 'ツ (crown)', '女 (woman)'],
    mnemonic: 'A tree (木) crowned with petals that delicate women (女) admire under the spring canopy.',
    examples: [
      { japanese: '桜が満開です', reading: 'さくらが まんかいです', meaning: 'The cherry blossoms are in full bloom.' },
      { japanese: '桜前線', reading: 'さくらぜんせん', meaning: 'Cherry blossom front (forecast).' },
      { japanese: '山桜', reading: 'やまざくら', meaning: 'Wild cherry tree.' }
    ]
  },
  {
    id: 'ki',
    kanji: '木',
    meaning: 'Tree / Wood',
    kunyomi: 'き (ki), こ- (ko-)',
    onyomi: 'ボク (boku), モク (moku)',
    romaji: 'ki',
    jlpt: 'N5',
    strokes: 4,
    radicals: ['木 (tree)'],
    mnemonic: 'Depicts the trunk of a tree with branches spreading out and roots anchoring below.',
    examples: [
      { japanese: '大きな木', reading: 'おおきな き', meaning: 'A large tree.' },
      { japanese: '木曜日', reading: 'もくようび', meaning: 'Thursday.' },
      { japanese: '木漏れ日', reading: 'こもれび', meaning: 'Sunlight filtering through trees.' }
    ]
  },
  {
    id: 'hana',
    kanji: '花',
    meaning: 'Flower / Blossom',
    kunyomi: 'はな (hana)',
    onyomi: 'カ (ka), ケ (ke)',
    romaji: 'hana',
    jlpt: 'N5',
    strokes: 7,
    radicals: ['艹 (grass/flower)', '化 (change/transform)'],
    mnemonic: 'Grass and flora that transforms (化) into a brilliant colorful flower.',
    examples: [
      { japanese: '花見に行く', reading: 'はなみに いく', meaning: 'Go flower viewing (Hanami).' },
      { japanese: '花火大会', reading: 'はなびたいかい', meaning: 'Fireworks festival.' },
      { japanese: '花束', reading: 'はなたば', meaning: 'Bouquet of flowers.' }
    ]
  },
  {
    id: 'tsuki',
    kanji: '月',
    meaning: 'Moon / Month',
    kunyomi: 'つき (tsuki)',
    onyomi: 'ゲツ (getsu), ガツ (gatsu)',
    romaji: 'tsuki',
    jlpt: 'N5',
    strokes: 4,
    radicals: ['月 (moon)'],
    mnemonic: 'A crescent moon with clouds drifting across its serene face.',
    examples: [
      { japanese: '月が綺麗ですね', reading: 'つきが きれいですね', meaning: 'The moon is beautiful, isn\'t it? (Subtle expression of love).' },
      { japanese: '今月', reading: 'こんげつ', meaning: 'This month.' },
      { japanese: '満月', reading: 'まんげつ', meaning: 'Full moon.' }
    ]
  },
  {
    id: 'kokoro',
    kanji: '心',
    meaning: 'Heart / Mind / Spirit',
    kunyomi: 'こころ (kokoro)',
    onyomi: 'シン (shin)',
    romaji: 'kokoro',
    jlpt: 'N4',
    strokes: 4,
    radicals: ['心 (heart)'],
    mnemonic: 'The chambers and arteries of the beating human heart, symbolizing spirit and emotion.',
    examples: [
      { japanese: '心からの感謝', reading: 'こころからの かんしゃ', meaning: 'Heartfelt gratitude.' },
      { japanese: '安心する', reading: 'あんしんする', meaning: 'To feel at ease / relieved.' },
      { japanese: '好奇心', reading: 'こうきしん', meaning: 'Curiosity.' }
    ]
  },
  {
    id: 'michi',
    kanji: '道',
    meaning: 'Road / Way / Path / Tao',
    kunyomi: 'みち (michi)',
    onyomi: 'ドウ (dou), トウ (tou)',
    romaji: 'michi',
    jlpt: 'N5',
    strokes: 12,
    radicals: ['辶 (walk/movement)', '首 (head/leader)'],
    mnemonic: 'Walking forward with your head held high along the designated path.',
    examples: [
      { japanese: '茶道', reading: 'さどう / ちゃどう', meaning: 'The Way of Tea (Tea Ceremony).' },
      { japanese: '武士道', reading: 'ぶしどう', meaning: 'Bushido (Way of the Samurai).' },
      { japanese: '帰り道', reading: 'かえりみち', meaning: 'The way back home.' }
    ]
  },
  {
    id: 'hikari',
    kanji: '光',
    meaning: 'Light / Ray',
    kunyomi: 'ひかり (hikari), ひかる (hikaru)',
    onyomi: 'コウ (kou)',
    romaji: 'hikari',
    jlpt: 'N4',
    strokes: 6,
    radicals: ['⺌ (sparks)', '兀 (human legs)'],
    mnemonic: 'A person carrying a flaming torch aloft, spreading radiance in all directions.',
    examples: [
      { japanese: '希望の光', reading: 'きぼうの ひかり', meaning: 'Ray of hope.' },
      { japanese: '日光', reading: 'にっこう', meaning: 'Sunlight.' },
      { japanese: '光陰矢の如し', reading: 'こういん やのごとし', meaning: 'Time flies like an arrow.' }
    ]
  },
  {
    id: 'wa',
    kanji: '和',
    meaning: 'Harmony / Japanese style / Peace',
    kunyomi: 'やわ-らぐ (yawaragu), なご-む (nagomu)',
    onyomi: 'ワ (wa), オ (o)',
    romaji: 'wa',
    jlpt: 'N3',
    strokes: 8,
    radicals: ['禾 (grain)', '口 (mouth)'],
    mnemonic: 'Sharing grain (禾) through every mouth (口) brings peace and harmony to all.',
    examples: [
      { japanese: '和風', reading: 'わふう', meaning: 'Japanese style.' },
      { japanese: '平和', reading: 'へいわ', meaning: 'Peace.' },
      { japanese: '和食', reading: 'わしょく', meaning: 'Traditional Japanese cuisine.' }
    ]
  }
];

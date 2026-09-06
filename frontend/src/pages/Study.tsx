import { useQuery } from "@tanstack/react-query";
import { useState } from "react";


const BASE_URL = "http://127.0.0.1:8000";

interface studyKanji {
  id: number;
  character: string;
  meaning: string;
  jlpt_level: number;
  curriculumn_order: number | null;
  onyomi: string | null;
  kunyomi: string | null;
  radical: string | null;
}

export default function Study() {

  return <h1>This is ichigō!</h1>;
}

function showCard() {
  const [kanji, setKanji] = useState(0);

  const {
    data: kanjiToStudy,
  } = useQuery({
    queryKey: ["studykanji"],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/get_study_kanji`);
      return await response.json()
    }
  })

  setKanji(kanjiToStudy);

  return (
    <>
      ＜<div>
        <h1>These are the kanji you need to study:</h1>
        <ul>
          {kanjiToStudy.map((kanji) => {
            return <li>{kanji.meaning}</li>
          })}
        </ul>
      </div>
    </>
  )

}
"use client";

import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { Card } from "@/components/Cards/Card";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

import { LetterA } from "@/components/Extras/Pronunciation/Letters/LetterA";
import { LettersAI } from "@/components/Extras/Pronunciation/Letters/LettersAI";
import { LettersAU } from "@/components/Extras/Pronunciation/Letters/LettersAU";
import { LettersAW } from "@/components/Extras/Pronunciation/Letters/LettersAW";
import { LettersAWE } from "@/components/Extras/Pronunciation/Letters/LettersAWE";
import { LetterE } from "@/components/Extras/Pronunciation/Letters/LetterE";
import { LettersEA } from "@/components/Extras/Pronunciation/Letters/LettersEA";
import { LettersEAR } from "@/components/Extras/Pronunciation/Letters/LettersEAR";

import { LettersEE } from "@/components/Extras/Pronunciation/Letters/LettersEE";
import { LettersEI } from "@/components/Extras/Pronunciation/Letters/LetterEI";
import { LettersER } from "@/components/Extras/Pronunciation/Letters/LettersER";
import { LettersET } from "@/components/Extras/Pronunciation/Letters/LettersET";
import { LettersEY } from "@/components/Extras/Pronunciation/Letters/LetterEY";
import { LettersAvsE } from "@/components/Extras/Pronunciation/Letters/LettersAvsE";
import { LetterI } from "@/components/Extras/Pronunciation/Letters/LetterI";
import { LettersIE } from "@/components/Extras/Pronunciation/Letters/LetterIE";
import { LettersIR } from "@/components/Extras/Pronunciation/Letters/LetterIR";
import { LettersEAvsI } from "@/components/Extras/Pronunciation/Letters/LettersEAvsI";
import { LettersCH } from "@/components/Extras/Pronunciation/Letters/LettersCH";
import { LettersSH } from "@/components/Extras/Pronunciation/Letters/LettersSH";
import { LettersSHvsCH } from "@/components/Extras/Pronunciation/Letters/LettersSHvsCH";
import { LetterO } from "@/components/Extras/Pronunciation/Letters/LetterO";
import { LettersOA } from "@/components/Extras/Pronunciation/Letters/LetterOA";
import { LettersOO } from "@/components/Extras/Pronunciation/Letters/LetterOO";
import { LettersOR } from "@/components/Extras/Pronunciation/Letters/LetterOR";
import { LettersOUS } from "@/components/Extras/Pronunciation/Letters/LetterOUS";
import { LettersOW } from "@/components/Extras/Pronunciation/Letters/LetterOW";
import { LetterT } from "@/components/Extras/Pronunciation/Letters/LetterT";
import { LettersTH } from "@/components/Extras/Pronunciation/Letters/LetterTH";
import { LetterU } from "@/components/Extras/Pronunciation/Letters/LetterU";
import { LettersUI } from "@/components/Extras/Pronunciation/Letters/LetterUI";
import { LettersOOvsU } from "@/components/Extras/Pronunciation/Letters/LetterOOvsU";
import { LetterY } from "@/components/Extras/Pronunciation/Letters/LetterY";

import { ScrollToTop } from "@/components/ScrollToTop";
import TheAlphabet from "@/components/Lessons/Topic/TheAlphabet/page";

const links = [
  {
    href: "#letter-a",
    letter: 'Letter "a"',
    phonetics: "/æ/, /ɑː/, /ə/, /eɪ/",
  },
  {
    href: "#letters-ai",
    letter: 'Letter "ai"',
    phonetics: "/e/",
  },
  {
    href: "#letters-au",
    letter: 'Letter "au"',
    phonetics: "...",
  },
  {
    href: "#letters-aw",
    letter: 'Letter "aw"',
    phonetics: "...",
  },
  {
    href: "#letters-awe",
    letter: 'Letter "awe"',
    phonetics: "...",
  },
  {
    href: "#letters-e",
    letter: 'Letter "e"',
    phonetics: "...",
  },
  {
    href: "#letters-ea",
    letter: 'Letter "ea"',
    phonetics: "...",
  },
  {
    href: "#letters-ear",
    letter: 'Letter "ear"',
    phonetics: "/ɝː/",
  },
  {
    href: "#letters-ee",
    letter: 'Letter "ee"',
    phonetics: "...",
  },
  {
    href: "#letters-ei",
    letter: 'Letter "ei"',
    phonetics: "...",
  },
  {
    href: "#letters-er",
    letter: 'Letter "er"',
    phonetics: "...",
  },
  {
    href: "#letters-et",
    letter: 'Letter "et"',
    phonetics: "...",
  },
  {
    href: "#letters-ey",
    letter: 'Letter "ey"',
    phonetics: "...",
  },
  {
    href: "#letters-a-vs-e",
    letter: 'Letter "a" vs. "e"',
    phonetics: "...",
  },
  {
    href: "#letter-i",
    letter: 'Letter "i"',
    phonetics: "...",
  },
  {
    href: "#letters-ie",
    letter: 'Letters "ie"',
    phonetics: "...",
  },
  {
    href: "#letters-ir",
    letter: 'Letters "ir"',
    phonetics: "...",
  },
  {
    href: "#letters-ea-vs-i",
    letter: 'Letters "ea" vs. "i"',
    phonetics: "...",
  },
  {
    href: "#letters-sh",
    letter: 'Letters "sh"',
    phonetics: "...",
  },
  {
    href: "#letters-ch",
    letter: 'Letters "ch"',
    phonetics: "...",
  },
  {
    href: "#letters-sh-vs-ch",
    letter: 'Letters "sh" vs. "ch"',
    phonetics: "...",
  },
  {
    href: "#letter-o",
    letter: 'Letter "o"',
    phonetics: "...",
  },
  {
    href: "#letters-oa",
    letter: 'Letters "oa"',
    phonetics: "...",
  },
  {
    href: "#letters-oo",
    letter: 'Letters "oo"',
    phonetics: "...",
  },
  {
    href: "#letters-or",
    letter: 'Letters "or"',
    phonetics: "...",
  },
  {
    href: "#letters-ous",
    letter: 'Letters "ous"',
    phonetics: "...",
  },
  {
    href: "#letters-ow",
    letter: 'Letters "ow"',
    phonetics: "...",
  },
  {
    href: "#letters-th",
    letter: 'Letters "th"',
    phonetics: "...",
  },
  {
    href: "#letter-t",
    letter: 'Letter "t"',
    phonetics: "...",
  },
  {
    href: "#letter-u",
    letter: 'Letter "u"',
    phonetics: "/uː/, /ʌ/, /ɪ/, /ʊ/, /jʊ/",
  },
  {
    href: "#letters-ui",
    letter: 'Letters "ui"',
    phonetics: "...",
  },
  {
    href: "#letters-oo-vs-u",
    letter: 'Letters "oo" vs. "u"',
    phonetics: "...",
  },
  {
    href: "#letter-y",
    letter: 'Letters "y"',
    phonetics: "...",
  },
];

const letters = [
  {
    id: "letter-a",
    component: () => <LetterA />,
  },
  {
    id: "letters-ai",
    component: () => <LettersAI />,
  },
  {
    id: "letters-au",
    component: () => <LettersAU />,
  },
  {
    id: "letters-aw",
    component: () => <LettersAW />,
  },
  {
    id: "letters-awe",
    component: () => <LettersAWE />,
  },
  {
    id: "letters-e",
    component: () => <LetterE />,
  },
  {
    id: "letters-ea",
    component: () => <LettersEA />,
  },
  {
    id: "letters-ear",
    component: () => <LettersEAR />,
  },
  {
    id: "letters-ee",
    component: () => <LettersEE />,
  },
  {
    id: "letters-ei",
    component: () => <LettersEI />,
  },
  {
    id: "letters-er",
    component: () => <LettersER />,
  },
  {
    id: "letters-et",
    component: () => <LettersET />,
  },
  {
    id: "letters-ey",
    component: () => <LettersEY />,
  },
  {
    id: "letters-a-vs-e",
    component: () => <LettersAvsE />,
  },
  {
    id: "letter-i",
    component: () => <LetterI />,
  },
  {
    id: "letters-ie",
    component: () => <LettersIE />,
  },
  {
    id: "letters-ir",
    component: () => <LettersIR />,
  },
  {
    id: "letters-ea-vs-i",
    component: () => <LettersEAvsI />,
  },
  {
    id: "letters-sh",
    component: () => <LettersSH />,
  },
  {
    id: "letters-ch",
    component: () => <LettersCH />,
  },
  {
    id: "letters-sh-vs-ch",
    component: () => <LettersSHvsCH />,
  },
  {
    id: "letter-o",
    component: () => <LetterO />,
  },
  {
    id: "letters-oa",
    component: () => <LettersOA />,
  },
  {
    id: "letters-oo",
    component: () => <LettersOO />,
  },
  {
    id: "letters-or",
    component: () => <LettersOR />,
  },
  {
    id: "letters-ous",
    component: () => <LettersOUS />,
  },
  {
    id: "letters-ow",
    component: () => <LettersOW />,
  },
  {
    id: "letters-th",
    component: () => <LettersTH />,
  },
  {
    id: "letter-t",
    component: () => <LetterT />,
  },
  {
    id: "letter-u",
    component: () => <LetterU />,
  },
  {
    id: "letters-ui",
    component: () => <LettersUI />,
  },
  {
    id: "letters-oo-vs-u",
    component: () => <LettersOOvsU />,
  },
  {
    id: "letter-y",
    component: () => <LetterY />,
  },
];

export default function Pronunciation() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Pronunciation"
        descriptions={["Focused on Brazilian students"]}
      />
      <div className="line-break">
        <TheAlphabet />
        <Card bgColor="black" textColor="white">
          <p className="bold">Sounds of Letters</p>
        </Card>

        <p className="bold">jump to:</p>

        {/* Links */}
        <div>
          {links.map((href, index) => (
            <div key={index}>
              <a href={href.href}>
                <p>
                  {href.letter} (phonetics:{" "}
                  <span className="phonetics">{href.phonetics}</span>)
                </p>
              </a>
            </div>
          ))}
        </div>
        <hr />
        <div>
          <a href="#linked-sounds">
            <p>Linked sounds</p>
          </a>
        </div>
        
        <hr />

        {/* Letters */}
        {letters.map((letter, index) => (
          <span id={letter.id} key={index}>
            {letter.component()}
          </span>
        ))}

        <Card bgColor="Black" textColor="White">
          <p className="bold">Comparisons</p>
        </Card>
        <div className="flex-8px-center-wrap">
          <DictionaryCard
            audioSrc="/s/seat.mp3"
            label="seat"
            phonetics="/siːt/"
          />
          <p>vs.</p>
          <DictionaryCard audioSrc="/s/sit.mp3" label="sit" phonetics="/sɪt/" />
          <p>vs.</p>
          <DictionaryCard
            audioSrc="/c/city.mp3"
            label="city"
            phonetics="/ˈsɪt̬.i/"
          />
        </div>

        <span className="line-break"></span>

        <span id="linked-sounds">
          <Card bgColor="Black" textColor="White">
            <p className="bold">Linked sound examples</p>
          </Card>
        </span>
        <p>
          <b>consonant + vowel</b>
        </p>
        <div>
          <p>
            I wor<span className="underline">k in an o</span>ffice.
          </p>
          <p>
            Let's ha<span className="underline">ve an a</span>dventure.
          </p>
          <p>
            It'<span className="underline">s an e</span>asy job.
          </p>
          <p>
            Embar<span className="underline">k on an e</span>xtraordinary
            journey...
          </p>
        </div>
        <div className="line-break">
          <p className="bold">
            S + Y <span className="phonetics">/tʃ/, /ʒ/</span>
          </p>
          <p className="phonetics">/tʃ/</p>
          <p>What's your name?</p>
          <p className="phonetics">/ʒ/</p>
          <div>
            <p>How's your family doing?</p>
            <p>How's your friends?</p>
          </div>
        </div>
        <div>
          <p className="bold">
            T + Y <span className="phonetics">/tʃ/</span>
          </p>
          <p>Don't you want it?</p>
        </div>
          <ScrollToTop />
      </div>
    </>
  );
}

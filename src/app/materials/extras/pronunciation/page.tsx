"use client";

import { Whiteboard } from "@/components/Molecules/Whiteboard";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";



import { ScrollToTop } from "@/components/Atoms/ScrollToTop";
import { Card } from "@/components";

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
    phonetics: "/ɑː/",
  },
  {
    href: "#letters-aw",
    letter: 'Letter "aw"',
    phonetics: "/ɑː/",
  },
  {
    href: "#letters-awe",
    letter: 'Letter "awe"',
    phonetics: "/ɑː/",
  },
  {
    href: "#letter-e",
    letter: 'Letter "e"',
    phonetics: "/e/",
  },
  {
    href: "#letter-e-silent",
    letter: 'Letter "e" Silent',
  },
  {
    href: "#letters-ea",
    letter: 'Letter "ea"',
    phonetics: "/iː/",
  },
  {
    href: "#letters-ear",
    letter: 'Letter "ear"',
    phonetics: "/ɝː/",
  },
  {
    href: "#letters-eau",
    letter: 'Letter "eau"',
    phonetics: "/oʊ/",
  },
  {
    href: "#letters-ee",
    letter: 'Letter "ee"',
    phonetics: "/iː/",
  },
  {
    href: "#letters-ei",
    letter: 'Letter "ei"',
    phonetics: "/eɪ/",
  },
  {
    href: "#letters-er",
    letter: 'Letter "er"',
    phonetics: "/ɝː/",
  },
  {
    href: "#letters-et",
    letter: 'Letter "et"',
    phonetics: "/eɪ/",
  },
  {
    href: "#letters-ey",
    letter: 'Letter "ey"',
    phonetics: "/i/, /eɪ/",
  },
  {
    href: "#letters-a-vs-e",
    letter: 'Letter "a" vs. "e"',
    phonetics: "/æ/ vs. /e/",
  },
  {
    href: "#letter-i",
    letter: 'Letter "i"',
    phonetics: "/i/, /ɪ/, /ə/, /aɪ/, /ɑː/",
  },
  {
    href: "#letters-ie",
    letter: 'Letters "ie"',
    phonetics: "/i/, /aɪ/",
  },
  {
    href: "#letters-ir",
    letter: 'Letters "ir"',
    phonetics: "/ɝː/",
  },
  {
    href: "#letters-ea-vs-i",
    letter: 'Letters "ea" vs. "i"',
    phonetics: "/iː/ vs /ɪ/",
  },
  {
    href: "#letters-ng",
    letter: 'Letters "ng"',
    phonetics: "/ŋ/",
  },
  {
    href: "#letters-sh",
    letter: 'Letters "sh"',
    phonetics: "/ʃ/",
  },
  {
    href: "#letters-(t)ch",
    letter: 'Letters "(t)ch"',
    phonetics: "/tʃ/, /ʃ/, /k/",
  },
  {
    href: "#letters-sh-vs-ch",
    letter: 'Letters "sh" vs. "ch"',
    phonetics: "/ʃ/ vs. /tʃ/",
  },
  {
    href: "#letter-o",
    letter: 'Letter "o"',
    phonetics: "/ɑː/, /ɔː/, /oʊ/",
  },
  {
    href: "#letters-oa",
    letter: 'Letters "oa"',
    phonetics: "/ɔː/, /oʊ/",
  },
  {
    href: "#letters-oo",
    letter: 'Letters "oo"',
    phonetics: "/ʌ/, /ʊ/, /uː/",
  },
  {
    href: "#letters-or",
    letter: 'Letters "or"',
    phonetics: "/ɝː/",
  },
  {
    href: "#letters-ous",
    letter: 'Letters "ous"',
    phonetics: "/əs/",
  },
  {
    href: "#letters-ow",
    letter: 'Letters "ow"',
    phonetics: "/oʊ/, /aʊ/",
  },
  {
    href: "#letters-th",
    letter: 'Letters "th"',
    phonetics: "/θ/ no vibration , /ð/ vibration",
  },
  {
    href: "#letter-t",
    letter: 'Letter "t"',
    phonetics: "/t/",
  },
  {
    href: "#letter-u",
    letter: 'Letter "u"',
    phonetics: "/uː/, /ʌ/, /ɪ/, /ʊ/, /jʊ/",
  },
  {
    href: "#letters-ui",
    letter: 'Letters "ui"',
    phonetics: "/ɪ/, /aɪ/",
  },
  {
    href: "#letters-us",
    letter: 'Letters "us"',
    phonetics: "/əs/",
  },
  {
    href: "#letters-oo-vs-u",
    letter: 'Letters "oo" vs. "u"',
    phonetics: "/uː/ vs /ʊ/",
  },
  {
    href: "#letter-y",
    letter: 'Letters "y"',
    phonetics: "/i/, /j/, /aɪ/",
  },
]

export default function ExtraPronunciation() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Pronunciation"
        descriptions={["Focused on Brazilian students"]}
      />
      <div className="line-break">
          <p className="bold">Sounds of Letters</p>

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

       

          <p className="bold">Comparisons</p>
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
            <p className="bold">Linked sound examples</p>
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

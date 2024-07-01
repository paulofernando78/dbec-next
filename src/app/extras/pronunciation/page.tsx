"use client";

import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { Card } from "@/components/Cards/Card";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

import { LetterA } from "@/components/Extras/Pronunciation/Letters/LetterA";
import { LettersAW } from "@/components/Extras/Pronunciation/Letters/LettersAW";
import { LettersAWE } from "@/components/Extras/Pronunciation/Letters/LettersAWE";
import { LettersAU } from "@/components/Extras/Pronunciation/Letters/LettersAU";
import { LetterE } from "@/components/Extras/Pronunciation/Letters/LetterE";
import { LetterAvsE } from "@/components/Extras/Pronunciation/Letters/LettersAvsE";
import { LettersET } from "@/components/Extras/Pronunciation/Letters/LettersET";
import { LetterEA } from "@/components/Extras/Pronunciation/Letters/LettersEA";
import { LetterEI } from "@/components/Extras/Pronunciation/Letters/LetterEI";
import { LetterEE } from "@/components/Extras/Pronunciation/Letters/LettersEE";
import { LettersEY } from "@/components/Extras/Pronunciation/Letters/LetterEY";
import { LettersEAvsI } from "@/components/Extras/Pronunciation/Letters/LettersEAvsI";
import { LetterI } from "@/components/Extras/Pronunciation/Letters/LetterI";
import { LetterIE } from "@/components/Extras/Pronunciation/Letters/LetterIE";
import { LetterIR } from "@/components/Extras/Pronunciation/Letters/LetterIR";
import { LettersOW } from "@/components/Extras/Pronunciation/Letters/LetterOW";
import { LetterU } from "@/components/Extras/Pronunciation/Letters/LetterU";
import { LettersO } from "@/components/Extras/Pronunciation/Letters/LetterO";
import { LettersOO } from "@/components/Extras/Pronunciation/Letters/LetterOO";
import { LetterUI } from "@/components/Extras/Pronunciation/Letters/LetterUI";
import { LetterY } from "@/components/Extras/Pronunciation/Letters/LetterY";
import { LettersCH } from "@/components/Extras/Pronunciation/Letters/LettersCH";
import { LettersSH } from "@/components/Extras/Pronunciation/Letters/LettersSH";
import { LettersSHvsCH } from "@/components/Extras/Pronunciation/Letters/LettersSHvsCH";
import { LettersOUS } from "@/components/Extras/Pronunciation/Letters/LetterOUS";
import { LetterOOvsU } from "@/components/Extras/Pronunciation/Letters/LetterOOvsU";
import { LettersOA } from "@/components/Extras/Pronunciation/Letters/LetterOA";

import { ScrollToTop } from "@/components/ScrollToTop";
import { LetterT } from "@/components/Extras/Pronunciation/Letters/LetterT";
import { LetterTH } from "@/components/Extras/Pronunciation/Letters/LetterTH";
import { LettersOR } from "@/components/Extras/Pronunciation/Letters/LetterOR";

export default function Pronunciation() {
  return (
    <>
      <Whiteboard title="Extras" subtitle="Pronunciation" />
      <div className="line-break">
        <p className="bold">jump to:</p>
        {/* Links */}
        <div>
          <p className="bold">Sounds of Letters</p>
          <a href="#letter-a">
            <p>Letter "a"</p>
          </a>
          <a href="#letters-au">
            <p>Letter "au"</p>
          </a>
          <a href="#letters-aw">
            <p>Letters "aw"</p>
          </a>
          <a href="#letters-awe">
            <p>Letters "awe"</p>
          </a>
          <hr />
          <a href="#letter-e">
            <p>Letter "e"</p>
          </a>
          <a href="#letters-ea">
            <p>Letters "ea"</p>
          </a>
          <a href="#letters-ee">
            <p>Letters "ee"</p>
          </a>
          <a href="#letters-ei">
            <p>Letters "ei"</p>
          </a>
          <a href="#letters-et">
            <p>Letters "et"</p>
          </a>
          <a href="#letters-ey">
            <p>Letters "ey"</p>
          </a>
          <hr />
          <a href="#letters-a-vs-e">
            <p>Letters "a" vs. "e"</p>
          </a>
          <hr />
          <a href="#letter-i">
            <p>Letter "i"</p>
          </a>
          <a href="#letters-ie">
            <p>Letters "ie"</p>
          </a>
          <a href="#letters-ir">
            <p>Letters "ir"</p>
          </a>
          <hr />
          <a href="#letter-ee-long-vs-i-short">
            <p>Letters "ee" • "ea" (long) vs. "i" (short)</p>
          </a>
          <hr />
          <a href="#letters-sh">
            <p>Letters "sh"</p>
          </a>
          <a href="#letters-ch">
            <p>Letters "ch"</p>
          </a>
          <a href="#letters-sh-ch">
            <p>Letters "sh" vs. "ch"</p>
          </a>
          <hr />
          <a href="#letter-o">
            <p>Letter "o"</p>
          </a>
          <a href="#letter-oa">
            <p>Letters "oa"</p>
          </a>
          <a href="#letters-oo">
            <p>Letter "oo"</p>
          </a>
          <a href="#letters-or">
            <p>Letter "or"</p>
          </a>
          <a href="#letters-ous">
            <p>Letters "ous"</p>
          </a>
          <a href="#letters-ow">
            <p>Letter "ow"</p>
          </a>
          <hr />
          <a href="#letter-t">
            <p>Letter "t"</p>
          </a>
          <hr />
          <a href="#letter-th">
            <p>Letters "th"</p>
          </a>
          <hr />
          <a href="#letter-u">
            <p>Letter "u"</p>
          </a>
          <a href="#letters-ui">
            <p>Letters "ui"</p>
          </a>
          <hr />
          <a href="#letters-oo-vs-u">
            <p>Letters "oo" vs. "u"</p>
          </a>
          <hr />
          <a href="#letter-y">
            <p>Letter "y"</p>
          </a>
        </div>
        <div>
          <a href="#linked-sounds">
            <p>Linked sounds</p>
          </a>
        </div>
        <Card bgColor="black" textColor="white">
          <p className="bold">Sounds of letters</p>
        </Card>
        <div id="letter-a">
          <LetterA />
        </div>
        <div id="letters-au">
          <LettersAU />
        </div>
        <div id="letters-aw">
          <LettersAW />
        </div>
        <div id="letters-awe">
          <LettersAWE />
        </div>
        <div id="letter-e">
          <LetterE />
        </div>
        <div id="letters-ea">
          <LetterEA />
        </div>
        <div id="letters-ee">
          <LetterEE />
        </div>
        <div id="letters-ei">
          <LetterEI />
        </div>
        <div id="letters-et">
          <LettersET />
        </div>
        <div id="letters-ey">
          <LettersEY />
        </div>
        <div id="letters-a-vs-e">
          <LetterAvsE />
        </div>
        <div id="letter-i">
          <LetterI />
        </div>
        <div id="letters-ie">
          <LetterIE />
        </div>
        <div id="letters-ir">
          <LetterIR />
        </div>
        <div id="letter-ee-long-vs-i-short">
          <LettersEAvsI />
        </div>
        <div id="letters-sh">
          <LettersSH />
        </div>
        <div id="letters-ch">
          <LettersCH />
        </div>
        <div id="letters-sh-ch">
          <LettersSHvsCH />
        </div>
        <div id="letter-o">
          <LettersO />
        </div>
        <div id="letter-oa">
          <LettersOA />
        </div>
        <div id="letters-oo">
          <LettersOO />
        </div>
        <div id="letters-or">
          <LettersOR />
        </div>
        <div id="letters-ous">
          <LettersOUS />
        </div>
        <div id="letters-ow">
          <LettersOW />
        </div>
        <div id="letter-t">
          <LetterT />
        </div>
        <div id="letter-th">
          <LetterTH />
        </div>
        <div id="letter-u">
          <LetterU />
        </div>
        <div id="letters-ui">
          <LetterUI />
        </div>
        <div id="letters-oo-vs-u">
          <LetterOOvsU />
        </div>
        <div id="letter-y">
          <LetterY />
        </div>
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
      </div>
      <ScrollToTop />
    </>
  );
}

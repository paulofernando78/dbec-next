"use client";

import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { Card } from "@/components/Cards/Card";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { LetterA } from "@/components/Extras/Pronunciation/Letters/LetterA";
import { LettersAwAwe } from "@/components/Extras/Pronunciation/Letters/LettersAwAwe";
import { ScrollToTop } from "@/components/ScrollToTop";
import { LetterY } from "@/components/Extras/Pronunciation/Letters/LetterY";
import { LettersEY } from "@/components/Extras/Pronunciation/Letters/LetterEY";
import { LetterI } from "@/components/Extras/Pronunciation/Letters/LetterI";
import { LetterIE } from "@/components/Extras/Pronunciation/Letters/LetterIE";
import { LetterE } from "@/components/Extras/Pronunciation/Letters/LetterE";
import { LetterAvsE } from "@/components/Extras/Pronunciation/Letters/LettersAvsE";
import { LetterEaEE } from "@/components/Extras/Pronunciation/Letters/LettersEaEE";
import { LettersEAi } from "@/components/Extras/Pronunciation/Letters/LettersEAi";
import { LettersOW } from "@/components/Extras/Pronunciation/Letters/LetterOW";
import { LetterU } from "@/components/Extras/Pronunciation/Letters/LetterU";
import { LettersAU } from "@/components/Extras/Pronunciation/Letters/LettersAU";
import { LettersO } from "@/components/Extras/Pronunciation/Letters/LetterO";
import { LettersOO } from "@/components/Extras/Pronunciation/Letters/LetterOO";
import { LetterUI } from "@/components/Extras/Pronunciation/Letters/LetterUI";
import { LetterEI } from "@/components/Extras/Pronunciation/Letters/LetterEI";
import { LetterIR } from "@/components/Extras/Pronunciation/Letters/LetterIR";
import { LettersET } from "@/components/Extras/Pronunciation/Letters/LettersET";

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
            <p>Letter a</p>
          </a>
          <a href="#letters-au">
            <p>Letter au</p>
          </a>
          <a href="#letters-aw-awe">
            <p>Letters aw • awe</p>
          </a>
          <a href="#letter-e">
            <p>Letter e</p>
          </a>
          <a href="#letters-ea-ee">
            <p>Letters ea • ee</p>
          </a>
          <a href="#letters-ei">
            <p>Letter ei</p>
          </a>
          <a href="#letters-et">
            <p>Letter et</p>
          </a>
          <a href="#letters-ey">
            <p>Letter ey</p>
          </a>
          <a href="#letters-a-vs-e">
            <p>Letter a vs. e</p>
          </a>
          <a href="#letter-i">
            <p>Letter i</p>
          </a>
          <a href="#letter-ir">
            <p>Letter ir</p>
          </a>
          <a href="#letter-ee-long-vs-i-short">
            <p>Letters ee • ea (long) vs. i (short)</p>
          </a>
          <a href="#letters-ie">
            <p>Letters ie</p>
          </a>
          <a href="#letter-o">
            <p>Letter o</p>
          </a>
          <a href="#letters-oo">
            <p>Letter oo</p>
          </a>
          <a href="#letters-ow">
            <p>Letter ow</p>
          </a>
          <a href="#letter-t">
            <p>Letter t</p>
          </a>
          <a href="#letter-u">
            <p>Letter u</p>
          </a>
          <a href="#letters-ui">
            <p>Letter ui</p>
          </a>
          <a href="#letter-y">
            <p>Letter y</p>
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
        <div id="letters-aw-awe">
          <LettersAwAwe />
        </div>
        <div id="letter-e">
          <LetterE />
        </div>
        <div id="letters-ea-ee">
          <LetterEaEE />
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
        <div id="letter-ir">
          <LetterIR />
        </div>
        <div id="letter-ee-long-vs-i-short">
          <LettersEAi />
        </div>
        <div id="letters-ie">
          <LetterIE />
        </div>
        <div id="letter-o">
          <LettersO />
        </div>
        <div id="letters-oo">
          <LettersOO />
        </div>
        <div id="letters-ow">
          <LettersOW />
        </div>
        <div id="letter-t"></div>
        <div id="letter-u">
          <LetterU />
        </div>
        <div id="letters-ui">
          <LetterUI />
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

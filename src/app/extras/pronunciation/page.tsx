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
import { DashedCard } from "@/components/DashedCard";

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
          <a href="#letters-aw-awe">
            <p>Letters aw • awe</p>
          </a>
          <a href="#letter-a">
            <p>Letter e</p>
          </a>
          <a href="#letters-a-vs-e">
            <p>Letter a vs. e</p>
          </a>
          <a href="#letters-ea-ee">
            <p>Letters ea • ee</p>
          </a>
          <a href="#letter-i">
            <p>Letter i</p>
          </a>
          <a href="#letter-ee-long-vs-i-short">
            <p>Letters ee • ea (long) vs. i (short)</p>
          </a>
          <a href="#letter-ie">
            <p>Letters ie</p>
          </a>
          <a href="#letter-o">
            <p>Letter o</p>
          </a>
          <a href="#letter-oo">
            <p>Letter oo</p>
          </a>
          <a href="#letter-ow">
            <p>Letter ow</p>
          </a>
          <a href="#letter-t">
            <p>Letter t</p>
          </a>
          <a href="#letter-u">
            <p>Letter u</p>
          </a>
          <a href="#letter-y">
            <p>Letter y</p>
          </a>
          <a href="#letter-ey">
            <p>Letter ey</p>
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
        <div id="letter-a">
          <LettersAU />
        </div>
        <div id="letters-aw-awe">
          <LettersAwAwe />
        </div>
        <div id="letter-e">
          <LetterE />
        </div>
        <div id="letters-a-vs-e">
          <LetterAvsE />
        </div>
        <div id="letters-ea-ee">
          <LetterEaEE />
        </div>
        <div id="letter-i">
          <LetterI />
        </div>
        <div id="letter-ee-long-vs-i-short">
          <LettersEAi />
        </div>
        <div id="letter-ie">
          <LetterIE />
        </div>
        <div id="letter-o"></div>
        <div id="letter-oo"></div>
        <div id="letter-ow"></div>
        <LettersOW />
        <div id="letter-t"></div>
        <div id="letter-u">
          <LetterU />
        </div>
        <div id="letter-y">
          <LetterY />
        </div>
        <div id="letter-ey">
          <LettersEY />
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
            Embar<span className="underline">k on an e</span>xtraordinary
            journey...
          </p>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}

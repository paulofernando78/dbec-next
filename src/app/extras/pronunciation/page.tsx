"use client";

import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { Card } from "@/components/Cards/Card";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

import { LetterA } from "@/components/Extras/Pronunciation/Letters/LetterA";
import { LetterAI } from "@/components/Extras/Pronunciation/Letters/LetterAI";
import { LettersAU } from "@/components/Extras/Pronunciation/Letters/LettersAU";
import { LettersAW } from "@/components/Extras/Pronunciation/Letters/LettersAW";
import { LettersAWE } from "@/components/Extras/Pronunciation/Letters/LettersAWE";
import { LetterE } from "@/components/Extras/Pronunciation/Letters/LetterE";
import { LetterEA } from "@/components/Extras/Pronunciation/Letters/LettersEA";
import { LetterEE } from "@/components/Extras/Pronunciation/Letters/LettersEE";
import { LetterEI } from "@/components/Extras/Pronunciation/Letters/LetterEI";
import { LettersET } from "@/components/Extras/Pronunciation/Letters/LettersET";
import { LettersEY } from "@/components/Extras/Pronunciation/Letters/LetterEY";
import { LetterAvsE } from "@/components/Extras/Pronunciation/Letters/LettersAvsE";
import { LetterI } from "@/components/Extras/Pronunciation/Letters/LetterI";
import { LetterIE } from "@/components/Extras/Pronunciation/Letters/LetterIE";
import { LetterIR } from "@/components/Extras/Pronunciation/Letters/LetterIR";
import { LettersEAvsI } from "@/components/Extras/Pronunciation/Letters/LettersEAvsI";
import { LettersCH } from "@/components/Extras/Pronunciation/Letters/LettersCH";
import { LettersSH } from "@/components/Extras/Pronunciation/Letters/LettersSH";
import { LettersSHvsCH } from "@/components/Extras/Pronunciation/Letters/LettersSHvsCH";
import { LettersO } from "@/components/Extras/Pronunciation/Letters/LetterO";
import { LettersOA } from "@/components/Extras/Pronunciation/Letters/LetterOA";
import { LettersOO } from "@/components/Extras/Pronunciation/Letters/LetterOO";
import { LettersOR } from "@/components/Extras/Pronunciation/Letters/LetterOR";
import { LettersOUS } from "@/components/Extras/Pronunciation/Letters/LetterOUS";
import { LettersOW } from "@/components/Extras/Pronunciation/Letters/LetterOW";
import { LetterT } from "@/components/Extras/Pronunciation/Letters/LetterT";
import { LetterTH } from "@/components/Extras/Pronunciation/Letters/LetterTH";
import { LetterU } from "@/components/Extras/Pronunciation/Letters/LetterU";
import { LetterUI } from "@/components/Extras/Pronunciation/Letters/LetterUI";
import { LetterOOvsU } from "@/components/Extras/Pronunciation/Letters/LetterOOvsU";
import { LetterY } from "@/components/Extras/Pronunciation/Letters/LetterY";

import { ScrollToTop } from "@/components/ScrollToTop";
import TheAlphabet from "@/components/Lessons/Topic/TheAlphabet/page";

export default function Pronunciation() {
  return (
    <>
      <Whiteboard title="Extras" subtitle="Pronunciation" />
      <div className="line-break">
        <TheAlphabet />
        <Card bgColor="black" textColor="white">
          <p className="bold">Sounds of Letters</p>
        </Card>
        {/* Links */}
        <div>
          <p className="bold">jump to:</p>
          <a href="#letter-a">
            <p>
              Letter "a" (phonetics:{" "}
              <span className="phonetics">/æ/, /ɑː/, /ə/, /eɪ/</span>)
            </p>
          </a>
          <a href="#letter-ai">
            <p>
              Letter "ai" (phonetics: <span className="phonetics">/e/</span>)
            </p>
          </a>
          <a href="#letters-au">
            <p>
              Letter "au" (phonetics: <span className="phonetics">/.../</span>)
            </p>
          </a>
          <a href="#letters-aw">
            <p>
              Letters "aw" (phonetics: <span className="phonetics">/.../</span>)
            </p>
          </a>
          <a href="#letters-awe">
            <p>
              Letters "awe" (phonetics: <span className="phonetics">/.../</span>
              )
            </p>
          </a>
          <hr />
          <a href="#letter-e">
            <p>
              Letter "e" (phonetics: <span className="phonetics">/.../</span>)
            </p>
          </a>
          <a href="#letters-ea">
            <p>
              Letters "ea" (phonetics: <span className="phonetics">/.../</span>)
            </p>
          </a>
          <a href="#letters-ee">
            <p>
              Letters "ee" (phonetics: <span className="phonetics">/.../</span>)
            </p>
          </a>
          <a href="#letters-ei">
            <p>
              Letters "ei" (phonetics: <span className="phonetics">/.../</span>)
            </p>
          </a>
          <a href="#letters-et">
            <p>
              Letters "et" (phonetics: <span className="phonetics">/.../</span>)
            </p>
          </a>
          <a href="#letters-ey">
            <p>
              Letters "ey" (phonetics: <span className="phonetics">/.../</span>)
            </p>
          </a>
          <hr />
          <a href="#letters-a-vs-e">
            <p>Letters "a" vs. "e"</p>
          </a>
          <hr />
          <a href="#letter-i">
            <p>
              Letter "i" (phonetics: <span className="phonetics">/.../</span>)
            </p>
          </a>
          <a href="#letters-ie">
            <p>
              Letters "ie" (phonetics: <span className="phonetics">/.../</span>)
            </p>
          </a>
          <a href="#letters-ir">
            <p>
              Letters "ir" (phonetics: <span className="phonetics">/.../</span>)
            </p>
          </a>
          <hr />
          <a href="#letter-ee-long-vs-i-short">
            <p>Letters "ee" • "ea" (long) vs. "i" (short)</p>
          </a>
          <hr />
          <a href="#letters-ch">
            <p>
              Letters "ch" (phonetics: <span className="phonetics">/.../</span>)
            </p>
          </a>
          <a href="#letters-sh">
            <p>
              Letters "sh" (phonetics: <span className="phonetics">/.../</span>)
            </p>
          </a>
          <a href="#letters-sh-ch">
            <p>Letters "sh" vs. "ch"</p>
          </a>
          <hr />
          <a href="#letter-o">
            <p>
              Letter "o" (phonetics: <span className="phonetics">/.../</span>)
            </p>
          </a>
          <a href="#letter-oa">
            <p>
              Letters "oa" (phonetics: <span className="phonetics">/.../</span>)
            </p>
          </a>
          <a href="#letters-oo">
            <p>
              Letter "oo" (phonetics: <span className="phonetics">/.../</span>)
            </p>
          </a>
          <a href="#letters-or">
            <p>
              Letter "or" (phonetics: <span className="phonetics">/.../</span>)
            </p>
          </a>
          <a href="#letters-ous">
            <p>
              Letters "ous" (phonetics: <span className="phonetics">/.../</span>
              )
            </p>
          </a>
          <a href="#letters-ow">
            <p>
              Letter "ow" (phonetics: <span className="phonetics">/.../</span>)
            </p>
          </a>
          <hr />
          <a href="#letter-t">
            <p>
              Letter "t" (phonetics: <span className="phonetics">/.../</span>)
            </p>
          </a>
          <hr />
          <a href="#letter-th">
            <p>
              Letters "th" (phonetics: <span className="phonetics">/.../</span>)
            </p>
          </a>
          <hr />
          <a href="#letter-u">
            <p>
              Letter "u" (phonetics: <span className="phonetics">/.../</span>)
            </p>
          </a>
          <a href="#letters-ui">
            <p>
              Letters "ui" (phonetics: <span className="phonetics">/.../</span>)
            </p>
          </a>
          <hr />
          <a href="#letters-oo-vs-u">
            <p>
              Letters "oo" vs. "u" (phonetics:{" "}
              <span className="phonetics">/.../</span>)
            </p>
          </a>
          <hr />
          <a href="#letter-y">
            <p>
              Letter "y" (phonetics: <span className="phonetics">/.../</span>)
            </p>
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
        <div id="letter-ai">
          <LetterAI />
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
        <div id="letters-ch">
          <LettersCH />
        </div>
        <div id="letters-sh">
          <LettersSH />
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
        Que e
      </div>
    </>
  );
}

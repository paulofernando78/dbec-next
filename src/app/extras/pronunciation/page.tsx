"use client";

import Dictionary from "@/app/dictionary/page";
import { Card } from "@/components/Card";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { LetterA } from "@/components/Extras/Pronunciation/Letters/LetterA";
import { LettersAwAwe } from "@/components/Extras/Pronunciation/Letters/LettersAwAwe";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function Pronunciation() {
  return (
    <>
      <Whiteboard title="Extras" subtitle="Pronunciation" />
      <div className="line-break">
        <p className="bold">jump to:</p>
        <div>
          <p className="bold">Sounds of Letters</p>
          <a href="#letter-a">
            <p>Letter a</p>
          </a>
          <a href="letters-aw-awe">
            <p>Letters aw • awe</p>
          </a>
          <a href="letter-a-e">
            <p>Letter a vs. e</p>
          </a>
          <a href="letters-ea">
            <p>Letters ea</p>
          </a>
          <a href="letters-ee-ea-i">
            <p>Letters ee • ea (long) vs. i (short)</p>
          </a>
          <a href="letter-i">
            <p>Letter i</p>
          </a>
          <a href="letter-ie">
            <p>Letters ie</p>
          </a>
          <a href="lettero">
            <p>Letter o</p>
          </a>
          <a href="letter-oo">
            <p>Letter oo</p>
          </a>
          <a href="letters-ow">
            <p>Letter ow</p>
          </a>
          <a href="letter-t">
            <p>Letter t</p>
          </a>
          <a href="letter-u">
            <p>Letter u</p>
          </a>
          <a href="letter-y">
            <p>Letter y</p>
          </a>
          <a href="letters-ey">
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
        <LettersAwAwe />

        <span className="line-break">
          <Card bgColor="Black" textColor="White">
            <p className="bold">Letter y</p>
          </Card>
          <div className="flex-8px-center-wrap">
            <DictionaryCard audioSrc="" label="chimney" />
            <DictionaryCard audioSrc="" label="city" />
            <DictionaryCard audioSrc="" label="donkey" />
            <DictionaryCard audioSrc="" label="healthy" />
            <DictionaryCard audioSrc="" label="money" />
            <DictionaryCard audioSrc="" label="monkey" />
          </div>
          <div className="flex-8px-center-wrap">
            <DictionaryCard audioSrc="" label="seat" />
            <p>vs.</p>
            <DictionaryCard audioSrc="" label="sit" />
            <p>vs.</p>
            <DictionaryCard audioSrc="" label="city" />
          </div>
        </span>

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

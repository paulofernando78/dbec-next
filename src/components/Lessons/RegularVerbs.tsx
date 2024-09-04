import React from "react";
import { Card } from "../Cards/Card";
import { DictionaryCard } from "../DictionaryCard/DictionaryCard";

export const RegularVerbs = () => {
  return (
    <div className="line-break">
      <div className="line-break">
        <Card bgColor="lightgray" textColor="black">
          <span className="bold">Regular Verbs: -ed / -ied endings</span>
        </Card>
      </div>
      <div className="flex-8px">
        <DictionaryCard audioSrc="/a/ask.mp3" label="ask" />
        <DictionaryCard audioSrc="/a/ask.mp3" label="asked" />
        <DictionaryCard audioSrc="/a/ask.mp3" label="asked" />
      </div>
      <div className="line-break">
        <p className="bold">Simple Present: </p>
        <div>
          <p>
            ask ➜ ask<span className="bold">ed</span>
          </p>

          <p>
            Do you study? <span className="portuguese">Você estuda?</span>
          </p>
          <p>Yes, I study every day.</p>
        </div>
        <div>
          <p>
            work ➜ work<span className="bold">ed</span>
          </p>
          <p>
            Do you work? <span className="portuguese">Você trabalha?</span>
          </p>
          <p>No, I don't work.</p>
        </div>
      </div>
      <div>
        <p className="bold">Simple Past</p>
        <p>
          Did you study today?{" "}
          <span className="portuguese">Você estudou hoje?</span> Yes, I studied
          this morning.
        </p>
        <p>
          Did you work? <span className="portuguese">Você trabalhou?</span> Yes,
          I worked today.
        </p>
      </div>
    </div>
  );
};
